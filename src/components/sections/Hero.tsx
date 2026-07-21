import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "15+", label: "Projects" },
  { value: "14", label: "Partners" },
  { value: "3+", label: "Years Exp." },
  { value: "5", label: "Awards" },
];

const focusTags = ["Financial Reporting", "Education Technology", "Campus Leadership"];
const highlights = ["Student-first systems", "Strategic growth", "Digital public value"];

export default function Hero() {
  const { ref, isInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(30,58,95,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.16),_transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(180deg,white,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="absolute left-8 top-20 -z-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-24 right-8 -z-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={ref} className={isInView ? "animate-fade-in-up" : "opacity-0"}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Accounting & Finance · University of Cape Coast · Ghana
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Andy
            <br />
            <span className="text-primary">Anim</span>
          </h1>

          <p className="mb-4 text-xl font-semibold text-primary sm:text-2xl">
            Accounting student · digital strategist · builder of student-first systems
          </p>

          <p className="mb-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I design thoughtful digital experiences at the intersection of finance,
            education, and public impact — turning complex ideas into practical,
            high-value solutions for communities and institutions.
          </p>

          <p className="mb-8 max-w-2xl text-sm font-medium text-primary">
            Changed and improved — the latest code updates are live.
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
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-primary/25" />
            <div className="absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-card/90 p-3 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-primary/30 via-white to-accent/20">
                <img
                  src="/images/profile/profile.png?v=2"
                  alt="Andy Anim"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-border/70 bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Focused On
                </p>
                <p className="text-sm text-muted-foreground">
                  education systems, financial strategy, and digital public value.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
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

      <div
        ref={statsRef}
        className={`absolute bottom-0 left-0 right-0 border-t border-border/70 bg-card/80 backdrop-blur-md ${statsInView ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/70 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center">
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
