import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { services, facilitySectionImage, facilitySectionAlt, facilitySecondaryImage, facilitySecondaryAlt } from '@/data/site';

export default function FacilitySection() {
  const facilityService = services.find((s) => s.slug === 'facility');
  if (!facilityService) return null;

  return (
    <section className="bg-navy-900">
      <div className="section-padding py-22 md:py-30">
        <div className="container-wide">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Content */}
            <div>
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="eyebrow">Facility Services</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-subsection text-bone-50 text-balance">
                  Supporting services that keep your site running.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-steel-400 md:text-lg">
                  {facilityService.description}
                </p>
              </Reveal>

              {/* Feature list */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {facilityService.features.map((feature, i) => (
                  <Reveal
                    key={feature.title}
                    delay={i * 60 + 300}
                    className="flex items-start gap-3"
                  >
                    <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-bone-50">{feature.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-steel-400">{feature.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={600}>
                <Link
                  href={facilityService.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone-50 link-underline"
                >
                  Explore Facility Services
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            {/* Image */}
            <div className="relative">
              <Reveal className="overflow-hidden">
                <img
                  src={facilitySectionImage}
                  alt={facilitySectionAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </Reveal>
              <Reveal
                delay={200}
                className="absolute -bottom-6 -left-4 w-2/5 overflow-hidden border-4 border-navy-900 hidden md:block"
              >
                <img
                  src={facilitySecondaryImage}
                  alt={facilitySecondaryAlt}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
