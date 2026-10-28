"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Stat } from "./ui/Stat";

export function Hero() {
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex flex-col gap-8 rounded-section bg-surface p-pad text-navy md:gap-10 xl:block xl:aspect-[1800/1203] xl:rounded-none xl:bg-transparent xl:p-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 pointer-events-none"
      >
        <Image src="/images/hero-card.svg" alt="" aria-hidden width={1800} height={1203} priority unoptimized
          className="size-full" />
      </motion.div>

      <Image src="/images/hero-intro-card.svg" alt="" aria-hidden width={545} height={715} unoptimized
        className="pointer-events-none absolute hidden left-[0.06%] top-[40.48%] h-[59.43%] w-[30.28%] xl:block" />

      <div className="overflow-hidden xl:absolute xl:left-[36.5%] xl:top-[6.32%] xl:w-fit">
        <motion.h1
          id="hero-title"
          className="text-display font-bold whitespace-nowrap"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          We craft the<br className="hidden md:block" /> future dwelling.
        </motion.h1>
      </div>

      <div className="flex flex-col gap-4 md:max-w-xl xl:contents">
        <motion.div
          className="xl:absolute xl:left-[4.78%] xl:top-[7.81%]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Stat label="Capital raised" value="$3.5M+" />
        </motion.div>
        <motion.p
          className="text-copy tracking-[-0.03em] xl:absolute xl:left-[4.78%] xl:top-[19.95%] xl:w-[21%]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.
        </motion.p>
      </div>

      <div className="relative aspect-[1076/712] overflow-hidden rounded-photo xl:absolute xl:left-[36.28%] xl:top-[36.99%] xl:w-[59.78%]">
        <motion.img
          src="/images/hero-photo.png"
          alt="Modern residential building with wood-clad upper floors"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute size-full object-cover"
          style={{
            width: "123.75%",
            height: "233.78%",
            left: "-11.88%",
            top: "-101.69%",
            maxWidth: "none"
          }}
        />
      </div>

      <motion.div
        className="flex flex-col items-start gap-5 rounded-panel bg-white p-pad xl:absolute xl:left-[4.83%] xl:top-[57.11%] xl:gap-u29 xl:rounded-none xl:bg-transparent xl:p-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-lead font-medium leading-none text-black">Introduction</p>
        <h2 className="max-w-u422 text-subhead font-medium text-ink">
          A vision for liveable, sustainable &amp; affordable.
        </h2>
        <Button href="/project">Start Exploring</Button>
      </motion.div>
    </section>
  );
}
