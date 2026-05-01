import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Cloud, Users, ExternalLink } from 'lucide-react';
// Import your image - THIS IS THE KEY LINE
import profileImage from '../assets/images/profile.jpg.png';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">About Me</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Who Am I?</h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section - YOUR PHOTO WILL SHOW HERE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/30 rounded-2xl" />
              
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                <img
                  src={profileImage}
                  alt="Kalli Ranjit"
                  className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h4 className="text-2xl font-bold text-white">
            I'm <span className="text-blue-500">Kalli Ranjit</span>
          </h4>
          
          <p className="text-slate-400 leading-relaxed">
            A passionate <span className="text-blue-400">Full Stack Developer</span> and 
            <span className="text-blue-400"> Cloud Engineer</span> currently in my third year of 
            Computer Science Engineering at KL University, with a CGPA of <span className="text-blue-400">9.56/10</span>.
          </p>
          
          <p className="text-slate-400 leading-relaxed">
            I specialize in building production-grade full-stack systems using 
            <span className="text-blue-400"> Java, Spring Boot Microservices, and React.js</span>. 
            As an <span className="text-blue-400">AWS Certified Cloud Practitioner</span>, I've successfully 
            delivered 3 end-to-end client projects on AWS using Docker, Kubernetes, and Jenkins CI/CD.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl font-bold text-blue-500">3+</div>
              <div className="text-sm text-slate-400">Client Projects</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl font-bold text-blue-500">130+</div>
              <div className="text-sm text-slate-400">LeetCode Problems</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl font-bold text-blue-500">9.56</div>
              <div className="text-sm text-slate-400">CGPA</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl font-bold text-blue-500">AWS</div>
              <div className="text-sm text-slate-400">Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;