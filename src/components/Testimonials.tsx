import { motion } from "framer-motion";
import testimonialImg from "@/assets/testimonial.jpg";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-display text-3xl md:text-4xl">
            Kind words from <span className="text-primary italic">collaborators</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <blockquote className="font-serif-display text-xl md:text-2xl italic text-foreground leading-relaxed mb-6">
            "It's all right we'll still work — I like working with you"
          </blockquote>

          <img
            src={testimonialImg}
            alt="Conversation with JD Dodard"
            className="w-full max-w-sm rounded-xl border border-border mb-6"
            loading="lazy"
          />

          <div>
            <p className="font-serif-display font-semibold text-foreground">JD Dodard</p>
            <p className="text-muted-foreground text-sm">Start Growth Media</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
