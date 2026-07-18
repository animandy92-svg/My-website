import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "10K+", label: "Students supported" },
  { value: "5+", label: "Digital products" },
  { value: "20+", label: "Campus ambassadors" },
  { value: "100%", label: "Focus on impact" },
];

export default function StatsStrip() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-4 sm:py-6">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`grid gap-4 rounded-[24px] border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur sm:grid-cols-2 lg:grid-cols-4 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/60 bg-background/70 p-5 text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
