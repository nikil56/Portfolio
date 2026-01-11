import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code2, Database, Cloud, BookOpen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-black pointer-events-none" />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all"
          >
            Nikhil
          </a>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30">
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-fade-in space-y-8">
              <div className="space-y-4">
                <p className="text-cyan-400 text-lg font-semibold animate-slide-in">Welcome to my portfolio</p>
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
                  NIKHIL NIBU
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300">Full-Stack Developer | Cloud Enthusiast | DevOps</p>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                B.Tech IT student passionate about building scalable systems, exploring emerging technologies, and creating meaningful digital experiences
              </p>
              <div className="flex justify-center space-x-4 pt-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 font-medium"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all transform hover:scale-105 font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a B.Tech Information Technology student at Amal Jyothi College of Engineering (CGPA: 7.61) with hands-on experience in full-stack development, cloud platforms, and DevOps. I have a strong passion for building scalable systems and continuously exploring emerging technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey spans from developing web applications with Node.js and MongoDB, implementing CI/CD pipelines using GitHub Actions and Docker, to deploying containerized workloads on AWS EKS. I believe in clean code, meaningful design, and solving real-world problems through technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-cyan-400">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-300">{skill}</span>
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '85%'}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience & Education</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 mt-4" />
                    )}
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 flex-1 hover:border-cyan-500/60 transition-all">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                      <span className="text-sm text-gray-400">{exp.date}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{exp.company}</p>
                    {exp.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                    )}
                    {exp.highlights && (
                      <ul className="mt-3 space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's Connect</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                I'm always open to discussing new projects, opportunities, and how technology can solve real problems.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a
                  href="https://github.com/nikil56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                >
                  <Github size={32} className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold mb-1">GitHub</p>
                  <p className="text-sm text-gray-400">github.com/nikil56</p>
                </a>
                <a
                  href="https://linkedin.com/in/nikhilnibu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                >
                  <Linkedin size={32} className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <p className="text-sm text-gray-400">linkedin.com/in/nikhilnibu</p>
                </a>
                <a
                  href="mailto:nikhilnibu616@gmail.com"
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                >
                  <Mail size={32} className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-gray-400">nikhilnibu616@gmail.com</p>
                </a>
              </div>

              <a
                href="mailto:nikhilnibu616@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Send Me a Message
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-black via-blue-950/30 to-black py-12 border-t border-cyan-500/20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Nikhil Nibu. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Crafted with passion and modern web technologies</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  highlights,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  highlights?: string[];
  link: string;
}) {
  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl overflow-hidden transform transition-all hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105">
      <div className="h-40 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        {highlights && (
          <ul className="mb-4 space-y-1">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
        >
          Learn More <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="text-cyan-400" size={24} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Code2 className="text-cyan-400" size={24} />,
    skills: ['Node.js', 'React', 'Express.js'],
  },
  {
    title: 'Databases & Cloud',
    icon: <Database className="text-cyan-400" size={24} />,
    skills: ['MySQL', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    title: 'Developer Tools',
    icon: <Cloud className="text-cyan-400" size={24} />,
    skills: ['Git', 'GitHub', 'Postman', 'Kubernetes'],
  },
];

const experiences = [
  {
    title: 'Power BI Intern',
    company: 'Cognifyz Technologies',
    date: '2025',
    description: 'Building interactive Power BI dashboards with real-world datasets',
    highlights: [
      'Created interactive dashboards using Power Query and DAX',
      'Published reports on Power BI Service for collaboration',
      'Worked with real-world datasets for insights',
    ],
  },
  {
    title: 'Python Development Intern',
    company: 'Next24Tech Technology & Services',
    date: '2024',
    description: 'Developed automation tools and applications',
    highlights: [
      'Built chatbot, registration form, and lyrics extractor using Tkinter',
      'Modularized code for better maintainability',
      'Automated form interactions with error handling',
    ],
  },
  {
    title: 'B.Tech Information Technology',
    company: 'Amal Jyothi College of Engineering',
    date: '2022–2026',
    description: 'Autonomous institution in Kottayam, India',
  },
  {
    title: 'Higher Secondary Education',
    company: "St. George's Higher Secondary School",
    date: '2020–2022',
    description: 'Achieved 92% in HSC board examinations',
  },
];

const projects = [
  {
    title: 'CI/CD Pipeline Implementation',
    description: 'Automated deployment pipeline with containerization and orchestration',
    highlights: [
      'Implemented CI/CD using GitHub Actions and Docker',
      'Deployed on Amazon EKS with Kubernetes & Helm',
      'Configured Argo CD and NGINX Ingress',
    ],
    tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS EKS'],
    link: '#',
  },
  {
    title: 'FABRICA – A & A Engineering Works',
    description: 'Full-stack web application for engineering services and quotes',
    highlights: [
      'Built with HTML, CSS, JavaScript, Node.js, MongoDB',
      'Designed MongoDB schemas and REST APIs',
      'Dynamic quote calculator and admin panel',
    ],
    tags: ['Node.js', 'MongoDB', 'JavaScript', 'REST API'],
    link: '#',
  },
  {
    title: 'Fact Extraction from News Articles',
    description: 'LLM-based system for extracting factual information',
    highlights: [
      'Training LLM using PyTorch for triplet extraction',
      'Dataset collection and preprocessing',
      'Planning web scraping integration',
    ],
    tags: ['PyTorch', 'LLM', 'NLP', 'Python'],
    link: '#',
  },
  {
    title: 'Power BI Dashboards',
    description: 'Interactive analytics dashboards for business intelligence',
    highlights: [
      'Real-world dataset analysis',
      'Advanced DAX formulas and Power Query',
      'Collaborative reporting on Power BI Service',
    ],
    tags: ['Power BI', 'DAX', 'Power Query'],
    link: '#',
  },
  {
    title: 'Python Automation Tools',
    description: 'Desktop applications for automation and data processing',
    highlights: [
      'Chatbot development with Tkinter',
      'Registration form with validation',
      'Music lyrics extractor using APIs',
    ],
    tags: ['Python', 'Tkinter', 'API Integration'],
    link: '#',
  },
  {
    title: 'Cloud & DevOps Studies',
    description: 'Professional certifications and hands-on cloud experience',
    highlights: [
      'AWS Cloud Practitioner Essentials certified',
      'IBM Introduction to Cloud Computing',
      'Strong interest in building scalable systems',
    ],
    tags: ['AWS', 'Cloud', 'DevOps', 'Scalability'],
    link: '#',
  },
];

export default App;
