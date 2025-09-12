"use client";
import React, { useState } from "react";

export default function Contact() {
  const EMAIL = "krishnakr.email@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // noop
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white text-slate-900 scroll-mt-16">
       <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="text-orange-500">Touch</span> 
        </h2>
           <p className="mt-2 text-slate-600 max-w-xl mx-auto">
             Prefer email for everything. I typically respond within 24–48 hours.
           </p>
         </div>

         {/* Card with gradient border */}
         <div className="mx-auto max-w-2xl">
           <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-300 via-amber-300 to-sky-300 shadow-lg">
             <div className="rounded-2xl bg-white p-6 md:p-8">
               <div className="flex flex-col items-center text-center">
                 <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 ring-1 ring-orange-200 px-3 py-1 text-xs font-semibold">
                   <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                   Available for roles & collaborations
                 </div>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-5 inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-slate-900 hover:text-orange-600"
                  aria-label={`Email ${EMAIL}`}
                >
                  {EMAIL}
                </a>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-600 px-4 py-2 rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                  >
                    Email me
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </a>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 ring-1 ring-slate-200 px-4 py-2 rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                    aria-live="polite"
                  >
                    {copied ? (
                      <>
                        Copied
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Copy email
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <rect x="3" y="3" width="13" height="13" rx="2" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Based in India • IST (UTC+5:30)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}