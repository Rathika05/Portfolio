import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-border overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="
              w-14 h-14
              rounded-full
              gradient-primary
              flex items-center
              justify-center
              shadow-lg
            "
          >
            <span className="text-white font-bold text-xl">
              R
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              href="mailto:rathikasebi2005@gmail.com"
              className="p-3 rounded-xl bg-primary/10 text-primary"
            >
              <Mail size={18} />
            </motion.a>

            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              href="https://github.com/Rathika05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-primary/10 text-primary"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              href="https://www.linkedin.com/in/rathika-s-2885622bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-primary/10 text-primary"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground text-center"
          >
            © {new Date().getFullYear()} Rathika S. All Rights Reserved.
          </motion.p>

          {/* Made With */}
          <motion.p
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            Made with <Heart size={14} className="text-red-500" /> using React &
            Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;