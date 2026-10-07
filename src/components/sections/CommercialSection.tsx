import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { services, commercialSectionImage, commercialSectionAlt } from '@/data/site';

export default function CommercialSection() {
  const commercialService = services.find((s) => s.slug === 'commercial');
  if (!commercialService) return null;

  const environments = [
    { label: 'Retail', image: 'https://images.pexels.com/photos/5539083/pexels-photo-5539083.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { label: 'Shopping Centres', image: commercialSectionImage },
    { label: 'Commercial Buildings', image: 'https://images.pexels.com/photos/17079096/pexels-photo-17079096.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { label: 'Corporate Spaces', image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      {/* Full-width cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src={commercialSectionImage}
          alt={commercialSectionAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
      </div>

      <div className="relative z-10 section-padding py-22 md:py-30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">Commercial Services</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-4xl text-section text-bone-50 text-balance text-shadow-cinematic">
              Security for High-Activity Commercial Environments
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-200 md:text-lg">
              {commercialService.description}
            </p>
          </Reveal>

          {/* Environment strip */}
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {environments.map((env, i) => (
              <Reveal key={env.label} delay={i * 100}>
                <Link href={commercialService.href} className="group block relative overflow-hidden">
                  <div className="relative h-48 overflow-hidden md:h-64">
                    <img
                      src={env.image}
                      alt={env.label}
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent transition-opacity duration-500 group-hover:from-navy-950/95" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-semibold text-bone-50 transition-transform duration-500 group-hover:-translate-y-1 md:text-base">
                      {env.label}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="uppercase tracking-wider">Learn More</span>
                      <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <Link
              href={commercialService.href}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone-50 link-underline"
            >
              Explore Commercial Services
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
