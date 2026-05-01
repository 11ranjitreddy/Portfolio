import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application featuring product catalog, user authentication, shopping cart, and Stripe payment integration. Built with a focus on performance and a responsive design.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative Kanban board application that allows users to manage projects, assign tasks, and track progress in real-time. Includes drag-and-drop functionality and detailed analytics.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Image Generator",
    description: "A web application that interfaces with OpenAI's DALL-E API to generate custom images based on text prompts. Includes a gallery feature to save and share creations.",
    tech: ["React", "Python", "FastAPI", "OpenAI API"],
    github: "#",
    live: "#"
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
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <Folder size={40} className="text-blue-500" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub Link">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors relative z-10">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto relative z-10">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-slate-500">
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
