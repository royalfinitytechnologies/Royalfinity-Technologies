"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, ChevronDown, Check } from "lucide-react";

const PHONE = "919211816999";

const contactInfo = [
  { icon: MapPin, title: "Address",        detail: "5C/15, New Industrial Township 5, Faridabad, Haryana 121001", color: "text-cyan",   bg: "bg-cyan/10" },
  { icon: Mail,   title: "Email",          detail: "info@royalfinitytechnologies.com",                            color: "text-purple", bg: "bg-purple/10" },
  { icon: Phone,  title: "Phone",          detail: "+91 92118 16999",                                             color: "text-gold",   bg: "bg-gold/10" },
  { icon: Clock,  title: "Business Hours", detail: "Mon - Sat: 10:00 AM - 7:00 PM IST",                          color: "text-cyan",   bg: "bg-cyan/10" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
  "Branding & Design",
  "Software & ERP",
  "AI & Automation",
  "E-commerce",
  "SEO & Content",
];

const ContactSection = () => {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [phone, setPhone]       = useState("");
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen]         = useState(false);
  const [details, setDetails]   = useState("");
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!phone.trim() || !/^\+?[\d\s-()]+$/.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }
    
    const svc = selected || "Not specified";
    const msg = [
      `Hi RoyalFinity Technologies!`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${svc}`,
      `Project Details: ${details || "—"}`,
    ].join("\n");
    
    try {
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
      alert('Failed to open WhatsApp. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="orb-purple w-[500px] h-[500px] top-0 left-0 opacity-40" />
      <div className="orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex gap-2">
              <Phone size={12} /> Get In Touch
            </span>
            <h2 className="section-title mb-4">
              Let&apos;s Create{" "}
              <span className="section-title-accent">Something Extraordinary</span>
            </h2>
            <p className="section-subtitle">
              Ready to take your business to the next level? Our team is here to guide you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="glass-card border border-border/50 p-5 flex items-start gap-4 hover:border-cyan/20 transition-all">
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={item.color} size={18} />
                </div>
                <div>
                  <div className={`text-xs font-bold tracking-widest uppercase ${item.color} mb-1`}>{item.title}</div>
                  <div className="text-sm text-foreground/70">{item.detail}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-card border border-cyan/10 p-5 sm:p-8 contact-form-bg relative z-10"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">Phone Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
              </div>

              {/* Custom dropdown */}
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                  Service Interested In
                </label>
                <div ref={dropRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    className={`w-full px-4 py-3 rounded-xl text-sm contact-input flex items-center justify-between transition-all ${open ? "border-cyan/40 shadow-[0_0_12px_rgba(0,255,255,0.08)]" : ""}`}
                  >
                    <span className={selected ? "text-foreground" : "text-muted-foreground"}>
                      {selected || "Select a service"}
                    </span>
                    <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>

                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-xl overflow-hidden custom-dropdown-menu"
                    >
                      {services.map((s) => {
                        const active = selected === s;
                        return (
                          <button
                            key={s} type="button"
                            onClick={() => { setSelected(s); setOpen(false); }}
                            className={`w-full px-4 py-3 text-sm text-left flex items-center justify-between transition-all duration-150 custom-dropdown-item ${active ? "custom-dropdown-item-active" : ""}`}
                          >
                            {s}
                            {active && <Check size={14} className="text-cyan shrink-0" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">Project Details</label>
                <textarea rows={4} value={details} onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 rounded-xl text-sm contact-input resize-none" />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group contact-submit">
                <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                Send Message &amp; Start Project
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
