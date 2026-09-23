/**
 * Approved service imagery — identified by content, never cropped in UI.
 * Use object-fit: contain and let containers grow (width 100% / height auto).
 */
export const SERVICE_IMAGES = {
  /** IMAGE B — Xfinity Residential primary (multi-tile TV entertainment scene) */
  xfinityPrimary: {
    src: "/images/services/xfinity-residential-image-b.jpg",
    alt: "Xfinity Residential: home gateway, mobile phone, streaming box, remote, and TV with entertainment tiles",
    width: 1254,
    height: 1254,
  },
  /** IMAGE D — Xfinity Residential secondary (purple abstract wave TV) */
  xfinitySecondary: {
    src: "/images/services/xfinity-residential-image-d.jpg",
    alt: "Xfinity Residential: home gateway, mobile phone, streaming box, remote, and TV with purple display",
    width: 1110,
    height: 840,
  },
  /** IMAGE C — Comcast Business equipment family */
  comcast: {
    src: "/images/services/comcast-business-image-c.jpg",
    alt: "Comcast Business: modem, Wi-Fi device, desk phone, mobile phone, and laptop with cybersecurity shield",
    width: 1254,
    height: 1254,
  },
  /** IMAGE E — Merchant Services retail POS family */
  merchantCard: {
    src: "/images/services/merchant-services-image-e.jpg",
    alt: "Merchant Services: touchscreen POS, cash drawer, receipt printer, countertop terminal, and mobile terminal",
    width: 1254,
    height: 1254,
  },
  /**
   * Wide Merchant hero composition (matches IMAGE A hero equipment group).
   * Prefer this over forcing square IMAGE E into a wide hero.
   */
  merchantHero: {
    src: "/images/services/merchant-pos-collage.jpg",
    alt: "Full Merchant Services POS hardware group including register, tablet POS, terminals, mobile payments, and self-service kiosk",
    width: 1672,
    height: 678,
  },
} as const;
