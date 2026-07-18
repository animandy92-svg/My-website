import { useState, useEffect } from "react";
import { Menu, X, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Insights", href: "#insights" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-xl font-bold text-foreground transition-colors duration-200 hover:text-primary"
        >
          <span className="font-extrabold">FRANCIS</span>{" "}
          <span className="font-extrabold text-primary">PWAVWE</span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:francis@example.com"
            className="hidden items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/francis-pwavwe"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
            aria-label="Profile"
          >
            <ArrowUpRight size={16} />
          </a>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 pb-4 pt-2 xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
