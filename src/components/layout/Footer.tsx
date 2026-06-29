import { SITE_CONFIG } from "@/lib/constants";
import { TimeTravelButton } from "./TimeTravelModal";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12">
        {/* Time Travel Button */}
        <TimeTravelButton />

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
