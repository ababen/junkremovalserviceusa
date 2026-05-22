import { NextRequest, NextResponse } from "next/server"

interface LeadPayload {
  name: string
  phone: string
  city: string
  service?: string
  description?: string
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

  // TODO: Replace with your CRM webhook, email service, or lead routing logic.
  // Examples: Zapier webhook, Make.com, GoHighLevel, or direct email via Resend/Postmark.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source: "junkremovalserviceusa.com",
        timestamp: new Date().toISOString(),
      }),
    })
  } else {
    // Development fallback — log to console
    console.log("[LEAD]", body)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
