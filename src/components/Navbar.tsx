const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Resume", href: "https://drive.google.com/file/d/1zZ6Ndb6aOg1wbd6GqYlt82VW8evJk2SN/view?usp=share_link", external: true },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-center gap-10 md:gap-16">
        {navLinks.slice(0, 2).map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
          >
            {link.label}
          </a>
        ))}

        <a href="#" className="font-serif-display text-primary text-2xl font-bold italic">
          PT
        </a>

        {navLinks.slice(2).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide inline-flex items-center gap-1"
          >
            {link.label}
            {link.external && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
