import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Zap, Users, BookOpen, ChevronRight, Star } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all project items
    const projectItems = containerRef.current?.querySelectorAll('.project-item');
    projectItems?.forEach((item, index) => {
      // Add staggered delay
      item.setAttribute('data-delay', (index * 150).toString());
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Recreon - Sports Social App",
      description: "A full-stack mobile application that pairs aspiring sports enthusiasts with peers and enables local competition. Built with Expo framework, React.js frontend, and PostgreSQL database with secure authentication and third-party API integrations.",
      image: "/images/projects/recreon-screenshot.jpg",
      technologies: ["React.js", "Expo", "Node.js", "PostgreSQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      icon: <Users className="w-6 h-6" />,
      gradient: "from-emerald-400 via-green-400 to-teal-400",
      bgGradient: "from-emerald-900/20 via-green-900/20 to-teal-900/20"
    },
    {
      title: "Northeastern Bookstore Platform",
      description: "Led a team of 4 developers to create a marketplace connecting Northeastern students for buying and selling used textbooks. Features user profiles, Google authentication, search algorithms, and post management system.",
      image: "/images/projects/bookstore-screenshot.jpg",
      technologies: ["CSS", "Python", "MongoDB", "Google Auth", "Full Stack"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-teal-400 via-emerald-400 to-green-400",
      bgGradient: "from-teal-900/20 via-emerald-900/20 to-green-900/20"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimized performance. Showcases projects, skills, and professional experience.",
      image: "/images/projects/portfolio-screenshot.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      icon: <Code className="w-6 h-6" />,
      gradient: "from-green-400 via-emerald-400 to-lime-400",
      bgGradient: "from-green-900/20 via-emerald-900/20 to-lime-900/20"
    },
    {
      title: "Tutoring Management System",
      description: "Internal system for managing tutoring sessions, student progress tracking, and scheduling. Built to support the peer tutoring program at Knack with features for session management and performance analytics.",
      image: "/images/projects/tutoring-screenshot.jpg",
      technologies: ["React", "Node.js", "Database", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-lime-400 via-green-400 to-emerald-400",
      bgGradient: "from-lime-900/20 via-green-900/20 to-emerald-900/20"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 project-item opacity-0 translate-y-8">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-gradient-flow">
                  Featured Projects
                </span>
              </h2>
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-emerald-400/10 to-green-400/10 blur-xl animate-pulse-glow"></div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 mx-auto rounded-full transform scale-x-0 animate-scale-x delay-300"></div>
            <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg opacity-0 animate-fade-in-up delay-500 leading-relaxed">
              Here are some of the projects I've worked on that showcase my skills in full-stack development, 
              team leadership, and innovative problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="project-item opacity-0 translate-y-12 group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-700/20 hover:border-emerald-500/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/20">
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>

                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-60`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.pexels.com/photos/${index === 0 ? '248547' : '159711'}/pexels-photo-${index === 0 ? '248547' : '159711'}.jpeg?auto=compress&cs=tinysrgb&w=800`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 p-3 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-emerald-700/40 group-hover:border-emerald-500/60 transition-all duration-500">
                      <div className={`text-emerald-400 group-hover:scale-110 transition-transform duration-300 ${hoveredProject === index ? 'animate-bounce-gentle' : ''}`}>
                        {project.icon}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-900/80 backdrop-blur-sm text-emerald-300 text-xs font-medium rounded-full border border-emerald-700/40 animate-pulse-gentle">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Star size={16} className="text-emerald-400 animate-pulse-gentle" />
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-emerald-900/30 text-emerald-300 text-sm rounded-xl border border-emerald-700/30 hover:border-emerald-500/50 hover:bg-emerald-800/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 font-medium group relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <ExternalLink size={18} className="relative z-10 animate-bounce-gentle" />
                        <span className="relative z-10">Live Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-3 px-6 py-3 border-2 border-emerald-600 text-emerald-400 rounded-xl hover:bg-emerald-900/30 hover:border-emerald-500 hover:text-emerald-300 transition-all duration-300 transform hover:scale-105 font-medium backdrop-blur-sm"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="project-item opacity-0 translate-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Other Notable Projects
                </span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="project-item opacity-0 translate-y-6 bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/20 hover:border-emerald-500/40 transition-all duration-500 hover:bg-slate-800/50 group transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 rounded-2xl text-emerald-400 flex-shrink-0 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                      <div className={hoveredProject === index + featuredProjects.length ? 'animate-bounce-gentle' : ''}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="font-bold text-white text-xl group-hover:text-emerald-300 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <ChevronRight size={16} className="text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-emerald-700/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-lg border border-emerald-700/20 hover:border-emerald-500/40 transition-all duration-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href={project.liveUrl} 
                          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-all duration-300 flex items-center gap-1 group-hover:gap-2"
                        >
                          Live Demo 
                          <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a 
                          href={project.githubUrl} 
                          className="text-slate-400 hover:text-slate-300 text-sm font-medium transition-all duration-300 flex items-center gap-1 group-hover:gap-2"
                        >
                          View Code 
                          <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 project-item opacity-0 translate-y-8">
            <div className="bg-gradient-to-r from-slate-800/60 to-emerald-900/40 backdrop-blur-xl p-12 rounded-3xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:scale-105 group relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-30 animate-float transition-opacity duration-500"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-40 animate-float delay-300 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors duration-300">
                  Interested in Collaborating?
                </h3>
                <p className="text-slate-300 mb-8 text-lg group-hover:text-slate-200 transition-colors duration-300 max-w-2xl mx-auto">
                  I'm always excited to work on innovative projects and explore new technologies. 
                  Let's create something amazing together!
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-2xl hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 transition-all duration-500 font-bold text-lg transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Let's Connect</span>
                  <ExternalLink size={20} className="relative z-10 animate-bounce-gentle" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.8s ease-out;
        }

        .project-item {
          transition-delay: attr(data-delay, '0ms');
        }

        .animate-gradient-flow {
          background-size: 300% 300%;
          animation: gradientFlow 4s ease infinite;
        }

        .animate-scale-x {
          animation: scaleX 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes bounceGentle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) rotate(1deg);
          }
          75% {
            transform: translateY(-1px) rotate(-1deg);
          }
        }

        @keyframes pulseGentle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(-30px) rotate(240deg);
          }
        }

        /* Staggered animation delays */
        .project-item:nth-child(1) { transition-delay: 0ms; }
        .project-item:nth-child(2) { transition-delay: 150ms; }
        .project-item:nth-child(3) { transition-delay: 300ms; }
        .project-item:nth-child(4) { transition-delay: 450ms; }
        .project-item:nth-child(5) { transition-delay: 600ms; }
        .project-item:nth-child(6) { transition-delay: 750ms; }
      `}</style>
    </section>
  );
};

export default Projects;