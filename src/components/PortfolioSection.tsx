"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

const projects = [
  {
    title: "Crictek Industries",
    desc: "Corporate industrial website showcasing manufacturing capabilities and global business presence.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    accent: "cyan",
    image: "/crictek-industries.png",
    url: "https://crictekindustries.com/",
  },
  {
    title: "Shree Dauji Jewels",
    desc: "Elegant jewelry brand website with premium design, product showcase, and optimized UX.",
    tags: ["HTML", "CSS", "JS", "PHP", "Lead Forms"],
    accent: "gold",
    image: "/shree-dauji.png",
    url: "https://shreedaujijewels.com/",
  },
  {
    title: "RR Clamping Tools",
    desc: "Industrial tools website focused on product visibility, lead generation, and business credibility.",
    tags: ["HTML", "CSS", "JS", "PHP", "Portfolio Website"],
    accent: "purple",
    image: "/rr-clamping-tools.png",
    url: "https://rrclampingtools.in/",
  },
];

const accentMap: Record<string, { text: string; border: string; bg: string }> = {
  cyan:   { text: "text-cyan",   border: "border-cyan/30",   bg: "bg-cyan/10" },
  gold:   { text: "text-gold",   border: "border-gold/30",   bg: "bg-gold/10" },
  purple: { text: "text-purple", border: "border-purple/30", bg: "bg-purple/10" },
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      <div className="orb-cyan w-[400px] h-[400px] top-0 right-0 opacity-40" />
      <div className="orb-gold w-[300px] h-[300px] bottom-0 left-0 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex">
              <Layers size={12} /> Our Work
            </span>
            <h2 className="section-title mb-4">
              Recent <span className="section-title-accent">Projects</span>
            </h2>
            <p className="section-subtitle">
              Real-world projects reflecting our expertise in high-performing websites, brands, and digital solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-4 py-8 relative z-20 max-w-[100vw] overflow-x-hidden p-0 m-0">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default PortfolioSection;
