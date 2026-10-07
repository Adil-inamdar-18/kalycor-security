import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/data/site';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-navy-950">
        <div className="absolute inset-0 z-0 grid-overlay opacity-30" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-900 to-navy-950" />

        <div className="relative z-10 flex min-h-[50vh] flex-col justify-end section-padding pb-16 pt-32">
          <div className="container-wide">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
            </div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow-accent">Get In Touch</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero text-bone-50 text-balance">
                Request a Security Assessment.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-400 md:text-lg">
                Tell us about your site and what you need. We'll assess your requirements and propose coverage that fits.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-navy-950 noise-overlay">
        <div className="section-padding py-22 md:py-30">
          <div className="container-wide">
            <div className="grid gap-12 lg:gap-20 lg:grid-cols-12">
              {/* Form */}
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="text-subsection text-bone-50 mb-8">
                    Send us your enquiry.
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <ContactForm />
                </Reveal>
              </div>

              {/* Info sidebar */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="sticky top-32 space-y-8">
                  <Reveal>
                    <div className="border border-navy-700/40 bg-navy-900 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                        Direct Contact
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-steel-600 mb-1">Email</div>
                          <div className="text-sm text-bone-50">{siteConfig.email}</div>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-steel-600 mb-1">Phone</div>
                          <div className="text-sm text-bone-50">{siteConfig.phone}</div>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={100}>
                    <div className="border border-navy-700/40 bg-navy-900 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                        What to Expect
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'Site assessment discussion',
                          'Coverage proposal tailored to your needs',
                          'Personnel and system recommendations',
                          'Timeline and deployment plan',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-steel-400">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
