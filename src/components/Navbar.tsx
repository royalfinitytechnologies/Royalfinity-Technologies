"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const serviceDropdown = [
  { label: "Website Development",  href: "/services/web-development" },
  { label: "Mobile & Web Apps",    href: "/services/mobile-apps" },
  { label: "Digital Marketing",    href: "/services/digital-marketing" },
  { label: "Branding & Design",    href: "/services/branding-design" },
  { label: "Software & ERP",       href: "/services/software-erp" },
  { label: "AI & Automation",      href: "/services/ai-automation" },
  { label: "E-commerce",           href: "/services/ecommerce" },
];

const navLinks = [
  { label: "Home",      href: "/",          dropdown: false },
  { label: "Services",  href: "/#services", dropdown: true  },
  { label: "About",     href: "/about",     dropdown: false },
  { label: "Portfolio", href: "/#portfolio",dropdown: false },
  { label: "Team",      href: "/team",      dropdown: false },
  { label: "Contact",   href: "/contact",   dropdown: false },
];

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, setTheme }           = useTheme();
  const [mounted, setMounted]         = useState(false);
  const pathname                      = usePathname();
  const dropRef                       = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/#services") return pathname.startsWith("/services");
    return pathname.startsWith(href.replace("/#", "/").split("#")[0]) && href !== "/";
  };

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-cyan/10 shadow-[0_4px_30px_rgba(0,255,255,0.05)]" : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logo} alt="RoyalFinity Technologies" width={40} height={40} className="h-10 w-auto" />
          <span className="font-cinzel text-lg font-bold tracking-wide">
            <span className="brand-royal">RoyalFinity</span>
            <span className="ms-1.5 brand-tech"> Technologies</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.dropdown) {
              return (
                <div key={link.label} ref={dropRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen(o => !o)}
                    className={`text-sm font-medium transition-colors duration-200 relative group flex items-center gap-1 ${active ? "text-cyan" : "text-muted-foreground hover:text-cyan"}`}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan to-purple transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-56 rounded-2xl overflow-hidden custom-dropdown-menu z-50 py-1"
                      >
                    {serviceDropdown.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block px-4 py-2.5 text-sm transition-all duration-150 custom-dropdown-item ${pathname === s.href ? "custom-dropdown-item-active" : ""}`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${active ? "text-cyan" : "text-muted-foreground hover:text-cyan"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan to-purple transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 nav-cta">
            Get Started
          </Link>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/40 transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-cyan/10 px-4 pb-6 pt-2 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(o => !o)}
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-muted-foreground hover:text-cyan transition-colors border-b border-border/30"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 border-b border-border/20 overflow-hidden"
                        >
                            {serviceDropdown.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-sm text-muted-foreground hover:text-cyan transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return link.dropdown ? null : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-muted-foreground hover:text-cyan transition-colors border-b border-border/30"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full justify-center">
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
