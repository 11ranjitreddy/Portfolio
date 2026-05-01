import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-blue-400 text-sm font-medium">🚀 Open to Work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Kalli <span className="text-blue-500">Ranjit</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 tracking-tight">
            Full Stack <span className="text-blue-400">Developer</span> & Cloud Engineer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Third-year CSE undergraduate at KL University (CGPA: 9.56/10) with hands-on experience building and deploying
            production-grade full-stack systems using <span className="text-blue-400">Java, Spring Boot Microservices, and React.js</span>.
            AWS Certified Cloud Practitioner with 3 end-to-end projects shipped on AWS.
          </p>
        </motion.div>

        {/* Centered Buttons - View My Work & Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Message <Mail size={18} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/11ranjitreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kalliranjit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:2300030772cseird@gmail.com"
            className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;