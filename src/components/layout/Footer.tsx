'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/services' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
  { label: 'Prendre rendez-vous', href: '/contact#rendez-vous' },
];

export default function Footer() {
  const currentYear = 2026;
  const primaryLocation = siteConfig.locations.find((l) => l.isPrimary);

  return (
    <footer
      className="relative w-full bg-dark text-[#8b95a1]"
      style={{ position: 'sticky', bottom: 0, zIndex: 1 }}
    >
      {/* Main footer content */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/logo.webp"
                alt="Orthèse Conseil"
                width={160}
                height={48}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Votre bien-être, notre expertise depuis {siteConfig.founded}.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b95a1]/30 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm transition-colors duration-300 hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.office.replace(/-/g, '')}`}
                  className="flex items-start gap-3 text-sm transition-colors duration-300 hover:text-accent"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phone.office}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm transition-colors duration-300 hover:text-accent"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              {primaryLocation && (
                <li>
                  <a
                    href={primaryLocation.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm transition-colors duration-300 hover:text-accent"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {primaryLocation.address}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            &copy; {siteConfig.founded}-{currentYear} Orthèse Conseil. Tous
            droits réservés.
          </p>
          <p>
            Membre AOPQ &middot; OTPQ
          </p>
        </div>
      </div>
    </footer>
  );
}
