import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-400 transition-all duration-300 hover:text-indigo-300">
              Sharif<span className="text-teal-400">TechSavy</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" active={location.pathname === '/'} onClick={closeNavbar}>
                Home
              </NavLink>
              <NavLink to="/projects" active={location.pathname === '/projects'} onClick={closeNavbar}>
                Projects
              </NavLink>
              <NavLink to="/certifications" active={location.pathname === '/certifications'} onClick={closeNavbar}>
                Certifications
              </NavLink>
              <NavLink to="/contact" active={location.pathname === '/contact'} onClick={closeNavbar}>
                Contact
              </NavLink>
              <a
                href="/assets/resume.pdf"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                download
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          <MobileNavLink to="/" active={location.pathname === '/'} onClick={closeNavbar}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/projects" active={location.pathname === '/projects'} onClick={closeNavbar}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="/certifications" active={location.pathname === '/certifications'} onClick={closeNavbar}>
            Certifications
          </MobileNavLink>
          <MobileNavLink to="/contact" active={location.pathname === '/contact'} onClick={closeNavbar}>
            Contact
          </MobileNavLink>
          <a
            href="/assets/resume.pdf"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 mx-2"
            download
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, active, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      active ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;