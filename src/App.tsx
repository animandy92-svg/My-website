import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EditorialGallery from "@/components/sections/EditorialGallery";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Journey from "@/components/sections/Journey";
import Insights from "@/components/sections/Insights";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <EditorialGallery />
        <About />
        <Work />
        <Services />
        <Journey />
        <Insights />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
