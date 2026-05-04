"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";

/* 🔹 DATA */

const galleryImages = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/2024/JULY/26/zPA0JwiW_68eb52a0e2e64d11b2b825a14cef7568.jpg",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
  "https://png.pngtree.com/png-vector/20250813/ourmid/pngtree-woman-hand-showing-ombre-pink-milky-nail-manicure-on-short-natural-png-image_17150567.webp",
];

const services = [
  {
    title: "Bridal Makeup",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    options: [
      { name: "HD Makeup", price: "£300" },
      { name: "Airbrush Makeup", price: "£400" },
      { name: "Trial Makeup", price: "£100" },
    ],
  },
  {
    title: "Hair Styling",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
    options: [
      { name: "Hair Cut", price: "£50" },
      { name: "Hair Spa", price: "£80" },
      { name: "Hair Coloring", price: "£120" },
    ],
  },
  {
    title: "Nail Art",
    category: "Nails",
    image: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/2024/JULY/26/zPA0JwiW_68eb52a0e2e64d11b2b825a14cef7568.jpg",
    options: [
      { name: "Gel Nails", price: "£40" },
      { name: "Acrylic Nails", price: "£60" },
    ],
  },
  {
    title: "Facials",
    category: "Skin",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    options: [
      { name: "Classic Facial", price: "£60" },
      { name: "Gold Facial", price: "£90" },
      { name: "Anti-Aging Facial", price: "£120" },
      { name: "Hydrating Facial", price: "£80" },
    ],
  },
  {
    title: "Manicure",
    category: "Nails",
    image: "https://png.pngtree.com/png-vector/20250813/ourmid/pngtree-woman-hand-showing-ombre-pink-milky-nail-manicure-on-short-natural-png-image_17150567.webp",
    options: [
      { name: "Classic Manicure", price: "£25" },
      { name: "Gel Manicure", price: "£35" },
      { name: "Spa Manicure", price: "£45" },
    ],
  },
  {
    title: "Pedicure",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
    options: [
      { name: "Classic Pedicure", price: "£30" },
      { name: "Spa Pedicure", price: "£50" },
      { name: "Deluxe Pedicure", price: "£65" },
    ],
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Bride",
    review: "Absolutely loved the bridal makeup! The team made my day perfect.",
  },
  {
    name: "Sophia Williams",
    role: "Client",
    review: "Very professional and hygienic. Highly recommend their services.",
  },
  {
    name: "Olivia Brown",
    role: "Model",
    review: "Amazing experience! My skin felt glowing after the facial.",
  },
];

/* 🔹 COMPONENTS */

function Navbar({ onBook }: { onBook: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <h1 className="text-xl font-semibold tracking-wide font-serif">
          Glow Studio
        </h1>
        <div className="hidden md:flex items-center gap-8 text-base uppercase tracking-wide font-serif font-semibold">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#gallery">Work</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <button
          onClick={onBook}
          className="bg-[#D4AF37] text-white px-6 py-3 rounded-none text-sm uppercase tracking-wide hover:opacity-90 transition"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

const SLIDE_INTERVAL = 2500;
const ANIMATION_DURATION = 0.9;
const slides = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Luxury Beauty Experience",
    subtitle: "Indulge in premium salon services",
  },
  {
    image: "https://admin.juicesalons.com//Content/BannerImages/b49caa36-1555-4335-8dde-7a92debcdee9.jpg",
    title: "Expert Stylists",
    subtitle: "Crafting your perfect look",
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Glow Like Never Before",
    subtitle: "Because you deserve the best",
  },
];
const loopedSlides = [...slides, ...slides];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, ANIMATION_DURATION * 1000);
      setTimeout(() => {
        setEnableTransition(true);
      }, ANIMATION_DURATION * 1000 + 50);
    }
  }, [index]);

  const current = slides[index % slides.length];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="flex h-full will-change-transform"
        animate={{ x: `-${index * 100}%` }}
        transition={
          enableTransition
            ? { duration: ANIMATION_DURATION, ease: [0.77, 0, 0.175, 1] }
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

function AnimatedText({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-white max-w-3xl overflow-hidden">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="h-[2px] bg-white mb-6 mx-auto"
      />
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
        className="font-serif text-[42px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-medium mb-6"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
        className="font-sans text-[16px] md:text-[18px] tracking-[0.2em] uppercase opacity-90"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
  },
};

const lineReveal: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 80,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

function About() {
  return (
    <section className="bg-[#F8F5F2] py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
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
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            About Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] mb-6">
            Redefining Beauty & Wellness Experiences
          </motion.h2>
          <motion.div variants={lineReveal} className="h-[2px] bg-black mb-6" />
          <motion.p variants={fadeUp} className="font-sans text-[16px] md:text-[17px] text-gray-600 leading-relaxed mb-8">
            At our salon, we blend artistry with expertise to deliver an unparalleled beauty experience. Our team of skilled professionals is dedicated to enhancing your natural elegance through personalized services, premium products, and a serene environment designed for relaxation.
          </motion.p>
          <motion.button variants={fadeUp} className="font-sans text-sm tracking-[0.15em] uppercase bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceModal({ service, onClose, onBook }: { service: any; onClose: () => void; onBook: (selected: string[]) => void }) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  useEffect(() => { setSelectedOptions([]); }, [service]);
  if (!service) return null;
  const handleSelect = (option: string) => {
    setSelectedOptions((prev) => prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]);
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60]">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
        {service.options.map((opt: any, i: number) => (
          <div
            key={i}
            onClick={() => handleSelect(opt.name)}
            className={`flex justify-between p-2 border-b cursor-pointer rounded ${selectedOptions.includes(opt.name) ? "bg-yellow-100" : "hover:bg-gray-50"}`}
          >
            <span>{opt.name}</span>
            <span>{opt.price}</span>
          </div>
        ))}
        <button
          disabled={selectedOptions.length === 0}
          onClick={() => { onBook(selectedOptions); setSelectedOptions([]); }}
          className="mt-4 w-full bg-yellow-500 py-2 rounded disabled:opacity-50"
        >
          Add to Booking
        </button>
        <button onClick={onClose} className="mt-2 text-sm block mx-auto text-gray-500">Close</button>
      </div>
    </div>
  );
}

function Services({ onBook }: { onBook: (name: string) => void }) {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Makeup", "Hair", "Nails", "Skin"];
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />
        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">Our Services</h2>
        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">Premium beauty treatments tailored for you</p>
      </div>
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${selectedCategory === cat ? "bg-[#D4AF37] text-black" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services
          .filter((s) => selectedCategory === "All" || s.category === selectedCategory)
          .map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(s)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{s.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-[#D4AF37]">{s.options?.[0]?.price}</span>
                  <button className="text-sm text-black hover:underline">View →</button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => { setSelectedService(null); onBook(selectedService?.title || ""); }}
      />
    </section>
  );
}

function OurWorkSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const img2opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);
  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)", opacity: img1Opacity, zIndex: 5 }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1596462502278-27bfdc403348)", opacity: img2opacity, zIndex: 6 }}
        />
        <motion.div
          style={{ y: panelY }}
          className="absolute top-0 left-0 w-full h-[40%] bg-[#f4f1ee] z-10 flex items-center justify-center"
        >
          <h2 className="font-serif text-[42px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-medium text-[#3a3a3a]">Our Gallery</h2>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />
        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">Our Work</h2>
        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">A glimpse of our transformations</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-xl">
            <img src={img} alt="gallery" className="w-full h-64 object-cover hover:scale-110 transition duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />
        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">What Our Clients Say</h2>
        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">Real experiences from our happy clients</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600 text-sm">“{t.review}”</p>
            <div className="mt-4">
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-xs text-gray-400">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Glow Studio</h2>
          <p className="text-gray-400 text-sm">Luxury beauty & hair services designed to make you feel confident and radiant.</p>
        </div>
        <div>
          <h3 className="font-medium mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">📍 London, United Kingdom</p>
          <p className="text-gray-400 text-sm">📞 +44 7700 900123</p>
          <p className="text-gray-400 text-sm">✉️ glowstudio@email.com</p>
        </div>
        <div>
          <h3 className="font-medium mb-4">Working Hours</h3>
          <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM – 7:00 PM</p>
          <p className="text-gray-400 text-sm">Sunday: Closed</p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 flex items-center justify-between">
        <div className="text-gray-500 text-sm">© 2026 Glow Studio. All rights reserved.</div>
        <div className="flex items-center gap-5 text-gray-400">
          <a href="#" className="hover:text-white hover:scale-110 transition"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-white hover:scale-110 transition"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-white hover:scale-110 transition"><FaTwitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

type FormData = { name: string; phone: string; services: string[]; date: string; time: string; };

function BookingModal({ isOpen, onClose, selectedService }: { isOpen: boolean; onClose: () => void; selectedService: string | null }) {
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({ defaultValues: { services: selectedService ? [selectedService] : [], time: "" } });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const selectedTime = watch("time");
  const selectedServices = watch("services") || [];

  useEffect(() => { if (selectedService) setValue("services", [selectedService]); }, [selectedService, setValue]);
  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, data]));
    setLoading(false);
    setSuccess(true);
    reset();
    setTimeout(() => { setSuccess(false); onClose(); }, 2000);
  };

  const serviceOptions = ["Bridal Makeup", "Hair Styling", "Facials", "Nail Art", "Manicure", "Pedicure"];
  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">
      <div className="bg-[#F8F5F2] border border-gray-200 w-full max-w-md rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Book Appointment</h2>
        {success ? (
          <p className="text-green-600 text-center font-medium">Booking Successful!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("name", { required: true })} placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <input {...register("phone", { required: true })} placeholder="Phone Number" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <div>
              <p className="text-sm font-medium mb-2">Select Services</p>
              <div className="grid grid-cols-2 gap-2">
                {serviceOptions.map((s) => (
                  <label key={s} className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer hover:bg-gray-100">
                    <input type="checkbox" value={s} {...register("services", { required: true })} />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">{selectedServices.length} selected</p>
            </div>
            <input type="date" {...register("date", { required: true })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <div>
              <p className="text-sm font-medium mb-2">Select Time</p>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setValue("time", slot)}
                    className={`border rounded-lg py-2 text-sm transition ${selectedTime === slot ? "bg-[#D4AF37] text-black" : "hover:bg-[#D4AF37] hover:text-black"}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <input type="hidden" {...register("time", { required: true })} />
            <button type="submit" disabled={loading} className="w-full bg-[#D4AF37] py-3 rounded-full font-medium hover:scale-105 transition">
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        )}
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 block mx-auto">Close</button>
      </div>
    </div>
  );
}

/* 🔹 MAIN PAGE */

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <main className="bg-[#F8F5F2] text-[#1A1A1A]">
      <Navbar onBook={() => setOpen(true)} />
      <HeroCarousel />
      <About />
      <Services
        onBook={(serviceName: string) => {
          setSelectedService(serviceName);
          setOpen(true);
        }}
      />
      <OurWorkSection />
      <Gallery />
      <Testimonials />
      <Footer />
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        selectedService={selectedService}
      />
    </main>
  );
}
