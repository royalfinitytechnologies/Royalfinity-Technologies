import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerServices = [
  { label: "Web Development",   href: "/services/web-development" },
  { label: "Mobile & Web Apps", href: "/services/mobile-apps" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Branding & Design", href: "/services/branding-design" },
  { label: "AI & Automation",   href: "/services/ai-automation" },
  { label: "E-commerce",        href: "/services/ecommerce" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const footerSupport = [
  { label: "Privacy Policy",    href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1EDe1gc4bf/?mibextid=wwXIfr", label: "Facebook", color: "hover:text-[#1877F2]" },
  { icon: Instagram, href: "https://www.instagram.com/royalfinitytechnologies", label: "Instagram", color: "hover:text-[#E4405F]" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/royalfinitytechnologies/", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  { icon: Twitter, href: "https://twitter.com/royalfinitytech", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  { icon: Youtube, href: "https://youtube.com/@royalfinitytechnologies", label: "YouTube", color: "hover:text-[#FF0000]" },
];

const Footer = () => (
  <footer className="relative border-t border-cyan/10 pt-16 pb-8 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
    <div className="orb-cyan w-[300px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src={logo} alt="RoyalFinity" width={40} height={40} className="h-10 w-auto" />
            <span className="font-cinzel text-base font-bold tracking-wide">
              <span className="brand-royal">RoyalFinity</span>
              <span className="ms-1 brand-tech"> Technologies</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Empowering businesses with technology and creativity. We build trust and long-term growth for every client.
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-9 h-9 rounded-lg bg-muted/20 border border-border/30 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:border-current hover:bg-current/10 hover:scale-110`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-cyan mb-5 font-orbitron">Services</h4>
          <ul className="space-y-2.5">
            {footerServices.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-muted-foreground hover:text-cyan transition-colors duration-200">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-purple mb-5 font-orbitron">Company</h4>
          <ul className="space-y-2.5">
            {footerCompany.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-muted-foreground hover:text-purple transition-colors duration-200">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-gold mb-5 font-orbitron">Support</h4>
          <ul className="space-y-2.5">
            {footerSupport.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground/80">© 2025 Royalfinity Technologies. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/70">Designed & Developed with ❤️ in India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
