import { type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
  category: "accounting" | "tech";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  category?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}
