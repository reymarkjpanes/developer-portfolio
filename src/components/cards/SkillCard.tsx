"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SkillBadge } from "@/components/cards/SkillBadge";

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

export function SkillCard({ title, description, skills, icon }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="card-elevated group flex flex-col gap-4 rounded-xl border border-border bg-bg-surface/50 p-6 transition-all duration-300 hover:border-accent/20 hover:bg-bg-surface/80 hover:shadow-[0_12px_40px_var(--color-shadow)]"
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-3">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-secondary/50 text-text-secondary transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent"
        >
          {icon}
        </motion.div>
        <div className="flex flex-col">
          <h3 className="font-display text-base font-bold tracking-tight text-text-primary">
            {title}
          </h3>
          <span className="mt-0.5 font-body text-xs text-text-secondary/70">
            {skills.length} {skills.length === 1 ? "skill" : "skills"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  );
}
