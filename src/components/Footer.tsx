import React from 'react';

export default function Footer() {
  return (
      <footer className="mt-auto border-t border-line-dark bg-onyx-card/60 py-8 text-xs text-graphite">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          {/* Wordmark & Lineage */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="/"
              aria-label="Archex GTM home"
              className="inline-flex items-center text-sm font-semibold tracking-[-0.04em] text-titanium transition-opacity hover:opacity-85"
            >
              <span>archex</span>
              <span className="mx-[2px] text-gtm-amber font-normal">—</span>
              <span>gtm</span>
            </a>

            <span className="hidden h-3 w-px bg-line-dark sm:inline-block" aria-hidden="true" />

              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-graphite-muted">
                An Archex Practice · Commercial Architecture
              </span>
          </div>

          {/* Navigation & Parent Link */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-[11px] font-mono tracking-wider">
            <a
              href="https://archexweb.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gtm-amber transition-colors duration-200 underline decoration-line-dark hover:decoration-gtm-amber underline-offset-4 text-titanium/90"
            >
              archexweb.in ↗
            </a>
            <span className="text-line-dark" aria-hidden="true">·</span>
            <span className="text-graphite-muted">© {new Date().getFullYear()} Archex GTM</span>
          </div>
        </div>
      </footer>
      );
}
