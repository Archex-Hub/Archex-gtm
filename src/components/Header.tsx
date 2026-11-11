'use client';

import React from 'react';

export default function Header() {
  return (
        <header className="sticky top-0 z-40 w-full border-b border-line-dark/70 bg-onyx/85 backdrop-blur-md transition-colors duration-200">
          <div className="mx-auto flex h-16 sm:h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
            {/* Brand Wordmark & Lineage */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="/"
                aria-label="Archex GTM home"
                className="group inline-flex items-center text-[1.15rem] sm:text-[1.25rem] font-semibold tracking-[-0.04em] text-titanium transition-opacity hover:opacity-90"
              >
                <span>archex</span>
                  <span className="mx-[2px] text-gtm-amber font-normal transition-transform duration-300 group-hover:scale-125">
                    —
                  </span>
                  <span className="text-titanium">gtm</span>
              </a>

              <div className="hidden h-3.5 w-px bg-line-dark md:block" aria-hidden="true" />

                <span className="hidden items-center text-[10px] font-medium tracking-[0.2em] uppercase text-graphite-light md:inline-flex">
                  An Archex Practice · Commercial Engine
                </span>
            </div>

            {/* Status element */}
            <div className="flex items-center gap-3">
              <div
                className="inline-flex items-center gap-2.5 rounded-full border border-gtm-amber/30 bg-onyx-surface/90 px-3.5 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase text-titanium shadow-sm shadow-gtm-amber/5"
                role="status"
                aria-label="Status: In Development"
              >
                <span className="relative flex h-2 w-2">
                  <span className="beacon-pulse absolute inline-flex h-full w-full rounded-full bg-gtm-amber opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gtm-amber" />
                </span>
                <span className="text-graphite">Status:</span>
                <span className="text-titanium font-semibold">In Development</span>
              </div>
            </div>
          </div>
        </header>
        );
}
