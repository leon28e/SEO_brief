# Off-Page SEO — reference guide

Everything that builds the site's authority from **outside** the site: mainly backlinks and your presence in Google's own tools.

- `on-page-seo.md` = what you control **in the code**.
- This file = what you **earn and configure elsewhere**.

Most of it is manual relationship/account work. This guide says what to do, in what order, and where Claude can actually help. It's a reference, not a pass/fail build checklist.

---

## Backlinks — the core of off-page

Links from other reputable sites pass "link equity" and signal trust to Google. **Quality and relevance beat quantity** — a handful of links from authoritative, on-topic sites outrank hundreds of junk links, and junk links can get you penalised.

Rules of thumb:
- Relevance and authority over volume.
- Earned/editorial links > paid links.
- Natural, varied anchor text — not all exact-match keyword.
- Never buy links in bulk or use link farms.

### Broken-link swap
Find dead outbound links on relevant sites, then offer one of your pages as the replacement.
- **Claude can:** scan a target page/site for broken outbound links and draft the outreach email.

### Guest posts
Write an article for another site in your niche with a contextual link back to you.
- **Claude can:** pitch topic ideas, draft the post in your voice (`references/`), and write the outreach email.

### Digital PR — HARO / Connectively
Respond to journalist requests; getting cited in news or articles earns high-authority links.
- **Claude can:** draft expert quotes/responses fast, in voice, using real numbers from `references/stats.md`.

### Paid quality backlinks
Sponsored placements on reputable, relevant sites. Use sparingly, mark them `rel="sponsored"`, and stay away from anything that looks like a link network.

---

## Google Business Profile (formerly "Google My Business")

For local businesses — this puts you on Google Maps and in the local pack.

- [ ] Claim or create the profile, then verify the business.
- [ ] **NAP** (Name, Address, Phone) matches the site's `LocalBusiness` schema and footer **exactly**.
- [ ] Fill in categories, hours, service areas, services, and photos.
- [ ] Collect and respond to reviews — a strong local-ranking signal.
- Keep NAP consistent across the web (directories, citations) to reinforce local SEO.

---

## Google Search Console (GSC)

Your direct line to how Google sees the site. Free, and the first thing to set up.

- [ ] Add the property and **verify ownership** — easiest method is the **HTML meta tag**: copy the tag from GSC and add it to `<head>` in `app/layout.tsx`. *Claude can do this for you.*
- [ ] **Submit the sitemap** (`/sitemap.xml`).
- [ ] **Request indexing** for new/updated pages via **URL Inspection → Request Indexing** — speeds up discovery instead of waiting for the next crawl.
- [ ] Monitor: **Pages/Coverage** (indexing errors), **Performance** (queries, clicks, impressions, position), **Core Web Vitals**, **Mobile Usability**, and any **manual actions**.
- Workflow: publish a page → request indexing → watch impressions and average position in **Performance**.

---

## Google Analytics (GA4)

Measures what visitors do **after** they arrive.

- [ ] Create a GA4 property and get the Measurement ID (`G-XXXXXXXX`).
- [ ] Add the tag to the site — **Claude can** wire it into `app/layout.tsx` (or via Google Tag Manager).
- [ ] Track organic traffic, top landing pages, conversions (calls / form submits), and engagement.
- **GSC** tells you how you're found (search side); **GA** tells you what happens on the site. Use both.

---

## AI SEO — same game, AI surfaces

AI assistants and AI Overviews answer queries by reading the same well-structured, authoritative content that ranks in normal search. Everything above still applies: clear answers up top, FAQ schema, real expertise (E-E-A-T), and authoritative backlinks make you the source the AI cites.

---

## What Claude can do vs. what you do manually

| Claude can do (in this repo)                                   | You do (manual / external)                          |
|----------------------------------------------------------------|-----------------------------------------------------|
| Inject the GSC verification tag + GA4 tag into `app/layout.tsx`| Claim & verify the GBP, GSC, and GA accounts        |
| Draft guest posts, HARO responses, and outreach emails in voice| Send outreach, build relationships, place the links |
| Find broken links / link targets, build prospect lists         | Negotiate placements, earn or pay for links         |
| Generate the sitemap and keep NAP consistent in the schema     | Request indexing, manage reviews, read the reports  |

---

**Related:** `on-page-seo.md` (on-page + technical) · `CLAUDE.md` (workflow) · `references/` (voice for outreach and guest posts).
