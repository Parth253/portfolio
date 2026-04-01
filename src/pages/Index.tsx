import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScriptWork from "@/components/ScriptWork";
import SelectedWorks from "@/components/SelectedWorks";
import GrowthGallery from "@/components/GrowthGallery";
import Testimonials from "@/components/Testimonials";
import HormoziQuote from "@/components/HormoziQuote";
import FreeScript from "@/components/FreeScript";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <ScriptWork />
      <SelectedWorks />
      <GrowthGallery />
      <Testimonials />
      <HormoziQuote />
      <FreeScript />
      <Footer />
    </div>
  );
};

export default Index;
