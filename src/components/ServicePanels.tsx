import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/site';
import { Photo } from './Photo';
export function ServicePanels() {
  return (<ul className="grid gap-4 md:grid-cols-2">{SERVICES.map((s, i) => (<li key={s.slug}>
    <Link href={`/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-navy sm:aspect-[16/11]">
      <Photo k={s.img} alt={s.title} className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:-translate-y-2 group-hover:scale-110" sizes="(min-width:768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15 transition-colors duration-500 group-hover:from-ink/95" />
      <span className="absolute left-7 top-6 font-serif text-5xl text-brass">0{i + 1}</span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-paper">
        <div><h3 className="text-3xl leading-tight sm:text-4xl">{s.title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/80">{s.d}</p></div>
        <span className="grid h-12 w-12 shrink-0 place-items-center border border-paper/50 transition-colors group-hover:border-brass group-hover:bg-brass group-hover:text-ink"><ArrowUpRight size={20} /></span></div>
    </Link></li>))}</ul>);
}
