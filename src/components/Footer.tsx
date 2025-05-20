import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 neon-text">Angole Sharif Abubakar</h3>
            <p className="mb-4 text-gray-400">Computer Science Student at Busitema University, Virtual Assistant, and Tech Enthusiast</p>
            <div className="flex space-x-4 text-cyan-400">
              <a href="https://github.com/SharifIdris" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors duration-200 neon-text">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/angole-sharif-abubakar" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors duration-200 neon-text">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Sharifidris82" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors duration-200 neon-text">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 neon-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-cyan-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-cyan-400 transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="/certifications" className="hover:text-cyan-400 transition-colors duration-200">Certifications</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 neon-text">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-cyan-400" />
                <a href="mailto:sharifidris8@gmail.com" className="hover:text-cyan-400 transition-colors duration-200">
                  sharifidris8@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-cyan-400" />
                <a href="tel:+256765721427" className="hover:text-cyan-400 transition-colors duration-200">
                  +256 765 721 427
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Angole Sharif Abubakar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;