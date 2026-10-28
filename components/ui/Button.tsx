import Link from "next/link";
import type { ComponentProps } from "react";

/** Solid navy pill-ish button used on light cards (See More, Start Exploring). */
export function Button({ className = "", ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex h-btn-h min-w-btn-w items-center justify-center rounded-[26px] bg-navy px-6 text-btn font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0c1d4a] active:translate-y-0 active:scale-[0.98] focus-visible:outline-navy focus-visible:outline-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
      {...props}
    />
  );
}
