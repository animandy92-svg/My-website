import { Globe, Smartphone, Database, Palette } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Service } from "@/types";

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building fast, responsive, and modern web applications using the latest technologies.",
    badges: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Creating cross-platform mobile experiences that users love.",
    badges: ["React Native", "Expo"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Designing robust APIs and scalable backend systems.",
    badges: ["Node.js", "Firebase", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces with a focus on usability and aesthetics.",
    badges: ["Figma", "Tailwind CSS"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Services"
          subtitle="What I can do for you."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} hover>
              <CardContent>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
    </section>
  );
}
