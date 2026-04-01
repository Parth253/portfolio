import { useRef } from "react";
import { motion } from "framer-motion";
import artoonzzProfile from "@/assets/artoonzz-profile.jpeg";

const viewPosts = [
  { views: "114M", highlight: true },
  { views: "17.2M", highlight: false },
  { views: "9.1M", highlight: false },
  { views: "7.3M", highlight: false },
  { views: "2.6M", highlight: false },
  { views: "2.1M", highlight: false },
  { views: "1.6M", highlight: false },
  { views: "676K", highlight: false },
  { views: "195K", highlight: false },
];

const SelectedWorks = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale3d(1.01,1.01,1.01)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

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
          <h2 className="font-serif-display text-3xl md:text-4xl">
            Selected <span className="text-primary italic">work</span>
          </h2>
        </motion.div>

        {/* Artoonzz — full width artistic card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/artoonzz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "transform 0.3s ease", willChange: "transform" }}
              className="bg-sky-50 rounded-3xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={artoonzzProfile}
                    alt="Artoonzz"
                    className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-sky-200"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-serif-display text-xl font-semibold text-foreground">Artoonzz (AR)</p>
                    <p className="text-muted-foreground text-sm">@artoonzz_ · 335K followers</p>
                  </div>
                  <div className="ml-auto flex flex-wrap gap-2 justify-end hidden md:flex">
                    {["Content Ideation", "Animation Strategy", "Reels"].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-sky-200 text-sky-700 bg-sky-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  Developed the content strategy behind a 335K-follower animated page. Conceptualised relatable Indian life scenarios through character-driven storytelling — turning everyday cultural moments into content that consistently crossed millions of views.
                </p>

                {/* Artistic view count mosaic */}
                <div className="mb-8">
                  <p className="font-handwritten text-lg text-muted-foreground mb-4">Views per post</p>
                  <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
                    {viewPosts.map((post, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        className={`rounded-xl flex flex-col items-center justify-center py-3 px-1 text-center
                          ${post.highlight
                            ? "bg-primary text-primary-foreground"
                            : "bg-sky-100 border border-sky-200 text-foreground"
                          }`}
                      >
                        <span className={`font-body font-bold text-sm md:text-base ${post.highlight ? "text-white" : "text-primary"}`}>
                          {post.views}
                        </span>
                        <span className={`text-xs mt-0.5 ${post.highlight ? "text-orange-100" : "text-muted-foreground"}`}>
                          views
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom metric */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-5xl md:text-6xl font-bold text-primary">100M+</p>
                    <p className="text-muted-foreground text-sm mt-1">total views generated</p>
                  </div>
                  <span className="text-muted-foreground text-sm inline-flex items-center gap-1 hover:text-primary transition-colors">
                    View profile
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorks;
