"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurWorkSection() {
  const ref = useRef(null);

  // Scroll progress tied to section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /**
   * White panel movement (pinned scroll wipe)
   */
  const panelY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  /**
   * Image 1 gets covered by white panel (top-down wipe)
   */
  const img1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);

  /**
   * Image 2 reveals as panel moves up
   */
  const img2opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      {/* PINNED VIEW */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* IMAGE 1 (BASE LAYER) */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)",
            opacity: img1Opacity,
            zIndex: 5,
          }}
        />

        {/* IMAGE 2 (UNDER LAYER) */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1596462502278-27bfdc403348)",
            opacity: img2opacity,
            zIndex: 6,
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center">
              {/* <h3 className="text-[36px] font-light leading-snug">
                Flat 30% off on <br />
                your first visit
              </h3> */}
            </div>
          </div>
        </motion.div>

        {/* WHITE PANEL (MAIN TRANSITION ELEMENT) */}
        <motion.div
          style={{ y: panelY }}
          className="absolute top-0 left-0 w-full h-[40%] bg-[#f4f1ee] z-10 flex items-center justify-center"
        >
          <h2 className="font-serif text-[42px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-medium text-[#3a3a3a]">
            Our Gallery
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
