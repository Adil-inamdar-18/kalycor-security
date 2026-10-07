import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { services, cctvSectionImage, cctvSectionAlt, cctvCameraImage, cctvCameraAlt } from '@/data/site';

export default function CCTVSection() {
  const cctvService = services.find((s) => s.slug === 'cctv');
  if (!cctvService) return null;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cctvSectionImage}
          alt={cctvSectionAlt}
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/85 to-navy-900" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      {/* Scanning line */}
      <div className="absolute inset-x-0 top-0 z-10 h-px overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-scan-line" />
      </div>

      <div className="relative z-20 section-padding py-22 md:py-30">
        <div className="container-wide">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Content */}
            <div>
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="eyebrow-accent">CCTV & Surveillance</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-section text-bone-50 text-balance">
                  See More. Respond Faster.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-steel-400 md:text-lg">
                  {cctvService.longDescription}
                </p>
              </Reveal>

              {/* Monitoring indicators */}
              <div className="mt-8 space-y-3">
                {['CCTV Systems', 'Live Monitoring', 'Full Site Visibility'].map((item, i) => (
                  <Reveal
                    key={item}
                    delay={i * 100 + 300}
                    className="flex items-center gap-4 border border-navy-700/40 bg-navy-950/50 px-5 py-4 backdrop-blur-sm transition-colors hover:border-accent/40"
                  >
                    <div className="flex h-8 w-8 items-center justify-center border border-accent/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm font-medium text-bone-50">{item}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-[0.15em] text-steel-600">Active</span>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={600}>
                <Link
                  href={cctvService.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone-50 link-underline"
                >
                  Explore CCTV Solutions
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            {/* Camera image with brackets */}
            <Reveal delay={200} className="relative">
              <div className="corner-bracket relative overflow-hidden">
                <img
                  src={cctvCameraImage}
                  alt={cctvCameraAlt}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />

                {/* Camera viewfinder overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-navy-950/70 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-bone-200">REC</span>
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-wider text-bone-200/60">
                  CAM-01 • {new Date().getFullYear()}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
