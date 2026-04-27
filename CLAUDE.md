# Yasmeen Silk Corporation — Website Redesign Project

## Company Overview

- **Name:** Yasmeen Silk Corporation
- **Founded:** 1970, Mumbai, India
- **Industry:** Textile manufacturing & export — shawls, keffiyehs, embroidered scarves
- **Address:** Gala No. 5 & 6, Gloria Convent Girls High School Compound, Sant Savta Marg, Near Hotel Heritage, Byculla (East), Mumbai, Maharashtra 400027
- **WhatsApp:** +91 9967 810 489
- **Email:** sales@yasmeensilk.com
- **Instagram:** @yasmeen.silk
- **Availability:** By appointment only
- **Brand color:** Green (logo), but website uses luxury minimal theme (black + gold #C9A96E)
- **Logo files:** `images/logo final.jpg` (full Arabic + English), `images/yasmeen logo.jpg` (Arabic only)
- **Business type:** Manufacturer & wholesaler. We supply WHOLESALERS, not retailers directly.
- **Retail:** Handled case-by-case, subject to stock availability. Not the primary business.
- **Fabrics used:** Wool, acrylic, polyester, viscose
- **NO custom labelling / NO private label** — we sell under Yasmeen branding only
- **MOQ:** 5,000–10,000 pieces per order

## Current State

A single-page static HTML site has been built in `website/index.html` with:
- Luxury minimal design: dark (#0A0A0A) background, gold (#C9A96E) accents, white text
- Fonts: Playfair Display (headings), Inter (body), Noto Sans Arabic (RTL)
- Full bilingual support: English ↔ Arabic with RTL toggle
- Sections: Hero, About, Products (filterable grid), Export/B2B, Contact, Footer
- Floating WhatsApp button (always visible, links to wa.me/919967810489)
- Contact enquiry form via FormSubmit.co → sales@yasmeensilk.com (email field required)
- Image lightbox with keyboard navigation
- Scroll-reveal animations
- Responsive (mobile + desktop)
- Export map section using jsvectormap CDN (works on Vercel, NOT on file:// protocol)

### Known Issues
- **Export map is blank locally** — jsvectormap loads from CDN which is blocked by file:// protocol CORS. Fix: either embed a proper SVG map inline, or just deploy to Vercel where it works fine.
- **Logo appears as white square** — the logo file has a white background. Works on the dark site but looks like a white box. Consider a transparent PNG version.
- **index.html still references "custom labelling" and "private label"** — these must be removed from the existing HTML. We do NOT offer custom labelling or private label.
- **index.html still says "retailers"** in some places — change to "wholesalers" everywhere. We supply wholesalers, not retailers.

## Product Categories (4 pages to build)

### 1. Gents Shawls / Rida (`/gents-shawls`)
Men's shawls and rida. Target: Muslim men, wholesale buyers.
> Crafted from premium wool, acrylic, polyester, and blended fabrics, our men's shawls combine traditional elegance with everyday durability. From classic black rida worn for prayer and religious gatherings to richly bordered ceremonial pieces, each shawl is finished with meticulous attention to detail. Shawls hold deep cultural significance across many Muslim communities — worn as a mark of tradition, modesty, and identity in countries across Africa, the Middle East, and South Asia. Available in bulk for wholesalers and distributors worldwide.

**Current images that fit this category:**
- DSC_1573-01.jpeg — Black shawls with gold/silver borders
- DSC_1587-01.jpeg — Dark shawl with paisley border detail
- DSC_1595-01.jpeg — Green silk shawl (used in About section)
- IMG-20180917-WA0086.jpg — Folded black shawls with product labels (Special, Delux)

### 2. Ladies Shawls (`/ladies-shawls`)
Women's shawls, printed and woven.
> Our ladies' shawl collection spans hand-printed paisleys, geometric weaves, and rich fabric blends in a spectrum of colours and patterns. Available in wool, acrylic, polyester, and viscose. Designed for elegance and versatility — whether worn daily or for special occasions. We supply wholesalers across the Middle East, Africa, Europe, and Southeast Asia with consistent quality and competitive pricing.

**Current images that fit this category:**
- DSC_1571-01.jpeg — Printed paisley shawls (stacked, multiple colours)
- DSC_1581-01.jpeg — Geometric pattern scarves (colourful stack)
- DSC_1910-01.jpeg — Colourful stacked fabric collection (blues, reds, golds)

### 3. Keffiyehs / Ghutra / Scarves (`/keffiyehs`)
Traditional keffiyehs, ghutra, and scarves.
> From the classic black-and-white to red, white, and multi-colour patterns, our keffiyehs and ghutra are woven to exacting standards. Trusted by wholesalers across the Gulf, Levant, and North Africa for their weight, drape, and durability. Available in all standard sizes under the Yasmeen brand.

**Current images that fit this category:**
- DSC_1602-01.jpeg — Classic black & white keffiyeh
- DSC_1852-01.jpeg — Red/white striped detail with Yasmeen branding
- DSC_1856-01.jpeg — White keffiyeh with red border
- DSC_1865-01.jpeg — Black with red & white woven border (also used as hero)
- DSC_1868-01.jpeg — Traditional keffiyeh with brand labels
- DSC_1923-01.jpeg — Red/black patterned keffiyeh

**IMPORTANT:** Do NOT write region-specific content about which keffiyeh style belongs to which country/region. The owner will provide that context with photos later. No guesswork.

### 4. Embroidered Scarves / Yemeni Scarves (`/embroidered-scarves`)
Embroidered & Yemeni-style scarves.
> Intricately embroidered by skilled artisans, our scarves feature floral, geometric, and traditional motifs in vibrant thread work. Includes Yemeni-style embroidered pieces prized across the Horn of Africa and Arabian Peninsula. Each piece is a work of textile art — available in bulk for wholesalers with custom colour and design options.

**Current images that fit this category:**
- DSC_1606-01.jpeg — Black fabric with gold zari embroidery (packaged)
- DSC_1607-01.jpeg — Same product, different angle, with certifications
- DSC_1612-01.jpeg — Vibrant floral embroidery close-up
- DSC_1614-01.jpeg — Colourful embroidered textile rolls

## Export Markets (30 countries)

UK, Netherlands, Germany, USA, Trinidad & Tobago, Saudi Arabia, UAE, Jordan, Qatar, Kuwait, Oman, Yemen, Iraq, Syria, Turkey, Egypt, Libya, Algeria, Morocco, Mauritania, Sudan, Ethiopia, Eritrea, Djibouti, Somalia, Nigeria, South Africa, Malaysia, Indonesia, Australia

Country codes for map: GB, NL, DE, US, TT, SA, AE, JO, QA, KW, OM, YE, IQ, SY, TR, EG, LY, DZ, MA, MR, SD, ET, ER, DJ, SO, NG, ZA, MY, ID, AU

India (IN) = Headquarters

## Design Decisions

- **Theme:** Luxury minimal — black + gold + white space
- **No prices shown** — showcase only, enquire for pricing
- **WhatsApp is primary contact** — every product should have "Enquire on WhatsApp" with pre-filled message naming the product
- **Email form exists** but WhatsApp preferred
- **Retail enquiries:** Case-by-case, subject to stock availability. Not primary business.
- **Languages:** English + Arabic with toggle
- **No e-commerce** — this is a showcase/lead-gen site
- **Form handler:** FormSubmit.co (action URL: https://formsubmit.co/sales@yasmeensilk.com). First submission requires email confirmation click.

## Content Rules

- **NEVER use the word "Sufi"** — can cause controversy; some people consider it misguided. Just say "Muslim" or "traditional" or describe the garment without sectarian labels.
- **"Rida" is included under shawls** — don't treat it as a separate category. Gents shawls/rida is one category.
- **No guesswork on regional keffiyeh styles** — wait for owner to provide photos with context.
- **Product names:** Can be created based on visual description (colour, fabric, pattern, border type). Owner will correct if wrong.
- **Target audience:** Muslims globally (primary), non-Muslims (secondary). Products are worn by Muslims but marketed to everyone.
- **Cultural significance:** Shawls are worn for traditional and cultural reasons in many Muslim communities — across Africa (Somalia, Ethiopia, Egypt, etc.), Middle East, and South Asia. Mention this cultural importance but do NOT name specific countries in the context of traditions unless confirmed by owner.
- **NO custom labelling / NO private label** — never mention this as a feature. We sell under Yasmeen branding only.
- **NO pashmina** — we do not sell pashmina blends. Remove any reference to pashmina.
- **We supply WHOLESALERS** — not retailers. Always say "wholesalers and distributors", never "retailers". Exception: retail enquiries are entertained case-by-case.
- **Fabrics:** Wool, acrylic, polyester, viscose. Always list these when describing materials. Do not say "premium wool" alone — it's wool AND synthetic fabrics.

## FAQ Content (for FAQ page)

1. **What is your minimum order quantity?**
   5,000 to 10,000 pieces per order.

2. **Do you ship internationally?**
   Yes. We export to 30+ countries including the UK, USA, Germany, Saudi Arabia, UAE, Qatar, Kuwait, Oman, Jordan, Yemen, Iraq, Turkey, Egypt, Nigeria, South Africa, Malaysia, Indonesia, Australia, and many more across the Middle East, Africa, and Southeast Asia.

3. **What fabrics do you use?**
   We work with wool, acrylic, polyester, and viscose — offering a range of options to suit different markets and price points.

4. **Do you offer custom labelling or private label?**
   No. All our products are sold under the Yasmeen brand.

5. **Do you sell retail?**
   On a case-by-case basis, subject to stock availability. Get in touch with us and we'll discuss your requirements.

6. **How do I request samples?**
   Contact us via WhatsApp or the enquiry form on our website. We'll discuss your requirements and arrange samples accordingly.

## SEO Strategy

### Target Keywords by Page

| Page | Primary keywords | Long-tail |
|------|-----------------|-----------|
| Homepage | textile exporter India, shawl manufacturer Mumbai, wholesale shawls and scarves | premium Indian textiles wholesale, shawl supplier since 1970 |
| Gents shawls | men's shawls wholesale, rida shawl, prayer shawl for men, woolen shawl supplier | buy men's prayer shawl online, black rida wholesale India |
| Ladies shawls | ladies shawl wholesale, printed shawl manufacturer, women's shawl supplier | premium ladies shawls bulk order, Indian shawl exporter |
| Keffiyehs | keffiyeh wholesale, ghutra supplier, shemagh manufacturer India | buy keffiyeh bulk, traditional keffiyeh supplier |
| Embroidered | embroidered scarf wholesale, Yemeni scarf supplier, handmade embroidered shawl | embroidered scarves bulk, artisan embroidered shawl India |

### SEO Tasks
- Unique title tag + meta description per page
- H1 with primary keyword per page
- Image alt text with descriptive keywords
- JSON-LD structured data: Organization, Product, FAQ, BreadcrumbList
- Internal linking between pages
- Blog for long-tail keyword capture

## Project Task List

### Phase 1 — Fix what's built
1. **Fix export map** — Replace jsvectormap CDN with embedded SVG or ensure it works on deployment
2. **Fix existing index.html content** — Remove all references to "custom labelling", "private label", "pashmina", and change "retailers" to "wholesalers" throughout

### Phase 2 — Multi-page structure
3. **Convert to multi-page site** — Create /gents-shawls, /ladies-shawls, /keffiyehs, /embroidered-scarves with shared nav/footer
4. **Add product detail cards** — Name each product, add fabric/description, add "Enquire on WhatsApp" deep-link per product

### Phase 3 — Conversion features
5. **"How it works" section** — 4-step visual flow: Browse → WhatsApp → Samples → Order. Note retail case-by-case, subject to availability.
6. **FAQ page** — Dedicated page with the FAQ content listed above + FAQ schema markup

### Phase 4 — SEO
7. **Schema markup (JSON-LD)** — Organization, Product, FAQ, BreadcrumbList across all pages
8. **SEO keyword optimization** — Title tags, meta descriptions, H1s, alt text per page

### Phase 5 — Content (ongoing, owner to provide photos)
9. **Blog section** — Build infrastructure (index + article template). Starter articles:
   - "A guide to choosing the right shawl for every occasion"
   - "Understanding fabric types: wool, acrylic, polyester, and viscose"
   - "Why quality matters: what to look for in a keffiyeh"
   - Region-specific keffiyeh content: WAITING for owner to provide photos + context

### Phase 6 — Go live
10. **Deploy: GitHub → Vercel → point domain**
    - Create GitHub repo, push website/ folder
    - Connect to Vercel, deploy
    - Change GoDaddy DNS nameservers to ns1.vercel-dns.com / ns2.vercel-dns.com
    - Add yasmeensilk.com + www.yasmeensilk.com in Vercel domains
    - Verify FormSubmit.co email on first form submission

## File Structure (current)

```
website/
├── index.html          (main single-page site)
├── CLAUDE.md           (this file — project brief for Claude Code)
└── images/
    ├── DSC_1571-01.jpeg   (paisley print shawls)
    ├── DSC_1573-01.jpeg   (black shawls, gold/silver borders)
    ├── DSC_1581-01.jpeg   (geometric pattern scarves)
    ├── DSC_1587-01.jpeg   (dark shawl, paisley border)
    ├── DSC_1595-01.jpeg   (green silk shawl)
    ├── DSC_1602-01.jpeg   (black & white keffiyeh)
    ├── DSC_1606-01.jpeg   (gold zari embroidered, packaged)
    ├── DSC_1607-01.jpeg   (gold zari, different angle)
    ├── DSC_1612-01.jpeg   (vibrant floral embroidery)
    ├── DSC_1614-01.jpeg   (colourful embroidered rolls)
    ├── DSC_1852-01.jpeg   (red/white keffiyeh detail)
    ├── DSC_1856-01.jpeg   (white keffiyeh, red border)
    ├── DSC_1865-01.jpeg   (black keffiyeh, woven border — hero image)
    ├── DSC_1868-01.jpeg   (traditional keffiyeh with labels)
    ├── DSC_1910-01.jpeg   (colourful stacked fabrics)
    ├── DSC_1923-01.jpeg   (red/black keffiyeh)
    ├── IMG-20180917-WA0086.jpg  (product labels on black fabric)
    ├── IMG-20180918-WA0028.jpg  (Yasmeen logo on light bg)
    ├── logo final.jpg     (full logo — Arabic + English, green on white)
    └── yasmeen logo.jpg   (Arabic-only logo, green on light bg)
```

## Tech Stack

- **Current:** Static HTML + CSS + vanilla JS (single file)
- **Target:** Multi-page static site (still plain HTML, no framework needed)
- **Hosting:** Vercel (free tier)
- **Domain:** yasmeensilk.com (registered on GoDaddy, DNS to be pointed to Vercel)
- **Form handling:** FormSubmit.co (free, no backend)
- **Map library:** jsvectormap (CDN) — or embedded SVG alternative
- **Fonts:** Google Fonts (Playfair Display, Inter, Noto Sans Arabic)

## Image Workflow

Claude Code cannot view images natively. For any work that requires looking at product photos:
1. **New product photos:** Owner adds them to the `website/images/` folder and describes what each image shows (product type, colours, patterns, fabric) in the chat with Claude Code. Claude Code can then reference them in the HTML by filename.
2. **Visual design review / screenshots:** Come back to Cowork mode where Claude can see images directly.
3. **Region-specific keffiyeh content:** Owner will provide photos WITH written context about which style belongs to which region. Claude Code uses that text context to write the content — no guessing from images.
