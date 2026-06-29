"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}
