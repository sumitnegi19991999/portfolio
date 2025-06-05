import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import TimelineItem from "@/components/ui/timeline-item";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-dark-500 dark:text-dark-200 max-w-2xl mx-auto">
            A timeline of my professional journey and key roles I've held.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <TimelineItem
            title="Software Developer"
            company="Stayfari"
            location="Delhi"
            period="Sep 2023 - Present"
            description={[
              "Architected and developed a real-time fleet management platform that increased operational efficiency by 35% for clients.",
              "Implemented real-time communication using PubNub Presence API, reducing response time by 40% and improving driver coordination.",
              "Optimized media handling with ImageKit integration, resulting in 50% faster load times and improved user experience.",
            ]}
            technologies={[
              "Next.js",
              "TypeScript",
              "MongoDB",
              "PubNub",
              "ImageKit",
            ]}
            isFirst={true}
          />

          <TimelineItem
            title="Software Developer"
            company="Evelyn Learning Systems"
            location="Noida"
            period="Oct 2021 - Aug 2023"
            description={[
              'Led development of "QAP" MERN stack application serving 10,000+ monthly active users with 99.9% uptime.',
              "Improved application performance by 40% through optimized MongoDB indexing strategies and API response caching.",
              "Integrated OpenAI API for automated content generation, increasing content creation efficiency by 75%.",
            ]}
            technologies={[
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "OpenAI",
            ]}
          />

          {/* <TimelineItem
            title="Education"
            company="Guru Gobind Singh Indraprastha University"
            location="Delhi"
            period="Graduated Aug 2020"
            description={[
              "Bachelor of Computer Applications (BCA)"
            ]}
            technologies={["Computer Science", "Programming", "Web Development"]}
            isLast={true}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
