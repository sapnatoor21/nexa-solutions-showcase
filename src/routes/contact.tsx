import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/page-hero";
import { contactInfo, services } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nexa Business Solutions" },
      {
        name: "description",
        content:
          "Get in touch with Nexa Business Solutions. Call, email, WhatsApp, or send us a message — we reply within one business day.",
      },
      { property: "og:title", content: "Contact Us — Nexa Business Solutions" },
      {
        property: "og:description",
        content:
          "Call, email, WhatsApp, or send us a message — we reply within one business day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
  },
  {
    icon: MapPin,
    title: "Office",
    value: contactInfo.address,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: contactInfo.hours,
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start the conversation"
        description="Tell us a little about your business and what you'd like to achieve. We'll get back to you within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Prefer to reach out directly? Use any of the channels below — whichever suits you
              best.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <card.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90 sm:w-auto"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent">
                  <CheckCircle2 className="h-7 w-7 text-highlight" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
                  Thank you — message received
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  We've received your enquiry and will get back to you within one business day.
                  For anything urgent, call us at {contactInfo.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fields marked * are required.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service of Interest
                    </label>
                    <select id="service" name="service" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Other">Other / Not sure yet</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you'd like to achieve…"
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  We'll never share your details. Expect a reply within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title="Nexa Business Solutions office location — 120 Market Street, New York"
            src="https://www.google.com/maps?q=120%20Market%20Street%2C%20New%20York%2C%20NY&output=embed"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
