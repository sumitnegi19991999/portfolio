import { motion, AnimatePresence } from 'framer-motion';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden bg-white dark:bg-dark-700 border-b border-gray-200 dark:border-dark-600"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 text-sm font-medium">
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={handleLinkClick}
              className="hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className="hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
