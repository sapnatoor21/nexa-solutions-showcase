import { createFileRoute } from "@tanstack/react-router";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { processSteps, reasons, stats } from "@/data/content";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "Why growing businesses choose Nexa: tailored strategies, transparent communication, dedicated support, and results measured against agreed goals.",
      },
      { property: "og:title", content: "Why Choose Us — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Tailored strategies, transparent communication, dedicated support, and measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyChooseUsPage,
});

function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="An accountable partner, not just another agency"
        description="We earn long-term relationships by being clear about what we'll do, honest about what it will take, and rigorous about measuring the outcome."
      />

      {/* Reasons */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <reason.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold text-foreground">
                {reason.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1.5 text-sm font-medium text-primary-foreground/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
            How We Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A proven process, transparent from day one
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <span className="font-display text-4xl font-bold text-highlight/30">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <CtaSection />
    </>
  );
}
