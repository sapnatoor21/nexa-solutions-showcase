import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Nexa Business Solutions — Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
            N
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-foreground">
              Nexa
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Business Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "bg-accent text-primary font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-input text-foreground transition-colors hover:bg-accent xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border/70 bg-background px-4 pb-6 pt-2 sm:px-6 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                activeProps={{ className: "bg-accent text-primary font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
