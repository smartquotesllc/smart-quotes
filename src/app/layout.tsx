import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Keep legacy CSS variable names used across components pointing at Inter */
const fontVars = `${inter.variable} [--font-montserrat:var(--font-inter)] [--font-poppins:var(--font-inter)]`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4321";

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
      "One trusted starting point for Merchant Services, Xfinity Residential, and Comcast Business.",
    type: "website",
    locale: "en_US",
    siteName: "Smart Quotes LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Quotes LLC",
    description:
      "Request a quote for Merchant Services, Xfinity Residential, or Comcast Business.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-sq-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
