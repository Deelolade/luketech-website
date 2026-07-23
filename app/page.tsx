import AboutSection from "@/components/aboutsection";
import HeroSection from "@/components/herosection";
import ServicesSection from "@/components/servicesSection";
import HomeStats from "@/components/ui/homestats";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeStats />
      <AboutSection />
      <ServicesSection />
    </div>
  )
}
