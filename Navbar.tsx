import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Certifications",
  "Resume",
  "Contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Animated Logo */}
        <a href="#hero">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 10,
              scale: 1.15,
            }}
            className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-xl"
          >
            <span className="font-heading text-2xl font-bold text-primary-foreground">
              R
            </span>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300"
            >
              {link}

              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;