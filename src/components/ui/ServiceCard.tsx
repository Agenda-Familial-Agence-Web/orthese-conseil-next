"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  name: string;
  shortDescription: string;
  icon: string;
  slug: string;
  index: number;
}

export default function ServiceCard({
  name,
  shortDescription,
  icon,
  slug,
  index,
}: ServiceCardProps) {
  return (
    <Link href={`/nos-services/${slug}`} className="block">
      <motion.div
        className="group relative rounded-2xl bg-white border border-gray-200 p-6 md:p-8 h-full overflow-hidden"
        whileHover={{
          y: -8,
          boxShadow: "0 20px 40px rgba(46,109,180,0.15)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient border overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-transparent bg-gradient-to-br from-primary to-accent [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[1px]" />

        {/* Icon */}
        <div className="animate-float w-12 h-12 md:w-16 md:h-16 relative">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* Name */}
        <h3 className="font-heading text-xl font-semibold mt-4 text-text-primary">
          {name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mt-2 line-clamp-2">
          {shortDescription}
        </p>

        {/* Arrow icon - slides in on hover */}
        <div className="flex justify-end mt-4">
          <span className="translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
