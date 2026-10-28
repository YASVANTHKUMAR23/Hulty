import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex flex-col items-start gap-5 rounded-pill bg-white/[0.03] px-8 py-6 md:flex-row md:items-center md:justify-between lg:h-footer-h lg:px-u91 lg:py-0">
      <Link href="/" aria-label="Hulty home">
        <Image src="/images/logo-footer.svg" alt="Hulty" width={96} height={39} unoptimized className="h-auto w-24" />
      </Link>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-label font-medium tracking-[-0.02em] lg:gap-x-u50">
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-80"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
