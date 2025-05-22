import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: 'Message sent successfully!',
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: 'default',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: "There was a problem sending your message. Please try again.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-dark-500 dark:text-dark-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'm just a message away.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div 
              variants={fadeIn('right', 0.3)}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glassmorphism rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-dark-500 dark:text-dark-300">Email</p>
                      <a href="mailto:sumitnegi19991999@gmail.com" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                        sumitnegi19991999@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-dark-500 dark:text-dark-300">Phone</p>
                      <a href="tel:+919810536048" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                        +91 9810536048
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-dark-500 dark:text-dark-300">LinkedIn</p>
                      <a href="#" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Follow me</h4>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-dark-500 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Current Status</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium">Available for new opportunities</span>
                </div>
                <p className="text-dark-500 dark:text-dark-300">
                  I'm currently open to freelance projects, full-time positions, and collaboration opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('left', 0.3)}
              className="lg:col-span-3"
            >
              <div className="glassmorphism rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        {...form.register('name')} 
                        placeholder="Your name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      />
                      {form.formState.errors.name && (
                        <p className="mt-1 text-sm text-red-500">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        {...form.register('email')} 
                        placeholder="Your email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      />
                      {form.formState.errors.email && (
                        <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      {...form.register('subject')} 
                      placeholder="Subject of your message" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    />
                    {form.formState.errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      {...form.register('message')} 
                      rows={5} 
                      placeholder="Your message" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
