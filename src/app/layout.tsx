import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorFollower from "@/components/ui/CursorFollower";
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
