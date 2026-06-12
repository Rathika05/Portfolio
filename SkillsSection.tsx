import { motion } from "framer-motion";
import {
  Code,
  FileCode,
  Palette,
  GitBranch,
  Component,
  Server,
  Layers,
  Database,
  Laptop,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code },
  { name: "React.js", icon: Component },
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Palette },
  { name: "Flask", icon: Server },
  { name: "Django", icon: Layers },
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
];

const tools = [
  { name: "VS Code", icon: Laptop },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "MongoDB Compass", icon: Database },
  { name: "MySQL Workbench", icon: Database },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-muted/40 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code size={16} />
            Skills
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and frameworks I use to build scalable,
            efficient and modern applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="
                  bg-card
                  rounded-2xl
                  p-6
                  text-center
                  border
                  border-border
                  hover:border-primary/50
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    w-14 h-14
                    mx-auto mb-4
                    rounded-xl
                    gradient-primary
                    flex items-center justify-center
                  "
                >
                  <Icon
                    size={24}
                    className="text-primary-foreground"
                  />
                </motion.div>

                <p className="font-heading font-semibold">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Laptop size={16} />
            Tools Used
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Development Tools
          </h2>

          <p className="text-muted-foreground mt-4">
            Tools that support my development workflow.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="
                  bg-card
                  rounded-2xl
                  p-6
                  text-center
                  border
                  border-border
                  hover:border-primary/50
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
                  transition-all
                  duration-300
                "
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    w-14 h-14
                    mx-auto mb-4
                    rounded-xl
                    gradient-primary
                    flex items-center justify-center
                  "
                >
                  <Icon
                    size={24}
                    className="text-primary-foreground"
                  />
                </motion.div>

                <p className="font-heading font-semibold">
                  {tool.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;