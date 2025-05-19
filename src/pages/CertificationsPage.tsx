import { Award, Download, BookOpen } from 'lucide-react';
import { personalInfo, Certification } from '../data/personalInfo';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Certifications</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional certifications, courses, and academic achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.certifications.map((cert: Certification, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="h-8 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 mx-auto">
                  <Award size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{cert.title}</h3>
                <p className="text-indigo-400 text-center mb-4">{cert.issuer}</p>
                <div className="text-sm text-gray-400 mb-6">
                  <p><strong>Issued:</strong> {cert.issueDate}</p>
                  {cert.expiryDate != null && <p><strong>Expires:</strong> {cert.expiryDate}</p>}
                  <p className="mt-2">{cert.description}</p>
                </div>
                <div className="flex justify-center">
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen size={16} className="mr-2" />
                      View Credential
                    </a>
                  )}
                  {cert.downloadUrl && (
                    <a 
                      href={cert.downloadUrl} 
                      className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 transition-colors duration-200 ml-3"
                      download
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-indigo-500 pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/20 text-indigo-400 mb-4">
                    Current
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">Computer Science</h3>
                  <p className="text-indigo-400 mb-3">Busitema University</p>
                  <p className="text-gray-400">
                    Currently pursuing a degree in Computer Science, focusing on programming, 
                    algorithms, data structures, and software development methodologies.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">Advanced Secondary Education</h3>
                  <p className="text-indigo-400 mb-3">St Gracious Secondary School</p>
                  <p className="text-gray-400">
                    Completed advanced secondary education with a focus on Physics, Chemistry, and Mathematics (PCM).
                    This strong foundation in science and mathematics has been instrumental in my computer science journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
