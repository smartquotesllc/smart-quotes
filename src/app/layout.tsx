import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/company";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || COMPANY.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Smart Quotes LLC | Internet, Mobile, Business & Merchant Solutions",
    template: "%s | Smart Quotes LLC",
  },
  description:
    "Smart Quotes LLC connects individuals and businesses with Merchant Services, Xfinity Residential, and Comcast Business solutions. Request a Smart Quote with personalized assistance.",
  openGraph: {
    title:
      "Smart Quotes LLC | Internet, Mobile, Business & Merchant Solutions",
    description:
      "One trusted starting point for Merchant Services, Xfinity Residential, and Comcast Business.",
    type: "website",
    locale: "en_US",
    siteName: "Smart Quotes LLC",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smart Quotes LLC | Internet, Mobile, Business & Merchant Solutions",
    description:
      "Request a Smart Quote for Merchant Services, Xfinity Residential, or Comcast Business.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-sq-ink">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
