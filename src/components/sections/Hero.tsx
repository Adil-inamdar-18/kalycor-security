"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroImage, heroAlt } from "@/data/site";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-navy-950 md:min-h-screen">
      {/* HERO IMAGE */}
      <img
        src={heroImage}
        alt={heroAlt}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
      />

      {/* Soft readability overlay — strong only on left */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,22,.78)_0%,rgba(5,12,22,.52)_32%,rgba(5,12,22,.16)_62%,rgba(5,12,22,.05)_100%)]" />

      {/* Very subtle top/bottom cinematic shading */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,22,.30)_0%,transparent_25%,transparent_72%,rgba(5,12,22,.55)_100%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-15" />

      {/* Decorative rings */}
      <div className="absolute right-[8%] top-[27%] hidden h-40 w-40 rounded-full border border-accent/20 lg:block" />
      <div className="absolute right-[11%] top-[31%] hidden h-24 w-24 rounded-full border border-accent/15 lg:block" />

      <div className="relative z-10 flex min-h-[760px] items-end section-padding pb-14 pt-36 md:min-h-screen md:pb-20">
        <div className="container-wide w-full">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow-accent">
                Security · Surveillance · Facility
              </span>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.2em] text-bone-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Built around your site
            </div>

            <h1 className="max-w-4xl text-[clamp(3.35rem,7.7vw,7.4rem)] font-extrabold leading-[.91] tracking-[-.055em] text-white text-shadow-cinematic">
              Security that keeps your{" "}
              <span className="text-accent">business moving.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-bone-100/90 md:text-lg md:leading-8">
              Professional security personnel, CCTV and surveillance, commercial
              protection and facility support — coordinated around the way your
              site actually operates.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-navy-950 transition hover:bg-accent-light"
              >
                Request a Security Assessment
                <span className="ml-3 text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/15 px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-white backdrop-blur-sm transition hover:border-accent/50 hover:bg-black/25"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-4">
            {[
              "24/7 Security Support",
              "Site Monitoring",
              "Rapid Response",
              "Controlled Access",
            ].map((x, i) => (
              <div
                key={x}
                className="bg-black/20 px-4 py-4 backdrop-blur-md sm:px-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[9px] font-bold uppercase tracking-[.16em] text-steel-300">
                    0{i + 1}
                  </span>
                </div>

                <div className="text-xs font-semibold text-bone-100 sm:text-sm">
                  {x}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade — much lighter */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy-950/80 to-transparent" />
    </section>
  );
}
