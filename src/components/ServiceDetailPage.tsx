"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Wrench, TrendingUp, Globe, Smartphone, Megaphone, Palette, Monitor, Bot, ShoppingCart, type LucideIcon } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  Globe, Smartphone, Megaphone, Palette, Monitor, Bot, ShoppingCart,
};

const colorMap = {
  cyan:   { text: "text-cyan",   border: "border-cyan/25",   bg: "bg-cyan/10",   glow: "rgba(0,255,255,0.08)",   orb: "orb-cyan" },
  purple: { text: "text-purple", border: "border-purple/25", bg: "bg-purple/10", glow: "rgba(139,92,246,0.08)", orb: "orb-purple" },
  gold:   { text: "text-gold",   border: "border-gold/25",   bg: "bg-gold/10",   glow: "rgba(255,183,0,0.08)",   orb: "orb-gold" },
  pink:   { text: "text-pink",   border: "border-pink/25",   bg: "bg-pink/10",   glow: "rgba(236,72,153,0.08)",  orb: "orb-cyan" },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const c = colorMap[service.color];
  const Icon = iconMap[service.iconName] ?? Globe;

  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className={`${c.orb} w-[600px] h-[600px] -top-40 -left-40 opacity-40`} />
        <div className="orb-purple w-[400px] h-[400px] top-1/2 -right-60 opacity-25" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()}>
            <span className={`section-badge mb-8 inline-flex gap-2 ${c.text}`}>
              <Icon size={13} /> {service.title.toUpperCase()}
            </span>
            <h1 className="section-title text-5xl md:text-6xl mb-6 leading-tight">
              Premium{" "}
              <span className="section-title-accent">{service.title}</span>
              <br />Services
            </h1>
            <p className="section-subtitle mx-auto max-w-2xl text-lg">{service.desc}</p>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-14"
          >
            {service.heroStats.map((s, i) => (
              <div key={i} className={`glass-card border ${c.border} p-5 gradient-border`}>
                <div className="text-3xl font-black mb-1 stat-number">{s.num}</div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Zap size={12} /> Why Choose Us
              </span>
              <h2 className="section-title mb-4">
                Why Choose Our{" "}
                <span className="section-title-accent">{service.title}</span>
              </h2>
              <p className="section-subtitle">
                Comprehensive solutions that combine modern technology with exceptional design to deliver outstanding results.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className={`glass-card border ${c.border} p-7 group hover:scale-[1.02] transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Zap className={c.text} size={20} />
                </div>
                <h3 className={`font-bold text-base mb-2 font-space ${c.text}`}>{f.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check size={12} className={`${c.text} shrink-0 opacity-80`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 relative overflow-hidden">
        <div className={`${c.orb} w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Wrench size={12} /> Our Process
              </span>
              <h2 className="section-title mb-4">
                Our Proven <span className="section-title-accent">Development Workflow</span>
              </h2>
              <p className="section-subtitle">
                A systematic approach that ensures quality, efficiency, and client satisfaction throughout the entire journey.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className={`glass-card border ${c.border} p-7 group`}>
                <div className={`w-10 h-10 rounded-full ${c.bg} flex items-center justify-center mb-5 font-black text-sm font-orbitron ${c.text}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-base mb-2 font-space text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-gold w-[400px] h-[400px] bottom-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Wrench size={12} /> Technology Stack
              </span>
              <h2 className="section-title mb-4">
                Cutting-Edge <span className="section-title-accent">Technologies</span> We Use
              </h2>
              <p className="section-subtitle">
                We leverage the most advanced and reliable technologies to build solutions that are fast, secure, and future-ready.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {service.techStack.map((stack, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className={`glass-card border ${c.border} p-6`}>
                <h3 className={`font-bold text-sm mb-4 font-orbitron tracking-wide ${c.text}`}>{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className={`px-2.5 py-1 text-xs rounded-full border ${c.border} ${c.text} ${c.bg}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <TrendingUp size={12} /> Our Impact
              </span>
              <h2 className="section-title mb-4">
                Results That <span className="section-title-accent">Speak for Themselves</span>
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {service.whyStats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className={`glass-card border ${c.border} p-7 text-center gradient-border`}>
                <div className="text-3xl font-black mb-1 stat-number">{s.num}</div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()}
            className="relative rounded-3xl overflow-hidden p-14 md:p-20 text-center cta-banner-bg max-w-4xl mx-auto">
            <div className="absolute inset-0 rounded-3xl pointer-events-none cta-banner-inner" />
            <div className={`${c.orb} w-56 h-56 -top-20 -left-20`} />
            <div className="orb-purple w-56 h-56 -bottom-20 -right-20" />
            <div className="relative z-10">
              <span className="section-badge mb-8 inline-flex gap-2">
                <Zap size={12} /> Get Started Today
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-5 font-orbitron leading-tight">
                Ready to Transform Your{" "}
                <span className="section-title-accent">Business?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed">
                Let&apos;s discuss your {service.title.toLowerCase()} project and create something extraordinary together.
              </p>
              <a href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300 group cta-btn">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
