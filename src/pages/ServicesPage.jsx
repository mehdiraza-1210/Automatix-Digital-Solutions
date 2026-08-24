import React, { useEffect } from 'react';
import { servicesData } from '../data/websiteData';
import { 
  Globe,
  Cpu, 
  Sparkles, 
  Target, 
  Server, 
  Check, 
  ArrowRight, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export default function ServicesPage({ onOpenConsultation, targetServiceId = null }) {
  useEffect(() => {
    if (targetServiceId) {
      setTimeout(() => {
        const el = document.getElementById(targetServiceId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [targetServiceId]);

  const iconsMap = {
    'Globe': Globe,
    'Cpu': Cpu,
    'Sparkles': Sparkles,
    'Target': Target,
    'Server': Server
  };

  return (
    <div className="relative min-h-screen bg-[#040817] text-white pt-28 pb-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-96 h-96 bg-electric-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* INTRO SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Infrastructure & Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Everything Your Business Needs, <span className="gradient-text-cyan">Under One Roof</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We partner with businesses to design, build, and automate the systems that power growth — websites that convert, workflows that run themselves, AI that works around the clock, and a social presence that never goes quiet.
          </p>
        </div>

        {/* Quick Anchor Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
          {servicesData.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="px-4 py-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span className="text-cyan-400 font-mono font-bold text-xs">{svc.number}</span>
              <span>{svc.title}</span>
            </a>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 5 DETAILED SERVICE BLOCKS */}
        {/* ========================================================================= */}
        <div className="space-y-12 sm:space-y-16">
          {servicesData.map((service, index) => {
            const Icon = iconsMap[service.icon] || Globe;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card-hover overflow-hidden"
              >
                {/* Subtle side glow */}
                <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number, Title, Tagline, What It Is, Action */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-navy-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                          SERVICE // {service.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Tagline & Description */}
                    <div className="p-5 rounded-2xl bg-navy-950/70 border border-slate-800/80">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> {service.tagline}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>

                    {/* Key Strategic Benefits */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Strategic Business Value
                      </h4>
                      <ul className="space-y-2.5">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Trigger */}
                    <div className="pt-2">
                      <button
                        onClick={() => onOpenConsultation(service.id)}
                        className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center gap-2 group/btn"
                      >
                        <span>Book Consultation for {service.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: "Includes" Scope & Deliverables Blueprint */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Includes Section */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-navy-950/90 border border-cyan-500/20 shadow-inner">
                      <h3 className="text-sm font-display font-bold text-white mb-4 flex items-center justify-between">
                        <span>Includes:</span>
                        <span className="text-xs font-normal text-cyan-400 font-mono">End-to-End Scope</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.includes.map((inc, iIdx) => (
                          <div
                            key={iIdx}
                            className="p-3 rounded-xl bg-navy-900/90 border border-slate-800 hover:border-cyan-500/30 transition-colors flex items-start gap-2.5 text-xs text-slate-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span className="leading-snug">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Box */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400" /> Deliverables
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.deliverables}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* CLOSING CTA */}
        {/* ========================================================================= */}
        <div className="mt-20 pt-12 text-center">
          <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 border border-cyan-500/30 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Let's Build Something That Works For You
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Tell us what you're trying to solve — a website that needs to convert better, a process that needs automating, or a system that doesn't exist yet. Wherever you're based, we'll take it from there.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get in Touch (24h Response)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
