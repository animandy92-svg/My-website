import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Welcome to my portfolio
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-primary">Andy Anim</span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          A software developer and consultant crafting digital experiences
          through clean code and thoughtful design. Let&apos;s build something
          great together.
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
