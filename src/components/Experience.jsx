import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase, GraduationCap, Calendar, Award, Users, Cloud } from 'lucide-react';

const experienceData = [
  {
    type: 'work',
    title: 'Cloud Computing Intern',
    company: 'Edu Skills',
    date: '2024 | 2 Months',
    description: 'Gained hands-on exposure to AWS cloud infrastructure, deploying services and working with compute, storage, and networking fundamentals. Completed infrastructure automation exercises and cloud deployment workflows, reinforcing best practices for scalable cloud architecture.',
    achievements: [
      'AWS services deployment and management',
      'Infrastructure automation using AWS tools',
      'Cloud deployment workflow optimization'
    ],
    icon: <Cloud size={20} className="text-blue-500" />
  },
  {
    type: 'work',
    title: 'Full Stack Developer (Client Project)',
    company: 'EdTech LMS - Real Client Delivery',
    date: 'Jan 2026',
    description: 'Architected and delivered a production-grade Learning Management System to a real client. Successfully handed off the complete project including GitHub repository transfer, comprehensive README documentation, and environment setup guide.',
    achievements: [
      'Built microservices-based architecture with Spring Boot',
      'Implemented JWT authentication, MFA, and Razorpay integration',
      'Containerized with Docker & Kubernetes on AWS EC2',
      'Setup automated Jenkins CI/CD pipeline',
      'Successfully delivered to client with complete documentation'
    ],
    icon: <Users size={20} className="text-green-500" />
  },
  {
    type: 'work',
    title: 'AI/Cloud Developer (Client Project)',
    company: 'StudentSmartInterview - Educational Platform',
    date: 'Aug 2025',
    description: 'Built an AI-powered interview platform for educational institutions. Integrated multiple AWS AI services to create an automated interview assessment system with real-time proctoring capabilities.',
    achievements: [
      'AWS Rekognition for face liveness detection',
      'Amazon Transcribe for speech-to-text conversion',
      'Amazon Comprehend for NLP-based answer scoring',
      'AWS SES for verified email registration',
      'Amazon Kinesis for live video streaming'
    ],
    icon: <Award size={20} className="text-purple-500" />
  },
  {
    type: 'work',
    title: 'Microservices Developer (Client Project)',
    company: 'Sports League Management System',
    date: 'Jun 2024',
    description: 'Designed and developed a scalable microservices-based sports management system with real-time capabilities for a sports organization.',
    achievements: [
      'Real-time score updates using WebSocket',
      'Async messaging with RabbitMQ for scalable queuing',
      'OTP-based notifications via Twilio/SMTP',
      'Containerized with Docker & Kubernetes on AWS EC2',
      'Implemented CI/CD automation pipeline'
    ],
    icon: <Users size={20} className="text-orange-500" />
  },
  {
    type: 'education',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    company: 'KL University, Vijayawada, Andhra Pradesh',
    date: 'Aug 2023 – Apr 2027',
    description: 'CGPA: 9.56/10',
    achievements: [
      'Relevant Coursework: Data Structures, Algorithms, Cloud Computing, Operating Systems, Database Systems, Software Engineering, Microservices Architecture',
      'AWS Certified Cloud Practitioner',
      '130+ LeetCode problems solved'
    ],
    icon: <GraduationCap size={20} className="text-purple-500" />
  },
  {
    type: 'education',
    title: 'Intermediate (MPC)',
    company: 'Aditya Junior College, Ichchapuram, Andhra Pradesh',
    date: 'Jun 2019 – Apr 2021',
    description: 'Percentage: 96%',
    achievements: [
      'Specialized in Mathematics, Physics, and Chemistry',
      'Top performer in academics'
    ],
    icon: <GraduationCap size={20} className="text-purple-500" />
  },
  {
    type: 'education',
    title: 'SSC 10th Standard',
    company: 'AP Model School, Purushotapuram, Andhra Pradesh',
    date: 'Jul 2018 – Mar 2019',
    description: 'Percentage: 97%',
    achievements: [
      'Outstanding academic achievement',
      'School topper'
    ],
    icon: <GraduationCap size={20} className="text-purple-500" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Experience & Education</SectionHeading>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -mt-1 md:mt-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 px-4 py-2 md:py-0">
                  <div className={`bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Arrow pointer */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-slate-800/80 border-t border-l border-slate-700/50 transform rotate-45 ${idx % 2 === 0 ? '-right-2' : '-left-2 border-r-0 border-b-0 border-t border-l'}`} />
                    
                    {/* Type Badge */}
                    <div className="inline-block mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                        {item.type === 'work' ? '💼 Work Experience' : '🎓 Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">
                      {item.company}
                    </h4>
                    
                    <div className="flex items-center text-slate-400 text-sm mb-4">
                      <Calendar size={14} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Achievements List */}
                    {item.achievements && (
                      <ul className="space-y-2 mt-3">
                        {item.achievements.map((achievement, achievementIdx) => (
                          <li key={achievementIdx} className="flex items-start text-sm text-slate-300">
                            <span className="text-blue-400 mr-2 mt-0.5">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Client Project Highlight */}
                    {item.company.toLowerCase().includes('client') && (
                      <div className="mt-4 pt-3 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 text-green-400 text-xs">
                          <Award size={14} />
                          <span className="font-semibold">✓ Successfully Delivered to Client</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Project Delivery Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-2">🏆 Client Project Delivery Experience</h4>
            <p className="text-slate-400 text-sm">
              Successfully delivered <span className="text-blue-400 font-semibold">3 end-to-end projects</span> to real clients,
              including complete documentation, GitHub repository transfer, and deployment setup guides.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;