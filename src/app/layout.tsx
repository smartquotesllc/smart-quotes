import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://smartquotesllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart Quotes LLC | Request a Quote",
    template: "%s | Smart Quotes LLC",
  },
  description:
    "Smart Quotes LLC helps you explore Merchant Services, Xfinity Residential, and Comcast Business options — then request a quote and schedule an appointment.",
  openGraph: {
    title: "Smart Quotes LLC",
    description:
      "Explore services and request a quote for Merchant Services, Xfinity Residential, and Comcast Business.",
    type: "website",
    url: siteUrl,
    siteName: "Smart Quotes LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Quotes LLC",
    description:
      "Explore services and request a quote for Merchant Services, Xfinity Residential, and Comcast Business.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
