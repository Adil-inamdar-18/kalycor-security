'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
const ease = [0.2, 0.7, 0.2, 1] as const;
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease }}>{children}</motion.div>;
}
export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}>{children}</motion.div>;
}
