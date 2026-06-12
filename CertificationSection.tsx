import { motion } from "framer-motion";
import {
  Award,
  Building2,
  GraduationCap,
  Code2,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const internship = {
  title: "AI/ML Internship",
  issuer: "L&T Construction, Chennai",
  duration: "Jun 2025 - Jul 2025",
  icon: Building2,
  image: "/certificates/intern.jpeg",
};

const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL Online Certification",
    duration: "Jul 2025 - Oct 2025",
    icon: MessageCircle,
    image: "/certificates/Nptel2.jpeg",
  },
  {
    title: "Level 3 – Engaging Humour",
    issuer: "Toastmasters International",
    duration: "Aug 2025",
    icon: MessageCircle,
    image: "/certificates/tmc.jpeg",
  },
  {
    title: "Infosys Springboard – Pragati: Path to Future (Cohort 5)",
    issuer: "Infosys",
    duration: "Apr 2025 - Jul 2025",
    icon: GraduationCap,
    image: "/certificates/infosys.jpeg",
  },
  {
    title: "Affective Computing",
    issuer: "NPTEL Online Certification",
    duration: "Jan 2025 - Apr 2025",
    icon: MessageCircle,
    image: "/certificates/Nptel1.jpeg",
  },
  {
    title: "Python Programming",
    issuer: "Elewayte",
    duration: "Oct 2024 - Nov 2024",
    icon: Code2,
    image: "/certificates/python.jpeg",
  },
  {
    title: "Full Stack Development",
    issuer: "GUVI",
    duration: "Sep 2024",
    icon: Code2,
    image: "/certificates/guvi.jpeg",
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS",
    duration: "Dec 2023 - Aug 2024",
    icon: GraduationCap,
    image: "/certificates/tcs-ion.jpeg",
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class - IBM",
    duration: "Sep 2023",
    icon: MessageCircle,
    image: "/certificates/prompt engineer.jpeg",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class - IBM",
    duration: "Sep 2023",
    icon: MessageCircle,
    image: "/certificates/python data science.jpeg",
  },
];

const CertificationsSection = () => {
  const InternshipIcon = internship.icon;

  return (
    <section
      id="certifications"
      className="py-24 bg-muted/40 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Certifications
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Certifications & Training
          </h2>

          <p className="text-muted-foreground mt-4">
            Professional certifications, achievements and internship experience.
          </p>
        </motion.div>

        {/* Internship */}
        <h3 className="font-heading text-2xl font-bold mb-6">
          Internship Experience
        </h3>

        <motion.a
          href={internship.image}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            bg-card
            rounded-3xl
            p-8
            border border-border
            hover:border-primary/40
            hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
            transition-all duration-300
            block mb-14
          "
        >
          <div className="flex items-start gap-5">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0"
            >
              <InternshipIcon
                size={22}
                className="text-primary-foreground"
              />
            </motion.div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-2">
                {internship.title}
              </h3>

              <p className="text-muted-foreground">
                {internship.issuer}
              </p>

              <span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                {internship.duration}
              </span>

              <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                View Certificate
                <ExternalLink size={14} />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Certifications */}
        <h3 className="font-heading text-2xl font-bold mb-8">
          Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;

            return (
              <motion.a
                key={cert.title}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  bg-card
                  rounded-3xl
                  p-6
                  border border-border
                  hover:border-primary/40
                  hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                  transition-all duration-300
                "
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0"
                  >
                    <Icon
                      size={22}
                      className="text-primary-foreground"
                    />
                  </motion.div>

                  <div>
                    <h3 className="font-heading font-semibold mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>

                    <span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {cert.duration}
                    </span>

                    <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                      View Certificate
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;