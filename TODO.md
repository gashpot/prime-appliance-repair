# SEO Action Plan — primerepair.net

*Audit completed: 2026-04-13 | Updated: 2026-04-14*

---

## Tier 1 — Foundational (done)

- [x] Add robots.txt pointing to sitemap
- [x] Generate and submit sitemap.xml (Cloudflare Pages compatible)
- [x] Add LocalBusiness + Service schema JSON-LD to all pages
- [x] Add Open Graph tags (og:title, og:description, og:image, og:url) to all pages
- [x] Add canonical URLs to all pages

---

## Tier 2 — Local SEO (capture nearby searches)

- [ ] Create dedicated service area pages for: Gresham, Happy Valley, Fairview, Camas, Washougal
- [ ] Add full street address to footer and schema (Google Business Profile needs this)
- [ ] Create/verify Google Business Profile and link to it

---

## Tier 3 — Content & Schema

- [ ] Add FAQPage schema to About and Contact pages
- [ ] Add Review/Rating aggregate schema
- [ ] Expand About page with: years experience, number of repairs, certifications
- [ ] Add Service schema for each service type on /services

---

## Tier 4 — Growth

- [ ] Start a blog — target long-tail keywords (appliance repair Portland, appliance repair Troutdale, etc.)
- [ ] Add breadcrumb navigation
- [ ] Add lazy loading to Unsplash hero images (home page + about page still use external Unsplash URLs)

---

## Bugs Fixed (2026-04-14)

- [x] Fix JSON-LD wrong domain (primeappliancerepair.com → primerepair.net) in Layout.astro
- [x] Fix phone hrefs (tel:+150****3142 → tel:+15033893142) across all 6 files
- [x] Align business hours (footer JSON-LD: Mon-Fri 8am → Mon-Sun 10am to match contact page)
- [x] Rename logo side.png → logo-side.png (space in filename fixed)

---

## Performance Fixes (2026-04-14)

- [x] Compress all 7 service images (~15.8MB → ~340KB, 97.8% reduction)
- [x] Add width/height attributes to all service images (fix CLS)
- [x] Host service images locally (was using broken Unsplash URLs)

---

## Design Fixes (2026-04-14)

- [x] Center hero text content on homepage
- [x] Center Why Choose Us heading on homepage
- [x] Center each list item individually in Why Us section
- [x] Vertically center icons with text in Why Us list

---

## Critical Issues Found (audit)

| Issue | Impact | Status |
|-------|--------|--------|
| No robots.txt | Search engines have no crawl guidance | Fixed |
| No sitemap.xml | Pages not efficiently discovered | Fixed |
| Zero structured data | No rich snippets in search results | Fixed |
| No Open Graph tags | Poor social sharing previews | Fixed |
| No canonical URLs | Duplicate content risk | Fixed |
| Generic meta descriptions | Low click-through from search | Pending |
| No dedicated service area pages | Missing local search coverage | Pending |
| No blog | No long-tail keyword targeting | Pending |
| Wrong JSON-LD domain | Structured data validation errors | Fixed |
| Broken phone tel: links | Click-to-call fails | Fixed |
| Unaligned business hours | Inconsistent info across pages | Fixed |
| Space in logo filename | Filesystem/deployment risk | Fixed |
| Unoptimized images (~16MB) | Slow page loads | Fixed |

---

## What's Working Well

- Clean H1/H2/H3 hierarchy
- SSL/HTTPS active
- Click-to-call phone link (now functional)
- Fast Astro static site
- Strong service descriptions
- Transparent pricing ($89 diagnostic, $180+ labor)
- Good trust signals (30-day warranty, licensed, insured)
- Same-day service messaging
- Personal shop differentiation (Anton)
- All images have alt text + dimensions
- Prominent CTAs
- LocalBusiness + WebSite JSON-LD schema
- OG tags + Twitter Card on all pages

---

## Pages Audited

| Page | URL | Issues |
|------|-----|--------|
| Home | primerepair.net/ | Fixed |
| Services | primerepair.net/services/ | Fixed |
| About | primerepair.net/about/ | Fixed |
| Contact | primerepair.net/contact/ | Fixed |