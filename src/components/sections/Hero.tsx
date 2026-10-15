"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Projects Completed", icon: "check" },
  { value: "98%", label: "Client Satisfaction", icon: "users" },
  { value: "24/7", label: "Monitoring & Support", icon: "clock" },
] as const;

const capabilities = [
  { label: ["CCTV &", "Surveillance"], icon: "shield" },
  { label: ["Security", "Personnel"], icon: "personnel" },
  { label: ["Facility", "Support"], icon: "building" },
  { label: ["Integrated", "Solutions"], icon: "gear" },
] as const;

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <path d="M12 2.8 4.5 5.8v5.6c0 4.5 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.3 7.5-9.8V5.8z" />
          <path d="m8.8 12.2 2.3 2.3 4.3-4.6" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" />
          <path d="M18.6 2.6v3.6h-3.6" />
          <text x="12" y="14.6" textAnchor="middle" fontSize="6.4" fontWeight="700" fill="currentColor" stroke="none">
            247
          </text>
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2.8 4.5 5.8v5.6c0 4.5 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.3 7.5-9.8V5.8z" />
          <path d="m9 12.5 2 2 4-4.5" />
        </svg>
      );
    case "personnel":
      return (
        <svg {...common}>
          <path d="M12 2.8 4.5 5.8v5.6c0 4.5 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.3 7.5-9.8V5.8z" />
          <circle cx="12" cy="10" r="2.2" />
          <path d="M8.2 16c.7-1.7 2.2-2.6 3.8-2.6s3.1.9 3.8 2.6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  // Keep the background video muted + playing; pause it for people who prefer reduced motion (poster stays visible)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    v.muted = true;
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const reveal = (delay = "") =>
    `transition-all duration-[900ms] ease-out ${delay} ${ready ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`;

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#050c18] text-white lg:min-h-[clamp(680px,38.4vw,900px)]">
      {/* Background: looping CCTV video. Full-bleed on mobile; on desktop it sits on the right so the copy stays clear of the "Live Monitoring" card */}
      <video
        ref={videoRef}
        src="/videos/cctv-live-hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center] lg:left-auto lg:right-0 lg:w-[66%] lg:object-right lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_24%)] lg:[mask-image:linear-gradient(to_right,transparent,black_24%)]"
      />
      {/* Readability: heavy on small screens, light on desktop where the artwork is already dark on the left */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,12,24,.94)_0%,rgba(5,12,24,.82)_55%,rgba(5,12,24,.45)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,12,24,.55)_0%,rgba(5,12,24,0)_46%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#050c18] to-transparent" />

      <div className="section-padding relative w-full pb-14 pt-32 lg:pb-10 lg:pt-28">
        <div className="container-wide">
          <div className="max-w-[min(100%,46rem)] lg:max-w-[48vw]">
            {/* Eyebrow */}
            <div className={`mb-5 flex items-center gap-4 lg:mb-6 ${reveal()}`}>
              <span className="h-px w-12 bg-[#ff7a1a]" />
              <span className="text-[10px] font-semibold uppercase tracking-[.3em] text-slate-300 sm:text-xs">
                24/7 Protection <span className="mx-1.5 text-slate-500">•</span> Smarter Surveillance
              </span>
            </div>

            {/* Headline */}
            <h1 className={`text-[clamp(2.6rem,4.4vw,5.1rem)] font-extrabold leading-[1.02] tracking-[-.025em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,.35)] ${reveal("delay-100")}`}>
              Security that
              <br />
              keeps your
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-[#f4651b] via-[#ff7a1f] to-[#ff9a3a] bg-clip-text text-transparent">
                business moving.
              </span>
            </h1>

            {/* Copy */}
            <p className={`mt-6 max-w-[34rem] text-[15px] leading-[1.65] text-slate-300 sm:text-base lg:mt-7 lg:text-[clamp(.95rem,1.08vw,1.2rem)] ${reveal("delay-200")}`}>
              Professional security personnel, CCTV and surveillance, commercial protection and facility support — coordinated around the way your site actually operates.
            </p>

            {/* Buttons */}
            <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9 ${reveal("delay-300")}`}>
              <Link
                href="/contact"
                className="group inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff5a14] px-7 text-[11px] font-extrabold uppercase tracking-[.1em] text-[#07111f] shadow-[0_14px_38px_-10px_rgba(255,106,26,.65)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:text-xs"
              >
                Request a Security Assessment
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-full border border-white/20 bg-[#071120]/50 px-7 text-[11px] font-extrabold uppercase tracking-[.1em] text-white backdrop-blur-sm transition duration-300 hover:border-[#ff7a1a]/70 hover:bg-white/5 sm:text-xs"
              >
                Explore Services
                <Arrow className="h-4 w-4 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#ff7a1a]" />
              </Link>
            </div>

            {/* Stats */}
            <div className={`mt-9 flex flex-wrap items-center gap-y-5 lg:mt-10 ${reveal("delay-500")}`}>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 pr-6 sm:pr-8 ${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-6 lg:pl-8" : ""}`}
                >
                  <span className="text-[#ff7a1a]">
                    <Icon name={s.icon} className="h-9 w-9 lg:h-10 lg:w-10" />
                  </span>
                  <div>
                    <div className="text-xl font-bold leading-none text-white lg:text-[1.35rem]">{s.value}</div>
                    <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[.16em] text-slate-400">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities list (desktop) */}
      <ul
        className={`absolute right-[2.4vw] top-[49%] z-10 hidden w-[12.5vw] min-w-[170px] max-w-[220px] lg:block ${reveal("delay-700")}`}
        aria-label="Capabilities"
      >
        {capabilities.map((c, i) => (
          <li
            key={c.icon}
            className={`flex items-center gap-4 py-[1.1vw] xl:py-4 ${i > 0 ? "border-t border-white/10" : ""}`}
          >
            <span className="text-[#ff7a1a]">
              <Icon name={c.icon} className="h-8 w-8" />
            </span>
            <span className="text-[10px] font-semibold uppercase leading-[1.55] tracking-[.16em] text-slate-200 xl:text-[11px]">
              {c.label[0]}
              <br />
              {c.label[1]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}