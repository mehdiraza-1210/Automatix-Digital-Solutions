import React from 'react';

export default function BrandLogo({ size = "default", showText = true, className = "" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Abstract Glowing Geometric 'A' Monogram Icon */}
      <div className={`relative flex items-center justify-center rounded-xl bg-navy-900 border border-cyan-500/30 p-2 shadow-glow-cyan transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-glow-blue ${
        isSmall ? 'w-9 h-9' : isLarge ? 'w-14 h-14' : 'w-11 h-11'
      }`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          fill="none"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Outer Monogram Triad */}
          <path
            d="M50 14 L82 78 L68 78 L56 54 L44 54 L32 78 L18 78 Z"
            stroke="url(#logoGrad)"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="rgba(6, 182, 212, 0.08)"
          />

          {/* Inner Circuit Node */}
          <path
            d="M50 32 L60 52 L40 52 Z"
            stroke="#00f2fe"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="rgba(59, 130, 246, 0.2)"
          />

          {/* Circuit Connection Points */}
          <circle cx="50" cy="14" r="4.5" fill="#00f2fe" />
          <circle cx="34" cy="62" r="3.5" fill="#00f2fe" />
          <circle cx="66" cy="62" r="3.5" fill="#3b82f6" />
          <line x1="34" y1="62" x2="66" y2="62" stroke="#00f2fe" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-bold tracking-tight text-white ${
              isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'
            }`}>
              AUTOMATIX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>
          <span className={`font-sans tracking-[0.25em] uppercase text-cyan-400 font-semibold ${
            isSmall ? 'text-[9px]' : isLarge ? 'text-xs' : 'text-[10px]'
          }`}>
            DIGITAL SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
}
