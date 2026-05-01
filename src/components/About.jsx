import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Code2, Laptop, User } from 'lucide-react';

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
              Hello! I'm a passionate Software Developer who enjoys creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about responsive design and routing!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium mt-4">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-500 text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            {/* Image placeholder with frame effect */}
            <div className="relative rounded-xl overflow-hidden bg-slate-800 aspect-square flex items-center justify-center border-2 border-slate-700 group-hover:border-blue-500 transition-colors duration-300 z-10">
              <User size={80} className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Background offset border */}
            <div className="absolute inset-0 border-2 border-blue-500 rounded-xl translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
