import { ArrowRight, Download, User, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import { personalInfo } from '../data/personalInfo';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16 bg-gray-800" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-10 lg:mb-0">
              <div className="bg-gray-700 rounded-lg p-1">
                <img 
                  src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Angole Sharif Abubakar" 
                  className="rounded-lg w-full h-auto shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                  <User size={24} className="text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">About Me</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Angole Sharif Abubakar, a Computer Science student at Busitema University with a passion for technology and problem-solving. 
                  My academic journey began at St Gracious Secondary School where I focused on Physics, Chemistry, and Mathematics.
                </p>
                <p>
                  As a tech enthusiast, I've obtained a Virtual Assistant Certification from Alx African Foundation and am currently enrolled in their Data Science course. 
                  I'm also studying Ethical Hacking with Cisco Nat Academy, expanding my knowledge in cybersecurity.
                </p>
                <p>
                  I specialize in Python programming, Django web development, and have experience with Kali Linux for security testing. 
                  My goal is to combine these technical skills with my soft skills as a Virtual Assistant to create innovative solutions.
                </p>
                <div className="pt-4">
                  <a 
                    href="/assets/cv.pdf" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    download
                  >
                    <Download size={18} className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Education Section */}
      <section className="py-16 bg-gray-900" id="education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-teal-500/20 p-2 rounded-lg mr-4">
                <BookOpen size={24} className="text-teal-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
            </div>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
              My academic journey and professional certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:transform hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <div className="space-y-6 mt-6">
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Computer Science</h4>
                    <p className="text-teal-400">Busitema University</p>
                    <p className="text-gray-400">Current</p>
                  </div>
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Advanced Secondary Education</h4>
                    <p className="text-teal-400">St Gracious Secondary School</p>
                    <p className="text-gray-400">Physics, Chemistry, Mathematics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:transform hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
                <div className="space-y-6 mt-6">
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Virtual Assistant Certification</h4>
                    <p className="text-indigo-400">Alx African Foundation</p>
                    <a 
                      href="/assets/certificates/va.pdf" 
                      className="text-gray-400 inline-flex items-center hover:text-indigo-300 transition-colors duration-200 mt-1"
                      download
                    >
                      Download Certificate
                      <Download size={14} className="ml-1" />
                    </a>
                  </div>
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Data Science (In Progress)</h4>
                    <p className="text-indigo-400">Alx African Foundation</p>
                  </div>
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Ethical Hacking (In Progress)</h4>
                    <p className="text-indigo-400">Cisco Nat Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/certifications" className="inline-flex items-center text-indigo-400 hover:text-indigo-300">
              View all certifications
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Preview Section */}
      <section className="py-16 bg-gray-800" id="projects-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                <Code size={24} className="text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
              A selection of my recent work and ongoing projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.projects.slice(0, 3).map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm font-medium rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
