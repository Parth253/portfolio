import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import GrowthGallery from "@/components/GrowthGallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FreeScript from "@/components/FreeScript";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <SelectedWorks />
      <GrowthGallery />
      <Testimonials />
      <FreeScript />
      <Footer />
    </div>
  );
};

export default Index;
