import type { Metadata } from 'next';
import { Fraunces, Public_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE } from '@/data/site';
const serif = Fraunces({ subsets: ['latin'], variable: '--f-display', display: 'swap' });
const sans = Public_Sans({ subsets: ['latin'], variable: '--f-sans', display: 'swap' });
const description = 'Kalycor Services: security services, CCTV and camera solutions, commercial and facility services for retail, commercial buildings and corporate environments.';
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Kalycor Services | Security, CCTV & Facility Services', template: '%s | Kalycor Services' },
  description, openGraph: { title: 'Kalycor Services', description, type: 'website', siteName: SITE.name, url: SITE.url },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:p-3">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /></body></html>);
}
