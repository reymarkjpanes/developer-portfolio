"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-bg-primary/80 shadow-[0_1px_3px_var(--color-shadow-sm)] backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-display text-xl font-bold tracking-tight text-text-primary"
        >
          RP<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative font-body text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
                {hoveredLink === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-accent px-4 py-2 font-body text-sm font-medium text-white shadow-[0_2px_8px_var(--color-glow)] transition-colors duration-200 hover:bg-accent-hover"
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="flex size-9 items-center justify-center rounded-lg text-text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiX size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiOutlineMenuAlt3 size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 font-body text-sm font-medium text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="mt-2"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-accent px-3 py-2.5 text-center font-body text-sm font-medium text-white"
                >
                  Let&apos;s Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
