import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="bg-[#F8F5F2] text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
