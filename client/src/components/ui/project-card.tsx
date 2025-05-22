import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { Project } from '@/lib/constants';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { 
    title, 
    description, 
    image, 
    categories, 
    technologies, 
    github, 
    live, 
    delay = 0.1 
  } = project;

  return (
    <motion.div 
      variants={fadeIn('up', index * 0.1 + delay)}
      className="project-card glassmorphism rounded-xl overflow-hidden shadow-lg"
      data-category={categories.join(' ')}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} interface`} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          {categories.includes('fullstack') && (
            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">Full Stack</span>
          )}
          {categories.includes('ai') && (
            <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium ml-1">AI</span>
          )}
          {categories.includes('web') && (
            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium ml-1">Web App</span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-dark-500 dark:text-dark-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 dark:bg-dark-600 text-dark-600 dark:text-dark-300 px-2 py-0.5 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          {github ? (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary dark:text-primary hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-4 h-4">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </a>
          ) : (
            <a 
              href={live || '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary dark:text-primary hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-4 h-4">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Visit site
            </a>
          )}
          <a 
            href="#" 
            className="inline-flex items-center text-dark-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
