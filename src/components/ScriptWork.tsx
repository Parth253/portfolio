import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Branding",
    description: "We define what you stand for before we write a single word. Voice, visual language, positioning — your content identity comes first.",
  },
  {
    number: "02",
    title: "Understanding the Tone",
    description: "Educational, entertaining, raw, aspirational — every channel has a register. I find yours and write exclusively in it.",
  },
  {
    number: "03",
    title: "Market Research",
    description: "Deep dive into what your audience actually watches, searches for, and shares. Data shapes the story.",
  },
  {
    number: "04",
    title: "Competitor Analysis",
    description: "I study what's already working in your niche, find the gaps they're missing, and position your content to fill them.",
  },
  {
    number: "05",
    title: "Topic Identification",
    description: "Not just trending topics — relevant, timely, and searchable ones specific to your audience's intent and stage of awareness.",
  },
  {
    number: "06",
    title: "Scripting",
    description: "Hook. Build. Payoff. Every line earns its place. Scripts that are built to hold attention from the first second to the last.",
  },
  {
    number: "07",
    title: "SEO & AEO",
    description: "Optimised for both search engines and AI answer engines. Because discoverability is half the battle.",
  },
];

const ScriptWork = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwritten text-xl text-primary mb-2">What I actually do</p>
          <h2 className="font-serif-display text-3xl md:text-4xl">
            The creative <span className="italic text-primary">framework</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Every script starts long before writing. Here's the full process I run for every client, every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative md:pl-20 bg-card/0 hover:bg-card border border-transparent hover:border-border rounded-2xl px-4 md:px-6 py-5 transition-all duration-300 cursor-default"
              >
                {/* Step dot on timeline */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300 hidden md:block" />

                <div className="flex items-start gap-5">
                  <span className="font-serif-display text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 leading-none shrink-0 w-10 text-right hidden md:block">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-handwritten text-2xl text-center text-muted-foreground mt-14"
        >
          One script. Zero fluff. <span className="text-primary">Just results.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ScriptWork;
