'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICES } from '@/data/site';
export function Header() {
  const [open, setOpen] = useState(false); const close = () => setOpen(false);
  const nl = 'text-sm text-paper/85 transition-colors hover:text-brass';
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/80 text-paper backdrop-blur-lg">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" onClick={close} className="font-serif text-2xl leading-none sm:text-3xl">Kalycor <span className="text-brass">Services</span></Link>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          <Link href="/" className={nl}>Home</Link>
          <div className="group relative"><Link href="/our-services" className={`${nl} flex items-center gap-1 py-6`}>Services <ChevronDown size={14} /></Link>
            <ul className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 border border-paper/10 bg-ink p-2 opacity-0 shadow-2xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {SERVICES.map((s) => <li key={s.slug}><Link href={`/${s.slug}`} className="block px-4 py-3 text-sm text-paper/85 hover:bg-navy hover:text-brass">{s.title}</Link></li>)}</ul></div>
          <Link href="/industries-we-serve" className={nl}>Industries</Link><Link href="/about-us" className={nl}>About</Link><Link href="/contact-us" className={nl}>Contact</Link>
          <Link href="/contact-us" className="bg-brass px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper">Request a Consultation</Link></nav>
        <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      <div className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-ink transition-transform duration-500 lg:hidden ${open ? 'translate-y-0' : '-translate-y-[120%]'}`} aria-hidden={!open} inert={!open}>
        <ul className="space-y-1 p-6 font-serif text-3xl">
          <li><Link onClick={close} href="/" className="block py-2">Home</Link></li>
          <li><Link onClick={close} href="/our-services" className="block py-2">Services</Link>
            <ul className="mb-2 border-l border-brass/50 pl-5 font-sans text-base text-paper/80">{SERVICES.map((s) => <li key={s.slug}><Link onClick={close} href={`/${s.slug}`} className="block py-2.5">{s.title}</Link></li>)}</ul></li>
          <li><Link onClick={close} href="/industries-we-serve" className="block py-2">Industries</Link></li><li><Link onClick={close} href="/about-us" className="block py-2">About</Link></li><li><Link onClick={close} href="/contact-us" className="block py-2">Contact</Link></li></ul>
        <div className="px-6 pb-10"><Link onClick={close} href="/contact-us" className="block bg-brass py-4 text-center font-semibold text-ink">Request a Consultation</Link></div></div>
    </header>);
}
