"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Crown, Code2, ArrowRight, Users } from "lucide-react";
import { teamData } from "@/lib/team-data";

const icons = { cyan: Crown, purple: Code2 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function TeamSection() {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      <div className="orb-cyan w-[400px] h-[400px] top-0 left-0 opacity-30" />
      <div className="orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div {...fadeUp()}>
            <span className="section-badge mb-6 inline-flex gap-2">
              <Users size={12} /> Leadership Team
            </span>
            <h2 className="section-title mb-4">
              Meet Our <span className="section-title-accent">Co-Founders</span>
            </h2>
            <p className="section-subtitle">
              The visionary minds behind RoyalFinity Technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamData.map((member, i) => {
            const Icon = icons[member.color];
            const colorClasses = {
              cyan:   { text: "text-cyan",   border: "border-cyan/30",   bg: "bg-cyan/10",   ring: "ring-cyan/40",   from: "from-cyan/20",   to: "to-purple/10",  hover: "hover:border-cyan/60" },
              purple: { text: "text-purple", border: "border-purple/30", bg: "bg-purple/10", ring: "ring-purple/40", from: "from-purple/20", to: "to-cyan/10",    hover: "hover:border-purple/60" },
            }[member.color];

            return (
              <motion.div key={member.slug} {...fadeUp(i * 0.1)}>
                <Link
                  href={`/team/${member.slug}`}
                  className={`glass-card border ${colorClasses.border} ${colorClasses.hover} group relative overflow-hidden block transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                >
                  {/* Top gradient banner */}
                  <div className={`h-28 w-full bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} relative overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
                      <Icon className={colorClasses.text} size={16} />
                    </div>
                  </div>

                  <div className="px-7 pb-7">
                    {/* Avatar overlapping banner */}
                    <div className="flex items-end gap-4 -mt-12 mb-5">
                      <div className={`w-24 h-24 rounded-2xl overflow-hidden ring-4 ${colorClasses.ring} ring-offset-2 ring-offset-background shrink-0 shadow-xl`}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="pb-1">
                        <h3 className={`text-lg font-bold font-space ${colorClasses.text}`}>{member.name}</h3>
                        <span className={`text-xs font-black tracking-widest uppercase ${colorClasses.text} opacity-60 font-orbitron`}>{member.role}</span>
                      </div>
                    </div>

                    <div className={`h-px w-full mb-4 bg-gradient-to-r from-current to-transparent ${colorClasses.text} opacity-20`} />

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.shortDesc}</p>

                    <div className={`inline-flex items-center gap-2 text-xs font-semibold ${colorClasses.text} group-hover:gap-3 transition-all duration-300`}>
                      View Profile <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
