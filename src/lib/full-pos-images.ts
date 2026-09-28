/**
 * Full POS System product page assets — unbranded / vendor-neutral.
 * Hero hardware MUST match IMAGE 1 (original product reference). Never crop equipment.
 * Render with object-fit: contain (never cover). Labels are live HTML (FullPosHero).
 */
export const FULL_POS_IMAGES = {
  hero: {
    /** Derived from IMAGE 1 original product photo — hardware uncropped; baked labels removed. */
    src: "/images/merchant/full-pos/full-pos-product.png",
    alt: "Full POS System with 14 inch merchant monitor, customer-facing 8 inch touchscreen assembly, contactless reader, credit card reader, receipt printer, and cash drawer",
    width: 1004,
    height: 627,
  },
  dashboard: {
    src: "/images/merchant/full-pos/dashboard-devices.png",
    alt: "Business dashboard shown on a laptop and smartphone for real-time sales and reporting",
    width: 718,
    height: 430,
  },
} as const;
