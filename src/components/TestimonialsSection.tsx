"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Crictek Industries",
    text: "RoyalFinity Technologies transformed our online presence completely. Their team delivered a stunning website that perfectly showcases our industrial capabilities.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Shree Dauji Jewels",
    text: "The website they built for our jewelry brand is elegant, fast, and converts visitors into customers. Highly professional team!",
    rating: 5,
  },
  {
    name: "Amit Gupta",
    company: "TechStart Solutions",
    text: "From concept to launch, RoyalFinity handled everything flawlessly. Our mobile app has received amazing feedback from users.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/3 to-transparent pointer-events-none" />
      <div className="orb-cyan w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex">⭐ Testimonials</span>
            <h2 className="section-title mb-4">
              What Our Clients <span className="section-title-accent">Say</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass-card border border-cyan/15 p-6 sm:p-8 lg:p-10 text-center relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 via-transparent to-purple/5 pointer-events-none" />

              <Quote className="text-cyan/30 mx-auto mb-4 sm:mb-6" size={36} />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-foreground/80 italic mb-6 sm:mb-8 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full testimonial-avatar flex items-center justify-center mx-auto mb-3"
              >
                <span className="font-black text-base sm:text-lg font-orbitron">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div className="font-bold text-foreground font-space text-sm sm:text-base">{t.name}</div>
              <div className="text-xs sm:text-sm text-cyan mt-1">{t.company}</div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              type="button"
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-border hover:border-cyan/50 flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx ? "w-6 h-2 bg-cyan" : "w-2 h-2 bg-border hover:bg-cyan/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-border hover:border-cyan/50 flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
