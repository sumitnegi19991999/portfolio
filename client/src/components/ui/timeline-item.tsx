import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

type TimelineItemProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  isFirst?: boolean;
  isLast?: boolean;
};

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
  isFirst = false,
  isLast = false
}: TimelineItemProps) => {
  return (
    <motion.div 
      variants={fadeIn('up', isFirst ? 0.3 : isLast ? 0.5 : 0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`timeline-item relative pl-10 ${isLast ? '' : 'pb-12'} border-l-2 border-primary`}
    >
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
      <div className="glassmorphism rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-300">
            <span>{company}, {location}</span>
            <span>•</span>
            <span>{period}</span>
          </div>
        </div>
        
        <ul className="space-y-2 text-dark-600 dark:text-dark-200">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1.5 mr-2 w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
