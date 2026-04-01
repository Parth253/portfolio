import { useRef, useState } from "react";
import { motion } from "framer-motion";
import artoonzzProfile from "@/assets/artoonzz-profile.jpeg";

const SelectedWorks = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (y - 0.5) * -5;
    const ry = (x - 0.5) * 5;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`;
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    setGlowPos({ x: 50, y: 50 });
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
              style={{
                transition: "transform 0.3s ease",
                willChange: "transform",
                position: "relative",
                overflow: "hidden",
              }}
              className="bg-sky-50 rounded-3xl"
            >
              {/* Radial glow that follows cursor */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, hsl(200 80% 70% / 0.18), transparent 70%)`,
                  pointerEvents: "none",
                  transition: "background 0.1s ease",
                }}
              />

              <div className="p-8 md:p-12 relative">
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
                  <div className="ml-auto flex-wrap gap-2 justify-end hidden md:flex">
                    {["Content Ideation", "Animation Strategy", "Reels"].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-sky-200 text-sky-700 bg-sky-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
                  Developed the content strategy behind a 335K-follower animated page. Conceptualised relatable Indian life scenarios through character-driven storytelling, turning everyday cultural moments into content that consistently crossed millions of views.
                </p>

                {/* Bottom metric + link */}
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
