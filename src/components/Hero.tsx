import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left side: handwritten intro + illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <p className="font-handwritten text-2xl md:text-3xl text-foreground mb-4">
              Hi. I'm Parth Tita
            </p>
            <img
              src={heroIllustration}
              alt="Illustration of a content creator"
              className="w-56 md:w-72"
              width={900}
              height={800}
            />
          </motion.div>

          {/* Right side: role + keywords */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="font-handwritten text-xl md:text-2xl mb-4">
              <span className="text-primary">Content strategist</span> focused on
            </p>

            <div className="space-y-1">
              <h1 className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight">
                Research
              </h1>
              <h2 className="font-serif-display text-5xl md:text-7xl italic font-medium text-muted-foreground">
                Storytelling
              </h2>
              <h3 className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight">
                Virality
              </h3>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
