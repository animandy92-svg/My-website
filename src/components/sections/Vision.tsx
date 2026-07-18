import { Target, Globe, BookOpen, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const goals = [
  {
    icon: Globe,
    title: "Pan-African EdTech Platform",
    description:
      "Scale AZ Learner into a continent-wide student companion serving 100K+ students across 10+ African countries.",
  },
  {
    icon: BookOpen,
    title: "Digital Tourism for Ghana",
    description:
      "Build technology-driven tourism solutions that showcase Ghana's culture, heritage, and hospitality to the world.",
  },
  {
    icon: Users,
    title: "Community-Powered Preservation",
    description:
      "Complete Project Kasena and create a replicable model for preserving endangered African languages through technology.",
  },
];

export default function Vision() {
  const { ref, isInView } = useInView();
  const { ref: statementRef, isInView: statementInView } = useInView();

  return (
    <section id="vision" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Vision"
          subtitle="Where I'm headed — the problems worth solving and the impact I want to create."
        />

        <div
          ref={statementRef}
          className={`mb-12 ${statementInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    My Vision
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    To bridge the gap between education, technology, and tourism
                    in Africa — building purposeful systems that elevate
                    academic performance, preserve cultural heritage, and
                    redefine strategic possibilities across the continent. I
                    believe in creating digital public value that serves
                    communities and empowers the next generation of African
                    leaders.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "100K+ students",
                      "10+ countries",
                      "3 focus pillars",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/20 bg-background/80 px-3 py-2 text-sm font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isInView ? "stagger-children" : ""}`}
        >
          {goals.map((item) => (
            <Card key={item.title} hover>
              <CardContent className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
