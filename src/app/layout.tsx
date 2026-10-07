import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kalycor Services — Security, Surveillance & Facility Services',
  description:
    'Kalycor Services provides professional security personnel, CCTV and surveillance solutions, commercial security, and facility services tailored to the way your site operates.',
  keywords: ['security services', 'CCTV', 'surveillance', 'facility services', 'commercial security', 'access control'],
  openGraph: {
    title: 'Kalycor Services — Security, Surveillance & Facility Services',
    description:
      'Professional security personnel, CCTV and surveillance, commercial security, and facility services.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
