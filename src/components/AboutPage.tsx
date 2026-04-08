"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap, Target, Eye, Heart, Users, Lightbulb, Handshake, Layers,
  ArrowRight, Building2, Star, Clock, CheckCircle, BookOpen,
  Crown, Code2, TrendingUp, Shield, Linkedin, Twitter, Instagram,
} from "lucide-react";

const values = [
  { icon: Shield,     label: "Trust First",         desc: "Building relationships based on honesty and transparency.", color: "text-cyan",   bg: "bg-cyan/10",   border: "border-cyan/20" },
  { icon: Lightbulb,  label: "Innovation Everyday", desc: "Adopting the latest tools and ideas to stay ahead.",        color: "text-gold",   bg: "bg-gold/10",   border: "border-gold/20" },
  { icon: Users,      label: "Client-Centric",      desc: "Putting your goals at the center of everything we do.",     color: "text-purple", bg: "bg-purple/10", border: "border-purple/20" },
  { icon: Handshake,  label: "Collaboration",       desc: "Working as an extension of your team.",                     color: "text-cyan",   bg: "bg-cyan/10",   border: "border-cyan/20" },
  { icon: Layers,     label: "Simplicity",          desc: "Making complex solutions easy to use and understand.",      color: "text-gold",   bg: "bg-gold/10",   border: "border-gold/20" },
];

const founders = [
  {
    name: "Bhumika Gandhi",
    role: "Co-Founder & CEO",
    desc: "The driving force behind our vision and client success, committed to building long-term partnerships based on trust and transparency.",
    image: "/founder-ceo.jpg",
    icon: Crown,
    color: "text-cyan",
    border: "border-cyan/30",
    bg: "bg-cyan/10",
    glowClass: "founder-glow-cyan",
    gradientFrom: "from-cyan/20",
    gradientTo: "to-purple/10",
    ringColor: "ring-cyan/40",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/company/royalfinitytechnologies/", label: "LinkedIn" },
      { icon: Instagram, href: "https://www.instagram.com/royalfinitytechnologies", label: "Instagram" },
    ],
  },
  {
    name: "Lavish Sachdeva",
    role: "Co-Founder & CTO",
    desc: "The innovator shaping our technical direction, ensuring that every solution we deliver is modern, scalable, and future-ready.",
    image: "/founder-cto.jpg",
    icon: Code2,
    color: "text-purple",
    border: "border-purple/30",
    bg: "bg-purple/10",
    glowClass: "founder-glow-purple",
    gradientFrom: "from-purple/20",
    gradientTo: "to-cyan/10",
    ringColor: "ring-purple/40",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/company/royalfinitytechnologies/", label: "LinkedIn" },
      { icon: Twitter, href: "https://twitter.com/royalfinitytech", label: "Twitter" },
    ],
  },
];

const stats = [
  { num: "78+",  label: "Projects Delivered", icon: Building2,   color: "text-cyan" },
  { num: "45+",  label: "Happy Clients",       icon: Star,        color: "text-gold" },
  { num: "99%",  label: "Client Satisfaction", icon: CheckCircle, color: "text-purple" },
  { num: "24/7", label: "Support Available",   icon: Clock,       color: "text-cyan" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function AboutPage() {
  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="orb-cyan w-[600px] h-[600px] -top-40 -left-40 opacity-40" />
        <div className="orb-purple w-[500px] h-[500px] top-1/2 -right-60 opacity-30" />
        <div className="orb-gold w-[300px] h-[300px] bottom-0 left-1/3 opacity-20" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()}>
            <span className="section-badge mb-8 inline-flex gap-2">
              <Building2 size={13} /> About RoyalFinity Technologies
            </span>
            <h1 className="section-title text-5xl md:text-7xl mb-6 leading-[1.05]">
              Transforming Businesses<br />
              <span className="section-title-accent">with Technology</span>
            </h1>
            <p className="section-subtitle mx-auto max-w-2xl text-lg">
              At Royalfinity Technologies, we do more than provide digital services — we create solutions that
              genuinely make a difference. We&apos;ve helped businesses across industries grow, innovate, and
              succeed in today&apos;s fast-changing digital landscape.
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
          />
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

            {/* Left — visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card border border-cyan/20 p-10 rounded-3xl relative overflow-hidden">
                <div className="orb-cyan w-48 h-48 -top-10 -right-10 opacity-60" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center mb-6">
                    <BookOpen className="text-cyan" size={30} />
                  </div>
                  <div className="space-y-4">
                    {["Started with a vision to simplify digital growth", "Worked with 45+ businesses across industries", "Delivered 78+ successful projects", "Built on trust, creativity & long-term impact"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 glass-card border border-gold/25 px-5 py-3 rounded-2xl">
                <div className="text-2xl font-black stat-number">2+</div>
                <div className="text-xs text-muted-foreground">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-badge mb-6 inline-flex gap-2">
                <BookOpen size={12} /> Our Story
              </span>
              <h2 className="section-title text-4xl mb-6">
                Empowering Businesses<br />
                Through <span className="section-title-accent">Technology</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Every business has unique challenges, and we started Royalfinity Technologies to solve those
                challenges with creativity, clarity, and care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we&apos;ve worked with startups, established brands, and global clients —
                helping them streamline processes, connect with their customers, and grow with confidence
                in the digital age.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-gold w-[400px] h-[400px] top-0 right-0 opacity-25" />
        <div className="orb-purple w-[300px] h-[300px] bottom-0 left-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">

          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <h2 className="section-title mb-4">
                Our <span className="section-title-accent">Purpose</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Mission */}
            <motion.div {...fadeUp(0)} className="glass-card border border-cyan/20 p-10 group hover:border-cyan/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="text-cyan" size={26} />
                </div>
                <div>
                  <span className="text-xs font-black tracking-widest uppercase text-cyan font-orbitron">Our Mission</span>
                  <h3 className="text-xl font-bold font-space mt-0.5">Building Tomorrow&apos;s Technology</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To empower businesses with intelligent technology and carefully crafted strategies that drive
                measurable results, foster growth, and create lasting impact. We focus on delivering solutions
                that not only meet today&apos;s challenges but also prepare your business for future success.
              </p>
              <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-cyan/40 via-cyan/20 to-transparent" />
            </motion.div>

            {/* Vision */}
            <motion.div {...fadeUp(0.1)} className="glass-card border border-purple/20 p-10 group hover:border-purple/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="text-purple" size={26} />
                </div>
                <div>
                  <span className="text-xs font-black tracking-widest uppercase text-purple font-orbitron">Our Vision</span>
                  <h3 className="text-xl font-bold font-space mt-0.5">A Trusted Digital Partner</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To stand by businesses as a trusted partner on their digital journey. We want to create solutions
                that don&apos;t just work for today, but prepare you for tomorrow — building long-term
                relationships, solving real challenges, and making a positive impact.
              </p>
              <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-purple/40 via-purple/20 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Heart size={12} /> Core Values
              </span>
              <h2 className="section-title mb-4">
                What <span className="section-title-accent">Drives</span> Us Forward
              </h2>
              <p className="section-subtitle">
                Our values guide every decision we make and shape the way we serve our clients.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                {...fadeUp(i * 0.07)}
                className={`glass-card border ${v.border} p-7 group hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <v.icon className={v.color} size={22} />
                </div>
                <h3 className={`font-bold text-base mb-2 font-space ${v.color}`}>{v.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Co-Founders ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-25" />
        <div className="orb-purple w-[300px] h-[300px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Crown size={12} /> Leadership Team
              </span>
              <h2 className="section-title mb-4">
                Meet Our <span className="section-title-accent">Co-Founders</span>
              </h2>
              <p className="section-subtitle">
                Visionary leaders driving innovation and excellence in technology solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                {...fadeUp(i * 0.1)}
                className={`glass-card border ${f.border} group relative overflow-hidden`}
              >
                {/* Top gradient banner */}
                <div className={`h-28 w-full bg-gradient-to-br ${f.gradientFrom} ${f.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg ${f.bg} flex items-center justify-center`}>
                    <f.icon className={f.color} size={16} />
                  </div>
                </div>

                {/* Avatar — overlapping the banner */}
                <div className="px-8 pb-8">
                  <div className="flex items-end gap-4 -mt-12 mb-5">
                    <div className={`w-24 h-24 rounded-2xl overflow-hidden ring-4 ${f.ringColor} ring-offset-2 ring-offset-background shrink-0 shadow-xl`}>
                      <Image
                        src={f.image}
                        alt={f.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pb-1">
                      <h3 className={`text-lg font-bold font-space ${f.color}`}>{f.name}</h3>
                      <span className={`text-xs font-black tracking-widest uppercase ${f.color} opacity-60 font-orbitron`}>{f.role}</span>
                    </div>
                  </div>

                  <div className={`h-px w-full mb-5 bg-gradient-to-r from-current to-transparent ${f.color} opacity-20`} />

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{f.desc}</p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    {f.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`w-8 h-8 rounded-lg ${f.bg} border ${f.border} flex items-center justify-center ${f.color} hover:scale-110 transition-all duration-200 opacity-70 hover:opacity-100`}
                      >
                        <s.icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb-gold w-[400px] h-[400px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <TrendingUp size={12} /> Our Impact
              </span>
              <h2 className="section-title mb-4">
                Achievements That <span className="section-title-accent">Matter</span>
              </h2>
              <p className="section-subtitle">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.08)}
                className="glass-card border border-border/40 p-7 text-center gradient-border group hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl stat-icon-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className={s.color} size={20} />
                </div>
                <div className="text-3xl font-black mb-1 stat-number">{s.num}</div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wide leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp()}
            className="relative rounded-3xl overflow-hidden p-14 md:p-20 text-center cta-banner-bg max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none cta-banner-inner" />
            <div className="orb-cyan w-56 h-56 -top-20 -left-20" />
            <div className="orb-purple w-56 h-56 -bottom-20 -right-20" />
            <div className="relative z-10">
              <span className="section-badge mb-8 inline-flex gap-2">
                <Zap size={12} /> Let&apos;s Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-5 font-orbitron leading-tight">
                Let&apos;s Build the{" "}
                <span className="section-title-accent">Future Together</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed">
                At Royalfinity Technologies, we&apos;re here to simplify technology for you. Whether you&apos;re
                starting small or scaling globally, our team is ready to support your journey.
              </p>
              <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300 group cta-btn">
                Contact Us Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
