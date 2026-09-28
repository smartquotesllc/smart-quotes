/**
 * Full POS System product page assets — unbranded / vendor-neutral.
 * Always render with object-fit: contain so hardware stays fully visible.
 *
 * Hero labels are live HTML overlays (see FullPosHero) — do not bake text into the raster.
 * Software tools are live SVG (see SoftwareIconGrid) — do not use screenshot grids.
 */
export const FULL_POS_IMAGES = {
  hero: {
    /** Hardware-only plate (labels cropped out); ~2× for retina. Live HTML callouts in FullPosHero. */
    src: "/images/merchant/full-pos/full-pos-hero-clean.png",
    alt: "Full POS System with 14 inch monitor, 8 inch touchscreen, contactless reader, credit card reader, receipt printer, and cash drawer",
    width: 1840,
    height: 1400,
  },
  dashboard: {
    src: "/images/merchant/full-pos/dashboard-devices.png",
    alt: "Business dashboard shown on a laptop and smartphone for real-time sales and reporting",
    width: 718,
    height: 430,
  },
} as const;
