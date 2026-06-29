"use client";

import { motion } from "framer-motion";
import { fadeUp, blurIn } from "@/lib/motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Section } from "@/components/layout/Section";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  facebook: FaFacebook,
  twitter: FaLinkedin,
  instagram: FaLinkedin,
};

export function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col items-center text-center">
        <motion.div variants={blurIn}>
          <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            Let&apos;s build something
            <br />
            together.
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-text-secondary">
            I&apos;m currently available for freelance work and exciting
            opportunities. Let&apos;s connect.
          </p>
        </motion.div>

        {/* Email */}
        <motion.a
          variants={fadeUp}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${SITE_CONFIG.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-surface/50 px-6 py-4 font-body text-base font-medium text-text-primary transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
        >
          <HiOutlineMail size={20} className="text-accent" />
          {SITE_CONFIG.email}
        </motion.a>

        {/* Social Links */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} profile`}
                className="flex size-11 items-center justify-center rounded-lg border border-border text-text-secondary transition-all duration-200 hover:border-accent/50 hover:text-accent"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
