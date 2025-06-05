export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  github?: string;
  live?: string;
  delay?: number;
};

export const projectsData: Project[] = [
  {
    id: 'flow-scrape',
    title: 'Flow Scrape',
    description: 'A highly customizable web scraping platform using Next.js 14, PostgreSQL, Prisma, and React Flow with 95% task automation.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    categories: ['fullstack', 'ai'],
    technologies: ['Next.js 14', 'PostgreSQL', 'Prisma', 'React Flow', 'Puppeteer'],
    github: 'https://github.com',
    delay: 0.1
  },
  {
    id: 'ai-video-sentiment',
    title: 'AI Video Sentiment Analysis',
    description: 'A multimodal AI system using PyTorch that analyzes video content for sentiment and emotion with 92% accuracy.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    categories: ['ai', 'web'],
    technologies: ['Next.js', 'PyTorch', 'AWS', 'T3 Stack', 'Auth.js'],
    github: 'https://github.com/github.com/sumitnegi19991999/video-sentiment-model',
    delay: 0.2
  },
  {
    id: 'rydovia',
    title: 'Rydovia',
    description: 'Full Stack Ride Booking Platform using Next.js, TypeScript, and MongoDB, handling 1,000+ concurrent users.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    categories: ['fullstack', 'web'],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'JWT', 'OpenAI'],
    live: 'https://rydovia.com/',
    delay: 0.3
  },
  {
    id: 'ai-blog-generator',
    title: 'AI Blog Generator',
    description: 'Full-stack blog platform with Next.js, MongoDB, and Editor.js with 99.9% uptime and sub-2-second page loads.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    categories: ['ai', 'fullstack'],
    technologies: ['Next.js', 'MongoDB', 'Editor.js', 'OpenAI', 'Unsplash API'],
    live: 'https://rydovia.com/blog',
    delay: 0.4
  },
  {
    id: 'evelyn-learning',
    title: 'Evelyn Learning Systems',
    description: 'MERN stack application serving 10,000+ monthly active users with 99.9% uptime, featuring real-time collaboration and AI content generation.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    categories: ['web'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://www.evelynlearning.com/',
    delay: 0.5
  }
];

export const skillsData = {
  frontEnd: [
    'React.js / Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Material UI'
  ],
  backEnd: [
    'Node.js / Express',
    'MongoDB',
    'RESTful APIs',
    'AWS (Lambda, EC2, S3)'
  ]
};
