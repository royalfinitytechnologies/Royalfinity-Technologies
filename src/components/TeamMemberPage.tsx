"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, Crown, Code2, Linkedin, Twitter, Instagram,
  CheckCircle, Zap, ArrowRight,
} from "lucide-react";
import type { TeamMember } from "@/lib/team-data";

const socialIcons: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function TeamMemberPage({ member }: { member: TeamMember }) {
  const isCyan = member.color === "cyan";
  const c = {
    text:    isCyan ? "text-cyan"   : "text-purple",
    border:  isCyan ? "border-cyan/30"   : "border-purple/30",
    bg:      isCyan ? "bg-cyan/10"  : "bg-purple/10",
    ring:    isCyan ? "ring-cyan/50"     : "ring-purple/50",
    from:    isCyan ? "from-cyan/15"     : "from-purple/15",
    to:      isCyan ? "to-purple/10"     : "to-cyan/10",
    orb:     isCyan ? "orb-cyan"    : "orb-purple",
    badge:   isCyan ? "border-cyan/25"   : "border-purple/25",
  };
  const Icon = isCyan ? Crown : Code2;

  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-20 overflow-hidden">
        <div className={`${c.orb} w-[600px] h-[600px] -top-40 -left-40 opacity-40`} />
        <div className="orb-purple w-[400px] h-[400px] top-1/2 -right-60 opacity-20" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Back button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Team
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            {/* Left — Photo card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className={`glass-card border ${c.border} overflow-hidden max-w-sm w-full`}>
                {/* Banner */}
                <div className={`h-32 bg-gradient-to-br ${c.from} ${c.to} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon className={c.text} size={20} />
                  </div>
                </div>

                {/* Photo */}
                <div className="px-6 pb-6">
                  <div className={`w-28 h-28 rounded-2xl overflow-hidden ring-4 ${c.ring} ring-offset-4 ring-offset-background -mt-14 mb-4 shadow-2xl`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>

                  <h1 className={`text-2xl font-black font-space mb-1 ${c.text}`}>{member.name}</h1>
                  <p className={`text-xs font-black tracking-widest uppercase ${c.text} opacity-60 font-orbitron mb-4`}>{member.role}</p>

                  <div className={`h-px w-full mb-4 bg-gradient-to-r from-current to-transparent ${c.text} opacity-20`} />

                  {/* Socials */}
                  <div className="flex items-center gap-2">
                    {member.socials.map((s) => {
                      const SIcon = socialIcons[s.platform];
                      return SIcon ? (
                        <a
                          key={s.platform}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.platform}
                          className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} hover:scale-110 transition-all duration-200`}
                        >
                          <SIcon size={15} />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={`section-badge mb-6 inline-flex gap-2 ${c.badge}`}>
                <Icon size={12} className={c.text} /> {member.role}
              </span>
              <h2 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
                {member.name.split(" ")[0]}&apos;s{" "}
                <span className="section-title-accent">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">{member.fullBio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeUp()}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {member.achievements.map((a, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className={`glass-card border ${c.border} p-6 text-center gradient-border`}
              >
                <div className="text-3xl font-black mb-1 stat-number">{a.num}</div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wide">{a.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-16 relative overflow-hidden">
        <div className={`${c.orb} w-[400px] h-[400px] top-0 right-0 opacity-20`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Zap size={12} /> Expertise
              </span>
              <h2 className="section-title text-3xl mb-8">
                Skills & <span className="section-title-accent">Expertise</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {member.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  {...fadeUp(i * 0.05)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border ${c.border} text-sm font-semibold ${c.text}`}
                >
                  <CheckCircle size={14} className="opacity-70" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp()}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center cta-banner-bg max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none cta-banner-inner" />
            <div className={`${c.orb} w-48 h-48 -top-16 -left-16`} />
            <div className="orb-purple w-48 h-48 -bottom-16 -right-16" />
            <div className="relative z-10">
              <span className="section-badge mb-6 inline-flex gap-2">
                <Zap size={12} /> Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 font-orbitron leading-tight">
                Ready to Build Something{" "}
                <span className="section-title-accent">Amazing?</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
                Connect with our team and let&apos;s create something extraordinary together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 group cta-btn"
              >
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
