import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import FinalCTA from '@/components/sections/FinalCTA';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyKalycor from '@/components/sections/WhyKalycor';
import { aboutImage, aboutAlt, aboutSecondaryImage, aboutSecondaryAlt } from '@/data/site';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-navy-950">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutSecondaryImage}
            alt={aboutSecondaryAlt}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="relative z-10 flex min-h-[60vh] flex-col justify-end section-padding pb-16 pt-32">
          <div className="container-wide">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
            </div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow-accent">About Kalycor</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero text-bone-50 text-balance text-shadow-cinematic">
                Protection built around the way your site actually works.
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-navy-950 noise-overlay">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="relative">
                <Reveal className="overflow-hidden">
                  <img
                    src={aboutImage}
                    alt={aboutAlt}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />
                    <span className="eyebrow">Our Approach</span>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="text-section text-bone-50 text-balance">
                    A coordinated approach to security and facility support.
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-6 text-base leading-relaxed text-steel-400 md:text-lg">
                    Kalycor Services brings together security personnel, surveillance technology, and facility
                    support under a single, coordinated approach. We do not believe in one-size-fits-all — every
                    site has its own rhythm, its own risks, and its own way of operating.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p className="mt-4 text-base leading-relaxed text-steel-400">
                    From the first assessment to daily operations, our teams work to the specific needs of your
                    environment. The result is security and facility support that feels integrated, not imposed.
                  </p>
                </Reveal>
                <Reveal delay={400}>
                  <div className="mt-8 grid gap-px bg-navy-700/30 sm:grid-cols-2">
                    <div className="bg-navy-900 p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Coordinated</div>
                      <div className="mt-1 text-sm text-steel-400">Security + Facility under one team</div>
                    </div>
                    <div className="bg-navy-900 p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Site-Specific</div>
                      <div className="mt-1 text-sm text-steel-400">Protocols built for your location</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyKalycor />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
