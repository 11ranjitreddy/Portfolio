import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2300030772cseird@gmail.com",
      link: "mailto:2300030772cseird@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, Andhra Pradesh, India",
      link: null,
      color: "text-green-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6281619929",
      link: "tel:+916281619929",
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/11ranjitreddy",
      color: "hover:bg-gray-600"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/kalliranjit",
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities — whether it's a full-time role, internship, or collaboration.
            Feel free to reach out and I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-${item.color.split('-')[1]}-500/10 ${item.color} shrink-0 mx-auto md:mx-0`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-md font-medium text-slate-200 hover:text-blue-400 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-md font-medium text-slate-200">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-slate-800/50 text-slate-400 text-sm">Connect with me</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-slate-700 text-slate-300 ${social.color} transition-all duration-300 shadow-lg`}
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-10"
            >
              <a
                href="mailto:2300030772cseird@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={20} />
                Send me an email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;