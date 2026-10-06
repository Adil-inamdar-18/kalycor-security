import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { PAGES, SERVICES, getPage, SITE } from '@/data/site';
import { Contact } from '@/components/Contact';
import { Detail } from '@/components/DetailLayouts';
import { Photo } from '@/components/Photo';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Eyebrow, Btn } from '@/components/ui';
import { Reveal, ImageReveal } from '@/components/Reveal';
export const generateStaticParams = () => PAGES.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPage((await params).slug); if (!p) return {};
  return { title: p.title, description: p.lead, openGraph: { title: `${p.title} | Kalycor Services`, description: p.lead }, alternates: { canonical: `/${p.slug}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPage((await params).slug); if (!p) notFound();
  const preset = p.variant === 'detail' ? SERVICES.find((s) => s.slug === p.slug)?.title : undefined;
  return (<>
    <section className="relative isolate flex min-h-[56vh] items-end overflow-hidden text-paper md:min-h-[64vh]"><Photo k={p.img} alt={p.title} priority className="absolute inset-0 -z-10" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/40" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-32 lg:px-8"><Eyebrow dark>{p.kicker}</Eyebrow><h1 className="max-w-4xl text-5xl leading-[1.04] md:text-7xl">{p.title}</h1><p className="mt-5 max-w-xl text-lg text-paper/85">{p.lead}</p>
        {p.variant === 'detail' && <div className="mt-8"><Btn href="#contact">Request a Consultation</Btn></div>}</div></section>

    {p.variant === 'hub' && <section className="mx-auto max-w-7xl space-y-24 px-5 py-24 lg:px-8">{SERVICES.map((s, i) => (<div key={s.slug} className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <ImageReveal><Photo k={s.img} alt={s.title} className="aspect-[4/3]" sizes="(min-width:768px) 50vw, 100vw" /></ImageReveal><Reveal><span className="font-serif text-5xl text-brass">0{i + 1}</span><h2 className="mt-2 text-4xl md:text-5xl">{s.title}</h2><p className="mt-4 max-w-md text-lg text-ink/70">{s.d}</p><Link href={`/${s.slug}`} className="mt-7 inline-flex items-center gap-2 border-b-2 border-brass pb-1 font-semibold">Learn more<ArrowUpRight size={16} /></Link></Reveal></div>))}</section>}

    {p.variant === 'detail' && <Detail p={p} />}

    {p.variant === 'industries' && <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:grid-cols-2 lg:px-8">{p.items.map((it) => (<div key={it.t} className="group"><ImageReveal><Photo k={it.img!} alt={it.t} className="aspect-[16/10]" zoom sizes="(min-width:640px) 50vw, 100vw" /></ImageReveal><div className="border-b border-ink/15 py-5"><h2 className="text-3xl md:text-4xl">{it.t}</h2><p className="mt-1 text-ink/70">{it.d}</p></div></div>))}</section>}

    {p.variant === 'about' && <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.4fr_1fr] lg:px-8"><ol className="divide-y divide-ink/15 border-y border-ink/15">{p.items.map((it, i) => <li key={it.t} className="grid gap-3 py-9 md:grid-cols-[5rem_1fr_1.3fr]"><span className="font-serif text-5xl text-brass">0{i + 1}</span><h2 className="text-3xl">{it.t}</h2><p className="text-ink/70">{it.d}</p></li>)}</ol>
      <ImageReveal><Photo k={p.side ?? 'lobby'} alt="Corporate lobby" className="aspect-[4/5]" sizes="(min-width:1024px) 35vw, 100vw" /></ImageReveal></section>}

    {p.variant === 'text' && <section className="mx-auto max-w-3xl px-5 py-20">{p.items.map((it) => <div key={it.t} className="mb-10"><h2 className="text-3xl">{it.t}</h2><p className="mt-2 text-ink/75">{it.d}</p></div>)}</section>}

    {p.variant === 'contact' ? <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8"><div><Eyebrow>Get in touch</Eyebrow><h2 className="text-4xl md:text-5xl">Let’s Talk About Your Site.</h2><p className="mt-5 text-lg leading-relaxed text-ink/70">{SITE.phone}<br />{SITE.email}<br />{SITE.location}</p></div><EnquiryForm /></section>
      : p.variant !== 'text' && <Contact preset={preset} />}
  </>);
}
