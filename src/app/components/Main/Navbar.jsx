"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "CFP / Tracks", href: "#tracks" },
  { name: "Important Dates", href: "#dates" },
  { name: "Committee", href: "/committee" },
  { name: "Contact", href: "/contact" },
];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >


            <div className="flex flex-col h-auto w-auto">

              <Image
                src="/qgocon_logo_home.png"
                alt="QGOCON Logo"
                width={200}
                height={200}
                className="w-32"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-cyan-300" >
                {link.name}

                {/* Hover underline */}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </div>

            <div className="relative group">
  <button
    type="button"
    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-cyan-400"
  >
    Authors
    <svg
      className="h-4 w-4 transition-transform group-hover:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  <div className="invisible absolute right-0 top-full mt-2 w-64 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
    
    <Link
      href="/author-guidelines"
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
    >
      <span className="font-semibold text-white">
        Author Guidelines
      </span>
      <span className="mt-1 block text-xs text-slate-500">
        General requirements for authors
      </span>
    </Link>

    <Link
      href="/submission-guidelines"
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
    >
      <span className="font-semibold text-white">
        Submission Guidelines
      </span>
      <span className="mt-1 block text-xs text-slate-500">
        Manuscript preparation requirements
      </span>
    </Link>

    <Link
      href="/how-to-submit"
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
    >
      <span className="font-semibold text-white">
        How to Submit
      </span>
      <span className="mt-1 block text-xs text-slate-500">
        Step-by-step CMT submission process
      </span>
    </Link>

    <Link
      href="/where-to-submit"
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
    >
      <span className="font-semibold text-white">
        Where to Submit
      </span>
      <span className="mt-1 block text-xs text-slate-500">
        Official CMT submission link
      </span>
    </Link>

  </div>
</div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/where-to-submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Register
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 lg:hidden"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-slate-950/98 transition-all duration-300 lg:hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-cyan-300"
              >
                <span>{link.name}</span>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="#registration"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Register for QGOCON
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}