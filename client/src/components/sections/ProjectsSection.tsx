import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import ProjectCard from '@/components/ui/project-card';
import { projectsData } from '@/lib/constants';

type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'web';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const handleFilterClick = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-700/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-dark-500 dark:text-dark-200 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects.
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          <button 
            onClick={() => handleFilterClick('all')}
            className={`filter-btn ${activeFilter === 'all' 
              ? 'bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white' 
              : 'bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500'} 
              px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
            aria-label="Show all projects"
          >
            All
          </button>
          <button 
            onClick={() => handleFilterClick('ai')}
            className={`filter-btn ${activeFilter === 'ai' 
              ? 'bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white' 
              : 'bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500'} 
              px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
            aria-label="Filter AI projects"
          >
            AI
          </button>
          <button 
            onClick={() => handleFilterClick('fullstack')}
            className={`filter-btn ${activeFilter === 'fullstack' 
              ? 'bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white' 
              : 'bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500'} 
              px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
            aria-label="Filter Full Stack projects"
          >
            Full Stack
          </button>
          <button 
            onClick={() => handleFilterClick('web')}
            className={`filter-btn ${activeFilter === 'web' 
              ? 'bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white' 
              : 'bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500'} 
              px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
            aria-label="Filter Web App projects"
          >
            Web App
          </button>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-700 dark:text-white border border-gray-300 dark:border-dark-500 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-5 h-5">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
