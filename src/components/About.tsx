import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif-display text-3xl md:text-4xl mb-10">
            About <span className="text-primary italic">me</span>
          </h2>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              I'm a content strategist and script writer who believes great content lives at the intersection of
              <span className="font-serif-display italic"> deep research, compelling storytelling, and platform psychology</span>.
            </p>

            <p>
              I've helped creators and brands go from invisible to unmissable, growing accounts from zero to 83.7K+ followers,
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

          {/* Skills */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-handwritten text-xl text-muted-foreground mb-4">What I bring to the table</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Script Writing", "Content Ideation", "SEO & AEO", "Growth Strategy",
                "Audience Research", "Trend Analysis", "Instagram", "YouTube",
                "Viral Content", "Funnel Optimization", "A/B Testing", "Analytics",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
