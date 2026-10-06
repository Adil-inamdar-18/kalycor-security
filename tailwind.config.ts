import type { Config } from 'tailwindcss';
// Palette: deep navy / charcoal, off-white, muted teal, warm brass.
export default { content: ['./src/**/*.{ts,tsx}'], theme: { extend: {
  colors: { ink: '#0A141C', navy: '#102431', stone: '#E7E3DA', paper: '#F7F5F0', patina: '#2F6B6E', brass: '#C29A52' },
  fontFamily: { serif: ['var(--f-display)', 'Georgia', 'serif'], sans: ['var(--f-sans)', 'system-ui', 'sans-serif'] } } }, plugins: [] } satisfies Config;
