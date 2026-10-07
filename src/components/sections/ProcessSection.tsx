import Reveal from '@/components/Reveal';
import { processSteps } from '@/data/site';

export default function ProcessSection() {
  return (
    <section className="bg-navy-950 noise-overlay">
      <div className="section-padding py-22 md:py-30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">Our Process</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-3xl text-section text-bone-50 text-balance">
              How we deploy coverage for your site.
            </h2>
          </Reveal>

          {/* Desktop horizontal timeline */}
          <div className="mt-16 hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-0 right-0 h-px bg-navy-700/50" />
              <div className="absolute top-8 left-0 h-px bg-accent w-1/4" />

              <div className="grid grid-cols-4 gap-6">
                {processSteps.map((step, i) => (
                  <Reveal key={step.step} delay={i * 150} className="relative">
                    {/* Node */}
                    <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center border border-accent/40 bg-navy-950">
                      <span className="text-lg font-bold tabular-nums text-accent">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-bone-50">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="mt-12 md:hidden">
            <div className="relative border-l border-navy-700/50 pl-8 space-y-10">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 100} className="relative">
                  {/* Node */}
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center border border-accent/40 bg-navy-950">
                    <span className="text-sm font-bold tabular-nums text-accent">{step.step}</span>
                  </div>
                  <h3 className="text-base font-semibold text-bone-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
