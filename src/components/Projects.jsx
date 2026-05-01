import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "EdTech LMS",
    description: "A full-stack Learning Management System built for a real client. Features role-based access for admins, instructors, and students, JWT authentication, Google Authenticator MFA, and Razorpay payment integration with HMAC-SHA256 signature verification. Deployed on AWS EC2 with Jenkins CI/CD.",
    tech: ["React.js", "Spring Boot", "Microservices", "JWT", "Docker", "Kubernetes", "AWS EC2", "Jenkins", "Razorpay"],
    github: "https://github.com/11ranjitreddy/EduTechFront.git",
    live: "https://edu-tech-git-main-ranjithredd8479-7941s-projects.vercel.app/"
  },
  {
    title: "Sports League Management",
    description: "A microservices-based sports management system with real-time score updates via WebSocket and async messaging through RabbitMQ. Includes OTP-based notifications via Twilio/SMTP, containerized with Docker and Kubernetes on AWS EC2 with full CI/CD automation.",
    tech: ["React", "Spring Boot", "WebSocket", "RabbitMQ", "Docker", "Kubernetes", "AWS EC2", "Twilio"],
    github: "https://github.com/11ranjitreddy/Mycricketfullstack.git",
    live: "https://cricket-front-end-git-main-ranjithredd8479-7941s-projects.vercel.app/"
  },
  {
    title: "Marketplace Microservices",
    description: "A scalable e-commerce backend built using microservices architecture with Spring Boot. Designed for high availability and clean separation of concerns across services like product catalog, orders, and user management.",
    tech: ["Spring Boot", "Microservices", "Spring Cloud", "REST APIs", "Docker", "MySQL", "Java"],
    github: "https://github.com/11ranjitreddy/marketplace-microservices.git",
    live: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Some Things I've Built</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 flex flex-col h-full border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.5)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <Folder size={40} className="text-blue-500" />
                  {idx === 0 && (
                    <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                      Client Project
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="GitHub Link"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors relative z-10">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;