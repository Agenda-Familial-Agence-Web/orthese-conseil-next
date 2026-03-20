"use client";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  source: string;
}

export default function TestimonialCard({
  name,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 min-w-[320px] max-w-[400px] shrink-0 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-3 hover:border-t-primary hover:shadow-md group">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < rating ? "text-[#F59E0B]" : "text-gray-200"}`}
            style={{
              animation: `starPop 0.3s ease-out ${i * 0.1}s both`,
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote text */}
      <p className="text-text-primary text-sm leading-relaxed line-clamp-4 whitespace-normal mb-4">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm text-text-primary">{name}</span>
        <span className="text-text-muted text-xs flex items-center gap-1">
          Avis Google vérifié
          <svg className="w-3.5 h-3.5 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  );
}
