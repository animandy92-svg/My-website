import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div ref={ref} className={`mx-auto max-w-3xl ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Welcome to my portfolio
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Andy Anim
          </span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          A driven professional combining analytical expertise with real-world
          business experience. Let&apos;s build something great together.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects">
            <Button size="lg">
              View My Work
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
