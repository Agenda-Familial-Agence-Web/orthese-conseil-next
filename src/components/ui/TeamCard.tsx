"use client";

import { TeamMember } from "@/data/team";
import TiltCard from "./TiltCard";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <TiltCard className="group rounded-2xl bg-white shadow-lg">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Blue duotone overlay */}
        <div
          className="absolute inset-0 bg-primary/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          {member.name}
        </h3>
        <p className="mt-1 text-text-secondary">
          {member.title} &middot; {member.experience}
        </p>
        <p className="mt-3 text-text-secondary line-clamp-3 text-sm leading-relaxed">
          {member.bio}
        </p>

        {/* Certifications */}
        <div className="mt-4 flex flex-wrap gap-2">
          {member.certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {cert}
            </span>
          ))}
        </div>

        <Link
          href={`/equipe/${member.slug}`}
          className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Voir le profil
          <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </TiltCard>
  );
}
