import { motion } from "framer-motion";
import sagarGrowth from "@/assets/sagar-growth.jpg";
import sagarReach from "@/assets/sagar-reach.jpg";

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
          <p className="text-muted-foreground text-sm mt-3">Analytics from theme pages & creator accounts I've managed</p>
        </motion.div>

        {/* Analytics screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          <div className="bg-card rounded-2xl p-3 shadow-sm border border-border">
            <img
              src={sagarGrowth}
              alt="Follower growth analytics showing 231K+ followers with 56.9% growth"
              className="w-52 md:w-60 rounded-xl"
              loading="lazy"
            />
            <p className="text-center text-xs text-muted-foreground mt-2 font-handwritten text-lg">231K followers · +56.9%</p>
          </div>
          <div className="bg-card rounded-2xl p-3 shadow-sm border border-border">
            <img
              src={sagarReach}
              alt="Reach analytics showing 58.9M accounts reached"
              className="w-52 md:w-60 rounded-xl"
              loading="lazy"
            />
            <p className="text-center text-xs text-muted-foreground mt-2 font-handwritten text-lg">58.9M reach · 79.4M impressions</p>
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
              className="bg-card border border-border rounded-2xl p-8"
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
