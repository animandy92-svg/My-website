import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import type { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { icon: Mail, href: "mailto:andy@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/andy-anim", label: "LinkedIn" },
  { icon: ArrowUpRight, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Andy Anim. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-110"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
