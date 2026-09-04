# Smart Quotes LLC

Lead-generation and appointment-conversion website for **Smart Quotes LLC**.

Visitors explore Merchant Services, Xfinity Residential, and Comcast Business — then submit a request-for-quote (RFQ). After a successful RFQ, a separate vacation-stay offer communication may be queued (subject to official offer terms).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Inter font (per brand brief)
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
| `/` | Homepage with floating hero service cards + RFQ |
| `/quote` | Dedicated quote flow |
| `/confirmation` | Post-RFQ confirmation |
| `/api/rfq` | `POST` quote intake |
| `/services/*` | Service detail pages |
| `/privacy` `/terms` `/vacation-terms` | Legal |
| `/sitemap.xml` `/robots.txt` | SEO |

## Brand

- Palette: `#171322`, `#4D1FA8`, `#6D35D8`, `#F3EFFF`, `#F8F7FA`, `#FFFFFF`, `#686273`
- Exact phrases: **Comcast Business**, **Xfinity Residential**
- Do not invent pricing, speeds, or vacation guarantees
- SQ logo is replaceable (`src/components/Logo.tsx`)
- Hero includes floating service cards (middle card lavender)

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `VACATION_OFFER_ENABLED` | Set `false` to disable vacation offer queueing |
