import type { Metadata } from "next";
import { Libre_Franklin, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald" });
const libreFranklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre-franklin" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.contact.websiteHref),
  title: {
    default: `${site.shortName} — ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Achieving Community Tasks Successfully (ACTS) equips Eastside Houston communities with trusted information, practical skills, and resources that turn knowledge into action.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${libreFranklin.variable} ${spaceMono.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-navy-primary"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
