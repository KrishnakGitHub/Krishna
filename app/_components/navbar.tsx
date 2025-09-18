"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const links = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      // { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight with IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [links]);

  const baseLink =
    "relative transition-colors duration-200 px-1 py-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50";

  const desktopLink = (href: string) => {
    const isActive = activeId && `#${activeId}` === href;
    return [
      baseLink,
      isActive
        ? "text-slate-900 after:w-full"
        : "text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full",
      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-500 after:transition-[width] after:duration-300",
    ].join(" ");
  };

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-colors",
        scrolled
          ? "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-slate-200"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          {/* Brand */}
          <Link href="#about" className="text-xl font-bold text-slate-900">
            Krishna
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={desktopLink(link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social CTAs */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/KrishnakGitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 ring-1 ring-slate-200 px-3.5 py-2 rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.05.66-3.7-1.29-3.7-1.29-.5-1.27-1.21-1.61-1.21-1.61-.99-.67.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.66 2.56 1.18 3.18.9.1-.71.38-1.18.68-1.45-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.12-2.95-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.12.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.41 3.02-1.12 3.02-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.75 1.12 2.95 0 4.23-2.56 5.15-5 5.44.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53A10.52 10.52 0 0023.02 11.5C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd" />
                </svg>
                <span className="hidden lg:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-2b2121169/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-2 rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.266 2.372 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.114 20.452H3.556V9h3.558v11.452z" />
                </svg>
                <span className="hidden lg:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile panel */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="pb-4">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={[
                      baseLink,
                      "block w-full text-left px-3 py-2 rounded-md",
                      activeId && `#${activeId}` === link.href
                        ? "bg-white text-slate-900"
                        : "text-slate-700 hover:bg-white",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href="https://github.com/KrishnakGitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 ring-1 ring-slate-200 px-3.5 py-2 rounded-md shadow-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-2b2121169/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-2 rounded-md shadow-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}