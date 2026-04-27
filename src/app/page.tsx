import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#F8F5F2] text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
