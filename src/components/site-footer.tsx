import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { contactInfo, navLinks, services } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10 font-display text-lg font-bold">
                N
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold tracking-tight">Nexa</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                  Business Solutions
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Helping businesses grow in a digital world through practical consulting, modern
              digital solutions, and strategies that deliver measurable results.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/90" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary-foreground/90" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary-foreground/90" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Nexa Business Solutions. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Business Consulting · Digital Solutions · Brand Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
