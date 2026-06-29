"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { TimeTravelButton } from "./TimeTravelModal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12">
        {/* Time Travel Button */}
        <TimeTravelButton />

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />

        {/* Footer info */}
        <div className="flex w-full items-center justify-between">
          <p className="font-body text-xs text-text-secondary">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <p className="font-body text-xs text-text-secondary">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
