import { ArrowRight, Download, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "15+", label: "Projects" },
  { value: "14", label: "Partners" },
  { value: "3+", label: "Years Exp." },
  { value: "5", "label": "Awards" },
];

const focusTags = ["Tourism Strategy", "Education Technology", "Campus Leadership"];

export default function Hero() {
  const { ref, isInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 py-16"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div ref={ref} className={isInView ? "animate-fade-in-up" : "opacity-0"}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-mono text-xs text-muted-foreground">
              Tourism Management · University of Cape Coast · Ghana
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Francis
            <br />
            Pwavwe
          </h1>

          <p className="mb-6 text-2xl font-medium text-primary">
            Tourism Professional
          </p>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Advancing digital innovation in education and tourism — building
            purposeful systems that elevate academic performance and redefine
            strategic possibilities across Africa.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#work">
              <Button size="lg">
                View My Work
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </a>
            <Button variant="outline" size="lg">
              Download CV
              <Download className="ml-2 inline h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Profile Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/40">
                <img
                  src="/images/profile/profile.png"
                  alt="Francis Pwavwe"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Focused On Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-white/95 p-5 shadow-lg backdrop-blur-sm">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Focused On
                </p>
                <p className="text-sm text-muted-foreground">
                  education systems, tourism strategy, and digital public value.
                </p>
              </div>
            </div>

            {/* Focus Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {focusTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className={`absolute bottom-0 left-0 right-0 border-t border-border bg-card/80 backdrop-blur-md ${statsInView ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-4 divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center">
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
