import { motion } from "framer-motion";
import mcGrowth from "@/assets/sagar-growth.jpg";
import mcReach from "@/assets/sagar-reach.jpg";

const themePageResults = [
  {
    title: "Solo Scorers",
    handle: "@soloscorers",
    metric: "58.7K",
    detail: "followers · 2.1M accounts reached / 30 days",
    description: "Built a football countdown page from scratch. Numbered player series drove high-repeat viewership and consistent saves, reaching 2.1M accounts in a single month.",
  },
  {
    title: "Solo Goals in Football",
    handle: "@solo_goals_in_football",
    metric: "29.7K",
    detail: "followers · 2.5M accounts reached / 30 days",
    description: "Launched a niche solo goals page that hit 29.7K followers in only 5 posts, reaching 2.5M accounts through shareable, scroll-stopping football clips.",
  },
];

const GrowthGallery = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-display text-3xl md:text-4xl">
            Growth <span className="text-primary italic">gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3">Analytics from pages I've built and managed</p>
        </motion.div>

        {/* Motivation Corner analytics screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-handwritten text-xl text-muted-foreground mb-6 text-center">Motivation Corner · Instagram</p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            {[
              { src: mcGrowth, alt: "231K followers +56.9%", label: "231K followers · +56.9%" },
              { src: mcReach, alt: "58.9M accounts reached", label: "58.9M reach · 79.4M impressions" },
            ].map((img) => (
              <motion.div
                key={img.label}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-2xl p-3 border border-border"
              >
                <img src={img.src} alt={img.alt} className="w-44 md:w-60 rounded-xl" loading="lazy" />
                <p className="text-center text-muted-foreground mt-2 font-handwritten text-lg">{img.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Theme page results */}
        <div className="grid md:grid-cols-2 gap-6">
          {themePageResults.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.07)" }}
              className="bg-card border border-border rounded-2xl p-8 transition-shadow duration-300"
            >
              <p className="font-body text-4xl md:text-5xl font-bold text-primary">{item.metric}</p>
              <p className="font-handwritten text-xl text-muted-foreground mb-3">{item.detail}</p>
              <h3 className="font-serif-display text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{item.handle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthGallery;
