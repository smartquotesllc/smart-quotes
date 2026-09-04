import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4321";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart Quotes | Better Solutions. Better Connections.",
    template: "%s | Smart Quotes",
  },
  description:
    "Smart Quotes LLC helps individuals and businesses connect with Merchant Services, Xfinity Residential, and Comcast Business solutions — request a free quote today.",
  openGraph: {
    title: "Smart Quotes | Better Solutions. Better Connections.",
    description:
      "One trusted starting point for Merchant Services, Xfinity Residential, and Comcast Business.",
    type: "website",
    locale: "en_US",
    siteName: "Smart Quotes LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Quotes | Better Solutions. Better Connections.",
    description:
      "Request a free quote for Merchant Services, Xfinity Residential, or Comcast Business.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-sq-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
