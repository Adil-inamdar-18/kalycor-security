import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import { services } from '@/data/site';
import FinalCTA from '@/components/sections/FinalCTA';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Kalycor Services`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden bg-navy-950">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-transparent" />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end section-padding pb-16 pt-32">
          <div className="container-wide">
            <div className="mb-6">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/#services' },
                  { label: service.shortTitle },
                ]}
              />
            </div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow-accent">{service.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero text-bone-50 text-balance text-shadow-cinematic">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-200 md:text-lg">
                {service.tagline}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-navy-950 noise-overlay">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />
                    <span className="eyebrow">Overview</span>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="text-subsection text-bone-50 text-balance">
                    {service.tagline}
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <Reveal delay={200}>
                  <p className="text-base leading-relaxed text-steel-400 md:text-lg">
                    {service.longDescription}
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <div className="mt-8">
                    <Button href="/contact" variant="primary">
                      Request a Security Assessment
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-900">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow">What's Included</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-section text-bone-50 text-balance mb-14">
                Service capabilities.
              </h2>
            </Reveal>

            <div className="grid gap-px bg-navy-700/20 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={i * 80}
                  className="group bg-navy-900 p-8 transition-colors hover:bg-navy-800"
                >
                  <span className="text-3xl font-bold tabular-nums text-navy-700 transition-colors group-hover:text-accent/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-bone-50">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{feature.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting image */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-navy-950">
        <img
          src={service.supportingImage}
          alt={service.supportingAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 to-transparent" />
      </section>

      {/* Benefits */}
      <section className="bg-navy-950 noise-overlay">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow">Benefits</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-section text-bone-50 text-balance mb-14">
                What you gain.
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {service.benefits.map((benefit, i) => (
                <Reveal
                  key={benefit.title}
                  delay={i * 100}
                  className="flex items-start gap-5 border border-navy-700/40 bg-navy-900 p-6 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-accent/30">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-bone-50">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">{benefit.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-900">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow">Process</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-section text-bone-50 text-balance mb-14">
                How we deploy.
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-4">
              {service.process.map((step, i) => (
                <Reveal
                  key={step.step}
                  delay={i * 120}
                  className="group relative border-t border-navy-700/50 pt-6"
                >
                  <div className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  <span className="text-2xl font-bold tabular-nums text-accent">{step.step}</span>
                  <h3 className="mt-3 text-base font-semibold text-bone-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
