import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useInView } from "@/hooks/useInView";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "AZ Learner",
    description:
      "Student companion app for UCC & Ghana universities — smart print queue, course circles, GPA calculator, exam countdown, campus navigation, and AI-powered CV builder. Serving 10K+ active students with a 4.8★ Play Store rating.",
    tags: ["React", "Firebase", "Android", "PWA"],
    link: "https://azlearner.me/",
    image: "/images/projects/az-learner.png",
    category: "digital",
  },
  {
    title: "Jack of All Trade iStore",
    description:
      "Online retail marketplace trading phones, laptops, and accessories with real-time inventory tracking, pricing management, and cash-flow operations.",
    tags: ["Firebase", "React", "E-Commerce"],
    link: "https://jack-of-all-trades-marketplace.web.app/",
    image: "/images/projects/istore.png",
    category: "digital",
  },
  {
    title: "Project Kasena",
    description:
      "Digital Kasem dictionary & language preservation platform — community-driven corpus targeting 20K+ validated entries, micro-payment verification (GHS 0.50/phrase), and a 3-phase roadmap from dictionary to voice AI. Strategic alliance with Indigen World.",
    tags: ["React", "Firebase", "AI/ML", "Community"],
    link: "https://kassena.azlearner.me/",
    image: "/images/projects/kasena.png",
    category: "community",
  },
  {
    title: "Project Kasena Prototype",
    description:
      "Figma prototype for the Kasem language dictionary — mobile-first UI designed for low-bandwidth phones in rural Northern Ghana, featuring offline-first architecture.",
    tags: ["Figma", "UI/UX", "Mobile-First"],
    link: "https://waffle-taffy-61548237.figma.site/",
    image: "/images/projects/kasena-prototype.png",
    category: "prototype",
  },
  {
    title: "AZ Learner Web App",
    description:
      "Progressive Web App version of AZ Learner enabling cross-platform access including iOS users, with full feature parity to the native Android app.",
    tags: ["React", "PWA", "Firebase"],
    link: "https://azlearner.me/pwa/index.html",
    image: "/images/projects/az-learner-pwa.png",
    category: "digital",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with React, TypeScript, Tailwind CSS, and Vite. Deployed on Firebase Hosting with dark mode support and responsive design.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    link: "https://andyanim.com",
    image: "/images/projects/portfolio.png",
    category: "prototype",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Digital Products", value: "digital" },
  { label: "Community & Culture", value: "community" },
  { label: "Design Prototypes", value: "prototype" },
] as const;

const gradients: Record<string, string> = {
  "az-learner.png": "from-blue-500 to-blue-700",
  "istore.png": "from-emerald-500 to-emerald-700",
  "kasena.png": "from-amber-500 to-amber-700",
  "kasena-prototype.png": "from-orange-400 to-orange-600",
  "az-learner-pwa.png": "from-sky-400 to-sky-600",
  "portfolio.png": "from-slate-600 to-slate-800",
};

const initials: Record<string, string> = {
  "az-learner.png": "AL",
  "istore.png": "JoAT",
  "kasena.png": "PK",
  "kasena-prototype.png": "PK",
  "az-learner-pwa.png": "AL",
  "portfolio.png": "FP",
};

export default function Work() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["value"]>("all");

  const visibleProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="work" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Work"
          subtitle="A selection of my real work — from student platforms to cultural preservation."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.value
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isInView ? "stagger-children" : ""}`}
        >
          {visibleProjects.map((project) => {
            const slug = project.image?.split("/").pop() ?? "";
            const gradient = gradients[slug] ?? "from-primary/60 to-primary/80";
            const init = initials[slug] ?? project.title.charAt(0);

            return (
              <Card key={project.title} hover>
                <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="relative select-none text-3xl font-bold text-white/80">
                    {init}
                  </span>
                </div>
                <CardContent className="flex flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
