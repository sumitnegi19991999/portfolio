import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import TypingAnimation from "@/components/ui/typing-animation";

const HeroSection = () => {
  const downloadResume = () => {
    // Create link element
    const link = document.createElement("a");
    link.href = "/api/download-resume";
    link.download = "Sumit_Negi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <div className="space-y-6">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary dark:text-primary-foreground"
            >
              <span>Full Stack Developer</span>
            </motion.div>

            <motion.h1
              variants={fadeIn("right", 0.3)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi, I'm <span className="gradient-text">Sumit Negi</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("right", 0.4)}
              className="h-16 overflow-hidden"
            >
              <div className="animate-text-slide">
                <TypingAnimation text="Building with MERN Stack" />
                <TypingAnimation text="Creating AI-powered solutions" />
                <TypingAnimation text="Optimizing web performance" />
                <TypingAnimation text="Crafting beautiful UIs" />
                <TypingAnimation text="Solving complex problems" />
              </div>
            </motion.div>

            <motion.p
              variants={fadeIn("right", 0.5)}
              className="text-lg text-dark-500 dark:text-dark-200 max-w-xl"
            >
              Full Stack Developer with 3+ years of experience in MERN stack
              development. Specialized in building high-performance web
              applications with expertise in React.js, Next.js, Node.js, and
              cloud services.
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.6)}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View my work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>

              <button
                onClick={downloadResume}
                className="inline-flex items-center justify-center bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 w-4 h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download Resume
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-6 pt-4"
            >
              <a
                href="https://github.com/sumitnegi19991999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sumit-negi-615810190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:sumitnegi19991999@gmail.com"
                className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("left", 0.3)} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-700">
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Developer workspace with multiple monitors"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/20 mix-blend-multiply"></div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              className="absolute -bottom-8 -right-8 glassmorphism rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
