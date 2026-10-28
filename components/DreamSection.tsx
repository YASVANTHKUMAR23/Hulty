"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Stat } from "./ui/Stat";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DreamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      gsap.to({}, {
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stat-container",
          start: "top 80%",
          once: true,
        },
        onUpdate: function() {
          const progress = this.progress();
          const currentVal = progress * 8.4;
          if (counterRef.current) {
            counterRef.current.innerText = `${currentVal.toFixed(1)}M+`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="dream-title" className="flex flex-col gap-4 xl:flex-row xl:gap-u46">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[360px] overflow-hidden rounded-section md:h-[520px] xl:h-auto xl:w-u447 xl:shrink-0"
      >
        <Image
          src="/images/dream-photo.png"
          alt="Apartment building seen through a window frame"
          fill
          sizes="(min-width: 1280px) 25vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col gap-6 overflow-hidden rounded-section bg-surface p-pad text-navy xl:aspect-[1307/1203] xl:flex-1 xl:justify-center xl:p-0 xl:pl-u234 xl:pt-u17"
      >
        {[
          "left-[49.27%] top-[30.34%]",
          "left-[72.53%] top-[86.28%]",
        ].map((pos) => (
          <Image key={pos} src="/images/watermark.svg" alt="" aria-hidden width={330} height={330} unoptimized
            className={`pointer-events-none absolute hidden w-[25.25%] xl:block ${pos}`} />
        ))}

        <div className="stat-container relative xl:absolute xl:left-[67.9%] xl:top-[8.31%]">
          <Stat
            label="Satisfied Clients"
            value=""
            labelClassName="text-btn font-medium leading-[1.55]"
            gapClassName="gap-0"
            className="xl:absolute"
          />
          <div ref={counterRef} className="text-stat font-bold">0M+</div>
        </div>

        <div className="relative flex flex-col items-start gap-6 xl:max-w-u876 xl:gap-u49">
          <motion.h2
            id="dream-title"
            className="text-title font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We can bring to life everything you’ve ever envisioned and dreamed of – your ideals and desires are our creations.
          </motion.h2>
          <motion.p
            className="text-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our purpose is to transform your wildest dreams into reality. Regardless of how unconventional your vision may be, we possess the capability to craft your dream home, fulfilling your every desire.
          </motion.p>
          <Button href="/project">See More</Button>
        </div>
      </motion.div>
    </section>
  );
}
