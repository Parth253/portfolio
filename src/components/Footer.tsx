import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-handwritten text-3xl text-foreground mb-4">Let's create something viral</p>
          <p className="text-muted-foreground mb-8 text-sm">Ready to grow your audience? Let's talk content.</p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="mailto:parthtita977@gmail.com" className="text-primary hover:underline text-sm">
              parthtita977@gmail.com
            </a>
            <a href="tel:+919773068958" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              +91 9773068958
            </a>
            <a
              href="https://www.linkedin.com/in/parth-tita-58123b248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn ↗
            </a>
          </div>

          <p className="text-muted-foreground/60 text-xs mt-8">
            © {new Date().getFullYear()} Parth Tita
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
