import { motion } from "framer-motion";

const HormoziQuote = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Large decorative quotemark */}
          <span
            className="absolute -top-8 -left-2 font-serif-display text-8xl md:text-9xl leading-none select-none pointer-events-none"
            style={{ color: "hsl(var(--primary) / 0.12)" }}
            aria-hidden="true"
          >
            "
          </span>

          <blockquote className="relative pl-6 border-l-2 border-primary">
            <p className="font-serif-display text-xl md:text-2xl italic text-foreground leading-relaxed">
              Your free content should be so good that people feel stupid for not buying from you.
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-sm font-semibold text-primary tracking-wide">Alex Hormozi</span>
              <span className="text-muted-foreground text-sm">$100M Offers</span>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default HormoziQuote;
