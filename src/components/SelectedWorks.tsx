import { motion } from "framer-motion";
import catDoodle from "@/assets/cat-doodle.png";
import sagarProfile from "@/assets/sagar-profile.jpeg";
import artoonzzProfile from "@/assets/artoonzz-profile.jpeg";

const works = [
  {
    client: "Sagar Kathrotiya",
    tags: ["Script Writing", "Podcast Growth", "Instagram"],
    description: "Scripted content that grew a podcast-focused Instagram to 83.7K followers from scratch. Topics like 'Real Power of Gujarati', mindset deep-dives, and brand breakdowns (Haldiram vs Balaji) drove consistent organic reach, turning a zero-audience account into a community of engaged followers.",
    color: "bg-amber-50",
    profileImg: sagarProfile,
    link: "https://www.instagram.com/sagarkathrotiyashow/",
    metric: "0 → 83.7K followers",
  },
  {
    client: "Artoonzz (AR)",
    tags: ["Content Ideation", "Animation Strategy", "Reels"],
    description: "Developed the content strategy behind a 335K-follower animated page. Conceptualised relatable Indian life scenarios that generated 100M+ total views, including a single post that crossed 114M views, through character-driven storytelling rooted in everyday cultural moments.",
    color: "bg-sky-50",
    profileImg: artoonzzProfile,
    link: "https://www.instagram.com/artoonzz_/",
    metric: "100M+ views",
  },
];

const SelectedWorks = () => {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img
            src={catDoodle}
            alt=""
            className="w-24 mx-auto mb-4"
            loading="lazy"
            width={512}
            height={512}
          />
          <h2 className="font-serif-display text-3xl md:text-4xl">
            Selected <span className="text-primary italic">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <motion.a
              key={work.client}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${work.color} rounded-2xl overflow-hidden block`}
            >
              <div className="p-6 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={work.profileImg}
                    alt={work.client}
                    className="w-12 h-12 rounded-full object-cover object-top"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-serif-display font-semibold text-foreground">{work.client}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-6">{work.description}</p>

                <span className="font-body text-3xl font-bold text-primary">{work.metric}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
