"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { label: "Job discovery", href: "/jobs" },
    { label: "Worker AI", href: "/ai" },
    { label: "Companies", href: "/companies" },
    { label: "Salary data", href: "/salary" },
  ],
  navigation: [
    { label: "Help center", href: "/help" },
    { label: "Career library", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Brand Guideline", href: "/brand" },
    { label: "Newsroom", href: "/newsroom" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2a10 10 0 0 0-3.7 19.3c-.1-.8-.2-2 .1-2.9l1.5-6.3s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.8.9 1.8 2 0 1.2-.8 3.1-1.2 4.8-.3 1.4.7 2.6 2.1 2.6 2.5 0 4.4-2.6 4.4-6.3 0-3.3-2.4-5.6-5.8-5.6-4 0-6.4 3-6.4 6.1 0 1.2.5 2.5 1.1 3.2.1.1.1.2.1.3l-.4 1.5c-.1.5-.3.6-.7.4-1.3-.6-2.1-2.5-2.1-4 0-4.2 3.1-8.1 8.9-8.1 4.7 0 8.3 3.3 8.3 7.7 0 4.6-2.9 8.3-6.9 8.3-1.3 0-2.5-.7-2.9-1.5l-.8 3c-.3 1-.9 2.3-1.4 3.1A10 10 0 1 0 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1s2.48 1.1 2.48 2.5zM0 24h5V7H0v17zm7.5 0h5v-9.2c0-2.2.4-4.3 3.1-4.3s2.9 2.4 2.9 4.5V24h5V13c0-5.3-2.8-7.8-6.6-7.8-3 0-4.3 1.7-5 2.9h.1V7H7.5v17z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        {/* TOP SECTION */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="HireLoop"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">HireLoop</span>
            </Link>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-white/80">Product</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold text-white/80">Navigations</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-white/80">Resources</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          
          {/* SOCIALS */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-2 text-xs text-white/50 md:flex-row md:gap-6">
            <span>Copyright © 2024 - Programming Hero</span>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white transition">
                Terms & Policy
              </Link>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
