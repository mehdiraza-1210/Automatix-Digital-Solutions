import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../data/websiteData';
import { CheckCircle, ShieldCheck, Zap, Server } from 'lucide-react';

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const animateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts = statsData.map((stat) => {
        return Number((stat.value * easeOut).toFixed(stat.value % 1 !== 0 ? 1 : 0));
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      } else {
        setCounts(statsData.map((s) => s.value));
      }
    };

    requestAnimationFrame(animateCounts);
  }, [hasAnimated]);

  const icons = [CheckCircle, ShieldCheck, Zap, Server];

  return (
    <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">Proven Engineering & Delivery</p>
          <h3 className="text-lg sm:text-xl font-medium text-slate-300">
            Trusted by growing businesses across industries
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
          {statsData.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} flex flex-col items-center text-center group`}>
                <div className="w-10 h-10 rounded-lg bg-navy-900/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                    {counts[idx]}
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-cyan-400 ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 max-w-[180px]">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
