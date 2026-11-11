'use client';

import React from 'react';
import KineticSignalField from './KineticSignalField';
import ComingSoonAnnouncement from './ComingSoonAnnouncement';

export default function Hero() {
  return (
    <section
      id="main-content"
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden pt-8 pb-16 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Top Eyebrow & System Header Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-dark pb-5 text-[11px] font-mono tracking-[0.16em] uppercase text-graphite">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gtm-amber shadow-sm shadow-gtm-amber/80" />
              <span className="text-gtm-amber font-bold tracking-[0.2em]">A New Archex Practice</span>
            </div>
            <div className="flex items-center gap-4 text-graphite-light">
                <span>Market Acceleration · Signals · Enterprise Velocity</span>
                <span className="hidden sm:inline text-line-dark" aria-hidden="true">
              //
                </span>
                <span className="hidden sm:inline font-mono text-titanium/80">PRACTICE 02</span>
            </div>
          </div>

          {/* Hero Grid: Typography & GTM Acceleration Terminal */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Expressive Headline & Commercial Definition */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8">
              {/* Supporting Subheading */}
                  <div className="inline-flex items-center gap-2.5">
                    <span className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase text-graphite">
                      Practice Lineage
                    </span>
                    <span className="text-line-dark" aria-hidden="true">/</span>
                      <span className="text-xs font-bold tracking-tight text-titanium uppercase font-sans">
                        Archex GTM
                      </span>
                  </div>

                  {/* Main H1 Headline */}
                  <h1
                    id="hero-title"
                    className="font-serif text-[3.4rem] sm:text-[4.8rem] md:text-[5.5rem] lg:text-[5.9rem] xl:text-[6.4rem] leading-[0.88] tracking-[-0.055em] text-titanium"
                  >
                    The next move{' '}
                      <em className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 not-italic inline-block transition-transform duration-300 hover:scale-[1.02] origin-left">
                        is taking shape.
                      </em>
                  </h1>

                  {/* Supporting Description */}
                    <p className="text-base sm:text-lg lg:text-xl text-titanium-soft/85 font-normal leading-relaxed max-w-xl">
                      A new approach to bringing ideas, products and businesses to market.
                    </p>

                    {/* Direct Quick Link to Parent Brand */}
                    <div className="pt-2">
                      <p className="text-sm sm:text-base text-graphite-light">
                        Meanwhile, explore{' '}
                        <a
                          href="https://archexweb.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center font-semibold text-titanium underline decoration-gtm-amber underline-offset-4 decoration-1 hover:text-gtm-amber hover:decoration-2 transition-all duration-200"
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

                      {/* Commercial Highlights / Practice Badges */}
                      <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-line-dark text-[11px] font-mono text-graphite">
                        <div className="space-y-1">
                          <span className="block text-[9.5px] uppercase tracking-wider text-graphite-muted">Focus</span>
                          <span className="text-titanium font-sans font-semibold text-xs">Go-To-Market</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-[9.5px] uppercase tracking-wider text-graphite-muted">Role</span>
                          <span className="text-titanium font-sans font-semibold text-xs">Commercial Engine</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 space-y-1">
                          <span className="block text-[9.5px] uppercase tracking-wider text-graphite-muted">Status</span>
                          <span className="text-gtm-amber font-sans font-bold text-xs">Under Development</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: High-Impact Market Trajectory Terminal */}
                    <div className="lg:col-span-6 xl:col-span-7">
                      <KineticSignalField />
                    </div>
                  </div>

                  {/* Coming Soon Announcement Section */}
                  <ComingSoonAnnouncement />
              </div>
            </section>
            );
}
