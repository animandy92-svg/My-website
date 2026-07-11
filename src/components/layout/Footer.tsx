import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import type { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://instagram.com/anim.andrew", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/channel/UCWIOkABSbwlEyaSXBGVHeGg", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/in/andy-anim", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
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
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
