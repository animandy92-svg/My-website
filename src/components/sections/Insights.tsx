import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const insights = [
  {
    title: "Digital Innovation in African Education",
    date: "2026",
    excerpt:
      "How technology is reshaping learning experiences across Ghanaian campuses — from smart print queues to AI-powered CV builders.",
    tag: "EdTech",
  },
  {
    title: "Financial Strategy for Emerging Markets",
    date: "2026",
    excerpt:
      "Building sustainable financial frameworks that leverage local culture, digital platforms, and community engagement.",
    tag: "Finance",
  },
  {
    title: "Community-Driven Language Preservation",
    date: "2026",
    excerpt:
      "Lessons from building Project Kasena — how micro-payments and youth engagement can preserve endangered languages.",
    tag: "Culture",
  },
];

export default function Insights() {
  const { ref, isInView } = useInView();

  return (
    <section id="insights" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Insights"
          subtitle="Thoughts on education, finance, technology, and building for impact."
        />

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isInView ? "stagger-children" : ""}`}
        >
          {insights.map((item) => (
            <Card key={item.title} hover>
              <CardContent className="flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.tag}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-light">
                  Read more
                  <ArrowUpRight size={14} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
