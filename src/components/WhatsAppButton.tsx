"use client";

import { motion } from "framer-motion";

const PHONE  = "919211816999";
const WA_URL = `https://wa.me/${PHONE}?text=Hi%20RoyalFinity%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

const FloatingBtn = ({
  href, target, label, pulse, delay, children,
}: {
  href: string; target?: string; label: string;
  pulse: string; delay: number; children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    aria-label={label}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    whileTap={{ scale: 0.93 }}
    className="fab-btn group"
  >
    {/* Slide-out label */}
    <span className="fab-label">{label}</span>

    {/* Icon circle */}
    <span className="fab-icon">
      {children}
      <span className={pulse} />
    </span>
  </motion.a>
);

const WhatsAppButton = () => (
  <div className="fixed bottom-4 sm:bottom-6 right-0 z-[999] flex flex-col items-end gap-2 sm:gap-3 pr-3 sm:pr-4">

    {/* Call */}
    <FloatingBtn href="tel:+919211816999" label="Call Us" pulse="call-pulse" delay={1.3}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="24" cy="24" r="22" fill="#00BFBF" />
        <path d="M31.5 28.8c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.7-.7-.9-.7h-.8c-.2 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.3 0 1.9 1.4 3.8 1.6 4 .2.3 2.8 4.3 6.9 6 1 .4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.8-.1 2.4-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5Z" fill="#000" />
        <path d="M29 14.5a9 9 0 0 1 0 12.7" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M31.5 12a13 13 0 0 1 0 17.7" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    </FloatingBtn>

    {/* WhatsApp */}
    <FloatingBtn href={WA_URL} target="_blank" label="Chat Us" pulse="whatsapp-pulse" delay={1.5}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4Z"
          fill="#25D366" />
        <path fillRule="evenodd" clipRule="evenodd"
          d="M33.5 28.4c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.5 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8 0 2.2 1.7 4.4 1.9 4.7.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 1.1.3 2.2.3 3 .2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5Z"
          fill="white" />
      </svg>
    </FloatingBtn>

  </div>
);

export default WhatsAppButton;
