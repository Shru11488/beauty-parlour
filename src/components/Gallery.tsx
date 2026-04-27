"use client";

import { galleryImages } from "@/data/gallery";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 md:px-10 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
        <p className="text-gray-500 mt-2">A glimpse of our transformations</p>
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
