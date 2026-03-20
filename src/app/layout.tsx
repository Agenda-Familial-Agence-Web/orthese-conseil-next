import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorFollower from "@/components/ui/CursorFollower";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orthèse Conseil",
  description: "Votre spécialiste en orthèses sur mesure",
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
      <body className="min-h-full flex flex-col">
        <CursorFollower />
        <SmoothScroll>
          <Navbar />
          <ScrollProgress />
          <main className="relative z-10 bg-white">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
