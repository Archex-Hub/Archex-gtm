'use client';

import React, { useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Pillar {
  id: string;
  index: string;
  name: string;
  badge: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  vector: string;
  progress: number;
}

const PILLARS: Pillar[] = [
  {
    id: 'direction',
    index: '01',
    name: 'Direction',
    badge: 'MARKET POSITIONING',
    tagline: 'Identifying market white space & defining high-conviction positioning.',
    metrics: [
      { label: 'OPPORTUNITY INDEX', value: '0.94 // PRIME' },
      { label: 'MARKET FIT SCORE', value: '96.2%' },
    ],
    vector: '28° NNE',
    progress: 42,
  },
  {
    id: 'ignition',
    index: '02',
    name: 'Ignition',
    badge: 'SIGNAL RESONANCE',
    tagline: 'Carrying unmistakable brand distinction to pierce through market noise.',
    metrics: [
      { label: 'SIGNAL COHERENCE', value: 'OPTIMAL' },
      { label: 'INITIAL REACH', value: '4.8X VELOCITY' },
    ],
    vector: '54° ENE',
    progress: 68,
  },
  {
    id: 'velocity',
    index: '03',
    name: 'Velocity',
    badge: 'LAUNCH TRACTION',
    tagline: 'Coordinating narrative, timing, and multi-channel demand engines.',
    metrics: [
      { label: 'TRACTION MOMENTUM', value: '+88.4%' },
      { label: 'ACQUISITION DRAG', value: 'MINIMAL' },
    ],
    vector: '78° E',
    progress: 86,
  },
  {
    id: 'trajectory',
    index: '04',
    name: 'Trajectory',
    badge: 'EXPANSION ENGINE',
    tagline: 'Sustained compounding adoption, revenue acceleration and category authority.',
    metrics: [
      { label: 'COMPOUND VECTOR', value: 'EXPONENTIAL' },
      { label: 'MARKET MULTIPLIER', value: '12.4X' },
    ],
    vector: '112° SE',
    progress: 98,
  },
];

export default function KineticSignalField() {
  const [activePillar, setActivePillar] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || e.pointerType === 'touch' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handlePointerLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const currentPillar = PILLARS[activePillar];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center select-none overflow-hidden rounded-2xl border border-onyx-border bg-gradient-to-b from-[#0B0F17]/90 via-[#080B10]/95 to-[#06080C] p-4 sm:p-8 shadow-2xl shadow-black/80"
      aria-label="Archex GTM market momentum terminal"
    >
      {/* Precision Technical Radar Grid & Crosshairs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-[16%] top-0 bottom-0 w-px bg-line-dark" />
        <div className="absolute right-[16%] top-0 bottom-0 w-px bg-line-dark" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-line-dark" />
        <div className="absolute bottom-[20%] left-0 right-0 h-px bg-line-dark" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-line-dark/50 border-dashed" />
        <div className="absolute top-[50%] left-0 right-0 h-px bg-line-dark/50 border-dashed" />
      </div>

      {/* Amber Atmospheric Glow Core */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full bg-gtm-amber/10 blur-[80px] pointer-events-none"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />

      {/* Top Coordinate & Telemetry Header */}
          <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between text-[9.5px] font-mono tracking-[0.16em] uppercase text-graphite-light">
            <span className="flex items-center gap-1.5 text-titanium">
              <span className="text-gtm-amber font-bold">+</span> GTM.RADAR // COORD [48.12°]
            </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-gtm-amber font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-gtm-amber animate-ping" />
                [MARKET TELEMETRY ACTIVE]
              </span>
              <span className="text-titanium">VECTOR // {currentPillar.vector}</span>
          </div>

          {/* SVG Market Launch & Acceleration Trajectory */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 680 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
                <linearGradient id="gtmAmberPath" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#FFF2D6" stopOpacity="0.95" />
                </linearGradient>

                  <radialGradient id="nodeAmberGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFA928" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Circular Radar Grids */}
                <circle
                  cx="340"
                  cy="270"
                  r="200"
                  stroke="#1C2536"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="opacity-60"
                />
                <circle
                  cx="340"
                  cy="270"
                  r="140"
                  stroke="#263348"
                  strokeWidth="1"
                  strokeDasharray="2 6"
                  className="opacity-40"
                />

                {/* Diagonal Expansion Axis */}
                <line
                  x1="70"
                  y1="470"
                  x2="610"
                  y2="70"
                  stroke="#1F2A3D"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                />

                {/* Market Launch Curve (Ascending Velocity Vector) */}
                <path
                  d="M 50 460 C 170 440, 230 290, 350 250 S 510 150, 630 60"
                  stroke="url(#gtmAmberPath)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Animated Dashed Velocity Streamer */}
                <path
                  d="M 50 460 C 170 440, 230 290, 350 250 S 510 150, 630 60"
                  stroke="#FFF2D6"
                  strokeWidth="1.5"
                  className="animate-signal-dash opacity-70"
                />

                {/* Station 01: Direction */}
                <g className="transition-all duration-300">
                  <circle
                    cx="130"
                    cy="440"
                    r={activePillar === 0 ? '16' : '9'}
                    fill="url(#nodeAmberGlow)"
                    className={activePillar === 0 ? 'opacity-100' : 'opacity-25'}
                  />
                  <circle
                    cx="130"
                    cy="440"
                    r="4.5"
                    fill={activePillar === 0 ? '#FFF2D6' : '#D97706'}
                  />
                  <text
                    x="130"
                    y="468"
                    fill={activePillar === 0 ? '#FFF2D6' : '#8A92A2'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    letterSpacing="0.12em"
                  >
                    01: DIRECTION
                  </text>
                </g>

                {/* Station 02: Ignition */}
                <g className="transition-all duration-300">
                  <circle
                    cx="265"
                    cy="330"
                    r={activePillar === 1 ? '16' : '9'}
                    fill="url(#nodeAmberGlow)"
                    className={activePillar === 1 ? 'opacity-100' : 'opacity-25'}
                  />
                  <circle
                    cx="265"
                    cy="330"
                    r="4.5"
                    fill={activePillar === 1 ? '#FFF2D6' : '#F59E0B'}
                  />
                  <text
                    x="265"
                    y="306"
                    fill={activePillar === 1 ? '#FFF2D6' : '#8A92A2'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    letterSpacing="0.12em"
                  >
                    02: IGNITION
                  </text>
                </g>

                {/* Station 03: Velocity */}
                <g className="transition-all duration-300">
                  <circle
                    cx="435"
                    cy="210"
                    r={activePillar === 2 ? '16' : '9'}
                    fill="url(#nodeAmberGlow)"
                    className={activePillar === 2 ? 'opacity-100' : 'opacity-25'}
                  />
                  <circle
                    cx="435"
                    cy="210"
                    r="4.5"
                    fill={activePillar === 2 ? '#FFF2D6' : '#F59E0B'}
                  />
                  <text
                    x="435"
                    y="186"
                    fill={activePillar === 2 ? '#FFF2D6' : '#8A92A2'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    letterSpacing="0.12em"
                  >
                    03: VELOCITY
                  </text>
                </g>

                {/* Station 04: Trajectory */}
                <g className="transition-all duration-300">
                  <circle
                    cx="585"
                    cy="95"
                    r={activePillar === 3 ? '18' : '10'}
                    fill="url(#nodeAmberGlow)"
                    className={activePillar === 3 ? 'opacity-100' : 'opacity-35'}
                  />
                  <circle
                    cx="585"
                    cy="95"
                    r="5"
                    fill={activePillar === 3 ? '#FFF2D6' : '#FFA928'}
                  />
                  <text
                    x="585"
                    y="70"
                    fill="#FFA928"
                    fontSize="9.5"
                    fontWeight="bold"
                    fontFamily="monospace"
                    textAnchor="middle"
                    letterSpacing="0.14em"
                  >
                    04: TRAJECTORY
                  </text>
                </g>
              </svg>

              {/* Modern High-End GTM Market Telemetry Console Card */}
              <div
                className="relative z-10 w-[94%] max-w-[410px] rounded-xl border border-onyx-border bg-onyx-card/95 backdrop-blur-xl p-5 sm:p-6 text-titanium transition-transform duration-300 ease-out shadow-2xl"
                style={{
                  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(245, 158, 11, 0.25)',
                  transform: prefersReducedMotion
                    ? 'none'
            : `translate(${mousePos.x * -14}px, ${mousePos.y * -14}px)`,
        }}
      >
                  {/* Telemetry Card Header */}
                  <div className="flex items-center justify-between border-b border-line-dark pb-3 text-[10px] font-mono tracking-[0.14em] uppercase">
                    <span className="font-semibold text-gtm-amber flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gtm-amber shadow-sm shadow-gtm-amber/80" />
                      GTM Telemetry Engine
                    </span>
                    <span className="text-graphite-light">PHASE // {currentPillar.index}</span>
                  </div>

                  {/* Telemetry Card Body */}
                  <div className="py-5">
                    <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-[-0.04em] text-titanium leading-none">
                          {currentPillar.name}
                          <span className="text-gtm-amber">.</span>
                        </h3>
                          <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-gtm-amber/90 font-medium bg-gtm-amber/10 px-2 py-0.5 rounded border border-gtm-amber/20">
                            {currentPillar.badge}
                          </span>
                        </div>

                          <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-graphite-light font-normal">
                            {currentPillar.tagline}
                          </p>

                            {/* Dynamic Commercial Metrics HUD */}
                            <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-lg border border-line-dark/80 bg-onyx-surface/80 p-3 text-[10px] font-mono">
                              {currentPillar.metrics.map((m, i) => (
                                <div key={i} className="space-y-0.5">
                                  <span className="text-[8.5px] uppercase tracking-wider text-graphite block">
                                    {m.label}
                                  </span>
                                  <span className="text-titanium font-semibold text-xs">{m.value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Velocity Progress Bars */}
                            <div className="mt-4 space-y-1.5" aria-hidden="true">
                              <div className="flex justify-between text-[9px] font-mono text-graphite uppercase">
                                <span>Velocity Vector</span>
                                <span className="text-gtm-amber font-semibold">{currentPillar.progress}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-line-dark rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 transition-all duration-500 rounded-full"
                                  style={{ width: `${currentPillar.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>

                            {/* Telemetry Card Footer */}
                            <div className="flex items-center justify-between border-t border-line-dark pt-3 text-[10px] font-mono tracking-[0.1em] uppercase text-graphite">
                              <span>Direction → Market Entry</span>
                              <span className="font-semibold text-gtm-amber">Commercial Traction</span>
                            </div>
                          </div>

                            {/* Bottom Stage Switcher (Clean, High-Tech Segmented Bar) */}
                            <div className="absolute bottom-3 left-3 right-3 sm:left-6 sm:right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-line-dark pt-2.5 bg-onyx-soft/90 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none px-2 rounded-lg">
                              <div className="flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto">
                                {PILLARS.map((p, idx) => (
                                  <button
                                    key={p.id}
                                    onClick={() => setActivePillar(idx)}
                                    aria-label={`Select stage ${p.index}: ${p.name}`}
                                    aria-pressed={activePillar === idx}
                                            ? 'bg-gtm-amber text-onyx font-bold shadow-md shadow-gtm-amber/20'
                                            : 'text-graphite-light hover:text-titanium hover:bg-onyx-surface'
                                        }`}
            >
              <span>{p.index}</span> <span>{p.name}</span>
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] uppercase text-graphite-light">
          <span className="h-1.5 w-1.5 rounded-full bg-gtm-amber" />
          <span>Archex Commercial Terminal</span>
        </div>
      </div>
    </div>
  );
}
