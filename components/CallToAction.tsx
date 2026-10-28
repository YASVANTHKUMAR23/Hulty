"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "./Footer";

export function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-16 rounded-section bg-navy-2 px-pad-cta pb-pad-cta pt-cta-top text-white xl:gap-u220"
    >
      <section
        aria-labelledby="cta-title"
        className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-u335"
      >
        <div className="flex flex-col gap-6 lg:gap-u75">
          <div className="overflow-hidden">
            <motion.h2
              id="cta-title"
              className="text-cta font-medium"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Start Your<br />Project Now!
            </motion.h2>
          </div>
          <motion.p
            className="text-ctasub font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Made for you convenience for a<br className="hidden xl:inline" />{" "}
            more beautiful future for you and<br className="hidden xl:inline" />{" "}
            your family
          </motion.p>
        </div>

        <Link
          href="/contact"
          className="flex h-24 w-full shrink-0 items-center justify-center rounded-cta bg-white/5 text-ctabtn font-bold transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] lg:h-u344 lg:w-u320"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </motion.div>
  );
}
