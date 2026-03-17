"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 1.8 + i * 0.12,
    },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto pt-32">
      {/* Top status line */}
      <motion.div
        custom={0}
        variants={item}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 mb-16 md:mb-24"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-4">
          Not Available for work — {new Date().getFullYear()}
        </span>
      </motion.div>

      {/* Main headline */}
      <div className="mb-10 md:mb-14">
        <motion.h1
          custom={1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight text-cream mb-0"
        >
          FRONTEND
        </motion.h1>
        <motion.h1
          custom={2}
          variants={item}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight text-cream flex items-end gap-6"
        >
          Developer
        </motion.h1>
      </div>

      {/* Divider */}
      <motion.div
        custom={3}
        variants={item}
        initial="hidden"
        animate="visible"
        className="w-full h-px bg-border mb-10 md:mb-14"
      />

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          custom={4}
          variants={item}
          initial="hidden"
          animate="visible"
          className="max-w-md"
        >
          <p className="text-muted-4 font-sans font-light md:text-lg leading-relaxed">
            I build performant, accessible web experiences with a sharp eye for
            design systems and interaction detail.
          </p>
        </motion.div>

        <motion.div
          custom={5}
          variants={item}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a href="#work" className="cta-button-primary group">
            <span>View Work</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="cta-button-ghost">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        custom={6}
        variants={item}
        initial="hidden"
        animate="visible"
        className="mt-16 md:mt-20 flex items-center gap-4"
      >
        <div className="relative w-8 h-12 border border-border rounded-full flex items-start justify-center pt-2">
          <div className="w-0.5 h-2 bg-muted-4 rounded-full animate-bounce" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
