import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Angole Sharif Abubakar</h3>
            <p className="mb-4 text-gray-400">Computer Science Student at Busitema University, Virtual Assistant, and Tech Enthusiast</p>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://github.com" className="hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="/certifications" className="hover:text-white transition-colors duration-200">Certifications</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:sharifidris8@gmail.com" className="hover:text-white transition-colors duration-200">
                  sharifidris8@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+256765721427" className="hover:text-white transition-colors duration-200">
                  +256 765 721 427
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Angole Sharif Abubakar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;