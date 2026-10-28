"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use Framer Motion for the initial state (hidden)
      // and GSAP to trigger the reveal.
      // To avoid conflict, we use gsap.to and target elements
      // that start at opacity 0 via CSS/Tailwind.
      gsap.to(".service-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-title"
      className="rounded-section bg-surface px-pad-x py-section text-navy"
    >
      <div className="mx-auto flex w-full max-w-u1597 flex-col gap-8 xl:gap-u80">
        <motion.h2
          id="services-title"
          className="text-h2 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        <ul className="grid gap-4 lg:grid-cols-3 lg:gap-u26">
          {SERVICES.map((s) => (
            <motion.li
              key={s.number}
              className={`service-card opacity-0 translate-y-12 flex min-h-[340px] flex-col rounded-panel p-pad transition duration-300 motion-safe:hover:-translate-y-2 ${
                s.dark
                  ? "bg-navy text-white hover:bg-[#0a1a40]"
                  : "bg-white text-navy hover:shadow-[0_20px_40px_-20px_rgba(5,15,39,0.25)]"
              }`}
              whileHover={{ y: -10 }}
            >
              <p className="self-end text-service font-medium">{s.number}</p>
              <div className="mt-10 flex flex-col gap-5 lg:mt-u100 lg:gap-u48">
                <h3 className="text-service font-medium">
                  {s.titleLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h3>
                <p className="max-w-u436 text-lead">{s.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
