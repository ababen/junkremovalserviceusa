# Location Expansion Plan — Florida → National

_Last updated: 2026-06-10_

This document outlines how we grow the site's local-SEO footprint from a
6-city South Florida lead-gen site into a national one, prioritized by
**search demand**.

---

## 1. How we prioritize ("search volume")

The ideal input is exact keyword search volume for `junk removal {city}`
and related terms (`{city} junk hauling`, `furniture removal {city}`,
`appliance disposal {city}`, etc.).

> **Data source caveat:** the Ahrefs integration available to this project
> currently exposes Search Console + rank-tracker endpoints, not Keywords
> Explorer, and the domain is too new to have GSC history. Until real volume
> is pulled, we prioritize by **metro population + local-service demand
> drivers**, which correlates strongly with junk-removal search volume.
> **Validate the Tier lists below in Ahrefs Keywords Explorer / Google
> Keyword Planner before writing market-specific copy or buying ad budget.**

**Florida demand multipliers** (push FL volume above raw population):
retiree downsizing & estate cleanouts, snowbird seasonal turnover, high
rental churn, new-construction debris, and hurricane/storm cleanup.

---

## 2. Florida rollout

### Covered today (6)
Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Pompano Beach
— all Miami-Dade / Broward (the "Tri-County" minus Palm Beach). Tiers 1–3
below were added on top of these, bringing the total to 50 FL cities.

### Tier 1 — highest-volume untapped metros ✅ *added in this change*

| City | County | Metro rationale |
|---|---|---|
| Orlando | Orange | Top-4 FL metro, huge tourism + residential churn |
| Tampa | Hillsborough | Top-3 metro, anchors Tampa Bay |
| Jacksonville | Duval | Largest FL city by population |
| St. Petersburg | Pinellas | Completes Tampa Bay coverage |
| West Palm Beach | Palm Beach | Completes the South FL Tri-County |

### Tier 2 — secondary metros ✅ *added in this change*
Cape Coral, Fort Myers, Sarasota, Naples (affluent → high-ticket cleanouts),
Tallahassee, Gainesville, Lakeland, Clearwater, Boca Raton, Coral Springs,
Palm Bay, Melbourne, Port St. Lucie, Pensacola, Ocala, Daytona Beach.

### Tier 3 — saturation ✅ *added in this change*
Boynton Beach, Delray Beach, Deltona, Kissimmee, Bradenton, Sunrise,
Plantation, Davie, Largo, Sanford, Apopka, Palm Coast, Fort Pierce,
North Port, Weston, Pinellas Park, Deerfield Beach, Tamarac, Coconut Creek,
Margate, Jupiter, Riviera Beach, Cutler Bay. This covers essentially all FL
cities above ~50k population (50 FL cities total). Further depth = high-intent neighborhood
landing pages within already-covered metros (e.g. promoting Hialeah, Doral,
and Miami Gardens — currently Miami neighborhoods — to their own pages).

### Florida state hub
Add a `/florida` hub page linking every FL metro to consolidate topical
authority and internal-link equity.

---

## 3. National rollout

### Phase 0 — Foundation (do BEFORE scaling past Florida)
These are blocking architectural changes; programmatic city pages at
national scale fail without them.

1. **URL namespacing — critical.** The current flat `/[city]` route breaks
   nationally: duplicate city names (Springfield, Columbus, Portland…)
   collide. Migrate to `/[state]/[city]` (e.g. `/fl/miami`) or
   `/junk-removal/{state}/{city}`. Add 301 redirects from the existing flat
   FL slugs to preserve any earned equity.
2. **Data-driven model.** Hand-authoring `neighborhoods` + `zipCodes` +
   prose per city does not scale to hundreds of markets. Move to a compact
   dataset (state, metro, city, county, population, zips) + content
   templates with market-specific variables. Source city/zip/county data
   from a dataset (e.g. SimpleMaps US Cities, Census) rather than by hand.
3. **Sitemap chunking.** Next.js caps a single sitemap at 50,000 URLs; use
   `generateSitemaps()` to shard by state once URL count grows.
4. **Content uniqueness — avoid thin/doorway-page penalties.** Google
   penalizes near-duplicate location pages with no real local value. Each
   page needs genuinely unique signals: local neighborhoods, ZIP lists,
   market-specific pricing/notes, local proof. Thin templated pages at scale
   are the #1 SEO risk of this strategy.
5. **Local presence / NAP.** Strong local rankings favor businesses with
   real local NAP (name-address-phone) and Google Business Profiles. As a
   service-area model, lean on `areaServed` schema and honest "we serve
   {city}" framing rather than fabricated addresses.
6. **Per-market call tracking.** Replace the single 855 number with CallRail
   dynamic numbers per metro for attribution and (optionally) local-area-code
   numbers to lift conversion. _(All `phone` fields in `cities.ts` are
   currently placeholder `555` numbers and must be set before launch.)_

### Phase 1 — Florida saturation
Complete Tiers 2–3 above + the `/florida` hub. Prove the playbook in one
state before national fan-out.

### Phase 2 — National metros, sequenced by demand
Roll out by highest junk-removal demand. Sun Belt + high-homeownership +
sprawl markets over-index for this service:

- **Wave A (mega-metros):** New York, Los Angeles, Chicago, Houston, Dallas,
  Phoenix, Atlanta, Washington DC, Philadelphia, Miami (done).
- **Wave B (high junk-removal intent):** Charlotte, Nashville, Las Vegas,
  Denver, Austin, San Antonio, Orlando (done), Tampa (done), Raleigh,
  Columbus, Indianapolis, Kansas City (MO).
- **Wave C:** remaining top-100 metros, then state hub pages for all 50
  states, then secondary cities.

### Hierarchy at scale
`/` → `/{state}` (hub) → `/{state}/{metro}` → `/{state}/{metro}/{neighborhood}`
plus the existing `/services/{service}` cross-linked into every location.

---

## 4. Suggested sequencing / milestones

1. **M1 (this change):** FL Tiers 1–3 live (44 added cities, 50 FL cities
   total) under the existing flat route. Low risk, reversible.
2. **M2:** Phase 0 refactor — `/[state]/[city]` routing, data-driven model,
   redirects, sitemap shards.
3. **M3:** `/florida` hub + neighborhood landing pages on the new architecture.
4. **M4:** National Wave A metros.
5. **M5+:** Waves B/C + 50-state hubs, gated on indexation/ranking data from
   prior waves.

## 5. Open decisions for the owner
- Confirm URL scheme: `/[state]/[city]` vs `/junk-removal/[state]/[city]`.
- Confirm real service model per market (own crews vs. partner/dispatch) —
  this dictates how aggressively we can claim local presence without risking
  doorway-page penalties.
- Provision real tracking phone numbers (single 855 vs. per-metro CallRail).
- Budget/approval to license a US city+ZIP dataset for the data-driven model.
