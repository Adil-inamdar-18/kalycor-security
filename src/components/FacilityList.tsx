'use client';
import { useState } from 'react';
import { Photo } from './Photo';
import type { ImgKey } from '@/data/images';
const ROWS: { t: string; d: string; img: ImgKey }[] = [
  { t: 'Facility Support', d: 'Day-to-day support so your property stays orderly and ready for use.', img: 'facility' },
  { t: 'Housekeeping', d: 'Regular cleaning programmes for common and working areas.', img: 'office' },
  { t: 'Maintenance Coordination', d: 'Repairs and upkeep organised, scheduled and followed through.', img: 'facility' },
  { t: 'Operational Assistance', d: 'Extra hands and practical help where your operations need it.', img: 'lobby' },
  { t: 'Site Upkeep', d: 'Entrances, common areas and grounds kept presentable.', img: 'office' },
  { t: 'Support Services', d: 'Reception and supporting roles that keep the front of house running.', img: 'lobby' },
];
const KEYS: ImgKey[] = ['facility', 'office', 'lobby'];
export function FacilityList() {
  const [a, setA] = useState(0);
  return (<div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
    <div className="relative aspect-[4/5] overflow-hidden bg-navy lg:sticky lg:top-28">
      {KEYS.map((k) => <Photo key={k} k={k} alt="Facility services at work" sizes="(min-width:1024px) 45vw, 100vw" className={`absolute inset-0 transition-opacity duration-700 ${ROWS[a].img === k ? 'opacity-100' : 'opacity-0'}`} />)}
      <span className="absolute bottom-0 left-0 h-1 w-24 bg-brass" /></div>
    <ul className="divide-y divide-ink/15 border-y border-ink/15">{ROWS.map((r, i) => (
      <li key={r.t} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} tabIndex={0} className="group grid cursor-default gap-1 py-6 outline-none transition-[padding] duration-300 hover:pl-4 focus-visible:pl-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
        <span className={`font-serif text-2xl transition-colors ${a === i ? 'text-brass' : 'text-ink/30'}`}>0{i + 1}</span>
        <div><h3 className="text-2xl sm:text-3xl">{r.t}</h3><p className="mt-1 max-w-md text-ink/70">{r.d}</p></div></li>))}</ul></div>);
}
