import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { BUSINESSES, SERVICES, SITE } from '@/data/site';
const icons = { LinkedIn: Linkedin, Instagram, Facebook } as const;
const h = 'mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brass';
const link = 'transition-colors hover:text-brass';
export function Footer() {
  const nav = [['Services', '/our-services'], ['Industries', '/industries-we-serve'], ['About', '/about-us'], ['Contact', '/contact-us']];
  const short = ['Security', 'CCTV', 'Commercial', 'Facility'];
  return (<footer className="bg-ink text-paper/70">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_1.3fr] lg:px-8">
      <div><p className="font-serif text-3xl text-paper">Kalycor Services</p><p className="mt-4 max-w-xs text-sm leading-relaxed">Security, surveillance, commercial and facility services for retail, commercial buildings and corporate environments.</p>
        <ul className="mt-6 flex gap-3">{SITE.social.map((s) => { const I = icons[s.label as keyof typeof icons]; return <li key={s.label}><a href={s.href} aria-label={s.label} className="grid h-10 w-10 place-items-center border border-paper/25 transition-colors hover:border-brass hover:text-brass"><I size={16} /></a></li>; })}</ul></div>
      <div><p className={h}>Navigate</p><ul className="space-y-3 text-sm">{nav.map(([l, href]) => <li key={l}><Link href={href} className={link}>{l}</Link></li>)}</ul></div>
      <div><p className={h}>Services</p><ul className="space-y-3 text-sm">{SERVICES.map((s, i) => <li key={s.slug}><Link href={`/${s.slug}`} className={link}>{short[i]}</Link></li>)}</ul></div>
      <div><p className={h}>Our Businesses</p><ul className="space-y-3 text-sm">{BUSINESSES.map((b) => <li key={b.name}><a href={b.href} className={link}>{b.name}</a></li>)}</ul></div>
      <div className="text-sm"><p className={h}>Contact</p><p>{SITE.phone}</p><p className="mt-3 break-all">{SITE.email}</p><p className="mt-3">{SITE.location}</p></div></div>
    <div className="border-t border-paper/10 px-5 py-6 text-xs lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3"><p>© 2026 Kalycor. All rights reserved.</p>
      <p className="flex gap-6"><Link href="/privacy-policy" className={link}>Privacy Policy</Link><Link href="/terms-and-conditions" className={link}>Terms &amp; Conditions</Link></p></div></div></footer>);
}
