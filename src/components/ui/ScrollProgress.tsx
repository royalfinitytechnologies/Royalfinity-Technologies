"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 md:h-1.5 z-[9999] origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-gold-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
      style={{ scaleX }}
    />
  );
}
