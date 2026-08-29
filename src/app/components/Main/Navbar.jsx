"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "CFP / Tracks", href: "#tracks" },
    { name: "Important Dates", href: "#dates" },
    { name: "Committee", href: "/committee" },
    { name: "Contact", href: "/contact" },
  ];

  const authorLinks = [
    {
      name: "Author Guidelines",
      href: "/author-guidelines",
    },
    {
      name: "Submission Guidelines",
      href: "/submission-guidelines",
    },
    {
      name: "How to Submit",
      href: "/how-to-submit",
    },
    {
      name: "Where to Submit",
      href: "/where-to-submit",
    },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsAuthorsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/60 bg-slate-950/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2"
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

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            {/* AUTHORS DROPDOWN - DESKTOP */}
            <div className="group relative">

              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                Authors

                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="invisible absolute right-0 top-full mt-2 w-64 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                {authorLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 transition hover:bg-slate-800"
                  >
                    <span className="block text-sm font-semibold text-white">
                      {link.name}
                    </span>

                    <span className="mt-1 block text-xs text-slate-500">
                      {getDescription(link.name)}
                    </span>
                  </Link>
                ))}

              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <Link
              href="/where-to-submit"
              className="ml-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Submit Paper →
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[90vh] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

          {/* NORMAL LINKS */}
          <div className="space-y-1">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            {/* AUTHORS ACCORDION */}
            <div className="rounded-xl bg-slate-900/60">

              <button
                type="button"
                onClick={() => setIsAuthorsOpen(!isAuthorsOpen)}
                aria-expanded={isAuthorsOpen}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                <span>Authors</span>

                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isAuthorsOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* AUTHOR LINKS */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isAuthorsOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 px-2 pb-2">

                  {authorLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
                    >
                      <span>{link.name}</span>

                      <span className="text-slate-600">
                        →
                      </span>
                    </Link>
                  ))}

                </div>
              </div>

            </div>

            {/* MOBILE SUBMIT BUTTON */}
            <Link
              href="/where-to-submit"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Submit Paper →
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}


/* Small helper for dropdown descriptions */
function getDescription(name) {
  switch (name) {
    case "Author Guidelines":
      return "General requirements for authors";

    case "Submission Guidelines":
      return "Manuscript preparation requirements";

    case "How to Submit":
      return "Step-by-step CMT submission process";

    case "Where to Submit":
      return "Official CMT submission information";

    default:
      return "";
  }
}