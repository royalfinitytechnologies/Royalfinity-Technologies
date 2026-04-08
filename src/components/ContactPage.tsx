"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, ChevronDown, Check,
  MessageSquare, Building2, HelpCircle, Plus, Minus,
} from "lucide-react";

const PHONE = "919211816999";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    desc: "Speak directly with our experts",
    detail: "+91 92118 16999",
    color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    href: "tel:+919211816999",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Send us your detailed requirements",
    detail: "info@royalfinitytechnologies.com",
    color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    href: "mailto:info@royalfinitytechnologies.com",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    desc: "Quick messages and file sharing",
    detail: "+91 92118 16999",
    color: "text-gold", bg: "bg-gold/10", border: "border-gold/20",
    href: `https://wa.me/${PHONE}`,
  },
  {
    icon: Clock,
    title: "Business Hours",
    desc: "We are available",
    detail: "Mon – Sat | 10:00 AM – 7:00 PM IST",
    color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    href: null,
  },
];

const offices = [
  {
    name: "Main Office",
    address: "5C/15, New Industrial Township 5, Faridabad, Haryana 121001",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    phone: "+91 92118 16999",
    color: "text-cyan", border: "border-cyan/20", bg: "bg-cyan/10",
  },
  {
    name: "Development Center",
    address: "50/102, New Industrial Township 5, Faridabad, Haryana 121001",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    email: "info@royalfinitytechnologies.com",
    color: "text-purple", border: "border-purple/20", bg: "bg-purple/10",
  },
];

const services = [
  "Website Development", "Mobile App Development", "Digital Marketing",
  "Branding & Design", "Software & ERP", "AI & Automation", "E-commerce", "SEO & Content",
];

const budgets = [
  "Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000", "Above ₹5,00,000",
];

const faqs = [
  { q: "How can I get in touch with Royalfinity Technologies?", a: "You can reach us via phone, email, WhatsApp, or by filling out the contact form on this page. We typically respond within a few hours during business hours." },
  { q: "Where is Royalfinity Technologies located?", a: "We are based in Faridabad, Haryana, India. Our main office is at 5C/15, New Industrial Township 5, Faridabad, Haryana 121001." },
  { q: "What services can I contact you for?", a: "We offer Website Development, Mobile Apps, Digital Marketing, Branding & Design, Software & ERP Solutions, AI & Automation, E-commerce, and SEO services." },
  { q: "How soon will I get a response after contacting you?", a: "We aim to respond to all inquiries within 2–4 business hours. For urgent matters, WhatsApp or phone call is the fastest way to reach us." },
  { q: "Do you only serve clients in India?", a: "No, we work with clients globally. While we are based in India, we have successfully delivered projects for clients across the US, UK, UAE, and other countries." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// Custom dropdown component
function Dropdown({ options, value, onChange, placeholder }: {
  options: string[]; value: string; onChange: (v: string) => void; placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(o => !o)}
        className={`w-full px-4 py-3 rounded-xl text-sm contact-input flex items-center justify-between ${open ? "border-cyan/40" : ""}`}>
        <span className={value ? "text-foreground" : "text-muted-foreground"}>{value || placeholder}</span>
        <ChevronDown size={15} className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-xl overflow-hidden custom-dropdown-menu">
          {options.map((o) => (
            <button key={o} type="button" onClick={() => { onChange(o); setOpen(false); }}
              className={`w-full px-4 py-3 text-sm text-left flex items-center justify-between transition-all duration-150 custom-dropdown-item ${value === o ? "custom-dropdown-item-active" : ""}`}>
              {o}
              {value === o && <Check size={13} className="text-cyan shrink-0" />}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [company, setCompany]     = useState("");
  const [service, setService]     = useState("");
  const [budget, setBudget]       = useState("");
  const [details, setDetails]     = useState("");
  const [openFaq, setOpenFaq]     = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi RoyalFinity Technologies!`,
      ``,
      `*Name:* ${firstName} ${lastName}`,
      `*Email:* ${email || "—"}`,
      `*Phone:* ${phone || "—"}`,
      `*Company:* ${company || "—"}`,
      `*Service:* ${service || "—"}`,
      `*Budget:* ${budget || "—"}`,
      `*Project Details:* ${details || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="orb-cyan w-[500px] h-[500px] -top-40 -left-40 opacity-40" />
        <div className="orb-purple w-[400px] h-[400px] top-1/2 -right-60 opacity-30" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()}>
            <span className="section-badge mb-8 inline-flex gap-2">
              <Phone size={13} /> Get In Touch
            </span>
            <h1 className="section-title text-5xl md:text-7xl mb-6">
              We&apos;re Here to{" "}
              <span className="section-title-accent">Help You Grow</span>
            </h1>
            <p className="section-subtitle mx-auto max-w-2xl">
              At Royalfinity Technologies, we believe in building real connections.
              Whether it&apos;s a new idea or a growing project, our team is here to
              listen, guide, and support you at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Methods ── */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <MessageSquare size={12} /> Contact Options
              </span>
              <h2 className="section-title mb-4">
                Choose Your Preferred{" "}
                <span className="section-title-accent">Contact Method</span>
              </h2>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {contactMethods.map((m, i) => (
              <motion.div key={m.title} {...fadeUp(i * 0.08)}>
                {m.href ? (
                  <a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`glass-card border ${m.border} p-7 text-center group hover:scale-[1.03] transition-all duration-300 block`}>
                    <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <m.icon className={m.color} size={24} />
                    </div>
                    <h3 className={`font-bold text-sm mb-1 font-space ${m.color}`}>{m.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{m.desc}</p>
                    <p className={`text-xs font-semibold ${m.color}`}>{m.detail}</p>
                  </a>
                ) : (
                  <div className={`glass-card border ${m.border} p-7 text-center`}>
                    <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center mx-auto mb-4`}>
                      <m.icon className={m.color} size={24} />
                    </div>
                    <h3 className={`font-bold text-sm mb-1 font-space ${m.color}`}>{m.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{m.desc}</p>
                    <p className={`text-xs font-semibold ${m.color}`}>{m.detail}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb-purple w-[400px] h-[400px] top-0 left-0 opacity-30" />
        <div className="orb-cyan w-[300px] h-[300px] bottom-0 right-0 opacity-25" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Send size={12} /> Project Details
              </span>
              <h2 className="section-title mb-4">
                Send Us a <span className="section-title-accent">Message</span>
              </h2>
              <p className="section-subtitle">
                Fill out the form below and we&apos;ll get back to you promptly.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.1)} className="max-w-2xl mx-auto">
            <div className="glass-card border border-cyan/15 p-8 md:p-10 relative z-10">
              <form className="space-y-5" onSubmit={handleSubmit}>

                {/* First + Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                      First Name <span className="text-cyan">*</span>
                    </label>
                    <input required type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                      placeholder="First name" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                      Last Name <span className="text-cyan">*</span>
                    </label>
                    <input required type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                      placeholder="Last name" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                      Email Address <span className="text-cyan">*</span>
                    </label>
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                      Phone Number
                    </label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                    Company Name
                  </label>
                  <input type="text" value={company} onChange={e => setCompany(e.target.value)}
                    placeholder="Your company name" className="w-full px-4 py-3 rounded-xl text-sm contact-input" />
                </div>

                {/* Service */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                    Service Required <span className="text-cyan">*</span>
                  </label>
                  <Dropdown options={services} value={service} onChange={setService} placeholder="Select a service" />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                    Project Budget
                  </label>
                  <Dropdown options={budgets} value={budget} onChange={setBudget} placeholder="Select budget range" />
                </div>

                {/* Details */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block tracking-wider uppercase">
                    Project Details
                  </label>
                  <textarea rows={4} value={details} onChange={e => setDetails(e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl text-sm contact-input resize-none" />
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group contact-submit">
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  Send Message &amp; Start Your Project
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Office Locations ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb-gold w-[400px] h-[400px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <Building2 size={12} /> Our Offices
              </span>
              <h2 className="section-title mb-4">
                Visit Our <span className="section-title-accent">Locations</span>
              </h2>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <motion.div key={o.name} {...fadeUp(i * 0.1)}
                className={`glass-card border ${o.border} p-8 group hover:scale-[1.02] transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${o.bg} flex items-center justify-center`}>
                    <Building2 className={o.color} size={18} />
                  </div>
                  <h3 className={`font-bold font-space ${o.color}`}>{o.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className={`${o.color} mt-0.5 shrink-0 opacity-70`} />
                    <span className="text-sm text-muted-foreground">{o.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className={`${o.color} shrink-0 opacity-70`} />
                    <span className="text-sm text-muted-foreground">{o.hours}</span>
                  </div>
                  {o.phone && (
                    <div className="flex items-center gap-2.5">
                      <Phone size={14} className={`${o.color} shrink-0 opacity-70`} />
                      <a href={`tel:${o.phone}`} className={`text-sm font-semibold ${o.color} hover:opacity-80 transition-opacity`}>{o.phone}</a>
                    </div>
                  )}
                  {o.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail size={14} className={`${o.color} shrink-0 opacity-70`} />
                      <a href={`mailto:${o.email}`} className={`text-sm font-semibold ${o.color} hover:opacity-80 transition-opacity`}>{o.email}</a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <span className="section-badge mb-6 inline-flex gap-2">
                <HelpCircle size={12} /> Quick Answers
              </span>
              <h2 className="section-title mb-4">
                Frequently Asked <span className="section-title-accent">Questions</span>
              </h2>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="glass-card border border-border/40 overflow-hidden">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors">
                  <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                  <span className="shrink-0 text-gold">
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
