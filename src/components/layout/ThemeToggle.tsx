"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92, rotate: theme === "dark" ? 15 : -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-bg-surface/60 text-text-secondary backdrop-blur-sm hover:border-accent/40 hover:text-accent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex items-center justify-center"
          >
            <HiOutlineSun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex items-center justify-center"
          >
            <HiOutlineMoon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
