import { Check } from 'lucide-react';
import { Photo } from './Photo';
import { Process } from './Process';
import { Eyebrow } from './ui';
import { Reveal, ImageReveal } from './Reveal';
import { HOW, type Page } from '@/data/site';
const h2 = 'text-4xl leading-[1.08] sm:text-5xl';
const Benefits = ({ list, dark = false }: { list: string[]; dark?: boolean }) => (<ul className="mt-8 space-y-3">{list.map((b) => <li key={b} className="flex gap-3"><Check size={20} className={`mt-0.5 shrink-0 ${dark ? 'text-brass' : 'text-patina'}`} /><span>{b}</span></li>)}</ul>);
const Note = ({ p, dark = false }: { p: Page; dark?: boolean }) => p.note ? <p className={`mt-8 border-l-4 border-brass pl-4 text-sm ${dark ? 'text-paper/75' : 'text-ink/75'}`}>{p.note}</p> : null;
const How = () => (<section className="bg-stone py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Eyebrow>Our Approach</Eyebrow><h2 className={`mb-14 ${h2}`}>How We Work</h2><Process steps={HOW} /></div></section>);

function Security({ p }: { p: Page }) {
  return (<>
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8"><Reveal><Eyebrow>Overview</Eyebrow><h2 className={h2}>{p.introTitle}</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">{p.intro}</p><Benefits list={p.benefits ?? []} /><Note p={p} /></Reveal>
      <ImageReveal><Photo k={p.gallery![0]} alt="Secure commercial lobby" className="aspect-[4/5]" sizes="(min-width:1024px) 45vw, 100vw" /></ImageReveal></section>
    <section className="bg-ink py-24 text-paper"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Eyebrow dark>Capabilities</Eyebrow><h2 className={`mb-14 ${h2}`}>What Our Security Support Covers</h2>
      <ol className="grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">{p.items.map((it, i) => <li key={it.t} className="bg-ink p-8"><span className="font-serif text-4xl text-brass">0{i + 1}</span><h3 className="mt-4 text-2xl">{it.t}</h3><p className="mt-2 text-paper/70">{it.d}</p></li>)}</ol></div></section>
    <How /></>);
}
function Cctv({ p }: { p: Page }) {
  return (<>
    <section className="bg-navy py-24 text-paper"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal className="grid items-end gap-8 lg:grid-cols-2"><div><Eyebrow dark>Overview</Eyebrow><h2 className="text-5xl leading-[1.05] sm:text-6xl">{p.introTitle}</h2></div><p className="max-w-lg text-lg leading-relaxed text-paper/75">{p.intro}</p></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-[1.4fr_1fr]"><Photo k={p.gallery![0]} alt="Surveillance camera on a building" className="aspect-[4/3]" sizes="(min-width:768px) 55vw, 100vw" />
        <div className="grid gap-4"><Photo k={p.gallery![1]} alt="Monitoring room" className="aspect-[16/10]" sizes="(min-width:768px) 40vw, 100vw" /><Photo k={p.gallery![2]} alt="Commercial tower" className="aspect-[16/10]" sizes="(min-width:768px) 40vw, 100vw" /></div></div></div></section>
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.3fr_1fr] lg:px-8"><div><Eyebrow>Capabilities</Eyebrow><ol className="mt-4 divide-y divide-ink/15 border-y border-ink/15">{p.items.map((it, i) => <li key={it.t} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr]"><span className="font-serif text-4xl text-brass">0{i + 1}</span><div><h3 className="text-3xl">{it.t}</h3><p className="mt-2 max-w-md text-ink/70">{it.d}</p></div></li>)}</ol></div>
      <div className="self-center"><h3 className="text-3xl">Why it matters</h3><Benefits list={p.benefits ?? []} /><Note p={p} /></div></section>
    <How /></>);
}
function Commercial({ p }: { p: Page }) {
  return (<>
    <section className="relative isolate overflow-hidden text-paper"><Photo k={p.gallery![0]} alt="Retail interior" className="absolute inset-0 -z-10" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><Reveal className="max-w-2xl"><Eyebrow dark>Overview</Eyebrow><h2 className="text-4xl leading-[1.08] sm:text-5xl md:text-6xl">{p.introTitle}</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85">{p.intro}</p></Reveal></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><Eyebrow>Where we support</Eyebrow><ul className="mt-6 grid gap-6 sm:grid-cols-2">{p.items.map((it, i) => <li key={it.t} className="group"><Photo k={p.gallery![(i % 2) + 1]} alt={it.t} className="aspect-[16/10]" zoom sizes="(min-width:640px) 50vw, 100vw" /><div className="border-b border-ink/15 py-6"><h3 className="text-3xl">{it.t}</h3><p className="mt-2 text-ink/70">{it.d}</p></div></li>)}</ul></section>
    <section className="bg-ink py-20 text-paper"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{(p.benefits ?? []).map((b, i) => <div key={b} className="border-t border-brass pt-5"><span className="font-serif text-3xl text-brass">0{i + 1}</span><p className="mt-3 text-lg">{b}</p></div>)}</div></section>
    <How /></>);
}
function Facility({ p }: { p: Page }) {
  return (<>
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><Reveal className="max-w-3xl"><Eyebrow>Overview</Eyebrow><h2 className={h2}>{p.introTitle}</h2><p className="mt-6 text-lg leading-relaxed text-ink/75">{p.intro}</p></Reveal>
      <div className="mt-20 space-y-24">{p.items.map((it, i) => <div key={it.t} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}><ImageReveal><Photo k={p.gallery![i % 3]} alt={it.t} className="aspect-[4/3]" sizes="(min-width:1024px) 45vw, 100vw" /></ImageReveal>
        <Reveal><span className="font-serif text-5xl text-brass">0{i + 1}</span><h3 className="mt-3 text-4xl">{it.t}</h3><p className="mt-4 max-w-md text-lg text-ink/70">{it.d}</p></Reveal></div>)}</div></section>
    <section className="bg-navy py-20 text-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8"><h2 className={h2}>What you can expect</h2><div><Benefits list={p.benefits ?? []} dark /><Note p={p} dark /></div></div></section>
    <How /></>);
}
export function Detail({ p }: { p: Page }) {
  const L = { security: Security, cctv: Cctv, commercial: Commercial, facility: Facility }[p.layout ?? 'security'];
  return <L p={p} />;
}
