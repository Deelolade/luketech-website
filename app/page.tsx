import AboutSection from "@/components/aboutsection";
import HeroSection from "@/components/herosection";
import HomeStats from "@/components/ui/homestats";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeStats />
      <AboutSection />
    </div>
  )
}
