import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { contactSchema } from "@shared/schema";
import { sendContactFormEmail } from "./services/email";
import { db } from "./db";
import { projects, skills, blogPosts } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for fetching projects
  app.get('/api/projects', async (req, res) => {
    try {
      const allProjects = await db.select().from(projects);
      return res.status(200).json(allProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({
        message: 'Failed to fetch projects'
      });
    }
  });

  // API route for fetching skills
  app.get('/api/skills', async (req, res) => {
    try {
      const allSkills = await db.select().from(skills);
      return res.status(200).json(allSkills);
    } catch (error) {
      console.error('Error fetching skills:', error);
      return res.status(500).json({
        message: 'Failed to fetch skills'
      });
    }
  });

  // API route for fetching blog posts
  app.get('/api/blog-posts', async (req, res) => {
    try {
      const allPosts = await db.select().from(blogPosts).where(eq(blogPosts.published, true));
      return res.status(200).json(allPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return res.status(500).json({
        message: 'Failed to fetch blog posts'
      });
    }
  });

  // API route for handling contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({
          message: 'Invalid form data',
          errors: validatedData.error.flatten()
        });
      }
      
      // Send email with the contact form data
      await sendContactFormEmail(validatedData.data);
      
      return res.status(200).json({
        message: 'Message sent successfully'
      });
    } catch (error) {
      console.error('Error handling contact form:', error);
      return res.status(500).json({
        message: 'Failed to send message'
      });
    }
  });

  // API route for downloading resume
  app.get('/api/download-resume', (req, res) => {
    const resumePath = path.resolve(
      process.env.NODE_ENV === 'production' 
        ? path.join(process.cwd(), 'dist', 'attached_assets', 'Resume_5.pdf')
        : path.join(process.cwd(), 'attached_assets', 'Resume_5.pdf')
    );
    
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=Sumit_Negi_Resume.pdf');
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({
        message: 'Resume not found'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
