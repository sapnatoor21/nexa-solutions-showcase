import { createFileRoute } from "@tanstack/react-router";

import aboutOffice from "@/assets/about-office.jpg";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { stats, values } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "Learn about Nexa Business Solutions — our story, our values, and the team behind practical, measurable business growth.",
      },
      { property: "og:title", content: "About Us — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Learn about Nexa Business Solutions — our story, our values, and the team behind practical, measurable business growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const team = [
  { initials: "AR", name: "Alexandra Reynolds", role: "Managing Director" },
  { initials: "DK", name: "Daniel Keller", role: "Head of Strategy" },
  { initials: "MN", name: "Maya Nakamura", role: "Digital Solutions Lead" },
  { initials: "JT", name: "James Turner", role: "Marketing & Brand Lead" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A trusted partner in business growth"
        description="For over a decade, Nexa Business Solutions has helped small and medium businesses make clearer decisions, adopt better tools, and grow with confidence."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built on practical advice, not buzzwords
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Nexa was founded with a simple observation: most small and medium businesses don't
                need more theory — they need a partner who listens, plans carefully, and stays
                accountable for results.
              </p>
              <p>
                Today, our team combines experience across consulting, technology, marketing, and
                brand strategy. We work as an extension of your team, bringing structure to
                decisions and momentum to execution.
              </p>
              <p>
                Everything we recommend is measured against goals we agree on together at the
                start — so you always know exactly what your investment is delivering.
              </p>
            </div>
          </div>
          <img
            src={aboutOffice}
            alt="The Nexa Business Solutions office"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-sm"
          />
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

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
            Our Values
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The principles behind every engagement
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
              Our Team
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Senior people, personally involved
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Every engagement is led by a senior team member — never handed off to juniors after
              the proposal is signed.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 lg:pt-24">
        <CtaSection />
      </div>
    </>
  );
}
