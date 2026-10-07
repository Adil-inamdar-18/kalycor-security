'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const service = (data.get('service') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name) errs.name = 'Please enter your name';
    if (!email) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email';
    if (!phone) errs.phone = 'Please enter a phone number';
    if (!service) errs.service = 'Please select a service';
    if (!message) errs.message = 'Please tell us about your needs';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="border border-accent/30 bg-navy-900 p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border-2 border-accent">
          <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-bone-50">Message Received</h3>
        <p className="mt-3 text-sm text-steel-400">
          Thank you for reaching out. We'll review your enquiry and respond shortly.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent link-underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full bg-transparent border-b py-3 text-sm text-bone-50 transition-colors duration-300 focus:outline-none placeholder:text-steel-600';
  const borderNormal = 'border-navy-700/60';
  const borderError = 'border-red-500/70';
  const borderFocus = 'focus:border-accent';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel-400">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${inputBase} ${errors.name ? borderError : borderNormal} ${borderFocus}`}
            placeholder="John Smith"
            disabled={state === 'loading'}
          />
          {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel-400">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${inputBase} ${errors.email ? borderError : borderNormal} ${borderFocus}`}
            placeholder="john@company.com"
            disabled={state === 'loading'}
          />
          {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel-400">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`${inputBase} ${errors.phone ? borderError : borderNormal} ${borderFocus}`}
            placeholder="+1 (000) 000-0000"
            disabled={state === 'loading'}
          />
          {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel-400">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            className={`${inputBase} ${errors.service ? borderError : borderNormal} ${borderFocus}`}
            defaultValue=""
            disabled={state === 'loading'}
          >
            <option value="" disabled className="bg-navy-900">
              Select a service
            </option>
            <option value="security" className="bg-navy-900">Security Services</option>
            <option value="cctv" className="bg-navy-900">CCTV & Camera Solutions</option>
            <option value="commercial" className="bg-navy-900">Commercial Services</option>
            <option value="facility" className="bg-navy-900">Facility Services</option>
            <option value="multiple" className="bg-navy-900">Multiple Services</option>
          </select>
          {errors.service && <p className="mt-2 text-xs text-red-400">{errors.service}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel-400">
          Tell Us About Your Site
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputBase} ${errors.message ? borderError : borderNormal} ${borderFocus} resize-none`}
          placeholder="Describe your location, current setup, and what you're looking for..."
          disabled={state === 'loading'}
        />
        {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Error state */}
      {state === 'error' && (
        <div className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="group inline-flex items-center justify-center gap-2.5 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all duration-300 hover:bg-accent-light disabled:opacity-60"
      >
        {state === 'loading' ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <path d="M14 8a6 6 0 00-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Submit Enquiry
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
