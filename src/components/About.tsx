"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#F8F5F2] py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[450px] md:h-[550px] overflow-hidden"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Salon Interior"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-xl"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] mb-6"
          >
            Redefining Beauty & Wellness Experiences
          </motion.h2>

          {/* Divider */}
          <motion.div variants={lineReveal} className="h-[2px] bg-black mb-6" />

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-[16px] md:text-[17px] text-gray-600 leading-relaxed mb-8"
          >
            At our salon, we blend artistry with expertise to deliver an
            unparalleled beauty experience. Our team of skilled professionals is
            dedicated to enhancing your natural elegance through personalized
            services, premium products, and a serene environment designed for
            relaxation.
          </motion.p>

          {/* Button */}
          <motion.button
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.15em] uppercase bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* 🔹 Animation Variants */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

const lineReveal: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 80,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};
