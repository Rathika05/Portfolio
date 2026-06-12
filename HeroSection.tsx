import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero"
    >
      {/* Background Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-1/4 w-4 h-4 rounded-full bg-primary"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-purple-400"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-medium tracking-wider uppercase mb-4"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 80,
          }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <motion.span
            animate={{
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="gradient-text"
          >
            Rathika S
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Software Developer • Python Enthusiast • Problem Solver •
          Building Smart Digital Solutions
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#about"
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg"
          >
            Explore Portfolio
            <ArrowDown size={18} />
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary font-semibold"
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-1/2 -translate-x-1/2 mt-20"
        >
          <ArrowDown className="text-primary" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;