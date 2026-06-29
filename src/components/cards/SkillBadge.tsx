"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="cursor-default rounded-md border border-border bg-transparent px-2.5 py-1 font-body text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent/60 hover:bg-accent/5 hover:text-text-primary"
    >
      {label}
    </motion.span>
  );
}
