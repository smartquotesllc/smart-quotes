/**
 * Full POS System product page assets — unbranded / vendor-neutral.
 * Always render with object-fit: contain so hardware and labels stay fully visible.
 */
export const FULL_POS_IMAGES = {
  hero: {
    src: "/images/merchant/full-pos/full-pos-hero.png",
    alt: "Full POS System with 14 inch monitor, 8 inch touchscreen, contactless reader, credit card reader, receipt printer, and cash drawer",
    width: 780,
    height: 690,
  },
  softwareIcons: {
    src: "/images/merchant/full-pos/software-icons.png",
    alt: "POS software tools including orders, inventory, employees, customers, discounts, reporting, transactions, and more",
    width: 618,
    height: 296,
  },
  dashboard: {
    src: "/images/merchant/full-pos/dashboard-devices.png",
    alt: "Business dashboard shown on a laptop and smartphone for real-time sales and reporting",
    width: 718,
    height: 430,
  },
} as const;
