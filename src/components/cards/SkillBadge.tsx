"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="cursor-default rounded-md border border-border bg-bg-secondary/40 px-2.5 py-1 font-body text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent/50 hover:bg-accent/8 hover:text-text-primary"
    >
      {label}
    </motion.span>
  );
}
