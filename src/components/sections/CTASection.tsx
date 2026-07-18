import { ArrowRight, Sparkles } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <Card className={`overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-sm transition-all duration-700 ${isInView ? "animate-reveal-up" : "opacity-0"}`}>
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-2 text-sm font-medium text-primary">
                  <Sparkles size={16} />
                  Ready to build something meaningful?
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s turn ideas into digital systems that create real impact.
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Whether it is a platform, a strategy, or a community-driven product, I bring a thoughtful blend of research, execution, and purpose.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-light"
              >
                Start a conversation
                <ArrowRight size={16} />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
