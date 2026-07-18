import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import EditorialGallery from "@/components/sections/EditorialGallery";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import Expertise from "@/components/sections/Expertise";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Journey from "@/components/sections/Journey";
import Insights from "@/components/sections/Insights";
import Vision from "@/components/sections/Vision";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/ui/BackToTop";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <EditorialGallery />
        <About />
        <Highlights />
        <Expertise />
        <Work />
        <Services />
        <Journey />
        <Insights />
        <Vision />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
