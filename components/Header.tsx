"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe sections that correspond to nav links
    const sections = ["home", "services"]; // Add other section IDs here
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative z-30 px-gutter pt-nav-top">
      <div className="relative flex h-nav-h items-center justify-between rounded-pill bg-white/[0.03] pl-nav-x pr-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:pr-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="justify-self-start"
        >
          <Link href="/" aria-label="Hulty home">
            <Image src="/images/logo.svg" alt="Hulty" width={136} height={60} priority unoptimized className="h-auto w-logo" />
          </Link>
        </motion.div>

        <nav aria-label="Primary" className="hidden lg:block lg:-translate-x-u18">
          <ul className="flex gap-u50 text-nav font-medium">
            {NAV_LINKS.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  href={l.href}
                  className={`relative transition-opacity duration-200 hover:opacity-70 ${
                    activeSection === l.href.replace("/#", "") ? "text-white" : "text-white/70"
                  }`}
                >
                  {l.label}
                  {activeSection === l.href.replace("/#", "") && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute left-1/2 top-[calc(100%+6px)] size-[5px] -translate-x-1/2 rounded-full bg-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="justify-self-end"
        >
          <Link
            href="/contact"
            className="relative flex h-full items-center rounded-r-[100px] bg-white pl-tab-l pr-tab-r text-btn font-bold text-navy transition-colors duration-200 before:absolute before:right-full before:top-0 before:h-full before:w-u13 before:rounded-r-[100px] before:bg-white/95 before:content-[''] hover:bg-white/85 focus-visible:outline-white lg:flex"
          >
            Contact Us
          </Link>
        </motion.div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-gutter top-[calc(100%+8px)] origin-top rounded-[28px] bg-navy-2 p-6 shadow-2xl ring-1 ring-white/10 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1 text-xl font-medium">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/10"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-14 items-center justify-center rounded-full bg-white font-bold text-navy transition-colors hover:bg-white/85 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
