"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, BarChart3, TrendingUp } from "lucide-react";
import Image from "next/image";

const steps = [
  { icon: Search, label: "Discover & Understand", desc: "Learn about your business, goals, audience, and challenges.", color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20" },
  { icon: BarChart3, label: "Research & Insights", desc: "Analyze market trends, competitors, and opportunities.", color: "text-purple", bg: "bg-purple/10", border: "border-purple/20" },
  { icon: PenTool, label: "Strategize & Plan", desc: "Craft customized strategies tailored to your needs.", color: "text-gold", bg: "bg-gold/10", border: "border-gold/20" },
  { icon: Code, label: "Design & Develop", desc: "Create innovative, high-quality solutions with expert precision.", color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20" },
  { icon: Rocket, label: "Test & Optimize", desc: "Monitor performance, refine strategies, and fix any gaps.", color: "text-purple", bg: "bg-purple/10", border: "border-purple/20" },
  { icon: TrendingUp, label: "Future-Ready Growth", desc: "Ensure solutions are scalable and ready for evolving needs.", color: "text-gold", bg: "bg-gold/10", border: "border-gold/20" },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent pointer-events-none" />
      <div className="orb-purple w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex">🏆 Why Choose Us</span>
            <h2 className="section-title mb-4">
              Transforming Ideas{" "}
              <span className="section-title-accent">into Impact</span>
            </h2>
            <p className="section-subtitle">
              At RoyalFinity Technologies, we believe in creating digital solutions that truly make a difference.
              Our focus is on understanding your business, anticipating challenges, and delivering results that last.
            </p>
          </motion.div>
        </div>

        {/* GIF workflow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card border border-purple/20 p-4 md:p-6 rounded-2xl overflow-hidden">
            <Image
              src="/about-img.gif"
              alt="Our Process — Transforming Ideas into Impact"
              width={1200}
              height={500}
              className="w-full h-auto rounded-xl object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card border ${step.border} p-5 sm:p-6 lg:p-7 group hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <step.icon className={step.color} size={18} />
                </div>
                <span className={`text-xs font-black tracking-widest uppercase ${step.color} opacity-60 font-orbitron`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 font-space">
                {step.label}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
