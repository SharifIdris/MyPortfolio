export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  downloadUrl?: string;
  description: string;
  expiryDate?: string;
}

export const personalInfo = {
  name: "Angole Sharif Abubakar",
  email: "sharifidris8@gmail.com",
  phone: "+256765721427",
  location: "Busitema University, Uganda",
  about: `Computer Science student at Busitema University with a passion for technology and problem-solving. Skilled in Python programming, Django web development, and cybersecurity. Currently pursuing advanced certifications in Data Science and Ethical Hacking.`,
  
  education: [
    {
      institution: "Busitema University",
      degree: "Computer Science",
      period: "Current",
      description: "Currently pursuing a degree in Computer Science, focusing on programming, algorithms, data structures, and software development methodologies."
    },
    {
      institution: "St Gracious Secondary School",
      degree: "Advanced Secondary Education",
      period: "Completed",
      subjects: "Physics, Chemistry, Mathematics",
      description: "Completed advanced secondary education with a focus on Physics, Chemistry, and Mathematics (PCM)."
    }
  ],
  
  experience: [
    {
      position: "Virtual Assistant",
      company: "Alx African Foundation",
      period: "2025 - Present",
      description: "Providing administrative support, managing schedules, and handling communications for clients. Utilizing organizational skills to improve productivity and efficiency."
    },
    {
      position: "Python Developer (Freelance)",
      company: "Self-employed",
      period: "2024 - Present",
      description: "Developing custom Python applications for various clients. Implementing automated solutions to streamline workflows and processes."
    }
  ],
  
  technicalSkills: [
    { name: "Python", level: 85 },
    { name: "Django", level: 70 },
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "Kali Linux", level: 80 },
    { name: "Data Analysis", level: 60 },
    { name: "Ethical Hacking", level: 75 },
    { name: "Git", level: 80 }
  ],
  
  softSkills: [
    { 
      name: "Communication", 
      description: "Excellent verbal and written communication skills with the ability to explain technical concepts to non-technical audiences." 
    },
    { 
      name: "Problem Solving", 
      description: "Strong analytical and critical thinking skills with a methodical approach to troubleshooting." 
    },
    { 
      name: "Time Management", 
      description: "Proficient in prioritizing tasks and meeting deadlines even under pressure." 
    },
    { 
      name: "Adaptability", 
      description: "Quick to learn new technologies and adapt to changing environments and requirements." 
    },
    { 
      name: "Teamwork", 
      description: "Collaborative team player who values diverse perspectives and contributes positively to group dynamics." 
    },
    { 
      name: "Leadership", 
      description: "Experience in guiding and motivating team members to achieve project goals effectively." 
    }
  ],
  
  projects: [
    {
      title: "Secure Web Authentication System",
      description: "A Django-based authentication system with advanced security features including two-factor authentication and brute force protection.",
      image: "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "Bootstrap"],
      demoUrl: "https://auth-demo.example.com",
      codeUrl: "https://github.com/example/secure-auth",
      featured: true,
      categories: ["web", "security", "python"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing and analyzing large datasets with customizable charts and filters.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Pandas", "JavaScript", "D3.js", "Flask"],
      demoUrl: "https://data-viz.example.com",
      codeUrl: "https://github.com/example/data-dashboard",
      featured: true,
      categories: ["data", "python", "web"]
    },
    {
      title: "Network Security Scanner",
      description: "A tool for scanning networks to identify vulnerabilities and security issues, developed using Python and Kali Linux tools.",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Kali Linux", "Bash", "SQL"],
      codeUrl: "https://github.com/example/security-scanner",
      featured: false,
      categories: ["security", "python"]
    },
    {
      title: "E-Learning Platform",
      description: "A comprehensive learning management system built with Django, featuring course creation, user management, and progress tracking.",
      image: "https://images.pexels.com/photos/8638243/pexels-photo-8638243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Django", "JavaScript", "React", "PostgreSQL"],
      demoUrl: "https://elearn-demo.example.com",
      codeUrl: "https://github.com/example/elearning-platform",
      featured: true,
      categories: ["web", "python"]
    },
    {
      title: "Automated File Organizer",
      description: "A Python script that automatically organizes files based on type, date, or custom rules to keep directories clean and structured.",
      image: "https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "OS", "Tkinter"],
      codeUrl: "https://github.com/example/file-organizer",
      featured: false,
      categories: ["python"]
    },
    {
      title: "Social Media Analytics Tool",
      description: "An application that analyzes social media data to provide insights on engagement, trends, and audience demographics.",
      image: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Pandas", "NLTK", "Matplotlib", "Flask", "JavaScript"],
      demoUrl: "https://social-analytics.example.com",
      featured: false,
      categories: ["data", "python", "web"]
    }
  ],
  
  certifications: [
    {
      title: "Virtual Assistant Certification",
      issuer: "Alx African Foundation",
      issueDate: "2025",
      credentialUrl: "/assets/certificates/va.pdf",
      downloadUrl: "/assets/certificates/va.pdf",
      description: "Comprehensive certification covering administrative tasks, communication, time management, and digital tools for virtual assistance."
    },
    {
      title: "Python Programming",
      issuer: "SimpliLearn",
      issueDate: "2024-2025",
      credentialUrl: "/assets/certificates/python.pdf",
      downloadUrl: "/assets/certificates/python.pdf",
      description: "Advanced certification in Python programming covering object-oriented programming, data structures, algorithms, and application development."
    },
    {
      title: "Git Version Control",
      issuer: "SimpliLearn",
      issueDate: "2024-2025",
      credentialUrl: "/assets/certificates/git.pdf",
      downloadUrl: "/assets/certificates/git.pdf",
      description: "Comprehensive training in Git version control system, covering branching strategies, collaboration workflows, and best practices."
    },
    {
      title: "Data Science Fundamentals",
      issuer: "Alx African Foundation",
      issueDate: "In Progress",
      description: "Currently pursuing certification in data analysis, machine learning, statistical methods, and data visualization."
    },
    {
      title: "Ethical Hacking Essentials",
      issuer: "Cisco Nat Academy",
      issueDate: "In Progress",
      description: "Studying cybersecurity fundamentals, penetration testing methodologies, and ethical hacking practices."
    }
  ],
  
  socialMedia: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};
