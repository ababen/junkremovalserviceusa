import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

interface LeadPayload {
  name: string
  phone: string
  city: string
  service?: string
  description?: string
}

async function sendResendEmail(body: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  const resend = new Resend(apiKey)
  const from = process.env.RESEND_FROM ?? "leads@junkremovalserviceusa.com"
  const to = process.env.RESEND_TO ?? "alex@getmarketingbull.com"

  await resend.emails.send({
    from,
    to,
    subject: `New Lead: ${body.name} — ${body.city}`,
    html: `
      <h2>New Junk Removal Lead</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
        <tr><td><strong>City</strong></td><td>${body.city}</td></tr>
        ${body.service ? `<tr><td><strong>Service</strong></td><td>${body.service}</td></tr>` : ""}
        ${body.description ? `<tr><td><strong>Details</strong></td><td>${body.description}</td></tr>` : ""}
        <tr><td><strong>Source</strong></td><td>junkremovalserviceusa.com</td></tr>
        <tr><td><strong>Time</strong></td><td>${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</td></tr>
      </table>
    `,
  })
}

async function sendToGHL(body: LeadPayload) {
  const apiKey = process.env.GHL_API_KEY
  if (!apiKey) return

  const locationId = process.env.GHL_LOCATION_ID
  const [firstName, ...rest] = body.name.trim().split(" ")
  const lastName = rest.join(" ")

  const contact: Record<string, unknown> = {
    firstName,
    lastName: lastName || undefined,
    phone: body.phone,
    city: body.city,
    source: "junkremovalserviceusa.com",
    tags: ["website-lead", "junk-removal"],
  }

  if (body.description) {
    contact.customField = [{ id: "notes", value: body.description }]
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  }

  // v2 API requires location ID and a Version header
  if (locationId) {
    headers["Version"] = "2021-07-28"
    contact.locationId = locationId
    await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers,
      body: JSON.stringify(contact),
    })
  } else {
    // v1 API (agency key, no location ID needed)
    await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers,
      body: JSON.stringify(contact),
    })
  }
}

export async function POST(request: NextRequest) {
  let body: LeadPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, phone, city } = body

  if (!name || !phone || !city) {
    return NextResponse.json({ error: "name, phone, and city are required" }, { status: 422 })
  }

  const results = await Promise.allSettled([
    sendResendEmail(body),
    sendToGHL(body),
  ])

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[LEAD] integration error:", result.reason)
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[LEAD]", body)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
