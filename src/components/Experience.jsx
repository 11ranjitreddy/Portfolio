import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experienceData = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    date: '2021 - Present',
    description: 'Developed and maintained responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software on schedule.',
    icon: <Briefcase size={20} className="text-blue-500" />
  },
  {
    type: 'work',
    title: 'Frontend Web Developer Intern',
    company: 'Creative Agency',
    date: '2020 - 2021',
    description: 'Assisted in building UI components using HTML, CSS, and JavaScript. Improved site performance and accessibility scores across multiple client projects.',
    icon: <Briefcase size={20} className="text-blue-500" />
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    date: '2016 - 2020',
    description: 'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering.',
    icon: <GraduationCap size={20} className="text-purple-500" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Where I've Worked</SectionHeading>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-700" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -mt-1 md:mt-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border-4 border-slate-900 z-10 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4 py-2 md:py-0">
                  <div className={`bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-lg relative ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Arrow pointer */}
                    <div className={`hidden md:block absolute top-5 w-4 h-4 bg-slate-800/80 border-t border-l border-slate-700/50 transform rotate-45 ${idx % 2 === 0 ? '-right-2' : '-left-2 border-r-0 border-b-0 border-t border-l'}`} />
                    
                    <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">{item.company}</h4>
                    
                    <div className="flex items-center text-slate-400 text-sm mb-4">
                      <Calendar size={14} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
