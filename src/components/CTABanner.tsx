"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 text-center cta-banner-bg"
      >
        {/* Animated gradient border glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none cta-banner-inner" />

        {/* Orbs inside */}
        <div className="orb-cyan w-48 h-48 sm:w-64 sm:h-64 -top-16 sm:-top-20 -left-16 sm:-left-20" />
        <div className="orb-purple w-48 h-48 sm:w-64 sm:h-64 -bottom-16 sm:-bottom-20 -right-16 sm:-right-20" />

        <div className="relative z-10">
          <span className="section-badge mb-6 sm:mb-8 inline-flex">
            <Sparkles size={12} /> Limited Time Offer — 70% Off
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight font-orbitron">
            Let&apos;s Build Something{" "}
            <span className="section-title-accent">Extraordinary</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg px-4">
            Ready to transform your digital presence? Get a free consultation and let&apos;s discuss your next big project.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 group cta-btn"
          >
            Get Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
