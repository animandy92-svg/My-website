import { Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const milestones = [
  {
    year: "2024",
    title: "Founded Jack of All Trade iStore",
    description:
      "Launched an online retail business serving 500+ customers, trading phones, laptops, and accessories with Firebase-powered marketplace operations.",
    tag: "Entrepreneurship",
  },
  {
    year: "2025",
    title: "Chief of Ambassadors at AZ Learner",
    description:
      "Recruited and managed 20+ brand ambassadors across multiple Ghanaian campuses, increasing campus outreach by 40%.",
    tag: "Leadership",
  },
  {
    year: "2026",
    title: "Research Coordinator & Co-Developer",
    description:
      "Coordinating research across 5+ departments, managing a team of 12 researchers, and driving user growth to 10K+ active students.",
    tag: "EdTech",
  },
  {
    year: "2026",
    title: "Project Kasena — Language Preservation",
    description:
      "Co-developing a community-driven digital Kasem dictionary targeting 20K+ validated entries with a strategic alliance with Indigen World.",
    tag: "Culture & Tech",
  },
];

const summaryPoints = [
  "Built ventures and digital products with measurable community impact",
  "Combined leadership, research, and execution across education and tech",
  "Focused on long-term systems rather than short-term trends",
];

export default function Journey() {
  const { ref, isInView } = useInView();

  return (
    <section id="journey" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Journey"
          subtitle="Key milestones shaping my path in education, technology, and tourism."
        />

        <div className="mb-8 rounded-[24px] border border-border/70 bg-muted/30 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            What this path has taught me
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {summaryPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className={`space-y-6 ${isInView ? "stagger-children" : ""}`}>
          {milestones.map((item, index) => (
            <Card key={item.title} hover>
              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex items-center gap-3 sm:w-48 sm:flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Calendar size={20} />
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="hidden text-muted-foreground sm:block"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
