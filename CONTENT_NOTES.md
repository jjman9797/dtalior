# D’TAILOR content and asset notes

This file is an internal handoff aid, not public website copy.

## Confirmed source material used

- Brand vision and service list: client statement supplied by Nassim.
- Public business details: D’TAILOR Facebook page supplied by Nassim.
- Public contact details: Ecobank Spintex Road, Accra, Ghana; +233 59 566 5083; olaiyaidowu45@gmail.com.
- Public social links: Facebook page, Instagram `@d_tailor_45`, and the page’s WhatsApp link.
- Public service language: Ghana handmade kaftans, suits, Accra location, and worldwide delivery availability.
- Instagram public title: “KAFTANS || SUITS DESIGNER IN ACCRA GHANA”. The full Instagram biography could not be read in this pass because the profile is age-gated without a login. Shop categories therefore start from that title, the supplied client service list, and the garment types visible in the client photo pack.
- Collection images and original logo reference: D’TAILOR’s public Facebook page.
- Studio, founder and agbada photography: client photo pack in `Downloads/untitled folder`, 15 September 2026. Nassim identified `WhatsApp Image 2026-09-08 at 17.38.30.jpeg` (purple kaftan) as the founder.

## Wording

Nassim, 16 September 2026: do not say “Pan-African”. Say **African**. Keep Nigerian founder, Accra/Ghana, African high fashion.

Verbatim site lines:

- Tagline: Designed for your fit and comfort
- Statement: Your personality, our craftsmanship. One unique creation.

Never use em dashes. Prefer a period, comma, colon, or middle dot ·.

## Shop / purchase method

Facebook copy states that purchases are made by DM or phone, with worldwide delivery available. The shop sells through WhatsApp (`+233 59 566 5083`) with a pre-filled making, colour, sleeve and size. No prices or payment checkout. The announcement bar uses verified facts only: Accra storefront · Worldwide via WhatsApp. Do not invent shipping terms.

Nassim, 16 September 2026: the entire products and services list is **made to order**. There is no in-stock checkout, inventory count, or add to bag. Ready-to-wear means the client can request a photographed look **as seen**; the house still makes it. Bespoke and custom is made from the client’s idea and measurements. Accessories, kids, tuxedos, safari and the rest of the listed makings are also bought to request via WhatsApp.

The catalogue is what people can buy, not a lookbook of only photographed garments. Photographed looks are examples. Departments without photographs still need a Buy on WhatsApp path.

The commercial line on cards and product pages is **Made to order**. Size pickers may still include **Made to measure** as a size option.

## Size naming

House sizes are **S, M, L, XL, 2X, 3X, 4X, Made to measure**. No XS. No XXL.

Sizes mean a making can be requested in that size. They are not inventory counts. Per-look size options on photographed examples are based on garment type:

- Ready-to-wear: S–4X plus made to measure
- Women’s wear: S–3X plus made to measure
- Worn kaftans: M–4X plus made to measure
- Atelier kaftans: S–4X plus made to measure
- Ceremonial agbadas: L–4X plus made to measure
- Suits: made to measure only
- Department buy panels (every making, including those without photographs): the full house size list

## Filter URL state

Department pages keep filters in the query string (`color`, `sleeve`, `size`, `q`) so a filtered grid can be shared and survives refresh. The grid, live count, and active-chip row update in place.

## Founder name

Founder and creative director: **Abdullahi Idowu Olaiya**. Nigerian entrepreneur. Brand based in Accra, Ghana. Use his supplied bio on About. Do not invent extra life facts.

## Book a fitting

`/book` is a request calendar for October 2026 (Monday-start). The customer picks a day, a time of day (Morning / Afternoon / Evening), and a garment type, then WhatsApp opens with those choices written in. Every day is requestable. Do not invent opening hours or bookable time slots. The house confirms the hour on WhatsApp.

## Temporary item

- `public/images/hero-concept.jpg` is AI-generated concept photography and is no longer used on the live homepage. The home hero now uses `looks/kaftan-brown-walk.jpg`. Keep the AI file until Nassim asks to delete it. It is not a founder or garment-for-sale image.

## Logo

The site wordmark is an SVG lockup of the needle-D, TAILOR capsule, needle-I with red thread, and button-O. Header logo is 28px tall at every breakpoint. Tagline lockup is 78px. `dtailor-logo-lockup.jpg` remains the favicon. Do not recolour the thread or button, and do not stretch the capsule.

## Client assets still requested

- Two preferred brand colors that represent the owner.
- Prices, if a priced catalog is wanted later.
- High-resolution garment, fitting, atelier and client photographs still welcome; a strong studio pack is now in use.

## Deliberately not invented

- Extra founder biography beyond the supplied statement.
- Testimonials, customer counts, dates, prices or turnaround times.
- Appointment hours, guarantees, awards or unconfirmed delivery terms.
- Ecommerce inventory counts or stock status.
- Client countries, shipping terms, or a founding year.

## New image map

Keep these filenames when replacing files:

- `looks/founder-purple.jpg`: founder portrait, purple embroidered kaftan.
- `looks/kaftan-*.jpg` and `looks/atelier-*.jpg`: kaftan shop looks.
- `looks/kaftan-brown-walk.jpg`: home hero.
- `looks/agbada-*.jpg`: agbada shop looks.
- `looks/womens-*.jpg`: women’s wear shop looks.
- `looks/ready-to-wear-print.jpg` and `looks/shirt-white-event.jpg`: ready-to-wear.
- `dtailor-logo-lockup.jpg`: cleaner logo lockup from the same asset pack.

WhatsApp videos from the same folder were not added, to keep the static build light.

Original photographs remain in `public/images/`. Compressed responsive derivatives are built from copies in `src/assets/`.

## Share preview and crawl files

Link unfurls (iMessage, WhatsApp, Slack, Facebook, X, LinkedIn, Discord) use the clean logo lockup on ivory, not a garment photo:

- `public/images/og-logo.jpg` (1200×1200) and `public/images/og-logo.svg`
- Favicon: `public/favicon.svg`, `public/images/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png`

Crawl / LLM files (all live under `/dtalior/`):

- `https://jjman9797.github.io/dtalior/robots.txt`
- `https://jjman9797.github.io/dtalior/sitemap.xml`
- `https://jjman9797.github.io/dtalior/sitemap-index.xml`
- `https://jjman9797.github.io/dtalior/llms.txt`
- `https://jjman9797.github.io/dtalior/llms-full.txt`
- `https://jjman9797.github.io/dtalior/humans.txt`

## Image-generation record

The temporary hero was created with the built-in ImageGen tool using a `photorealistic-natural` website-hero prompt: a Black African model in a contemporary ivory kaftan, warm stone setting, sculptural light, subject on the right, negative space on the left, and no text/logos/watermarks.
