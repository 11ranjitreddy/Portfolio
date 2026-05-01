import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Hey! I'm <span className="text-slate-200 font-medium">Kalli Ranjit</span>, a third-year Computer Science undergraduate at{' '}
              <span className="text-blue-400 font-medium">KL University</span> with a CGPA of 9.56/10.
              I enjoy building things that solve real problems — from full-stack web platforms to cloud-deployed microservices.
            </p>
            <p>
              I'm an <span className="text-blue-400 font-medium">AWS Certified Cloud Practitioner</span> with 3 end-to-end projects
              shipped on AWS using Docker, Kubernetes, and Jenkins CI/CD. My primary stack is{' '}
              <span className="text-slate-200 font-medium">Java + Spring Boot</span> on the backend and{' '}
              <span className="text-slate-200 font-medium">React.js</span> on the frontend.
              I've also delivered a real client project — an EdTech LMS — from design to handoff.
            </p>
            <p>
              I'm actively solving DSA problems (130+ on LeetCode) and looking for a{' '}
              <span className="text-slate-200 font-medium">Full Stack / Backend Engineering role</span> where I can make real impact from day one.
            </p>

            <p className="text-slate-300 font-medium">Technologies I work with:</p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-medium mt-4">
              {[
                'Java & Spring Boot',
                'React.js',
                'Microservices & REST APIs',
                'AWS (EC2, S3, Rekognition...)',
                'Docker & Kubernetes',
                'Jenkins CI/CD',
                'RabbitMQ & WebSocket',
                'MySQL & JWT',
              ].map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-500 text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="relative rounded-xl overflow-hidden bg-slate-800 aspect-square flex items-center justify-center border-2 border-slate-700 group-hover:border-blue-500 transition-colors duration-300 z-10">
              <User size={80} className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-blue-500 rounded-xl translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;