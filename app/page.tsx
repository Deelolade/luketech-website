import AboutSection from "@/components/aboutsection";
import HeroSection from "@/components/herosection";
import ProjectsSection from "@/components/projectsSection";
import ServicesSection from "@/components/servicesSection";
import HomeStats from "@/components/ui/homestats";
import WhyChooseUs from "@/components/whychooseusSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeStats />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
    </div>
  )
}
