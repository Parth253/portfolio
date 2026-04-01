import { useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "100M+", label: "views generated" },
  { value: "231K+", label: "followers grown" },
  { value: "58.9M", label: "accounts reached" },
];

const skills = [
  "Script Writing", "Content Ideation", "SEO & AEO", "Growth Strategy",
  "Audience Research", "Trend Analysis", "Instagram", "YouTube",
  "Viral Content", "Funnel Optimization", "A/B Testing", "Analytics",
];

const TiltTag = ({ label }: { label: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(400px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.08)`;
    ref.current.style.borderColor = "hsl(var(--primary))";
    ref.current.style.color = "hsl(var(--primary))";
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.borderColor = "";
    ref.current.style.color = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease, border-color 0.2s ease, color 0.2s ease", willChange: "transform" }}
      className="px-3 py-1.5 text-sm rounded-full border border-border text-muted-foreground cursor-default inline-block"
    >
      {label}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif-display text-3xl md:text-4xl mb-8 md:mb-10">
            About <span className="text-primary italic">me</span>
          </h2>

          {/* Animated stats row */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card border border-border rounded-xl p-3 md:p-5 text-center"
              >
                <p className="font-body text-xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-5 text-foreground leading-relaxed">
            <p>
              I'm a content strategist and script writer who believes great content lives at the intersection of
              <span className="font-serif-display italic"> deep research, compelling storytelling, and platform psychology</span>.
            </p>

            <p>
              I've helped creators and brands go from invisible to unmissable, growing accounts from zero to 231K+ followers,
              generating over 100 million views, and consistently crossing the 1M view threshold on individual pieces of content.
            </p>

            <p className="font-handwritten text-2xl text-primary">
              SEO is not enough anymore. Content needs to be AEO-ready too.
            </p>

            <p>
              Every script I write is built to perform, not just sound good. From the opening hook to the final CTA,
              everything is shaped by audience research, trend analysis, and a sharp understanding of what keeps people
              watching instead of scrolling past.
            </p>

            <p>
              Whether it's a podcast reel, an animated short, or a brand story, I find the angle that makes it stick.
            </p>
          </div>

          {/* Skills with 3D tilt */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-border">
            <p className="font-handwritten text-xl text-muted-foreground mb-4">What I bring to the table</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TiltTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
