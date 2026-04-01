import { motion } from "framer-motion";

const formats = [
  {
    platform: "Instagram",
    icon: "📱",
    types: ["Short-form Reels", "Carousel Scripts", "Story Sequences"],
    description: "Hook-first scripts built for the first 3 seconds. Every reel I write is engineered to stop the scroll, hold attention, and drive saves.",

    color: "bg-amber-50",
    accent: "border-amber-200",
    tag: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    platform: "YouTube",
    icon: "🎬",
    types: ["Long-form Scripts", "Short Scripts", "Explainer Videos"],
    description: "Research-heavy scripts that keep viewers watching. From 60-second Shorts to 15-minute deep-dives, structured for retention, not just views.",
    color: "bg-rose-50",
    accent: "border-rose-200",
    tag: "bg-rose-100 text-rose-700 border-rose-200",
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
            Scripts that <span className="italic text-primary">perform</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            I write short-form and long-form scripts for Instagram and YouTube, built around your niche, your voice, and what your audience actually wants to watch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((f, i) => (
            <motion.div
              key={f.platform}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${f.color} border ${f.accent} rounded-3xl p-8 group hover:shadow-md transition-shadow duration-300`}
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-serif-display text-2xl font-semibold mb-3">{f.platform}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {f.types.map((type) => (
                  <span key={type} className={`text-xs px-2.5 py-1 rounded-full border ${f.tag}`}>
                    {type}
                  </span>
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed">{f.description}</p>

              {/* Animated underline on hover */}
              <div className="mt-6 h-px bg-current opacity-10 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Single callout line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-handwritten text-2xl text-center text-muted-foreground mt-12"
        >
          One script. Zero fluff. <span className="text-primary">Just results.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ScriptWork;
