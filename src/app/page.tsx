import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeatureShowcase from '@/components/sections/FeatureShowcase';
import FutureSection from "@/components/sections/FutureSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureShowcase />
      <FutureSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
