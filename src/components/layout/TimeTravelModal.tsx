"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink } from "react-icons/hi";

interface Version {
  label: string;
  year: string;
  url: string | null;
  description: string;
  gradient: string;
  active: boolean;
}

const VERSIONS: Version[] = [
  {
    label: "v1",
    year: "2023",
    url: "https://reymarkpanes-v1.vercel.app",
    description: "The beginning — first portfolio attempt",
    gradient: "from-blue-600/80 to-blue-900/80",
    active: true,
  },
  {
    label: "v2",
    year: "2024",
    url: "https://reymarkpanes.vercel.app",
    description: "Redesigned — cleaner layout & structure",
    gradient: "from-emerald-600/80 to-teal-900/80",
    active: true,
  },
  {
    label: "v3",
    year: "2025",
    url: null,
    description: "Current — premium dark theme with motion",
    gradient: "from-neutral-300/80 to-neutral-500/80",
    active: true,
  },
  {
    label: "v4",
    year: "2026",
    url: null,
    description: "Coming soon — next evolution",
    gradient: "from-accent/40 to-emerald-900/60",
    active: false,
  },
];

export function TimeTravelButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="font-display text-sm font-medium uppercase tracking-[0.3em] text-text-secondary/50 transition-all duration-300 hover:tracking-[0.4em] hover:text-text-secondary"
      >
        Go Back In Time
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 md:size-[700px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/5 md:size-[750px]" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex w-full max-w-2xl flex-col items-center"
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-secondary hover:text-text-primary md:-right-12 md:top-0"
                aria-label="Close"
              >
                <HiX size={18} />
              </button>

              {/* Heading */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="font-body text-xs font-medium uppercase tracking-widest text-accent"
              >
                Time Travel
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mt-3 text-center font-display text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
              >
                Looking for a different site?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-1 font-display text-lg font-medium text-accent md:text-xl"
              >
                Go back in time...
              </motion.p>

              {/* Version Grid */}
              <div className="mt-8 grid w-full grid-cols-2 gap-4">
                {VERSIONS.map((version, index) => (
                  <motion.div
                    key={version.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <VersionCard version={version} />
                  </motion.div>
                ))}
              </div>

              {/* Hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 font-body text-xs text-text-secondary/50"
              >
                esc or click outside to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function VersionCard({ version }: { version: Version }) {
  const isClickable = version.active && version.url;
  const isCurrent = version.label === "v3";
  const isComingSoon = !version.active;

  const content = (
    <div
      className={`group relative flex h-40 flex-col justify-between overflow-hidden rounded-xl border p-4 transition-all duration-300 md:h-44 ${
        isComingSoon
          ? "border-border/50 bg-bg-surface/30"
          : "border-border bg-bg-surface/50 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      } ${isCurrent ? "ring-1 ring-accent/30" : ""}`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${version.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
      />

      {/* Wireframe lines (decorative) */}
      <div className="relative z-10 flex flex-col gap-1.5 pt-1">
        <div className="h-2 w-3/4 rounded-sm bg-text-primary/10" />
        <div className="h-1.5 w-full rounded-sm bg-text-primary/5" />
        <div className="h-1.5 w-5/6 rounded-sm bg-text-primary/5" />
        <div className="h-1.5 w-2/3 rounded-sm bg-text-primary/5" />
      </div>

      {/* Footer info */}
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <p className="font-display text-lg font-bold text-text-primary">
            {version.label}
          </p>
          <p className="font-body text-xs text-text-secondary">{version.year}</p>
        </div>
        {isClickable && (
          <HiExternalLink
            size={14}
            className="text-text-secondary/50 transition-colors group-hover:text-accent"
          />
        )}
        {isCurrent && (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 font-body text-[10px] font-medium text-accent">
            current
          </span>
        )}
        {isComingSoon && (
          <span className="rounded-full bg-bg-secondary px-2 py-0.5 font-body text-[10px] font-medium text-text-secondary/60">
            soon
          </span>
        )}
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <a href={version.url!} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
