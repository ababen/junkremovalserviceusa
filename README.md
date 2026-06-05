# Junk Removal Service USA

Lead-gen website for junk removal in Miami & South Florida. Built with Next.js 16 (App Router), Tailwind CSS 4, and deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, React 19)
- **Styling**: Tailwind CSS 4
- **Email**: Resend
- **CRM**: GoHighLevel (v1 agency key or v2 sub-account)
- **Address autocomplete**: Google Maps Places API
- **Deployment**: Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file (never commit it):

```env
# Resend — email notifications on every lead submission
RESEND_API_KEY=re_...
RESEND_FROM=noreply@junkremovalserviceusa.com
RESEND_TO=leads@yourdomain.com

# GoHighLevel — creates a contact on every lead submission
# Use v2 (sub-account): set both variables
# Use v1 (agency key only): set only GHL_API_KEY, leave GHL_LOCATION_ID blank
GHL_API_KEY=...
GHL_LOCATION_ID=...

# Google Maps — city autocomplete in the booking wizard
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
```

Set the same variables in the **Vercel dashboard** under Project → Settings → Environment Variables.

---

## Pre-Launch Checklist

### Required (blocks functionality)

- [ ] **Set Vercel env vars** — `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`, `GHL_API_KEY`, `GHL_LOCATION_ID`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- [ ] **Merge PR #3** — all changes are on branch `claude/wizardly-dirac-hpS80`, CI is green and mergeable
- [ ] **Verify phone number** — confirm `(855) 885-5865` is active and routing to the right team
- [ ] **Set up legal inboxes** — `privacy@junkremovalserviceusa.com` and `legal@junkremovalserviceusa.com` are referenced in the Privacy Policy and Terms; make sure they're monitored

### Nice to Have (post-launch)

- [ ] **Analytics** — add Google Analytics or another analytics provider; wire a conversion event on booking form submission
- [ ] **Real testimonials** — replace placeholder reviews in `TestimonialsSection` with actual customer quotes
- [ ] **Live chat** — optional widget (Intercom, Crisp, etc.) for visitors who don't want to call
- [ ] **Google Reviews integration** — pull live star ratings from Google Business Profile instead of static copy
- [ ] **Security headers** — add `X-Frame-Options`, `Content-Security-Policy`, etc. in `next.config.ts`

---

## Project Structure

```
src/
  app/
    api/leads/route.ts   # POST handler — Resend email + GHL contact creation
    about/               # About page
    contact/             # Contact page with booking wizard
    pricing/             # Pricing page
    privacy/             # Privacy Policy (TCPA-compliant)
    terms/               # Terms of Service
    services/[slug]/     # Dynamic service pages
    [slug]/              # Dynamic city landing pages
  components/
    BookingWizard.tsx    # 3-step lead capture form
    PlacesAutocomplete.tsx  # Google Maps city autocomplete
    Header.tsx
    Footer.tsx
  data/
    cities.ts            # City list with slugs and metadata
    services.ts          # Service list with slugs and metadata
  lib/
    constants.ts         # SITE_NAME, SITE_URL, PHONE, etc.
```
