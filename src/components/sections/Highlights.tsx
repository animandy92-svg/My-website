import { ArrowRight, Sparkles } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    title: "Built for impact",
    description: "From student platforms to entrepreneurship systems, every project is shaped around practical value.",
  },
  {
    title: "Research-led thinking",
    description: "Strategy is grounded in data, observation, and real-world insight rather than guesswork.",
  },
  {
    title: "Cross-sector perspective",
    description: "Finance, education, technology, and leadership all inform the way I build and advise.",
  },
];

export default function Highlights() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/8 via-background to-accent/8 shadow-sm">
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-2 text-sm font-medium text-primary">
                  <Sparkles size={16} />
                  Why this work matters
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Thoughtful systems, lasting value, and a clear point of view.
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                Start a conversation
                <ArrowRight size={16} />
              </a>
            </div>

            <div
              ref={ref}
              className={`mt-10 grid gap-5 md:grid-cols-3 ${isInView ? "stagger-children" : ""}`}
            >
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-border/70 bg-background/70 p-6 backdrop-blur">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
