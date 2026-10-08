import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "Answers to common questions about working with Nexa Business Solutions — pricing, timelines, process, and what to expect.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Answers to common questions about working with Nexa Business Solutions — pricing, timelines, process, and expectations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you might want to know before starting a conversation with us. Can't find your answer? Get in touch — we reply within one business day."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border bg-card transition-colors ${
                  isOpen ? "border-primary/30" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection
        title="Still have questions?"
        description="Send us a message or book a free discovery call — we'll give you a straight answer, not a sales pitch."
      />
    </>
  );
}
