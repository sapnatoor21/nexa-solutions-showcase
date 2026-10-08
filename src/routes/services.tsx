import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "Business consulting, digital solutions, marketing support, brand strategy, website solutions, and growth programs for small and medium businesses.",
      },
      { property: "og:title", content: "Our Services — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Business consulting, digital solutions, marketing support, brand strategy, website solutions, and growth programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything a growing business needs"
        description="Six focused service areas, one accountable partner. Every engagement starts with clear goals and ends with measurable results."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-highlight"
              >
                Discuss this service
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure which service fits your situation?"
        description="Tell us where your business is today and where you want it to be. We'll recommend the right starting point — even if it's not us."
      />
    </>
  );
}
