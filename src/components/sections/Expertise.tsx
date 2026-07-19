import { Brain, Compass, ShieldCheck } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    icon: Compass,
    title: "Strategy",
    description: "Turning ideas into practical growth plans for accounting, education, and digital ventures.",
  },
  {
    icon: Brain,
    title: "Innovation",
    description: "Bridging cutting-edge tools with human-centered design and student-first thinking.",
  },
  {
    icon: ShieldCheck,
    title: "Execution",
    description: "Delivering systems that are resilient, useful, and built to create long-term value.",
  },
];

export default function Expertise() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A practical blend of strategy, innovation, and execution.
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid gap-6 md:grid-cols-3 ${isInView ? "stagger-children" : ""}`}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} hover>
                <CardContent className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
