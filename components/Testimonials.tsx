"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";
import { motion } from "framer-motion";

/**
 * One grid does all breakpoints: 1 col → 2 cols (md) → 3 cols (xl).
 * The heading spans 2 columns at md+, so at xl the first card lands in the
 * 3rd column beside it, exactly like the Figma layout.
 */
export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="rounded-section bg-surface px-pad-x py-section text-navy"
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-u26 xl:grid-cols-3 xl:gap-y-u48">
        <h2 id="testimonials-title" className="text-h2 font-bold md:col-span-2 xl:max-w-u835">
          What our customers say
        </h2>

        {TESTIMONIALS.map((t) => (
          <figure
            key={t.id}
            className="flex min-h-[300px] flex-col justify-between gap-8 rounded-card bg-white p-pad transition duration-300 hover:shadow-[0_20px_40px_-20px_rgba(5,15,39,0.25)] motion-safe:hover:-translate-y-1 xl:h-u431"
          >
            <blockquote className="text-lead text-ink-soft">
              <p>{t.quote}</p>
            </blockquote>
            <figcaption className="flex flex-col items-end gap-tight self-end">
              <span className="text-name font-medium text-black">{t.name}</span>
              <Image
                src="/images/stars.svg"
                alt="Rated 5 out of 5 stars"
                width={85}
                height={15}
                unoptimized
                className="h-auto w-stars"
              />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
