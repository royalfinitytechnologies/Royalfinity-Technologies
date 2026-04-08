"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, Eye, Database, Cookie, UserCheck, Share2, ArrowRight } from "lucide-react";

const sections = [
  {
    num: "01",
    icon: Database,
    title: "Information We Collect",
    color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    content: (
      <ul className="space-y-2.5">
        {[
          "Name, email, phone number, and business details provided in forms",
          "Information about your interaction with our website, such as pages visited and actions taken",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "02",
    icon: Eye,
    title: "How We Use Your Information",
    color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    content: (
      <ul className="space-y-2.5">
        {[
          "Respond to your inquiries and provide our services",
          "Share updates, offers, and promotions relevant to your interests",
          "Improve our website, services, and user experience",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "03",
    icon: Share2,
    title: "Information Sharing & Protection",
    color: "text-gold", bg: "bg-gold/10", border: "border-gold/20",
    content: (
      <ul className="space-y-2.5">
        {[
          "We do not sell or share your personal information with third parties for marketing purposes",
          "Your data is stored securely and protected against unauthorized access",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04",
    icon: Cookie,
    title: "Cookies & Tracking",
    color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        We may use cookies and tracking technologies to enhance website performance and user experience.
        You can choose to disable cookies in your browser, but some features of the website may not function properly.
      </p>
    ),
  },
  {
    num: "05",
    icon: UserCheck,
    title: "Your Rights",
    color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    content: (
      <ul className="space-y-2.5">
        {[
          "Request access to your personal information",
          "Request correction or deletion of your personal data",
          "Opt-out of marketing communications",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "06",
    icon: Mail,
    title: "Contact Us",
    color: "text-gold", bg: "bg-gold/10", border: "border-gold/20",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        If you have any questions or concerns regarding this Privacy Policy, please contact us using the details below.
      </p>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="orb-cyan w-[500px] h-[500px] -top-40 -left-40 opacity-40" />
        <div className="orb-purple w-[400px] h-[400px] top-1/2 -right-60 opacity-25" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()}>
            <span className="section-badge mb-8 inline-flex gap-2">
              <Shield size={13} /> Privacy Policy
            </span>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              Your Privacy is Our{" "}
              <span className="section-title-accent">Top Priority</span>
            </h1>
            <p className="section-subtitle mx-auto max-w-2xl">
              This Privacy Policy explains how we collect, use, and protect your personal information
              when you visit our website and use our services.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Effective Date: <span className="text-cyan font-semibold">29 September 2025</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className={`glass-card border ${s.border} p-8 group`}>
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <s.icon className={s.color} size={22} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-black tracking-widest font-orbitron ${s.color} opacity-60`}>{s.num}</span>
                      <h2 className="text-lg font-bold font-space text-foreground">{s.title}</h2>
                    </div>
                    {s.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="orb-gold w-[300px] h-[300px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto">
            <div className="glass-card border border-cyan/20 p-8">
              <h3 className="text-lg font-bold font-space text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <Phone className="text-cyan" size={18} />
                </div>
                Get in Touch
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="mailto:info@royalfinitytechnologies.com"
                  className="glass-card border border-purple/20 p-5 flex items-center gap-4 hover:border-purple/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-purple" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-purple mb-0.5">Email</div>
                    <div className="text-sm text-foreground/80">info@royalfinitytechnologies.com</div>
                  </div>
                </a>
                <a href="tel:+919211816999"
                  className="glass-card border border-gold/20 p-5 flex items-center gap-4 hover:border-gold/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-gold mb-0.5">Phone</div>
                    <div className="text-sm text-foreground/80">+91 92118 16999</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Agreement note ── */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto">
            <div className="glass-card border border-border/30 p-6 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                By using our website and services, you agree to the terms of this Privacy Policy.
              </p>
              <a href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-cyan hover:opacity-80 transition-opacity">
                Have questions? Contact us <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
