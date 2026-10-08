import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Star } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import { CtaSection } from "@/components/cta-section";
import { projects, services, stats, testimonials } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexa Business Solutions — Helping Businesses Grow in a Digital World" },
      {
        name: "description",
        content:
          "Nexa Business Solutions helps small and medium businesses grow through practical consulting, digital solutions, marketing support, and brand strategy.",
      },
      { property: "og:title", content: "Nexa Business Solutions — Helping Businesses Grow" },
      {
        property: "og:description",
        content:
          "Practical consulting, digital solutions, marketing support, and brand strategy for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const whyPoints = [
  "A dedicated team that understands your business",
  "Clear, measurable goals agreed before work begins",
  "Plain-language reporting — no jargon, no surprises",
  "Long-term partnership focused on sustainable growth",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
              Business Consulting & Digital Solutions
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Helping Businesses Grow in a Digital World
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Nexa Business Solutions partners with small and medium businesses to sharpen
              strategy, modernize operations, and build a digital presence that turns ambition
              into measurable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Contact Us
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Modern glass office buildings against a clear blue sky"
              width={1536}
              height={1024}
              className="w-full rounded-3xl border border-border object-cover shadow-sm"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-5 shadow-sm sm:block lg:-left-8">
              <div className="flex items-center gap-1" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="mt-2 font-display text-xl font-bold text-foreground">98%</p>
              <p className="text-xs font-medium text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by forward-thinking companies
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Northwind", "Vertex Labs", "Bluepeak", "Halcyon Group", "Meridian & Co."].map(
              (name) => (
                <span
                  key={name}
                  className="font-display text-lg font-semibold tracking-tight text-muted-foreground/60"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services built around your goals
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From strategy to execution, we cover everything a growing business needs to compete
              and win in a digital-first market.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-2 rounded-lg border border-input bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.short}
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-highlight"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us preview */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={aboutOffice}
              alt="The Nexa Business Solutions conference room"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-sm"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                Why Nexa
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A partner focused on measurable results
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We combine senior-level strategic thinking with hands-on execution, so you get one
                accountable partner from first conversation to final result.
              </p>
              <ul className="mt-6 space-y-3.5">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent">
                      <Check className="h-3 w-3 text-accent-foreground" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/why-choose-us"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                More reasons to choose us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
              Our Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured projects
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A selection of recent engagements — each with clear goals and results we're proud to
              share.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden shrink-0 items-center gap-2 rounded-lg border border-input bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What our clients say
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="h-6 w-6 text-highlight" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-highlight"
            >
              Read more testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-20 lg:pt-24">
        <CtaSection />
      </div>
    </>
  );
}
