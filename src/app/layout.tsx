import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorFollower from "@/components/ui/CursorFollower";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageTransition from "@/components/providers/PageTransition";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/ui/MobileCTABar";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Orthèse Conseil — Clinique d'orthèses à Chambly",
    template: "%s — Orthèse Conseil",
  },
  description:
    "Clinique d'orthèses à Chambly. Orthèses plantaires, de genou, attelles et plus. Éric Drasse et Marie Lefebvre, orthésistes avec 40+ ans d'expérience combinée. RAMQ, SAAQ, CNESST.",
  keywords: [
    "orthèses",
    "orthèses plantaires",
    "orthésiste",
    "Chambly",
    "RAMQ",
    "SAAQ",
    "CNESST",
    "orthèse de genou",
  ],
  authors: [{ name: "Orthèse Conseil" }],
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://ortheseconseil.com",
    siteName: "Orthèse Conseil",
    title: "Orthèse Conseil — Clinique d'orthèses à Chambly",
    description:
      "Orthèses plantaires, de genou, attelles et plus. 40+ ans d'expérience combinée.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ortheseconseil.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <CursorFollower />
        <SmoothScroll>
          <Navbar />
          <ScrollProgress />
          <main className="relative z-10 bg-white min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <BackToTop />
          <MobileCTABar />
        </SmoothScroll>
      </body>
    </html>
  );
}
