"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SLIDE_INTERVAL = 2500;
const ANIMATION_DURATION = 0.9;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Luxury Beauty Experience",
    subtitle: "Indulge in premium salon services",
  },
  {
    image:
      "https://admin.juicesalons.com//Content/BannerImages/b49caa36-1555-4335-8dde-7a92debcdee9.jpg",
    title: "Expert Stylists",
    subtitle: "Crafting your perfect look",
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Glow Like Never Before",
    subtitle: "Because you deserve the best",
  },
];

// duplicate ONLY for images
const loopedSlides = [...slides, ...slides];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // seamless reset
  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, ANIMATION_DURATION * 1000);

      setTimeout(
        () => {
          setEnableTransition(true);
        },
        ANIMATION_DURATION * 1000 + 50,
      );
    }
  }, [index]);

  //single source of truth for content
  const current = slides[index % slides.length];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* IMAGE TRACK */}
      <motion.div
        className="flex h-full will-change-transform"
        animate={{ x: `-${index * 100}%` }}
        transition={
          enableTransition
            ? {
                duration: ANIMATION_DURATION,
                ease: [0.77, 0, 0.175, 1],
              }
            : { duration: 0 }
        }
      >
        {loopedSlides.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </motion.div>

      {/* TEXT LAYER (separate → no duplication) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 md:px-12">
        <AnimatedText
          key={index % slides.length}
          title={current.title}
          subtitle={current.subtitle}
        />
      </div>
    </section>
  );
}

function AnimatedText({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-white max-w-3xl overflow-hidden">
      {/* Divider */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="h-[2px] bg-white mb-6 mx-auto"
      />

      {/* Title */}
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.15,
        }}
        className="font-serif text-[42px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-medium mb-6"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.3,
        }}
        className="font-sans text-[16px] md:text-[18px] tracking-[0.2em] uppercase opacity-90"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
