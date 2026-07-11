import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart, and payment integration.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates and team workspaces.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive data visualization dashboard with charts, filters, and export capabilities.",
    tags: ["TypeScript", "D3.js", "Node.js"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Projects"
          subtitle="A selection of my recent work."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} hover>
              <CardContent className="flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
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
