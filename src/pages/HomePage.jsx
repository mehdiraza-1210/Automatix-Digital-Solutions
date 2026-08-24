import React from 'react';
import ParticleCanvas from '../components/ParticleCanvas';
import StatsCounter from '../components/StatsCounter';
import { servicesData, differentiators, partnersData } from '../data/websiteData';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  Target, 
  Server, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Rocket,
  Camera,
  Factory,
  Film,
  Coffee,
  Store,
  Heart,
  Leaf
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenConsultation }) {
  // Mapping service overview icons
  const serviceIcons = {
    'business-automation': Cpu,
    'digital-management': Layers,
    'digital-marketing': Target,
    'hrms-erp': Server,
    'google-meta-ads': BarChart3
  };

  // Top 4 overview cards as requested for homepage Section 3
  const homepageServices = [
    {
      id: "business-automation",
      title: "Business Automation",
      description: "Automate repetitive workflows and connect your business tools into one seamless system.",
      badge: "Efficiency & Ops",
      icon: Cpu,
      points: ["Workflow Orchestration", "CRM Sync", "Process Automation"]
    },
    {
      id: "digital-management",
      title: "Digital Management",
      description: "End-to-end management of your digital presence, from operations to online reputation.",
      badge: "Full Governance",
      icon: Layers,
      points: ["24/7 Web Operations", "Asset Management", "Tech Consulting"]
    },
    {
      id: "google-meta-ads",
      title: "Digital Marketing & Ads",
      description: "Google & Meta Ads campaigns built for real ROI, not just impressions.",
      badge: "High Conversion",
      icon: Target,
      points: ["Performance Ads", "Search & Social SEO", "ROAS Optimization"]
    },
    {
      id: "hrms-erp",
      title: "Custom HRMS / ERP",
      description: "Locally-built HR and Enterprise systems tailored to how your business actually works.",
      badge: "Bespoke Software",
      icon: Server,
      points: ["Attendance & Payroll", "Inventory Tracking", "Zero Per-User Fees"]
    }
  ];

  const diffIcons = {
    ShieldCheck,
    Globe,
    Zap
  };

  const partnerIcons = {
    Rocket,
    Sparkles,
    TrendingUp,
    Camera,
    Factory,
    Film,
    Coffee,
    Store,
    Heart,
    Leaf
  };

  return (
    <div className="relative min-h-screen bg-[#040817] text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Animated Particle Canvas in Background */}
        <ParticleCanvas />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Grid texture overlay */}
        <div className="absolute inset-0 mesh-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-glow-cyan backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Next-Gen Enterprise Digitization & Growth</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Complete Business Automation,{' '}
            <span className="gradient-text-cyan drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Simplified.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            We help businesses digitize, market, and scale — from custom HRMS/ERP systems to Google & Meta Ads that convert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2.5 group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-navy-900/90 hover:bg-navy-850 text-slate-100 border border-slate-700 hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Book a Free Consultation</span>
            </button>
          </div>

          {/* Tech stack & security badge strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Custom Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Enterprise Data Security
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Measurable ROI Driven
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
      {/* SECTION 3: WHAT WE DO (4 CARDS) */}
      {/* ========================================================================= */}
      <section id="services-overview" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Four Core Pillars of Digital Transformation
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Streamline internal operations, attract high-value clients, and scale with tailored technology built for your exact workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homepageServices.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative rounded-2xl glass-panel p-8 sm:p-10 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card-hover hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services', card.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(card.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Quick Quote →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-all hover:shadow-glow-blue"
          >
            <span>View All Detailed Service Specifications</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY AUTOMATIX (3 COLUMNS) */}
      {/* ========================================================================= */}
      <section id="why-automatix" className="relative py-24 bg-navy-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Built for Scale, Engineered with Precision
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              We bridge high-end engineering with tangible commercial results. No bloated retainer fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => {
              const Icon = diffIcons[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl glass-panel p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-500/15 text-cyan-300 border border-blue-500/30 mb-3">
                    {item.highlight}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: PARTNERS / CLIENTS */}
      {/* ========================================================================= */}
      <section id="partners" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            <span>Portfolio & Client Roster</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Brands We've Worked With
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Trusted by businesses across industries and geographies.
          </p>
        </div>

        {/* Client Grid (5x2 layout on desktop, responsive on smaller screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {partnersData.map((client, idx) => {
            const Icon = partnerIcons[client.icon] || Sparkles;
            return (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl glass-panel p-5 border border-slate-800/80 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-glow-card-hover hover:scale-[1.03] flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    {client.badge}
                  </span>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {client.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 group-hover:text-slate-200">
                  <span className="text-cyan-400 font-semibold">Impact:</span> {client.metrics}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CTA / CONTACT BANNER */}
      {/* ========================================================================= */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 lg:p-16 border border-cyan-500/30 text-center shadow-2xl">
          {/* Background Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Build Your System</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Ready to Automate Your Business?
            </h2>

            <p className="text-slate-300 text-base sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's build something that actually works for you. Eliminate repetitive manual tasks and accelerate predictable client acquisition today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-navy-900 border border-slate-700 hover:border-cyan-400 text-slate-200 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Full Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
