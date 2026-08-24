import React, { useState } from 'react';
import ParticleCanvas from '../components/ParticleCanvas';
import StatsCounter from '../components/StatsCounter';
import { servicesData, differentiators, partnersData } from '../data/websiteData';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Cpu, 
  Target, 
  Server, 
  ShieldCheck, 
  Zap, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Send,
  Clock,
  Globe2,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HomePage({ onNavigate, onOpenConsultation }) {
  const [inlineForm, setInlineForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    service: 'website-design',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}
    }, 600);
  };

  const serviceIconMap = {
    'website-design': Globe,
    'business-automation': Cpu,
    'ai-integrations': Sparkles,
    'social-media-management': Target,
    'hrms-erp-custom': Server
  };

  const diffIconMap = {
    'Globe': Globe,
    'Zap': Zap,
    'ShieldCheck': ShieldCheck,
    'Sparkles': Sparkles
  };

  return (
    <div className="relative min-h-screen bg-[#040817] text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Animated Particle Canvas */}
        <ParticleCanvas />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[420px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 mesh-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Trust Line Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-6 shadow-glow-cyan backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Proudly serving clients across the US, UK, Switzerland, Germany, and France for over 5 years</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Technology That Runs Your Business —{' '}
            <span className="gradient-text-cyan drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              So You Don't Have To
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-normal leading-relaxed mb-10">
            From websites and automation to AI integrations, social media management, and enterprise software — we build the digital backbone your business needs to scale, without the overhead of an in-house team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Book a Free Consultation</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('partners');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-navy-900/90 hover:bg-navy-850 text-slate-100 border border-slate-700 hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2.5 group"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 5+ Years International Proven Track Record
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% Fit-For-Purpose Custom Systems
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Rapid 24-Hour Response Support
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: TRUST / STATS BAR */}
      {/* ========================================================================= */}
      <section className="relative -mt-6 mb-20 z-20">
        <StatsCounter />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SERVICES OVERVIEW (5 CARDS) */}
      {/* ========================================================================= */}
      <section id="services-overview" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            <span>Services Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Everything Your Business Needs, Under One Roof
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We partner with businesses to design, build, and automate the systems that power growth — websites that convert, workflows that run themselves, AI that works around the clock, and a social presence that never goes quiet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = serviceIconMap[service.id] || Cpu;
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl glass-panel p-8 sm:p-9 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card-hover hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Subtle hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-cyan-400/90 mb-3 tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Consult →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-all hover:shadow-glow-blue"
          >
            <span>Explore All 5 Service Specifications & Deliverables</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section id="why-automatix" className="relative py-24 bg-navy-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              One Team. Every System Your Business Runs On.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              For over 5 years, we've helped businesses across the US, UK, Switzerland, Germany, and France build the digital infrastructure they need to compete and grow — without the cost and complexity of managing multiple vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {differentiators.map((item, idx) => {
              const Icon = diffIconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl glass-panel p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-500/15 text-cyan-300 border border-blue-500/30 mb-3">
                      {item.highlight}
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR PARTNERS / CLIENTS */}
      {/* ========================================================================= */}
      <section id="partners" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            <span>Our Partners / Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Trusted by Brands Across the Globe
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Over the past 5 years, we've partnered with businesses across aviation, fashion, hospitality, marketing, and lifestyle industries throughout the US, UK, Switzerland, Germany, and France — delivering digital solutions that help them grow.
          </p>
        </div>

        {/* Client Grid (5x2 layout on desktop, responsive on smaller screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {partnersData.map((client, idx) => {
            return (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl glass-panel p-4 sm:p-5 border border-slate-800/80 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-glow-card-hover hover:scale-[1.03] flex flex-col justify-between text-left overflow-hidden"
              >
                {/* Ambient glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar with Uniform Crisp White Brand Logo Showcase & External Link */}
                  <div className="relative w-full h-20 rounded-xl bg-white p-3.5 mb-4 flex items-center justify-center shadow-md border border-white/20 group-hover:shadow-glow-cyan transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-12 max-w-[130px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-slate-900/10 hover:bg-slate-900/20 flex items-center justify-center text-slate-700 group-hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    {client.badge}
                  </span>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {client.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 group-hover:text-slate-200">
                  <span className="text-cyan-400 font-semibold">Impact:</span> {client.metrics}
                </div>
              </a>
            );
          })}
        </div>

        {/* Supporting Line */}
        <div className="p-4 rounded-2xl bg-navy-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            From aviation data science firms to boutique cafés and lifestyle brands — our clients trust us to deliver work that performs, wherever they are in the world.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CONTACT US / CTA BANNER (POPS UP FORM) */}
      {/* ========================================================================= */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 lg:p-16 border border-cyan-500/30 shadow-2xl text-center">
          {/* Background Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Let's Build Something That Works For You
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Tell us what you're trying to solve — a website that needs to convert better, a process that needs automating, or a system that doesn't exist yet. Wherever you're based, we'll take it from there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2.5 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-navy-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Services
              </button>
            </div>

            <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>We typically respond within 24 hours.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
