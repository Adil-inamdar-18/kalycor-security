import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { industries } from '@/data/site';

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-navy-950 noise-overlay">
      <div className="section-padding py-22 md:py-30">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Built for the environments you operate in."
              description="From retail floors to industrial perimeters, our security and facility services adapt to the specific demands of each environment."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.id} delay={i * 100} className="group">
                <Link
                  href={`/industries#${industry.id}`}
                  className="block relative overflow-hidden h-[420px]"
                >
                  {/* Image */}
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-all duration-500 group-hover:from-navy-950/95" />

                  {/* Accent border */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 ease-smooth group-hover:w-full" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-bone-50 transition-transform duration-500 ease-smooth group-hover:-translate-y-1">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-steel-400 opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100">
                      {industry.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="uppercase tracking-wider">View</span>
                      <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
