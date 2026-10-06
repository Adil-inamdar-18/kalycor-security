import Link from 'next/link';
import type { ReactNode } from 'react';
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] before:h-px before:w-8 before:bg-current ${dark ? 'text-brass' : 'text-patina'}`}>{children}</p>;
}
const base = 'inline-flex items-center justify-center px-7 py-4 text-sm font-semibold transition-colors';
export function Btn({ href, children, variant = 'solid' }: { href: string; children: ReactNode; variant?: 'solid' | 'ghost' | 'dark' }) {
  const v = { solid: 'bg-brass text-ink hover:bg-paper', ghost: 'border border-paper/60 bg-ink/30 text-paper backdrop-blur-sm hover:bg-paper hover:text-ink', dark: 'bg-ink text-paper hover:bg-patina' }[variant];
  return <Link href={href} className={`${base} ${v}`}>{children}</Link>;
}
