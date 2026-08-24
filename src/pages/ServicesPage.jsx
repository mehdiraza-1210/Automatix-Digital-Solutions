import React, { useState, useEffect } from 'react';
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
  HelpCircle,
  Store,
  Play,
  Tv,
  ExternalLink
} from 'lucide-react';

function ServiceVideoPlayer({ videos }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[activeIdx] || videos[0];

  return (
    <div className="mt-6 pt-6 border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-display">
            Live Software Walkthrough (Autoplay / No Audio)
          </h4>
        </div>

        {/* Tab switcher if multiple videos exist (e.g. HRMS & ERP) */}
        {videos.length > 1 && (
          <div className="flex items-center gap-1.5 p-1 bg-navy-950/90 rounded-xl border border-slate-800">
            {videos.map((vid, vIdx) => (
              <button
                key={vid.id || vIdx}
                onClick={() => setActiveIdx(vIdx)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeIdx === vIdx
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {vid.type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Embedded 16:9 Video Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-navy-950 border border-cyan-500/30 shadow-2xl group">
        <iframe
          key={currentVideo.youtubeId}
          src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.youtubeId}&controls=1&modestbranding=1&rel=0`}
          title={currentVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover border-0"
        />
      </div>

      <div className="mt-2.5 flex items-center justify-between text-xs text-slate-400 px-1">
        <span className="font-medium text-slate-300">
          <strong className="text-cyan-400">{currentVideo.title}:</strong> {currentVideo.tagline}
        </span>
        <a
          href={`https://youtu.be/${currentVideo.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors shrink-0 ml-2"
        >
          <span>Watch on YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default function ServicesPage({ onOpenConsultation, targetServiceId = null }) {
  useEffect(() => {
    if (targetServiceId) {
      setTimeout(() => {
        const el = document.getElementById(targetServiceId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    'Server': Server,
    'Store': Store
  };

  return (
    <div className="relative min-h-screen bg-[#040817] text-white pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[300px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-72 h-72 bg-electric-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* INTRO SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 pt-4 sm:pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Digital Infrastructure & Systems</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
            Everything Your Business Needs, <span className="gradient-text-cyan">Under One Roof</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We partner with businesses to design, build, and automate the systems that power growth — websites that convert, workflows that run themselves, AI that works around the clock, and a social presence that never goes quiet.
          </p>
        </div>

        {/* Quick Anchor Navigation Tabs (Fully Responsive, Never Clipped) */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12 sm:mb-16 px-2">
          {servicesData.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-slate-800 hover:border-cyan-400 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-glow-cyan"
            >
              <span className="text-cyan-400 font-mono font-bold text-xs">{svc.number}</span>
              <span>{svc.title}</span>
            </a>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 6 DETAILED SERVICE BLOCKS */}
        {/* ========================================================================= */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {servicesData.map((service, index) => {
            const Icon = iconsMap[service.icon] || Globe;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 lg:p-10 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card-hover overflow-hidden"
              >
                {/* Subtle side glow */}
                <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
                  {/* Left Column: Number, Title, Tagline, What It Is, Action */}
                  <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-navy-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-glow-cyan shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 tracking-wider block">
                          SERVICE // {service.number}
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight break-words">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Tagline & Description */}
                    <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-navy-950/70 border border-slate-800/80">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1.5 sm:mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" /> 
                        <span className="break-words">{service.tagline}</span>
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>

                    {/* Key Strategic Benefits */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 sm:mb-3">
                        Strategic Business Value
                      </h4>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Trigger */}
                    <div className="pt-2">
                      <button
                        onClick={() => onOpenConsultation(service.id)}
                        className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Book Consultation for {service.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: "Includes" Scope & Deliverables Blueprint */}
                  <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                    {/* Includes Section */}
                    <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-navy-950/90 border border-cyan-500/20 shadow-inner">
                      <h3 className="text-xs sm:text-sm font-display font-bold text-white mb-3 sm:mb-4 flex items-center justify-between">
                        <span>Includes:</span>
                        <span className="text-[11px] sm:text-xs font-normal text-cyan-400 font-mono">End-to-End Scope</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {service.includes.map((inc, iIdx) => (
                          <div
                            key={iIdx}
                            className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-navy-900/90 border border-slate-800 hover:border-cyan-500/30 transition-colors flex items-start gap-2 text-xs text-slate-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span className="leading-snug break-words">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Box */}
                    <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Deliverables
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.deliverables}
                      </p>
                    </div>

                    {/* Embedded Live Video Demo Walkthrough if provided for this service */}
                    {service.videos && (
                      <ServiceVideoPlayer videos={service.videos} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* CLOSING CTA */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-20 pt-8 text-center">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel p-6 sm:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2.5 sm:mb-3">
                Let's Build Something That Works For You
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                Tell us what you're trying to solve — a website that needs to convert better, a process that needs automating, or a system that doesn't exist yet. Wherever you're based, we'll take it from there.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Get in Touch (24h Response)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
