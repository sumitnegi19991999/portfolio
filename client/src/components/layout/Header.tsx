import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import ThemeToggle from '@/components/ui/theme-toggle';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeIn('down', 0.1)}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md border-b ${
        isScrolled ? 'border-gray-200 dark:border-dark-600' : 'border-transparent'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-primary dark:text-primary">&lt;</span>
            <span>Sumit Negi</span>
            <span className="text-primary dark:text-primary">/&gt;</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary dark:hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary dark:hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <a 
              href="#contact" 
              className="hidden md:block bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get in touch
            </a>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMobileMenuOpen ? 'hidden' : 'block'}>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMobileMenuOpen ? 'block' : 'hidden'}>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.header>
  );
};

export default Header;
