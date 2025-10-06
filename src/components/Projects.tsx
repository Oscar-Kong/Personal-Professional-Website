import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Users, BookOpen, Trophy } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.15 });

    const items = containerRef.current?.querySelectorAll('.project-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Recreon - Sports Social App",
      description: "A full-stack mobile application that pairs aspiring sports enthusiasts with peers and enables local competition. Built with Expo framework, React.js frontend, and PostgreSQL database with secure authentication and third-party API integrations.",
      image: "/images/projects/recreon-screenshot.jpg",
      technologies: ["React.js", "Expo", "Node.js", "PostgreSQL", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/Oscar-Kong/Recreon",
      featured: true,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimized performance.",
      image: "/images/projects/portfolio-screenshot.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Oscar-Kong/Personal-Professional-Website",
      featured: false,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "NEU Squash Hub",
      description: "A comprehensive platform for the Northeastern Squash Club to manage memberships, schedule matches, track player progress, and coordinate events. Built to support the club's growth toward establishing a varsity program.",
      image: "/images/projects/squashhub-screenshot.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JavaScript"],
      liveUrl: "https://www.neusquashhub.com/",
      githubUrl: "https://github.com/Oscar-Kong",
      featured: false,
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Northeastern Bookstore Platform",
      description: "Led a team of 4 developers to create a marketplace connecting Northeastern students for buying and selling used textbooks. Features user profiles, Google authentication, search algorithms, and post management system.",
      image: "/images/projects/bookstore-screenshot.jpg",
      technologies: ["CSS", "Python", "MongoDB", "Google Auth", "Full Stack"],
      liveUrl: null,
      githubUrl: "https://github.com/Oscar-Kong",
      featured: true,
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* All Projects - Unified Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-item opacity-0 translate-y-8 group">
                <div className={`${
                  project.featured 
                    ? 'bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:bg-slate-800/70 hover:shadow-lg'
                    : 'bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:bg-slate-800/50'
                }`}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const fallbackImages = ['248547', '159711', '416978', '270632'];
                        e.currentTarget.src = `https://images.pexels.com/photos/${fallbackImages[index]}/pexels-photo-${fallbackImages[index]}.jpeg?auto=compress&cs=tinysrgb&w=800`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 p-2 bg-emerald-900/50 backdrop-blur-sm rounded-lg text-emerald-400 border border-emerald-700/50">
                      {project.icon}
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-emerald-600 text-emerald-400 rounded-lg hover:bg-emerald-900/30 transition-all duration-300 text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .project-item {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .project-item:nth-child(2) {
          transition-delay: 0.1s;
        }

        .project-item:nth-child(3) {
          transition-delay: 0.2s;
        }

        .project-item:nth-child(4) {
          transition-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Projects;