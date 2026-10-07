import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { services } from '@/data/site';
import { securitySectionImage, securitySectionAlt } from '@/data/site';

export default function SecuritySection() {
  const securityService = services.find((s) => s.slug === 'security');
  if (!securityService) return null;

  return (
    <section className="relative bg-navy-950 noise-overlay">
      <div className="section-padding py-22 md:py-30">
        <div className="container-wide">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <Reveal className="relative overflow-hidden corner-bracket">
                <img
                  src={securitySectionImage}
                  alt={securitySectionAlt}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </Reveal>

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/85 p-5 backdrop-blur-md border border-navy-700/40">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      On-Site Personnel
                    </div>
                    <div className="mt-1 text-sm text-bone-50">Trained • Site-Briefed • Shift-Covered</div>
                  </div>
                  <svg className="h-8 w-8 text-steel-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 4L6 9v7c0 6 4 10 10 12 6-2 10-6 10-12V9L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12 16l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="eyebrow">Security Services</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-section text-bone-50 text-balance">
                  Visible presence. Site-specific protocols.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-steel-400 md:text-lg">
                  {securityService.longDescription}
                </p>
              </Reveal>

              {/* Numbered features */}
              <div className="mt-10 space-y-px bg-navy-700/20">
                {securityService.features.map((feature, i) => (
                  <Reveal
                    key={feature.title}
                    delay={i * 80 + 300}
                    className="group flex items-start gap-5 bg-navy-900 p-5 transition-colors hover:bg-navy-800"
                  >
                    <span className="text-2xl font-bold tabular-nums text-accent/40 transition-colors group-hover:text-accent md:text-3xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-bone-50 md:text-base">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel-400">{feature.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={600}>
                <Link
                  href={securityService.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone-50 link-underline"
                >
                  Explore Security Services
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
