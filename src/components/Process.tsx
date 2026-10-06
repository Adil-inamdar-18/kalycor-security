'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import type { Step } from '@/data/site';
export function Process({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null); const [a, setA] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => setA(Math.min(steps.length - 1, Math.floor(v * steps.length))));
  return (<div className="relative">
    <div className="absolute bottom-4 left-5 top-4 w-px bg-ink/15 md:bottom-auto md:left-0 md:right-0 md:top-5 md:h-px md:w-auto" />
    <motion.div style={{ scaleY: scrollYProgress }} className="absolute bottom-4 left-5 top-4 w-px origin-top bg-brass md:hidden" />
    <motion.div style={{ scaleX: scrollYProgress }} className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-brass md:block" />
    <ol ref={ref} className="relative grid gap-10 md:grid-cols-5 md:gap-6">
      {steps.map((s, i) => (<li key={s.t} className="flex gap-5 md:block">
        <span className={`grid h-10 w-10 shrink-0 place-items-center border bg-paper font-serif text-xl transition-colors duration-500 ${i <= a ? 'border-brass text-brass' : 'border-ink/20 text-ink/40'}`}>{String(i + 1).padStart(2, '0')}</span>
        <div className="md:mt-6"><h3 className="font-serif text-2xl leading-tight">{s.t}</h3><p className="mt-2 text-sm leading-relaxed opacity-70">{s.d}</p></div></li>))}
    </ol></div>);
}
