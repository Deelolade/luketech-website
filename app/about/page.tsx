import AboutCTA from "@/components/about/aboutCTA";
import AboutFounder from "@/components/about/aboutFounder";
import AboutHero from "@/components/about/aboutHero";
import AboutPrinciples from "@/components/about/aboutPrinciples";
import AboutStory from "@/components/about/aboutStory";
import AboutTimeline from "@/components/about/aboutTimeline";
import AboutTrackRecord from "@/components/about/aboutTrackRecord";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutFounder />
      <AboutTrackRecord />
      <AboutPrinciples />
      <AboutCTA />
      <Footer />
    </div>
  );
}
