import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, Award, GraduationCap, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['C++', 'JavaScript', 'Java', 'C', 'Python', 'SQL'],
    frameworks: ['HTML & CSS', 'Node.js'],
    tools: ['Power BI', 'Excel', 'IBM Cognos', 'IBM Configuration'],
    soft: ['Problem-Solving', 'Team Player', 'Adaptability']
  };

  const projects = [
    {
      title: 'Secure Bank',
      date: 'Dec 2025',
      description: 'Designed and developed a secure online banking web application to simulate user authentication and basic banking operations.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
      highlights: ['Implemented interactive and responsive user interfaces using modern frontend tools to ensure smooth user experience and reliability.']
    },
    {
      title: 'Medical Health Record Management System',
      date: 'Nov-Dec 2025',
      description: 'Developed a scalable healthcare record management system with secure backend services and REST APIs.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs'],
      highlights: ['Implemented microservices architecture to improve performance and maintainability.']
    },
    {
      title: 'Flight Route Optimization System',
      date: 'July 2025',
      description: 'Developed a system to calculate the most efficient flight paths by analyzing variables such as fuel consumption, weather patterns, and air traffic control data.',
      tech: ['Python', 'SQL'],
      highlights: ['Utilized routing algorithms to minimize operational costs and flight duration, improving overall network efficiency.']
    },
    {
      title: 'Dynamic Resource Allocation System',
      date: 'May 2025',
      description: 'Designed and developed a dynamic system to intelligently manage and allocate computational resources based on real-time workload demands.',
      tech: ['Python', 'Node.js', 'SQL'],
      highlights: ['Implemented algorithms to monitor resource utilization and prevent system bottlenecks, ensuring optimal performance and stability.']
    }
  ];

  const certificates = [
    { name: 'Microservices Architecture and Implementation', date: 'Oct 2025' },
    { name: 'Master Generative AI & Tools (ChatGPT & more)', date: 'Aug 2025' },
    { name: 'Introduction to Python from IBM', date: 'March 2025' },
    { name: 'Business Intelligence from LPU', date: 'Feb 2025' },
    { name: 'Text Analytics 101 from IBM', date: 'Feb 2025' },
    { name: 'Introduction to Hardware and OS from IBM', date: 'Sept 2024' },
    { name: 'Enterprise Design Thinking Practitioner', date: 'April 2024' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ronak
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 hover:bg-blue-900/50 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-6xl font-bold">
              R
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Hi, I'm Ronak
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Student | Big Data Analyst | Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/2004ro" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ronak-2738b1292/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ronakee53@gmail.com" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="tel:+918949603492" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110">
              <Phone size={24} />
            </a>
          </div>
          <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
            View My Work
          </button>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <GraduationCap className="inline mr-3" size={40} />
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold">Lovely Professional University</h4>
              <p className="text-gray-300">B.Tech. in Computer Science (Specialization in Big Data Analyst)</p>
              <p className="text-gray-400">Aug 2023 - Present | CGPA: 7.04</p>
              <p className="text-gray-400">Phagwara, Punjab</p>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400 mt-8">Training</h3>
            <div>
              <h4 className="text-xl font-semibold">Summer Internship Training</h4>
              <p className="text-gray-400">June-July 2025</p>
              <p className="text-gray-300 mt-2">Completed comprehensive training on fundamentals of Data Structures and Algorithms (DSA) using Python, C, and Java.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline mr-3" size={40} />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all">
                <h3 className="text-xl font-bold mb-4 capitalize text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline mr-3" size={40} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-blue-400">Key Highlights:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-full text-xs border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline mr-3" size={40} />
            Certificates & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all hover:transform hover:-translate-y-1">
                <Award className="text-cyan-400 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Additional Achievements</h3>
            <p className="text-gray-300">Earned industry-recognized certifications in RDBMS, Big Data Architecture, and Business Intelligence from IBM Developer Skills Network, demonstrating commitment to continuous learning and professional development.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href="mailto:ronakee53@gmail.com" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-900/30 transition-all flex items-center justify-center space-x-3">
              <Mail size={24} />
              <span>ronakee53@gmail.com</span>
            </a>
            <a href="tel:+918949603492" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-900/30 transition-all flex items-center justify-center space-x-3">
              <Phone size={24} />
              <span>+91-8949603492</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/2004ro" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-blue-600 transition-all transform group-hover:scale-110">
                <Github size={32} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ronak-2738b1292/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-purple-700 transition-all transform group-hover:scale-110">
                <Linkedin size={32} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Ronak. Built with React & Tailwind CSS.</p>
          <p className="mt-2 text-sm">Designed and developed with passion 💙</p>
        </div>
      </footer>
    </div>
  );
}