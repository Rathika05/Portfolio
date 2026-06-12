import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <FileText size={16} />
            Resume
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Explore My Professional Profile
          </h2>

          <p className="text-muted-foreground mb-8">
             Discover my academic background, internship experience, technical skills, certifications, and projects that reflect my passion for building practical and impactful software solutions.
          </p>

          <a
            href="/RathikaS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-card"
          >
            <FileText size={18} />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;