import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import FinalCTA from '@/components/sections/FinalCTA';
import { industries } from '@/data/site';

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-navy-950">
        <div className="absolute inset-0 z-0">
          <img
            src={industries[0].image}
            alt={industries[0].alt}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="relative z-10 flex min-h-[60vh] flex-col justify-end section-padding pb-16 pt-32">
          <div className="container-wide">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
            </div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow-accent">Industries We Serve</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero text-bone-50 text-balance text-shadow-cinematic">
                Built for the environments you operate in.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-200 md:text-lg">
                From retail floors to industrial perimeters, our security and facility services adapt to the specific demands of each environment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-navy-950 noise-overlay">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide space-y-22">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`grid gap-10 lg:gap-16 lg:grid-cols-2 items-center scroll-mt-24 ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <Reveal className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={industry.image}
                      alt={industry.alt}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-navy-950/80 px-3 py-2 backdrop-blur-sm">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                        {String(i + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Reveal>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />
                      <span className="eyebrow">Industry</span>
                    </div>
                  </Reveal>
                  <Reveal delay={100}>
                    <h2 className="text-subsection text-bone-50 text-balance">
                      {industry.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={200}>
                    <p className="mt-5 text-base leading-relaxed text-steel-400 md:text-lg">
                      {industry.description}
                    </p>
                  </Reveal>
                  <Reveal delay={300}>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone-50 link-underline"
                    >
                      Enquire About This Industry
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
