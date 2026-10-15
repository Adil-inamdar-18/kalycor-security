import Link from "next/link";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-700/40 bg-navy-950 noise-overlay">
      <div className="section-padding py-16 md:py-20">
        <div className="container-wide">
          {/* Top section */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                aria-label="Kalycor Services home"
              >
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                  <Image
                    src="/images/new-logo.png"
                    alt="Kalycor logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain brightness-0 invert"
                  />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-base font-bold tracking-tight text-bone-50">
                    KALYCOR
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-steel-400">
                    Security
                  </span>
                </div>
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-400">
                {siteConfig.description}
              </p>
              <div className="mt-6 flex gap-4">
                {siteConfig.social.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-xs uppercase tracking-wider text-steel-400 transition-colors hover:text-accent"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-steel-400 transition-colors hover:text-bone-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Industries
              </h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-steel-400 transition-colors hover:text-bone-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Company
              </h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-steel-400 transition-colors hover:text-bone-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="link-underline text-sm text-steel-400 transition-colors hover:text-bone-50"
                  >
                    Request Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-4 border-t border-navy-700/40 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-steel-600">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {siteConfig.footerLinks.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-steel-600 transition-colors hover:text-steel-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
