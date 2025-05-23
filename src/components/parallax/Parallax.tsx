"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Common background styles
  const commonBgStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      ref={ref}
      className="relative grid h-screen w-full place-items-center overflow-hidden"
    >
      <motion.h1
        style={{ y: textY }}
        className="absolute -right-3 top-20 z-10 max-w-xs text-heroTitleSm font-semibold text-white md:relative md:right-[-20px] md:top-[-250px] md:max-w-none md:text-heroTitleMd lg:right-[-125px] xl:top-[-300px] xl:text-heroTitleLg"
      >
        राष्ट्रले आफ्नो इतिहास बिर्सनु भनेको आफ्नो अस्तित्व गुमाउनु जस्तै हो
      </motion.h1>

      {/* Background layer */}
      <motion.div
        className="responsive-bg absolute inset-0 z-0"
        style={{
          ...commonBgStyles,
          // backgroundImage: `url(/home/parallax/bg2babu.png)`,
          y: backgroundY,
        }}
      />

      {/* Middleground layer */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          ...commonBgStyles,
          backgroundImage: `url(/home/parallax/mg.png)`,
        }}
      />
    </section>
  );
}
