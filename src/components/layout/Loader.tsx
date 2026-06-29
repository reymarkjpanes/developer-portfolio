"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_PHASES = [
  "Initializing",
  "Loading modules",
  "Compiling assets",
  "Rendering interface",
];

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev >= LOADING_PHASES.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
        >
          {/* Neural Pulse Animation */}
          <div className="relative mb-10">
            {/* Outer rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 size-16 rounded-full border border-accent/30"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute inset-0 size-16 rounded-full border border-accent/20"
            />

            {/* Core node */}
            <div className="relative flex size-16 items-center justify-center">
              {/* Spinning ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute size-16"
                viewBox="0 0 64 64"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#2A2A2A"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="176"
                  animate={{ strokeDashoffset: [176, 44, 176] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.svg>

              {/* Center dot */}
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="size-3 rounded-full bg-accent shadow-[0_0_12px_rgba(220,38,38,0.5)]"
              />
            </div>
          </div>

          {/* Brand */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6 font-display text-xl font-bold tracking-tight text-text-primary"
          >
            RP<span className="text-accent">.</span>
          </motion.p>

          {/* Phase Text */}
          <div className="flex items-center gap-2">
            {/* Typing dots */}
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="size-1 rounded-full bg-accent"
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="font-body text-xs font-medium text-text-secondary"
              >
                {LOADING_PHASES[phase]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-px w-48 overflow-hidden rounded-full bg-border">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
