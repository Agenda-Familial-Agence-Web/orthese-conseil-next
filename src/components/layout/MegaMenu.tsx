"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] p-6 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-black/10"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/nos-services/${service.slug}`}
            onClick={onClose}
            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200"
          >
            <div className="relative w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
              <Image
                src={service.icon}
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="font-heading font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
                {service.name}
              </p>
              <p className="text-xs text-text-secondary mt-0.5 line-clamp-2">
                {service.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          href="/nos-services"
          onClick={onClose}
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Voir tous nos services &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
