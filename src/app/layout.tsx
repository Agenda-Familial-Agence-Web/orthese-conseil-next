import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: 'Orthèse Conseil | Clinique d\'orthèses et prothèses à Chambly',
    template: '%s | Orthèse Conseil',
  },
  description: 'Orthèse Conseil est une clinique d\'orthèses et prothèses située à Chambly au Québec. Les orthésistes certifiés Éric Drasse et Marie Lefebvre vous accueillent de façon humaine et dynamique.',
  keywords: ['orthèse', 'prothèse', 'orthèse plantaire', 'orthésiste', 'Chambly', 'clinique', 'orthopédique'],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Orthèse Conseil',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
