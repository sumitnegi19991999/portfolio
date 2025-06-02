import 'dotenv/config';
import { db } from './db';
import { users, projects, skills, blogPosts, contactMessages } from '../shared/schema';
import { hash } from 'bcrypt';

async function cleanDatabase() {
  console.log('🧹 Cleaning existing data...');
  // Delete in reverse order of dependencies
  await db.delete(contactMessages);
  await db.delete(blogPosts);
  await db.delete(projects);
  await db.delete(skills);
  await db.delete(users);
  console.log('✅ Database cleaned');
}

async function seed() {
  try {
    console.log('🌱 Starting seeding...');

    // Clean existing data
    await cleanDatabase();

    // Create a test user
    const hashedPassword = await hash('test123', 10);
    const [user] = await db.insert(users).values({
      username: 'johndoe',
      password: hashedPassword,
      email: 'john@example.com',
      fullName: 'John Doe',
      bio: 'Full-stack developer passionate about creating beautiful and functional web applications.',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe'
    }).returning();

    console.log('✅ Created test user');

    // Create skills
    await db.insert(skills).values([
      {
        name: 'React',
        category: 'Frontend',
        proficiencyLevel: 5,
        yearsOfExperience: 3,
        iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'Node.js',
        category: 'Backend',
        proficiencyLevel: 4,
        yearsOfExperience: 2,
        iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        proficiencyLevel: 4,
        yearsOfExperience: 2,
        iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'PostgreSQL',
        category: 'Backend',
        proficiencyLevel: 4,
        yearsOfExperience: 2,
        iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
      },
      {
        name: 'Docker',
        category: 'DevOps',
        proficiencyLevel: 3,
        yearsOfExperience: 1,
        iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
      }
    ]);

    console.log('✅ Created skills');

    // Create projects
    await db.insert(projects).values([
      {
        title: 'Modern Dev Portfolio',
        description: 'A modern portfolio website built with React, TypeScript, and TailwindCSS. Features a clean design, dark mode, and responsive layout.',
        imageUrl: 'https://picsum.photos/seed/portfolio/800/600',
        liveUrl: 'https://portfolio.example.com',
        githubUrl: 'https://github.com/johndoe/portfolio',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
        featured: true
      },
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform with features like product management, cart functionality, and payment integration.',
        imageUrl: 'https://picsum.photos/seed/ecommerce/800/600',
        liveUrl: 'https://shop.example.com',
        githubUrl: 'https://github.com/johndoe/ecommerce',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
        featured: true
      },
      {
        title: 'Task Management App',
        description: 'A Trello-like task management application with real-time updates and team collaboration features.',
        imageUrl: 'https://picsum.photos/seed/tasks/800/600',
        liveUrl: 'https://tasks.example.com',
        githubUrl: 'https://github.com/johndoe/tasks',
        technologies: ['React', 'Redux', 'Socket.io', 'Express', 'MongoDB'],
        featured: false
      }
    ]);

    console.log('✅ Created projects');

    // Create blog posts
    await db.insert(blogPosts).values([
      {
        title: 'Getting Started with TypeScript',
        slug: 'getting-started-with-typescript',
        content: `TypeScript is a powerful superset of JavaScript that adds static typing to the language. In this post, we'll explore the basics of TypeScript and how it can improve your development workflow...`,
        excerpt: 'Learn the basics of TypeScript and how it can improve your development workflow.',
        published: true,
        authorId: user.id,
        tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development']
      },
      {
        title: 'Building Scalable APIs with Node.js',
        slug: 'building-scalable-apis-with-nodejs',
        content: `Node.js is a popular choice for building backend services. In this comprehensive guide, we'll look at best practices for creating scalable and maintainable APIs...`,
        excerpt: 'Learn how to build scalable and maintainable APIs using Node.js.',
        published: true,
        authorId: user.id,
        tags: ['Node.js', 'API', 'Backend', 'Web Development']
      },
      {
        title: 'Modern CSS Techniques',
        slug: 'modern-css-techniques',
        content: `CSS has evolved significantly over the years. Let's explore some modern CSS techniques that can help you write better and more maintainable styles...`,
        excerpt: 'Discover modern CSS techniques for better web development.',
        published: false,
        authorId: user.id,
        tags: ['CSS', 'Web Design', 'Frontend', 'Web Development']
      }
    ]);

    console.log('✅ Created blog posts');

    // Create contact messages
    await db.insert(contactMessages).values([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        subject: 'Project Inquiry',
        message: 'Hi, I\'m interested in working with you on a web development project. Could we schedule a call to discuss the details?',
        read: true
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        subject: 'Blog Feedback',
        message: 'Great article on TypeScript! I especially enjoyed the section about generics. Looking forward to more content like this.',
        read: false
      }
    ]);

    console.log('✅ Created contact messages');
    console.log('✅ Seeding completed successfully!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed(); 