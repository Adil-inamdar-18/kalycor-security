'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Photo } from './Photo';
import { Btn } from './ui';
import { SERVICES } from '@/data/site';
export function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 700], [0, 100]);
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink text-paper">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-10 bottom-0 -z-10"><Photo k="hero" alt="Commercial building lit at dusk" priority className="h-full w-full" /></motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brass before:h-px before:w-10 before:bg-brass">Kalycor Services</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }} className="max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">Reliable Services for Safer, Better-Managed Environments.</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85">Security, surveillance, commercial and facility services for the places where people work, shop and gather, delivered with professionalism and operational care.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4"><Btn href="/contact-us">Request a Consultation</Btn><Btn href="/our-services" variant="ghost">Explore Services</Btn></motion.div>
      </div>
      <nav aria-label="Services" className="border-t border-paper/20 bg-ink/70 backdrop-blur"><ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">{SERVICES.map((s, i) => <li key={s.slug} className="border-paper/15 max-lg:border-b max-lg:odd:border-r lg:border-r lg:last:border-0"><Link href={`/${s.slug}`} className="flex items-baseline gap-3 px-5 py-5 text-sm transition-colors hover:bg-brass hover:text-ink lg:px-8"><span className="text-xs opacity-60">0{i + 1}</span>{s.title}</Link></li>)}</ul></nav>
    </section>);
}
