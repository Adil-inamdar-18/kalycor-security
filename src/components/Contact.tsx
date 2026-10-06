import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { EnquiryForm } from './EnquiryForm';
import { Eyebrow } from './ui';
export function Contact({ preset }: { preset?: string }) {
  const rows = [[Phone, 'Phone', SITE.phone], [Mail, 'Email', SITE.email], [MapPin, 'Location', SITE.location]] as const;
  return (<section id="contact" className="bg-navy py-24 text-paper"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.15fr] lg:px-8">
    <div><Eyebrow dark>Contact</Eyebrow><h2 className="text-5xl leading-[1.05] md:text-6xl">Let’s Talk About Your Site.</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">Tell us about your premises and what you need. We will arrange a conversation and a site assessment, with no obligation.</p>
      <dl className="mt-10 divide-y divide-paper/15 border-y border-paper/15">{rows.map(([I, k, v]) => <div key={k} className="flex items-center gap-4 py-5"><I size={18} className="text-brass" /><dt className="w-20 text-sm text-paper/60">{k}</dt><dd>{v}</dd></div>)}</dl></div>
    <div className="bg-paper p-6 text-ink md:p-10"><EnquiryForm preset={preset} /></div></div></section>);
}
