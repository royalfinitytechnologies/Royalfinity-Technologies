"use client";

import { motion } from "framer-motion";
import { FileText, CreditCard, User, Layers, Headphones, AlertTriangle, RefreshCw, AlertOctagon, Mail, Phone, ArrowRight } from "lucide-react";

const sections = [
  {
    num: "01", icon: Layers, color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    title: "Services",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        We provide digital marketing, web development, UI/UX design, and related services as described on our website.
        Service delivery timelines and scope will be communicated individually for each project.
      </p>
    ),
  },
  {
    num: "02", icon: CreditCard, color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    title: "Booking & Payment",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Offers, discounts, and packages are valid as specified on the landing page or during promotions.
        Payments are required as per the agreed terms before service initiation.
      </p>
    ),
  },
  {
    num: "03", icon: User, color: "text-gold", bg: "bg-gold/10", border: "border-gold/20",
    title: "User Responsibility",
    content: (
      <ul className="space-y-2.5">
        {[
          "Users must provide accurate and complete information when submitting forms or contacting us",
          "Users are responsible for maintaining confidentiality of any account credentials provided",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04", icon: FileText, color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    title: "Intellectual Property",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        All content, designs, graphics, and materials provided by Royalfinity Technologies remain our intellectual
        property until full payment is received. Users may not reproduce, distribute, or use our materials without
        prior permission.
      </p>
    ),
  },
  {
    num: "05", icon: Headphones, color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    title: "Post-Delivery Support",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        We offer support as described for each package (e.g., 3 months free support), including minor modifications
        and technical assistance. Additional work beyond the support period will be charged separately.
      </p>
    ),
  },
  {
    num: "06", icon: AlertTriangle, color: "text-gold", bg: "bg-gold/10", border: "border-gold/20",
    title: "Limitation of Liability",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Royalfinity Technologies will not be liable for indirect, incidental, or consequential damages arising from
        use of our website or services. We make every effort to provide accurate information but do not guarantee
        uninterrupted service.
      </p>
    ),
  },
  {
    num: "07", icon: RefreshCw, color: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/20",
    title: "Changes to Terms",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        We reserve the right to modify these Terms &amp; Conditions at any time. Continued use of our services
        after changes constitutes acceptance of the updated terms.
      </p>
    ),
  },
  {
    num: "08", icon: AlertOctagon, color: "text-pink", bg: "bg-pink/10", border: "border-pink/25",
    title: "No Refund Policy",
    content: (
      <div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-pink/5 border border-pink/20 mb-3">
          <AlertOctagon className="text-pink shrink-0 mt-0.5" size={18} />
          <p className="text-sm font-semibold text-foreground">Important Notice</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All payments made for our services, packages, or offers are <span className="text-pink font-semibold">non-refundable</span>.
          Once the service has been initiated or the package has been booked, no refunds, partial or full, will be provided.
          We encourage users to carefully review the package details and clarify any doubts before making a payment.
        </p>
      </div>
    ),
  },
  {
    num: "09", icon: Mail, color: "text-purple", bg: "bg-purple/10", border: "border-purple/20",
    title: "Contact Us",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        For any questions or clarifications regarding these Terms &amp; Conditions, please contact us using the details below.
      </p>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function TermsPage() {
  return (
    <main className="pt-20 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="orb-purple w-[500px] h-[500px] -top-40 -left-40 opacity-40" />
        <div className="orb-cyan w-[400px] h-[400px] top-1/2 -right-60 opacity-25" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()}>
            <span className="section-badge mb-8 inline-flex gap-2">
              <FileText size={13} /> Terms &amp; Conditions
            </span>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              Our Terms of <span className="section-title-accent">Service</span>
            </h1>
            <p className="section-subtitle mx-auto max-w-2xl">
              By accessing our website and services, you agree to comply with the following terms and conditions.
              Please read them carefully before proceeding.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Effective Date: <span className="text-cyan font-semibold">29 September 2025</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className={`glass-card border ${s.border} p-8 group`}>
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <s.icon className={s.color} size={22} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-black tracking-widest font-orbitron ${s.color} opacity-60`}>{s.num}</span>
                      <h2 className="text-lg font-bold font-space text-foreground">{s.title}</h2>
                    </div>
                    {s.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="orb-cyan w-[300px] h-[300px] top-0 right-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto">
            <div className="glass-card border border-purple/20 p-8">
              <h3 className="text-lg font-bold font-space text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                  <Phone className="text-purple" size={18} />
                </div>
                Get in Touch
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="mailto:info@royalfinitytechnologies.com"
                  className="glass-card border border-cyan/20 p-5 flex items-center gap-4 hover:border-cyan/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-cyan" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-cyan mb-0.5">Email</div>
                    <div className="text-sm text-foreground/80">info@royalfinitytechnologies.com</div>
                  </div>
                </a>
                <a href="tel:+919211816999"
                  className="glass-card border border-gold/20 p-5 flex items-center gap-4 hover:border-gold/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-gold mb-0.5">Phone</div>
                    <div className="text-sm text-foreground/80">+91 92118 16999</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Agreement note ── */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto">
            <div className="glass-card border border-border/30 p-6 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                By using our website and services, you agree to abide by these Terms &amp; Conditions.
              </p>
              <a href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-cyan hover:opacity-80 transition-opacity">
                Have questions? Contact us <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
