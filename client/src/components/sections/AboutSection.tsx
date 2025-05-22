import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-700/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-dark-500 dark:text-dark-200 max-w-2xl mx-auto">
            Learn a bit about my background, skills, and what drives me as a developer.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            variants={fadeIn('right', 0.3)}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm a <strong>Full Stack Developer</strong> with over 3 years of experience specializing in the MERN stack. I have a proven track record of optimizing application performance and implementing AI-driven solutions that enhance user experience and business metrics.
            </p>
            <p className="text-lg">
              My journey in web development began with a Bachelor's degree in Computer Applications, and I've since worked with various technologies to build high-performance, scalable applications. I'm passionate about creating clean, efficient code and developing intuitive user interfaces.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and keeping up with the latest trends in web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-xl font-bold mb-3">Front End</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    React.js / Next.js
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Material UI
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Back End</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Node.js / Express
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    MongoDB
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    RESTful APIs
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary mr-2 w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    AWS (Lambda, EC2, S3)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-dark-600">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Code editor with JavaScript code" 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
            
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="absolute -bottom-6 -left-6 glassmorphism rounded-xl p-5 shadow-lg max-w-xs"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="text-sm font-mono text-dark-500 dark:text-dark-200">3+ years experience</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="text-sm font-mono text-dark-500 dark:text-dark-200">10+ projects completed</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm font-mono text-dark-500 dark:text-dark-200">BCA graduate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
