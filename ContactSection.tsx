import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail size={16} />
            Contact
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="text-muted-foreground mt-4">
            Interested in collaborating or discussing opportunities?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="
                bg-card
                rounded-3xl
                p-8
                border border-border
                hover:border-primary/40
                hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                transition-all duration-300
              "
            >
              <h3 className="font-heading text-2xl font-bold mb-6">
                Let's Connect
              </h3>

              <div className="space-y-5">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:rathikasebi2005@gmail.com"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>

                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      rathikasebi2005@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://www.linkedin.com/in/rathika-s-2885622bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="text-primary" size={20} />
                  </div>

                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Connect with me
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/Rathika05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Github className="text-primary" size={20} />
                  </div>

                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      View my repositories
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="
                bg-card
                rounded-3xl
                p-8
                border border-border
                hover:border-primary/40
                hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                transition-all duration-300
                space-y-5
              "
            >
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-border
                    bg-background
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-border
                    bg-background
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-border
                    bg-background
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                  "
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="
                  w-full
                  gradient-primary
                  text-primary-foreground
                  py-3
                  rounded-xl
                  font-medium
                  flex items-center
                  justify-center
                  gap-2
                "
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;