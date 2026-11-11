'use client';

import React from 'react';

export default function ComingSoonAnnouncement() {
  return (
    <section
      aria-label="Coming soon announcement"
      className="relative mt-12 sm:mt-16 w-full border-t border-line-dark pt-10 sm:pt-14 pb-8"
    >
        <div className="rounded-2xl border border-onyx-border bg-gradient-to-br from-[#0D121B]/95 via-[#0A0E15]/90 to-[#07090E] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-black/80">
          {/* Subtle decorative dot grid backdrop within the card */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:28px_28px]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Status & Announcement */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              {/* Status indicator */}
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="beacon-pulse absolute inline-flex h-full w-full rounded-full bg-gtm-amber opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gtm-amber" />
                </span>
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gtm-amber">
                    Work in Progress
                  </span>
              </div>

              {/* Main announcement copy */}
                <p className="text-xl sm:text-2xl lg:text-[1.8rem] font-normal leading-snug sm:leading-snug text-titanium font-serif tracking-[-0.02em]">
                  Something thoughtful is in the making.{' '}
                    <span className="text-titanium-soft/90">
                      Archex GTM is currently under development. Stay tuned for its release.
                    </span>
                </p>

                {/* Supporting description */}
                <p className="text-sm sm:text-base leading-relaxed text-graphite-light max-w-2xl font-normal">
                  A new approach to bringing ideas, products and businesses to market.
                </p>
            </div>

            {/* Right Column: Outbound Archex parent brand link */}
              <div className="lg:col-span-4 flex lg:justify-end items-center border-t border-line-dark lg:border-t-0 pt-6 lg:pt-0">
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-graphite">
                      Parent Brand
                    </span>
                      <p className="text-base sm:text-lg text-titanium font-medium">
                        Meanwhile, explore{' '}
                        <a
                          href="https://archexweb.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center font-bold text-titanium hover:text-gtm-amber transition-colors duration-200 underline decoration-gtm-amber/60 hover:decoration-gtm-amber underline-offset-4"
                          aria-label="Explore Archex (opens parent website)"
                        >
                          Archex
                          <span
                            aria-hidden="true"
                            className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 ml-1 text-gtm-amber"
                          >
                            →
                          </span>
                        </a>
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </section>
          );
}
