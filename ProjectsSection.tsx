import { motion } from "framer-motion";
import {
  FolderOpen,
  CheckCircle,
  Github,
  ExternalLink,
} from "lucide-react";

const majorProjects = [
  {
    tag: "Web Application",
    title: "Monitoring Antibiotics Use and Safety in Livestock",
    description:
      "This project is a web-based system that helps farmers and veterinarians monitor antibiotic usage in animals. The system stores animal health details, medicine dosage, and withdrawal days to ensure that antibiotic residue levels remain within safe limits.",
    technologies: ["Python", "HTML", "CSS", "MongoDB", "Blockchain"],
    github: "https://github.com/Rathika05/Monitoring-livestock",
    features: [
      "Separate login for Farmers and Veterinarians",
      "Veterinarians can add animal health and medicine details",
      "Farmers can view animal treatment records",
      "Tracks dosage and withdrawal period",
      "Secure data storage using blockchain technology",
    ],
  },
  {
    tag: "Full Stack App",
    title: "Personal Notes Manager – CRUD Web Application",
    description:
      "A full-stack web application that allows users to create, read, update, and delete personal notes with secure login and responsive UI.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rathika05/Notes-app",
    features: [
      "User authentication and login",
      "Create, Read, Update & Delete notes",
      "Secure data handling",
      "Responsive user interface",
    ],
  },
];

const miniProjects = [
  {
    tag: "Analytics",
    title: "Workforce Attendance and Productivity Analyser",
    description:
      "A Python-based workforce analytics tool that analyzes employee productivity data and generates insights using visual reports.",
    technologies: ["Python", "Django", "Data Analytics", "Visualization"],
    github:
      "https://github.com/Rathika05/Workforce-and-Productivity-Analyser",
    features: [
      "Employee productivity analysis",
      "Data visualization charts",
      "Workforce insights",
    ],
  },
  {
    tag: "Automation",
    title: "AI News Generator",
    description:
      "A system that fetches the latest AI news using APIs and automatically sends daily updates through email.",
    technologies: ["Python", "Serper API", "Gmail SMTP"],
    github: "https://github.com/Rathika05/AutoGPT_Daily_AI_Digest",
    features: [
      "Automated AI news fetching",
      "Email delivery system",
      "Daily news updates",
    ],
  },
  {
    tag: "AI / LLM",
    title: "Bug Fixing AI Agent",
    description:
      "An AI assistant that analyzes Python code and suggests fixes using LLM-based debugging support.",
    technologies: ["Python", "LLM", "HTML", "CSS"],
    github: "https://github.com/Rathika05/Bug_Fixing_AI_Agent",
    features: [
      "Automatic bug detection",
      "Code correction suggestions",
      "Student-friendly interface",
    ],
  },
];

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className="
        bg-card
        rounded-3xl
        p-8 md:p-10
        border border-border
        hover:border-primary/40
        hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
        transition-all duration-300
        relative overflow-hidden
      "
    >
      <motion.div
        animate={{
          x: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="flex items-center gap-3 mb-3 relative z-10">
        <div className="w-3 h-3 rounded-full bg-primary" />

        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {project.tag}
        </span>
      </div>

      <h3 className="font-heading text-2xl font-bold mb-4 relative z-10">
        {project.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.technologies.map((tech: string) => (
          <motion.span
            key={tech}
            whileHover={{
              scale: 1.08,
            }}
            className="
              bg-primary/10
              text-primary
              text-xs
              font-medium
              px-3 py-1
              rounded-full
            "
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <h4 className="font-semibold mb-3 relative z-10">
        Key Features
      </h4>

      <ul className="space-y-2 mb-6 relative z-10">
        {project.features.map((feature: string) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-muted-foreground text-sm"
          >
            <CheckCircle
              size={16}
              className="text-green-500 mt-0.5 shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex gap-3 relative z-10">
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            bg-primary
            text-white
            px-4 py-2
            rounded-xl
            text-sm
            font-medium
          "
        >
          <Github size={16} />
          GitHub
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            border border-border
            px-4 py-2
            rounded-xl
            text-sm
            font-medium
          "
        >
          <ExternalLink size={16} />
          Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FolderOpen size={16} />
            Projects
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>

          <p className="text-muted-foreground mt-4">
            A collection of projects showcasing development,
            problem-solving and innovation.
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold mb-8">
          Featured Projects
        </h3>

        <div className="space-y-8 mb-16">
          {majorProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {miniProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;