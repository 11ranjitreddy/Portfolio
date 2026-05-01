import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillsData = [
  {
    category: "Languages & Frontend",
    items: ["Java", "JavaScript", "C", "SQL", "React.js", "Flutter", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Architecture",
    items: ["Spring Boot", "Microservices", "Spring Cloud", "REST APIs", "Node.js", "RabbitMQ", "WebSocket", "JWT", "BCrypt"]
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS EC2", "AWS S3", "AWS Rekognition", "AWS Transcribe", "AWS Comprehend", "AWS SES", "AWS Kinesis", "Docker", "Kubernetes", "Jenkins CI/CD", "Ansible"]
  },
  {
    category: "Databases & Other Tools",
    items: ["MySQL", "Git", "GitHub", "Razorpay API", "Twilio", "Vercel"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {skillGroup.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-slate-900 px-4 py-2 rounded-full text-sm font-medium text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;