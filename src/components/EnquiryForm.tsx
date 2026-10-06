'use client';
import { useState } from 'react';
import { ENQUIRY_OPTIONS } from '@/data/site';
export function EnquiryForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const f = 'mt-1.5 w-full border border-ink/25 bg-white px-4 py-3.5 text-base text-ink outline-none transition focus:border-patina focus:ring-2 focus:ring-patina/20';
  if (sent) return <div className="border-l-4 border-brass bg-white p-8"><p className="font-serif text-4xl">Thank you.</p><p className="mt-2 text-ink/75">We have received your request. Our team will contact you shortly.</p></div>;
  // Connect onSubmit to your email/CRM endpoint (e.g. a Next.js route handler).
  return (<form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 text-sm font-medium">
    <div className="grid gap-5 sm:grid-cols-2"><label>Name<input required name="name" autoComplete="name" placeholder="Your full name" className={f} /></label><label>Company<input name="company" autoComplete="organization" placeholder="Organisation or premises" className={f} /></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={f} /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={f} /></label></div>
    <label>Service Required<select name="service" defaultValue={preset ?? ENQUIRY_OPTIONS[0]} className={f}>{ENQUIRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
    <label>Message<textarea name="message" rows={4} placeholder="Type of premises, location and what you need" className={f} /></label>
    <button className="bg-ink px-6 py-4 text-base font-semibold text-paper transition-colors hover:bg-patina">Request a Consultation</button></form>);
}
