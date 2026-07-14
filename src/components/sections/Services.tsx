import {
  Globe,
  Smartphone,
  Database,
  Palette,
  BookOpen,
  FileText,
  BarChart3,
  Briefcase,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useInView } from "@/hooks/useInView";
import type { Service } from "@/types";

const services: Service[] = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Financial Records",
    description:
      "Maintaining accurate financial records, reconciling accounts, and ensuring compliance with accounting standards for businesses of all sizes.",
    badges: ["Record-Keeping", "QuickBooks", "Excel"],
    category: "accounting",
  },
  {
    icon: FileText,
    title: "Tax Preparation & Compliance",
    description:
      "Preparing and filing tax returns, ensuring regulatory compliance, and identifying opportunities for tax efficiency.",
    badges: ["Tax Filing", "VAT", "Compliance"],
    category: "accounting",
  },
  {
    icon: BarChart3,
    title: "Financial Analysis & Reporting",
    description:
      "Analyzing financial data, preparing budgets and forecasts, and delivering actionable reports to support business decisions.",
    badges: ["Budgeting", "Cash Flow", "Excel"],
    category: "accounting",
  },
  {
    icon: Briefcase,
    title: "Business Advisory & Consulting",
    description:
      "Providing strategic guidance on business operations, startup planning, and process optimization to drive sustainable growth.",
    badges: ["Strategy", "Operations", "Startup"],
    category: "accounting",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building fast, responsive, and modern web applications using the latest frameworks and deployment tools.",
    badges: ["React", "Next.js", "Firebase"],
    category: "tech",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile experiences with native performance, from concept to Play Store deployment.",
    badges: ["React Native", "Expo", "Android"],
    category: "tech",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Designing robust APIs, real-time databases, and scalable backend systems that power web and mobile applications.",
    badges: ["Node.js", "Firebase", "PostgreSQL"],
    category: "tech",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, visually compelling interfaces with a focus on usability, accessibility, and brand consistency.",
    badges: ["Figma", "Tailwind CSS", "Prototyping"],
    category: "tech",
  },
];

export default function Services() {
  const { ref: accRef, isInView: accInView } = useInView();
  const { ref: techRef, isInView: techInView } = useInView();

  return (
    <section id="services" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Services"
          subtitle="What I can do for you — from financial clarity to digital solutions."
        />
        <div ref={accRef} className={`mb-10 ${accInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Accounting & Finance
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {services
              .filter((s) => s.category === "accounting")
              .map((service, index) => (
                <Card key={service.title} hover>
                  <CardContent>
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 hover:scale-110"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <service.icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.badges.map((badge) => (
                        <Badge key={badge} variant="primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        <div ref={techRef} className={techInView ? "animate-fade-in-up" : "opacity-0"}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Technology & Development
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {services
              .filter((s) => s.category === "tech")
              .map((service, index) => (
                <Card key={service.title} hover>
                  <CardContent>
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 hover:scale-110"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <service.icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.badges.map((badge) => (
                        <Badge key={badge} variant="accent">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
