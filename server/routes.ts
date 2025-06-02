import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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
      
      // In a real application, you would send this data via email or store in a database
      // Here we'll log it for demo purposes
      console.log('Contact form submission:', validatedData.data);
      
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
