/**
 * Full POS System product page assets.
 * Hero: approved white POS hardware (primary monitor, cash drawer, contactless/card
 * reader, receipt printer). Never include a separate black 8" customer display.
 * Render with object-fit: contain (never cover). Labels are live HTML (FullPosHero).
 */
export const FULL_POS_IMAGES = {
  hero: {
    /** Approved white Full POS product photo — hardware uncropped; HTML callouts overlay. */
    src: "/images/merchant/full-pos/full-pos-product.png",
    alt: "Full POS System with 14 inch merchant monitor, cash drawer, contactless reader, credit card reader, and receipt printer",
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
