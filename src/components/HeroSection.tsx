"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Cpu } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const stats = [
  { num: "78+", label: "Projects Completed" },
  { num: "45+", label: "Happy Clients" },
  { num: "2+", label: "Years Experience" },
  { num: "70%", label: "Discount Offer" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-45"
          onError={(e) => {
            console.warn('Video failed to load');
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/Futuristic_Code_Animation_Generated.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      {/* Orb glows */}
      <div className="orb-cyan w-[600px] h-[600px] -top-40 -left-40 z-0" />
      <div className="orb-purple w-[500px] h-[500px] top-1/2 -right-60 z-0" />
      <div className="orb-gold w-[300px] h-[300px] bottom-20 left-1/3 z-0" />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="section-badge">
            <Cpu size={12} /> Let&apos;s Grow Together 🚀
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-6 tracking-tight px-4 max-w-[95vw] mx-auto"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-foreground">Struggling to grow your</span>
          <br />
          <span className="section-title-accent">business online?</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-subtitle mb-12 mx-auto text-base md:text-lg"
        >
          At Royalfinity Technologies, we make digital growth simple. From building websites to
          running ads and managing your brand — we handle it all.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 px-2"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="glass-card p-3 sm:p-4 md:p-5 gradient-border"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 stat-number">
                {stat.num}
              </div>
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Magnetic>
            <a href="#contact" className="btn-primary group">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              Start Your Project
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#services" className="btn-outline-gold">
              <Zap size={16} /> Explore Services
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
