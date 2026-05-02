"use client";

import { galleryImages } from "@/data/gallery";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />

        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">
          Our Work
        </h2>

        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">
          A glimpse of our transformations
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
