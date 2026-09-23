# Smart Quotes LLC

Lead-generation and appointment-conversion website for **Smart Quotes LLC**.

Visitors explore Merchant Services, Xfinity Residential, and Comcast Business — then submit a request-for-quote (RFQ). After a successful RFQ, a separate vacation-stay offer communication may be queued (subject to official offer terms).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Inter (body) + Manrope (headings)
- Pluggable CRM adapter (Smart Quotes OS HTTP ingest in production; in-memory locally)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

```bash
npm run build
npm start
npm test
```

## Conversion path

Visitor → select service → request quote → lead capture (CRM) → confirmation → separate vacation-stay offer link → appointment follow-up.

## Key routes

| Path | Purpose |
|------|---------|
| `/` | Homepage (hero → services → how it works → vacation incentive) |
| `/quote` | Dedicated quote flow / service selector |
| `/quote/internet` `/quote/mobile` `/quote/streaming` | Xfinity interest convenience routes |
| `/become-an-agent` | Contractor (1099) recruitment / TurfQuest apply |
| `/confirmation` | Post-RFQ confirmation |
| `/api/rfq` | `POST` quote intake |
| `/services/*` | Service detail pages |
| `/privacy` `/terms` `/vacation-terms` | Legal (incl. Vacation Redemption Terms) |
| `/sitemap.xml` `/robots.txt` | SEO |

## Brand

- Palette: `#080B22`, `#11184A`, `#263DFF`, `#4169FF`, `#EEF2FF`, `#F7F8FC`, `#FFFFFF`, `#111318`, `#5E6472`
- Hero gradient: `linear-gradient(115deg, #080B22 0%, #11184A 45%, #263DFF 100%)`
- Exact phrases: **Comcast Business**, **Xfinity Residential**, **Merchant Services**
- Primary CTA: **Get a Smart Quote**
- Do not invent pricing, speeds, or vacation guarantees
- SQ logo is replaceable (`src/components/Logo.tsx`)
- Service imagery lives in `/public/images/services/`
- Company phone, email, address, and hours live in `src/lib/company.ts`

## Environment

Copy `.env.example` to `.env.local` for local development.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `CRM_INGEST_URL` | Smart Quotes OS ingest endpoint (server-only). Default: `https://app.smartquotesllc.com/api/ingest/lead` |
| `CRM_INGEST_API_KEY` | Same secret as OS `INGEST_API_KEY`. Sent as `x-sq-ingest-key`. **Never** use `NEXT_PUBLIC_` |
| `CRM_INGEST_REQUIRED` | Set `false` to allow production RFQ without CRM env (not recommended) |
| `VACATION_OFFER_ENABLED` | Set `false` to disable vacation offer queueing |

### CRM lead path

```
Browser → POST /api/rfq → CRM_INGEST_URL (Smart Quotes OS /api/ingest/lead)
```

When `CRM_INGEST_URL` and `CRM_INGEST_API_KEY` are both set, the server posts the CRM `LeadRecord` to OS. If either is unset, leads stay in the in-memory adapter (local/dev only).

### Vercel

Set `CRM_INGEST_URL` and `CRM_INGEST_API_KEY` in the Vercel project (Production + Preview). Do not commit real keys. Do not prefix the API key with `NEXT_PUBLIC_`.

Website project: `smartquotesllc/smart-quotes` → `smartquotesllc.com`  
OS project: `smartquotesllc/smart-quotes-os` → `app.smartquotesllc.com`
