import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-slate-900/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with personal branding */}
          <div className="flex-shrink-0">
            <a href="#home" className="group">
              <div className="text-2xl font-bold">
                <span className="text-white tracking-tighter">Kalli </span>
                <span className="text-blue-500">Ranjit</span>
              </div>
              <div className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
                Full Stack Developer
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute top-full left-0 w-full border-t border-slate-700 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 pt-4 mt-2">
              {/* Contact Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-sm text-slate-400 px-4">
                  <Phone size={16} className="text-blue-500" />
                  <span>+91 6281619929</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 px-4">
                  <Mail size={16} className="text-blue-500" />
                  <span className="break-all">2300030772cseird@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 px-4">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Vijayawada, India</span>
                </div>
              </div>

              {/* Social Links - Fixed with react-icons */}
              <div className="flex gap-3 px-4 pt-2">
                <a
                  href="https://github.com/11ranjitreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/kalliranjit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:2300030772cseird@gmail.com"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Mobile Hire Me Button */}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;