import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sumit Negi | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer with 3+ years of experience in MERN stack development, specializing in building high-performance web applications." />
        <meta property="og:title" content="Sumit Negi | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer with 3+ years of experience in MERN stack development, specializing in building high-performance web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumitnegi.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumit Negi | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer with 3+ years of experience in MERN stack development, specializing in building high-performance web applications." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
