"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Crown, Code2, Monitor, Palette, Megaphone, ArrowRight, Users } from "lucide-react";
import { teamData } from "@/lib/team-data";
import type { TeamMember } from "@/lib/team-data";

const colorMap = {
  cyan:   { text: "text-cyan",   border: "border-cyan/40",   bg: "bg-cyan/10",   ring: "ring-cyan/50",   from: "from-cyan/25",   to: "to-purple/10",  hover: "hover:border-cyan/70",   line: "bg-cyan/40"   },
  purple: { text: "text-purple", border: "border-purple/40", bg: "bg-purple/10", ring: "ring-purple/50", from: "from-purple/25", to: "to-cyan/10",    hover: "hover:border-purple/70", line: "bg-purple/40" },
  gold:   { text: "text-gold",   border: "border-gold/40",   bg: "bg-gold/10",   ring: "ring-gold/50",   from: "from-gold/25",   to: "to-purple/10",  hover: "hover:border-gold/70",   line: "bg-gold/40"   },
  pink:   { text: "text-pink",   border: "border-pink/40",   bg: "bg-pink/10",   ring: "ring-pink/50",   from: "from-pink/25",   to: "to-purple/10",  hover: "hover:border-pink/70",   line: "bg-pink/40"   },
};

const deptIcons: Record<string, React.ElementType> = {
  leadership: Crown,
  tech:       Monitor,
  design:     Palette,
  marketing:  Megaphone,
};

// ── Small card for non-leadership ──
function SmallCard({ member, delay }: { member: TeamMember; delay: number }) {
  const c = colorMap[member.color];
  const Icon = deptIcons[member.department] ?? Code2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <Link
        href={`/team/${member.slug}`}
        className={`glass-card border ${c.border} ${c.hover} group relative overflow-hidden block transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
      >
        {/* Banner */}
        <div className={`h-16 w-full bg-gradient-to-br ${c.from} ${c.to} relative overflow-hidden`}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className={`absolute top-2 right-2 w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center`}>
            <Icon className={c.text} size={13} />
          </div>
        </div>
        <div className="px-5 pb-5">
          <div className="flex items-end gap-3 -mt-8 mb-3">
            <div className={`w-16 h-16 rounded-xl overflow-hidden ring-4 ${c.ring} ring-offset-2 ring-offset-background shrink-0 shadow-lg`}>
              <Image src={member.image} alt={member.name} width={64} height={64} className="w-full h-full object-cover object-top" />
            </div>
            <div className="pb-0.5 min-w-0">
              <h3 className={`text-sm font-bold font-space ${c.text} leading-tight`}>{member.name}</h3>
              <span className={`text-[10px] font-black tracking-wider uppercase ${c.text} opacity-55 font-orbitron`}>{member.role}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{member.shortDesc}</p>
          <div className={`inline-flex items-center gap-1 text-xs font-semibold ${c.text} group-hover:gap-2 transition-all duration-300`}>
            View Profile <ArrowRight size={11} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Large card for leadership ──
function LeaderCard({ member, delay }: { member: TeamMember; delay: number }) {
  const c = colorMap[member.color];
  const Icon = deptIcons[member.department] ?? Crown;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="w-full max-w-[260px]"
    >
      <Link
        href={`/team/${member.slug}`}
        className={`glass-card border-2 ${c.border} ${c.hover} group relative overflow-hidden block transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
      >
        {/* Banner */}
        <div className={`h-28 w-full bg-gradient-to-br ${c.from} ${c.to} relative overflow-hidden`}>
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className={`absolute top-3 right-3 w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
            <Icon className={c.text} size={18} />
          </div>
          {/* Crown badge */}
          <div className={`absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase ${c.bg} ${c.text} border ${c.border} font-orbitron`}>
            Founder
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex items-end gap-3 -mt-12 mb-4">
            <div className={`w-24 h-24 rounded-2xl overflow-hidden ring-4 ${c.ring} ring-offset-2 ring-offset-background shrink-0 shadow-xl`}>
              <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <h3 className={`text-base font-bold font-space ${c.text} mb-0.5`}>{member.name}</h3>
          <span className={`text-[10px] font-black tracking-widest uppercase ${c.text} opacity-60 font-orbitron`}>{member.role}</span>
          <div className={`h-px w-full my-3 bg-gradient-to-r from-current to-transparent ${c.text} opacity-20`} />
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{member.shortDesc}</p>
          <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.text} group-hover:gap-2.5 transition-all duration-300`}>
            View Profile <ArrowRight size={12} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Department row ──
function DeptRow({ title, members, color, delay }: {
  title: string;
  members: TeamMember[];
  color: keyof typeof colorMap;
  delay: number;
}) {
  const c = colorMap[color];
  if (!members.length) return null;
  return (
    <div className="flex flex-col items-center w-full">
      {/* Vertical connector from above */}
      <motion.div
        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className={`w-px h-10 ${c.line} origin-top`}
      />

      {/* Dept label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.35, delay: delay + 0.1 }}
        className={`px-5 py-1.5 rounded-full border ${c.border} ${c.bg} ${c.text} text-xs font-black tracking-widest uppercase font-orbitron mb-0`}
      >
        {title}
      </motion.div>

      {/* Horizontal line spanning cards */}
      <div className="relative w-full flex justify-center">
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className={`h-px ${c.line} origin-center team-connector-line`}
          data-count={members.length}
        />
        {/* Vertical drops to each card */}
        <div className="absolute top-0 flex justify-around team-connector-line" data-count={members.length}>
          {members.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + 0.3 + i * 0.05 }}
              className={`w-px h-8 ${c.line} origin-top`}
            />
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 mt-8 w-full">
        {members.map((m, i) => (
          <div key={m.slug} className="w-[220px]">
            <SmallCard member={m} delay={delay + 0.35 + i * 0.07} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const leaders   = teamData.filter((m) => m.department === "leadership");
  const techTeam  = teamData.filter((m) => m.department === "tech");
  const designers = teamData.filter((m) => m.department === "design");
  const marketers = teamData.filter((m) => m.department === "marketing");

  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="orb-cyan w-[500px] h-[500px] -top-40 -left-40 opacity-35" />
        <div className="orb-purple w-[400px] h-[400px] top-1/2 -right-60 opacity-25" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge mb-8 inline-flex gap-2">
              <Users size={13} /> Our Team
            </span>
            <h1 className="section-title text-5xl md:text-6xl mb-5 leading-tight">
              The People Behind{" "}
              <span className="section-title-accent">RoyalFinity</span>
            </h1>
            <p className="section-subtitle mx-auto max-w-xl">
              A passionate team of developers, designers, and marketers delivering extraordinary digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Org Chart ── */}
      <section className="pb-28 relative">
        <div className="orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">

            {/* ── Level 1: Co-Founders ── */}
            <div className="flex flex-wrap justify-center gap-8">
              {leaders.map((m, i) => (
                <LeaderCard key={m.slug} member={m} delay={i * 0.15} />
              ))}
            </div>

            {/* ── Central vertical trunk ── */}
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-px h-12 bg-gradient-to-b from-cyan/50 to-purple/50 origin-top mt-1"
            />

            {/* ── Level 2: Tech ── */}
            <DeptRow title="Development" members={techTeam}  color="cyan"   delay={0.5} />

            {/* ── Level 3: Design ── */}
            <DeptRow title="Design"      members={designers} color="pink"   delay={0.7} />

            {/* ── Level 4: Marketing ── */}
            <DeptRow title="Marketing"   members={marketers} color="gold"   delay={0.9} />

          </div>
        </div>
      </section>

    </main>
  );
}
