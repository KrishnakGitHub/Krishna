import Image from 'next/image';
import React from 'react';
import Typing from './Typing';

export default function About() {
  const words = ["AI Research Engineer", "Full Stack Developer"];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Soft gradient blob */}
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-orange-300 via-amber-200 to-sky-200" />
        <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-300 via-emerald-200 to-orange-200" />
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-600" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur ring-1 ring-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          Open to opportunities
        </div>

        <h3 className="text-4xl">👋</h3>
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Hi! I&apos;m <span className="text-orange-600">Krishna</span>
        </h1>
        <h3 className="mt-3 text-lg md:text-2xl text-slate-700">
          <Typing words={words} />
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          I design and build intelligent, scalable products across AI/ML and full-stack systems.
          Focused on clarity, performance, and delightful user experiences.
        </p>

        {/* Actions */}
        {/* <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-600 px-4 py-2 rounded-md shadow-sm ring-1 ring-orange-600/10"
          >
            View Resume
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 px-4 py-2 rounded-md shadow-sm ring-1 ring-slate-200"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 5v10M12 15l-3-3M12 15l3-3M5 19h14" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}