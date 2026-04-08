"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PanInfo, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel() {
  // Dummy images for 10 projects
  const images = Array.from(
    { length: 10 },
    (_, i) => `https://picsum.photos/seed/project${i + 13}/800/600`
  );

  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation functions
  const nextImage = useCallback(() => {
    setActiveIndex((prev: number) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActiveIndex((prev: number) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-rotate logic
  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(nextImage, 3500);
    return () => clearInterval(intervalId);
  }, [isHovered, nextImage]);

  // Handle Drag/Swipe
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -40) {
      nextImage();
    } else if (info.offset.x > 40) {
      prevImage();
    }
  };

  const isMobile = windowWidth > 0 && windowWidth < 768;

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] flex flex-col items-center justify-center overflow-hidden bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-full flex items-center justify-center flex-1"
        style={{ perspective: "1500px" }}
      >
        {/* Navigation Arrows - Only on desktop/tablet */}
        {!isMobile && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-8 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-800 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-8 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-800 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((src, index) => {
            // Calculate shortest distance in circular array
            let diff = index - activeIndex;
            if (diff > Math.floor(images.length / 2)) {
              diff -= images.length;
            } else if (diff < -Math.floor(images.length / 2)) {
              diff += images.length;
            }

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 4; 

            return (
              <motion.div
                key={index}
                className="absolute pointer-events-auto rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center w-[220px] h-[155px] sm:w-[350px] sm:h-[240px] md:w-[480px] md:h-[340px]"
                initial={false}
                animate={{
                  x: `${diff * (isMobile ? 55 : 85)}%`,
                  y: isActive ? -15 : 0,
                  scale: isActive ? 1 : Math.max(0.4, 1 - Math.abs(diff) * (isMobile ? 0.22 : 0.12)),
                  rotateY: -diff * (isMobile ? 12 : 28),
                  z: -Math.abs(diff) * (isMobile ? 80 : 150),
                  opacity: isVisible ? 1 - Math.abs(diff) * 0.2 : 0,
                  filter: isActive ? "blur(0px)" : `blur(${Math.abs(diff) * 1.5}px)`,
                  zIndex: images.length - Math.abs(diff),
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileHover={isActive ? { scale: 1.05, y: -25 } : undefined}
                style={{
                    originX: 0.5,
                    originY: 0.5,
                }}
              >
                {!isActive && (
                  <div
                    className="absolute inset-0 bg-black/10 hover:bg-black/0 z-10 transition-colors duration-300 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  />
                )}
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex gap-2.5 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ease-in-out shadow-sm ${
              activeIndex === index
                ? "bg-cyan-400 w-8 md:w-10"
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
