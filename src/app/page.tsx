import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import { Photo } from '@/components/Photo';
import { ServicePanels } from '@/components/ServicePanels';
import { FacilityList } from '@/components/FacilityList';
import { Eyebrow, Btn } from '@/components/ui';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { getPage } from '@/data/site';
import type { ImgKey } from '@/data/images';
const h2 = 'text-4xl leading-[1.08] sm:text-5xl md:text-6xl';
const why = [
  { t: 'Reliable Presence', d: 'Consistent, dependable service on every shift, so you can focus on running your business.' },
  { t: 'Site-Specific Approach', d: 'Coverage is planned around your premises, your hours and how people move through them.' },
  { t: 'Clear Communication', d: 'You always know what happened on site, through simple, timely reporting and one point of contact.' },
  { t: 'Responsive Support', d: 'When something changes, we listen, follow up and adjust quickly rather than waiting for the next review.' },
];
const cctvPanels: { t: string; d: string; img: ImgKey }[] = [
  { t: 'Camera Systems', d: 'Cameras placed where they matter.', img: 'cctv' }, { t: 'Monitoring', d: 'Footage that is actually watched and reviewed.', img: 'control' }, { t: 'Site Visibility', d: 'A clear picture of entrances and open areas.', img: 'tower' },
];
const sectors = ['Retail', 'Shopping Centres', 'Commercial Buildings', 'Corporate Spaces', 'High-Footfall Sites'];
const oneStop = [['Security', 'Trained personnel and procedures for your site.'], ['Technology', 'Camera and surveillance solutions that support your people.'], ['Commercial Support', 'Operational presence for busy retail and commercial spaces.'], ['Facility Services', 'The everyday upkeep that keeps a property running well.']];
const inds: { t: string; d: string; img: ImgKey }[] = [
  { t: 'Retail', d: 'Large-format and high-footfall stores.', img: 'retail' }, { t: 'Commercial', d: 'Malls and multi-tenant commercial properties.', img: 'tower' },
  { t: 'Corporate', d: 'Offices, campuses and corporate premises.', img: 'office' }, { t: 'Residential / Managed Environments', d: 'Managed properties needing orderly entry and upkeep.', img: 'lobby' },
];
export default function Home() {
  const sec = getPage('security-services')!, com = getPage('commercial-services')!;
  return (<>
    <Hero />
    {/* Introduction */}
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-24 lg:px-8 lg:py-32">
      <ImageReveal className="relative pb-16 pr-10 sm:pr-16"><Photo k="about" alt="Entrance of a commercial building" className="aspect-[4/5]" sizes="(min-width:1024px) 45vw, 100vw" />
        <div className="absolute bottom-0 right-0 w-1/2 border-8 border-paper"><Photo k="lobby" alt="Corporate lobby" className="aspect-[4/3]" sizes="25vw" /></div></ImageReveal>
      <Reveal><Eyebrow>About Kalycor Services</Eyebrow><h2 className={h2}>Services That Keep Your Environment Moving.</h2>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/75">Kalycor Services is the services arm of the Kalycor group. We support commercial environments through security, surveillance, facility and operational services, so the people who use your site can get on with their day.</p>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/65">Each engagement begins with your premises, not a standard package. That is how we keep service dependable, accountable and easy to work with.</p>
        <div className="mt-9"><Btn href="/about-us" variant="dark">Discover Kalycor Services</Btn></div></Reveal></section>
    {/* Services */}
    <section className="bg-ink py-24 text-paper lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><Eyebrow dark>Our Services</Eyebrow><h2 className={h2}>What We Do</h2></div><Link href="/our-services" className="border-b-2 border-brass pb-1 text-sm font-semibold">View all services</Link></Reveal><ServicePanels /></div></section>
    {/* Security */}
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
      <ImageReveal><Photo k="guard" alt="Security officer on duty in a commercial lobby" className="aspect-[4/5] lg:aspect-[5/6]" sizes="(min-width:1024px) 50vw, 100vw" /></ImageReveal>
      <Reveal><Eyebrow>Security Services</Eyebrow><h2 className={h2}>A Visible, Reliable Security Presence</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">{sec.lead} Our teams are briefed on your site and trained to support your people, not just watch the door.</p>
        <ul className="mt-9 grid gap-x-8 sm:grid-cols-2">{sec.items.map((i) => <li key={i.t} className="flex items-center gap-3 border-t border-ink/15 py-4"><Check size={18} className="shrink-0 text-patina" /><span className="font-medium">{i.t}</span></li>)}</ul>
        <div className="mt-9"><Btn href="/security-services" variant="dark">Explore Security Services</Btn></div></Reveal></section>
    {/* CCTV */}
    <section className="bg-navy py-24 text-paper lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="grid items-end gap-8 lg:grid-cols-2"><div><Eyebrow dark>CCTV &amp; Camera Solutions</Eyebrow><h2 className={h2}>See More. Respond Faster.</h2></div>
        <div><p className="max-w-lg text-lg leading-relaxed text-paper/75">Kalycor provides camera and surveillance solutions for commercial environments, planned around your entrances, corridors and open areas, and supported by people who know your site.</p></div></Reveal>
      <ul className="mt-14 grid gap-4 md:grid-cols-3">{cctvPanels.map((p, i) => <li key={p.t} className={i === 0 ? 'md:row-span-1' : ''}><Link href="/cctv-camera-solutions" className="group relative block aspect-[4/5] overflow-hidden"><Photo k={p.img} alt={p.t} className="absolute inset-0" zoom sizes="(min-width:768px) 33vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" /><div className="absolute bottom-0 p-6"><h3 className="text-3xl">{p.t}</h3><p className="mt-1 text-sm text-paper/75">{p.d}</p></div></Link></li>)}</ul>
      <div className="mt-12"><Btn href="/cctv-camera-solutions">Explore CCTV Solutions</Btn></div></div></section>
    {/* Commercial */}
    <section className="relative isolate overflow-hidden text-paper"><Photo k="mall" alt="Shopping centre interior" className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40"><Reveal className="max-w-2xl"><Eyebrow dark>Commercial Services</Eyebrow><h2 className={h2}>Support for High-Activity Commercial Environments</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85">{com.lead}</p>
        <ul className="mt-9 grid gap-x-10 sm:grid-cols-2">{sectors.map((s) => <li key={s} className="border-t border-paper/25 py-3.5 text-lg">{s}</li>)}</ul>
        <div className="mt-10"><Btn href="/commercial-services">Explore Commercial Services</Btn></div></Reveal></div></section>
    {/* Facility */}
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><Reveal className="mb-14 max-w-2xl"><Eyebrow>Facility Services</Eyebrow><h2 className={h2}>Keep Your Facility Running Well.</h2></Reveal><FacilityList />
      <div className="mt-12"><Btn href="/facility-services" variant="dark">Explore Facility Services</Btn></div></section>
    {/* Industries */}
    <section className="bg-stone py-24 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal className="flex flex-wrap items-end justify-between gap-6"><div><Eyebrow>Industries</Eyebrow><h2 className={h2}>Where We Work</h2></div><Link href="/industries-we-serve" className="border-b-2 border-brass pb-1 text-sm font-semibold">All industries</Link></Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{inds.map((i) => <li key={i.t}><Link href="/industries-we-serve" className="group relative block aspect-[3/4] overflow-hidden bg-navy"><Photo k={i.img} alt={i.t} className="absolute inset-0" sizes="(min-width:1024px) 25vw, 50vw" zoom /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-paper"><div><h3 className="text-2xl leading-tight sm:text-3xl">{i.t}</h3><p className="mt-2 text-sm text-paper/80">{i.d}</p></div><ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={22} /></div></Link></li>)}</ul></div></section>
    {/* Why Kalycor */}
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><Reveal className="max-w-3xl"><Eyebrow>Why Kalycor Services</Eyebrow><h2 className={h2}>Built on Trust. Driven by Accountability.</h2></Reveal>
      <ol className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">{why.map((w, i) => <li key={w.t} className="border-t border-ink/20 pt-8"><span className="font-serif text-6xl text-brass md:text-7xl">0{i + 1}</span><h3 className="mt-4 text-3xl">{w.t}</h3><p className="mt-3 max-w-md leading-relaxed text-ink/70">{w.d}</p></li>)}</ol></section>
    {/* Differentiation */}
    <section className="bg-ink py-24 text-paper lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-8"><Reveal><Eyebrow dark>Why Clients Choose Us</Eyebrow><h2 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">One Partner.<br /><span className="text-brass">Multiple Operational Needs.</span></h2>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/75">Instead of coordinating separate vendors for guarding, cameras and facility upkeep, you can work with one team under one coordinated service approach, with one point of contact and a single standard of accountability.</p></Reveal>
      <ul className="divide-y divide-paper/15 border-y border-paper/15 self-center">{oneStop.map(([t, d]) => <li key={t} className="grid gap-1 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6"><h3 className="text-2xl">{t}</h3><p className="text-paper/70">{d}</p></li>)}</ul></div></section>
    {/* CTA */}
    <section className="relative isolate overflow-hidden text-paper"><Photo k="cta" alt="Commercial building at dusk" className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/55" />
      <div className="mx-auto max-w-7xl px-5 py-28 text-center lg:px-8 lg:py-40"><Reveal><h2 className="mx-auto max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-7xl">Let’s Build a Safer, Better-Managed Environment.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/80">Tell us about your site and we will arrange a conversation about the right coverage.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4"><Btn href="/contact-us">Request a Consultation</Btn><Btn href="/our-services" variant="ghost">Explore Services</Btn></div></Reveal></div></section>
    <Contact />
  </>);
}
