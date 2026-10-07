"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy-950/88 backdrop-blur-xl border-b border-white/10 py-3" : "bg-gradient-to-b from-navy-950/80 to-transparent py-5"}`}
    >
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between">
          <Link
  href="/"
  className="group flex items-center gap-3"
  aria-label="Kalycor Security home"
>
  <Image
    src="/new-logo.png"
    alt="Kalycor Security logo"
    width={58}
    height={58}
    priority
    className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
  />

  <div className="leading-none">
    <div className="text-[18px] font-bold tracking-[0.12em] text-white">
      KALYCOR
    </div>
    <div className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-gold-400">
      SECURITY
    </div>
  </div>
</Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-bone-200 hover:bg-white/5 hover:text-white"
                aria-expanded={servicesOpen}
              >
                Services{" "}
                <span
                  className={`text-accent transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>
              <div
                className={`absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-3 transition-all duration-300 ${servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
              >
                <div className="glass rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/40">
                  {siteConfig.servicesNav.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block rounded-xl px-4 py-3.5 hover:bg-white/[.05]"
                    >
                      <span className="block text-sm font-semibold text-white group-hover:text-accent">
                        {service.label}
                      </span>
                      <span className="mt-1 block text-xs text-steel-400">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {siteConfig.nav
              .filter((item) => !item.dropdown)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-[13px] font-semibold ${pathname === item.href ? "bg-white/8 text-accent" : "text-bone-200 hover:bg-white/5 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-accent px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[.14em] text-navy-950 transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/10 md:inline-flex"
            >
              Request Assessment <span className="ml-2">↗</span>
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <i
                  className={`absolute left-0 top-0 h-px w-5 bg-white transition ${open ? "top-2 rotate-45" : ""}`}
                />
                <i
                  className={`absolute left-0 top-2 h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`}
                />
                <i
                  className={`absolute left-0 top-4 h-px w-5 bg-white transition ${open ? "top-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[90vh]" : "max-h-0"}`}
      >
        <div className="glass border-t border-white/10 px-5 py-6">
          <div className="mx-auto max-w-[90rem]">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[.28em] text-steel-400">
              Services
            </div>
            <div className="grid gap-1 sm:grid-cols-2">
              {siteConfig.servicesNav.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="my-5 h-px bg-white/10" />
            {siteConfig.nav
              .filter((item) => !item.dropdown)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-sm font-semibold text-bone-200"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/contact"
              className="mt-5 flex justify-center rounded-xl bg-accent px-5 py-4 text-sm font-extrabold uppercase tracking-wider text-navy-950"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
