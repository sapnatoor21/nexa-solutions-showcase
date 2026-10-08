import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "What clients say about working with Nexa Business Solutions — practical advice, steady execution, and results they can measure.",
      },
      { property: "og:title", content: "Testimonials — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "What clients say about working with Nexa Business Solutions — practical advice, steady execution, measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by businesses like yours"
        description="We're proud of the relationships we've built. Here's what a few of our clients have to say about working with Nexa."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-highlight" />
                <div className="flex items-center gap-0.5" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-highlight text-highlight" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaSection
        title="Join the businesses that trust Nexa"
        description="Book a free discovery call and find out what a focused, accountable partner can do for your business."
      />
    </>
  );
}
