"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { SITE_CONFIG } from "@/lib/constants";

export function About() {
  return (
    <Section id="about">
      {/* Section Label + Heading */}
      <motion.div variants={slideInLeft} className="mb-12 max-w-2xl">
        <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
          A bit about me.
        </h2>
      </motion.div>

      {/* Content */}
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        {/* Lead paragraph */}
        <motion.div variants={slideInLeft} className="md:col-span-5">
          <p className="font-body text-lg font-normal leading-[1.75] text-text-primary md:text-xl">
            {SITE_CONFIG.aboutParagraphs[0]}
          </p>
        </motion.div>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-6 md:col-span-7">
          {SITE_CONFIG.aboutParagraphs.slice(1).map((paragraph, index) => (
            <motion.p
              key={index}
              variants={slideInRight}
              custom={index}
              className="font-body text-base leading-[1.8] text-text-secondary"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <motion.div
        variants={fadeUp}
        className="mt-16 flex justify-center"
      >
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </motion.div>
    </Section>
  );
}
