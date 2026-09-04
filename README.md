# Smart Quotes LLC

Lead-generation and appointment-conversion website for **Smart Quotes LLC**.

Visitors explore Merchant Services, Xfinity Residential, and Comcast Business — then submit a request-for-quote (RFQ). After a successful RFQ, a separate vacation-stay offer communication may be queued (subject to official offer terms).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Inter (body) + Manrope (headings)
- Pluggable CRM adapter (in-memory by default)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

```bash
npm run build
npm start
```

## Conversion path

Visitor → select service → request quote → lead capture (CRM) → confirmation → separate vacation-stay offer link → appointment follow-up.

## Key routes

| Path | Purpose |
|------|---------|
| `/` | Homepage (announcement → hero collage → services → how it works → CTA) |
| `/quote` | Dedicated quote flow |
| `/confirmation` | Post-RFQ confirmation |
| `/api/rfq` | `POST` quote intake |
| `/services/*` | Service detail pages |
| `/privacy` `/terms` `/vacation-terms` | Legal |
| `/sitemap.xml` `/robots.txt` | SEO |

## Brand

- Palette: `#080B22`, `#11184A`, `#263DFF`, `#4169FF`, `#EEF2FF`, `#F7F8FC`, `#FFFFFF`, `#111318`, `#5E6472`
- Hero gradient: `linear-gradient(115deg, #080B22 0%, #11184A 45%, #263DFF 100%)`
- Exact phrases: **Comcast Business**, **Xfinity Residential**, **Merchant Services**
- Do not invent pricing, speeds, or vacation guarantees
- SQ logo is replaceable (`src/components/Logo.tsx`)
- Homepage images live in `/public/images/home/` (replaceable placeholders)

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `VACATION_OFFER_ENABLED` | Set `false` to disable vacation offer queueing |
