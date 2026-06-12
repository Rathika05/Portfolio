import { motion } from "framer-motion";
import { User } from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.2" },
  { label: "Degree", value: "B.Tech IT" },
  { label: "Graduated", value: "2026" },
  { label: "Projects", value: "3+" },
  { label: "Internships", value: "1+" },
  { label: "Location", value: "Chennai" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <User size={16} />
            About Me
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl md:text-5xl font-bold mb-8"
          >
            Get To Know Me
          </motion.h2>

          {/* Main Card */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border text-left"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                As a B.Tech Information Technology graduate, I am passionate
                about software development and creating applications that solve
                real-world problems. My academic projects have strengthened my
                skills in Python, web development, and analytical thinking.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                I am committed to continuous learning, adapting to new
                technologies, and delivering efficient, user-focused solutions.
                I look forward to applying my knowledge and contributing to
                impactful software projects.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-10">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                  }}
                  className="bg-muted rounded-2xl p-5 text-center border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <motion.p
                    animate={{
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="font-heading text-2xl font-bold text-primary"
                  >
                    {item.value}
                  </motion.p>

                  <p className="text-sm text-muted-foreground mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;