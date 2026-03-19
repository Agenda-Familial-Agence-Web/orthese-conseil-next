import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
