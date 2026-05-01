import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          I'm currently open to new opportunities — whether it's a full-time role, internship, or collaboration.
          Feel free to reach out and I'll get back to you as soon as possible!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg h-full">
            <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mr-4 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a
                    href="mailto:2300030772cseird@gmail.com"
                    className="text-lg font-medium text-slate-200 hover:text-blue-400 transition-colors break-all"
                  >
                    2300030772cseird@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mr-4 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-lg font-medium text-slate-200">
                    Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/11ranjitreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/kalliranjit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:2300030772cseird@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;