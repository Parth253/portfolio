import { motion } from "framer-motion";

const FreeScript = () => {
  return (
    <section id="free-script" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">I only take on 3 projects at a time</span>
          </div>

          <p className="font-handwritten text-2xl text-primary mb-2">Try before you commit</p>
          <h2 className="font-serif-display text-3xl md:text-4xl mb-8">
            Get your 1st script <span className="italic text-primary">free</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Give me a topic and the tone of your channel. I'll deliver a research-backed script that proves my craft.
          </p>

          <p className="font-handwritten text-xl text-foreground mb-10">
            Because anything can be written beautifully when generated with proper research.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 text-left space-y-4 mb-8">
            {[
              "Share your channel/brand and niche",
              "Tell me the tone — educational, entertaining, motivational",
              "Pick a topic or let me suggest one",
              "Receive a fully researched, ready-to-shoot script",
            ].map((step, i) => (
              <div key={step} className="flex items-start gap-4 group/step rounded-xl px-3 py-2 hover:bg-background transition-colors duration-200">
                <span className="font-serif-display text-primary font-bold text-lg group-hover/step:scale-110 transition-transform duration-200">0{i + 1}</span>
                <p className="text-foreground text-sm pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          <a
            href="mailto:parthtita977@gmail.com?subject=Free Script Request"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Claim Your Free Script →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeScript;
