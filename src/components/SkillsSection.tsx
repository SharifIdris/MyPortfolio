import { Code, Laptop, BarChart4 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const SkillsSection = () => {
  const { technicalSkills, softSkills } = personalInfo;
  
  return (
    <section className="py-16 bg-gradient-to-b from-black to-black/90" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-cyan-500/20 p-2 rounded-lg mr-4 neon-border">
              <BarChart4 size={24} className="text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white neon-text">My Skills</h2>
          </div>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            A combination of technical expertise and professional soft skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500/20 p-2 rounded-lg mr-3 neon-border">
                <Code size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white neon-text">Technical Skills</h3>
            </div>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 neon-border">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-fuchsia-500/20 p-2 rounded-lg mr-3 neon-border">
                <Laptop size={20} className="text-fuchsia-400" />
              </div>
              <h3 className="text-2xl font-bold text-white neon-text">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-black/50 rounded-lg p-4 hover:bg-cyan-600/20 transition-colors duration-200 neon-border">
                  <h4 className="text-lg font-medium text-cyan-400 mb-2">{skill.name}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;