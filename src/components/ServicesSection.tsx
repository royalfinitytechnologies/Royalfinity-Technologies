"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Megaphone, Palette, Monitor, Bot, Check, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Turn your idea into reality",
    color: "cyan",
    border: "border-cyan/25 hover:border-cyan/60",
    iconBg: "bg-cyan/10",
    iconColor: "text-cyan",
    features: ["Custom Business Websites", "E-commerce Stores that Sell", "CMS Platforms (WordPress, Shopify)", "Landing Pages that Convert"],
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    tagline: "Apps built just for your users",
    color: "purple",
    border: "border-purple/25 hover:border-purple/60",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    features: ["Android (Java, Kotlin)", "iOS (Swift, Objective-C)", "High performance & security", "Best for startups & brands"],
    href: "/services/mobile-apps",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Grow your reach & revenue",
    color: "gold",
    border: "border-gold/25 hover:border-gold/60",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    features: ["Google & Social Media Ads", "SEO to Rank & Be Found", "Creative Social Media Marketing", "Content that Builds Trust"],
    href: "/services/digital-marketing",
  },
  {
    icon: Palette,
    title: "Graphic & UI/UX Design",
    tagline: "Make your brand unforgettable",
    color: "pink",
    border: "border-pink/25 hover:border-pink/60",
    iconBg: "bg-pink/10",
    iconColor: "text-pink",
    features: ["Logo & Brand Identity", "UI/UX for Websites & Apps", "Graphics & Motion Designs", "Brand Guidelines"],
    href: "/services/branding-design",
  },
  {
    icon: Monitor,
    title: "Software & ERP Solutions",
    tagline: "Work smarter, not harder",
    color: "cyan",
    border: "border-cyan/25 hover:border-purple/50",
    iconBg: "bg-cyan/10",
    iconColor: "text-cyan",
    features: ["Custom Software Development", "ERP & CRM Solutions", "Cloud-Based Applications", "Business Automation"],
    href: "/services/software-erp",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    tagline: "Step into the future",
    color: "purple",
    border: "border-purple/25 hover:border-gold/50",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    features: ["Smart AI Chatbots", "Business Process Automation", "Data-Driven Analytics", "AI-Powered Engagement"],
    href: "/services/ai-automation",
  },
  {
    icon: Globe,
    title: "E-commerce",
    tagline: "Sell online with ease",
    color: "gold",
    border: "border-gold/25 hover:border-gold/60",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    features: ["Custom Online Stores", "Shopify & WooCommerce", "Payment Integration", "Inventory Management"],
    href: "/services/ecommerce",
  },
];

// Duplicate for seamless infinite loop
const allServices = [...services, ...services];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="orb-cyan w-[500px] h-[500px] top-0 left-0 opacity-50" />
      <div className="orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-50" />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-6 inline-flex">
              <Sparkles size={12} /> Premium Services
            </span>
            <h2 className="section-title mb-4">
              What We <span className="section-title-accent">Offer</span>
            </h2>
            <p className="section-subtitle">
              From building your brand to growing your sales — we take care of it all.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite marquee carousel */}
      <div className="marquee-wrapper relative z-10">
        <div className="marquee-track">
          {allServices.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className={`glass-card border ${service.border} transition-all duration-300 group service-card`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={service.iconColor} size={26} />
              </div>

              <h3 className="text-base font-bold text-foreground mb-1 font-space">
                {service.title}
              </h3>
              <p className={`text-xs font-semibold mb-5 ${service.iconColor} opacity-80 tracking-wide`}>
                ✦ {service.tagline}
              </p>

              <ul className="space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check size={14} className={`${service.iconColor} mt-0.5 shrink-0 opacity-80`} />
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
