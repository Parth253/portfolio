import { useRef, useState } from "react";
import { motion } from "framer-motion";
import artoonzzProfile from "@/assets/artoonzz-profile.jpeg";

const ytProjects = [
  {
    name: "40 Secs Football",
    handle: "@40secsfootball",
    link: "https://youtube.com/@40secsfootball?si=mMxf2xYMbCIJL4P_",
    views: "131M+",
    topPost: "Corner Taken Quickly",
    topViews: "81.6M",
    description: "Built the content identity and scripting pipeline for a fast-format football channel. Ultra-short, high-intensity concepts engineered for maximum retention and shareability.",
    color: "bg-red-50",
    accent: "border-red-100",
    tag: "bg-red-100 text-red-700 border-red-200",
    tags: ["YouTube Shorts", "Script Strategy", "Retention"],
  },
  {
    name: "Patrick Football",
    handle: "@patrickfootball-n9w",
    link: "https://youtube.com/@patrickfootball-n9w?si=hKclrmwj6AE_dtJm",
    views: "184M+",
    topPost: "This Goal",
    topViews: "50.5M",
    description: "Developed content concepts and scripting for a viral football page. Emotional storytelling around iconic moments drove massive non-follower reach and repeat viewership.",
    color: "bg-violet-50",
    accent: "border-violet-100",
    tag: "bg-violet-100 text-violet-700 border-violet-200",
    tags: ["YouTube Strategy", "Concept Writing", "Virality"],
  },
];

const ArtoonzzCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${(y - 0.5) * -5}deg) rotateY(${(x - 0.5) * 5}deg) scale3d(1.015,1.015,1.015)`;
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <a href="https://www.instagram.com/artoonzz_/" target="_blank" rel="noopener noreferrer" className="block">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.3s ease", willChange: "transform", position: "relative", overflow: "hidden" }}
        className="bg-sky-50 rounded-3xl"
      >
        <div
          style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, hsl(200 80% 70% / 0.18), transparent 70%)`,
            pointerEvents: "none", transition: "background 0.1s ease",
          }}
        />
        <div className="p-8 md:p-12 relative">
          <div className="flex items-center gap-4 mb-6">
            <img src={artoonzzProfile} alt="Artoonzz" className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-sky-200" loading="lazy" />
            <div>
              <p className="font-serif-display text-xl font-semibold text-foreground">Artoonzz (AR)</p>
              <p className="text-muted-foreground text-sm">@artoonzz_ · 335K followers · Instagram</p>
            </div>
            <div className="ml-auto flex-wrap gap-2 justify-end hidden md:flex">
              {["Content Ideation", "Animation Strategy", "Reels"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-sky-200 text-sky-700 bg-sky-100">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-foreground text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
            Developed the content strategy behind a 335K-follower animated page. Conceptualised relatable Indian life scenarios through character-driven storytelling, turning everyday cultural moments into content that consistently crossed millions of views.
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-body text-5xl md:text-6xl font-bold text-primary">100M+</p>
              <p className="text-muted-foreground text-sm mt-1">total views generated</p>
            </div>
            <span className="text-muted-foreground text-sm inline-flex items-center gap-1 hover:text-primary transition-colors">
              View profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const SelectedWorks = () => {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="font-serif-display text-3xl md:text-4xl text-center">
            Selected <span className="text-primary italic">works</span>
          </h2>
        </motion.div>

        {/* Total views banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary font-body font-semibold text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            400M+ views generated across all projects
          </span>
        </motion.div>

        {/* Artoonzz full-width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <ArtoonzzCard />
        </motion.div>

        {/* YouTube projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {ytProjects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group block ${p.color} border ${p.accent} rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-serif-display font-semibold text-foreground text-lg">{p.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{p.handle} · YouTube</p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${p.tag}`}>{tag}</span>
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed mb-6">{p.description}</p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-body text-3xl font-bold text-primary">{p.views}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">lifetime views</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Top post</p>
                  <p className="font-serif-display text-sm font-semibold text-foreground">{p.topPost}</p>
                  <p className="text-primary text-xs font-semibold">{p.topViews}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
