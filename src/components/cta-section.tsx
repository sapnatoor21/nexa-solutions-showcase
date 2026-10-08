import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Ready to take your business to the next level?",
  description = "Let's talk about your goals. Book a free discovery call and we'll show you exactly how we can help — no obligation, no jargon.",
}: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 lg:py-16">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/75">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
