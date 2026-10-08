import { createFileRoute } from "@tanstack/react-router";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "A selection of recent Nexa Business Solutions engagements across consulting, digital solutions, brand strategy, marketing, and websites.",
      },
      { property: "og:title", content: "Projects & Portfolio — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Recent engagements across consulting, digital solutions, brand strategy, marketing, and websites — each with measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects with measurable outcomes"
        description="Every engagement starts with agreed goals. Here's a selection of recent work and the results it delivered for our clients."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
                  {project.category}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="Want results like these for your business?"
        description="Every project above started with a single conversation. Book a free discovery call and let's define what success looks like for you."
      />
    </>
  );
}
