"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:justify-between">
        {/* Left: Text Content */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface/50 px-4 py-1.5"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="font-body text-xs font-medium text-text-secondary">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-3 font-display text-lg font-medium text-text-secondary sm:text-xl md:text-2xl"
          >
            {SITE_CONFIG.role}
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 max-w-md font-body text-base leading-relaxed text-text-secondary"
          >
            {SITE_CONFIG.heroIntro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-3 font-body text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-body text-sm font-medium text-text-secondary transition-all duration-200 hover:border-text-secondary hover:text-text-primary"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative shrink-0"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 rounded-full bg-accent/10 blur-3xl" />

          {/* Profile image */}
          <div className="relative size-64 overflow-hidden rounded-full border-2 border-border shadow-2xl sm:size-72 md:size-80 lg:size-96">
            <Image
              src="/images/profile.png"
              alt="Reymark Panes — Software & Web Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>

          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-border/50" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-text-secondary" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
