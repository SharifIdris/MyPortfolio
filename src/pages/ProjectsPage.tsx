import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'python', label: 'Python' },
    { id: 'data', label: 'Data Science' },
    { id: 'security', label: 'Security' },
  ];

  const filteredProjects = personalInfo.projects.filter(project => {
    const matchesFilter = filter === 'all' || project.categories.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing my skills in Python, Django, data science, and more.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex flex-wrap gap-2 justify-center md:justify-start">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setFilter(button.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === button.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 m-2">
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-md bg-indigo-600 text-white">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
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
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-full mb-4">
              <Filter size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
