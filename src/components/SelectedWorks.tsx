import { useRef } from "react";
import { motion } from "framer-motion";
import catDoodle from "@/assets/cat-doodle.png";
import artoonzzProfile from "@/assets/artoonzz-profile.jpeg";

const works = [
  {
    client: "Motivation Corner",
    initials: "MC",
    initialsColor: "bg-emerald-500",
    tags: ["Growth Strategy", "Instagram", "Page Sale"],
    description: "Built a motivational content page from 77K to 231K+ followers. Generated 58.9M accounts reached and 79.4M impressions in a single 30-day window. The page was then sold to a USA-based buyer for $1,500.",
    color: "bg-emerald-50",
    profileImg: null,
    link: null,
    metric: "77K → 231K+",
    badge: "Sold · $1,500",
  },
  {
    client: "Artoonzz (AR)",
    initials: null,
    initialsColor: null,
    tags: ["Content Ideation", "Animation Strategy", "Reels"],
    description: "Developed the content strategy behind a 335K-follower animated page. Conceptualised relatable Indian life scenarios that generated 100M+ total views, including a single post that crossed 114M views, through character-driven storytelling rooted in everyday cultural moments.",
    color: "bg-sky-50",
    profileImg: artoonzzProfile,
    link: "https://www.instagram.com/artoonzz_/",
    metric: "100M+ views",
    badge: null,
  },
];

const TiltCard = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const inner = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.25s ease", willChange: "transform" }}
      className={className}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
};

const SelectedWorks = () => {
  return (
    <section id="works" className="py-12 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
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
            <motion.div
              key={work.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TiltCard className={`${work.color} rounded-2xl overflow-hidden`} href={work.link}>
                <div className="p-6 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {work.profileImg ? (
                        <img
                          src={work.profileImg}
                          alt={work.client}
                          className="w-12 h-12 rounded-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`w-12 h-12 rounded-full ${work.initialsColor} flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{work.initials}</span>
                        </div>
                      )}
                      <p className="font-serif-display font-semibold text-foreground">{work.client}</p>
                    </div>
                    {work.badge && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium border border-emerald-200">
                        {work.badge}
                      </span>
                    )}
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
