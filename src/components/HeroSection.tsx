import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';

const HeroSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Virtual Assistant', 'Python Developer', 'Django Enthusiast', 'Ethical Hacker', 'Problem Solver','Aspiring Data Scientist'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };
    
    const typed = new Typed(typingRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative bg-black pt-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left mb-16 lg:mb-0">
            <div className="space-y-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-600/10 text-cyan-400 text-sm font-medium mb-4 neon-border">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                Available for freelance work
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white neon-text">
                Hello, I'm <span className="text-cyan-400">Angole Sharif</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-300">
                <span ref={typingRef}></span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl lg:mx-0 mx-auto">
                Computer Science student at Busitema University specialized in Python, Django, and ethical hacking. Building digital solutions with passion and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-700 transition-all duration-200 flex items-center justify-center font-medium neon-border"
                >
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a 
                  href="/assets/resume.pdf" 
                  className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200 flex items-center justify-center font-medium neon-text"
                  download
                >
                  Download Resume
                </a>
              </div>
              
              <div className="pt-6">
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a href="https://github.com/SharifIdris" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-lg text-cyan-400 hover:text-cyan-300 neon-text">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/angole-sharif-abubakar" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-lg text-cyan-400 hover:text-cyan-300 neon-text">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/Sharifidris82" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-lg text-cyan-400 hover:text-cyan-300 neon-text">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-full blur-lg opacity-75"></div>
              <div className="relative bg-black rounded-full p-2 neon-border">
                <img 
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Angole Sharif Abubakar"
                  className="w-full h-auto rounded-full shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black rounded-xl p-4 shadow-lg border border-cyan-500/20 max-w-xs neon-border">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">AS</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white truncate">
                      {personalInfo.experience[0].position}
                    </p>
                    <p className="text-xs text-cyan-400 truncate">
                      {personalInfo.experience[0].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;