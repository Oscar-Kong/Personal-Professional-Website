import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all experience items
    const experienceItems = containerRef.current?.querySelectorAll('.experience-item');
    experienceItems?.forEach((item) => observer.observe(item));

    // Animate timeline on scroll
    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      
      timelineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const experiences = [
    {
      title: "Founder and Lead App Developer",
      company: "Recreon Startup",
      location: "Boston, MA",
      period: "January 2025 - Present",
      description: "Creating an online app that pairs aspiring sports enthusiasts with peers and enables local competition. Architecting full technology stack with React.js, Node.js, and PostgreSQL.",
      achievements: [
        "Architected full-stack application with React.js frontend and Node.js backend",
        "Implemented secure authentication and scalable data storage",
        "Integrated third-party APIs for enhanced functionality",
        "Creating business plan and investor pitch deck for startup competitions"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Knack Peer Tutor",
      company: "Knack",
      location: "Boston, MA",
      period: "January 2025 - Present",
      description: "Deliver one-on-one and small-group support in Computer Science & Mathematics courses to 6+ students, helping peers master complex theory and practical coding assignments.",
      achievements: [
        "Achieved 4.88/5.00 average review rating from students",
        "Tutored courses: Discrete Structures, CS Fundamentals, Mathematical Reasoning, HCI",
        "Diagnosed learning gaps and crafted individualized study plans",
        "Led interactive review sessions and code walkthroughs"
      ],
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Web Developer and Team Leader",
      company: "Oasis Club Northeastern",
      location: "Boston, MA",
      period: "January 2025 - April 2025",
      description: "Led a team of 4 developers to build a Northeastern Bookstore website connecting sellers and buyers for used textbooks and learning materials.",
      achievements: [
        "Led team of 4 developers through 2-month development cycle",
        "Organized 7 team meetings and oversaw project planning",
        "Designed frontend UI and core backend features",
        "Implemented user profiles, Google authentication, and search algorithms"
      ],
      color: "from-green-500 to-lime-500"
    },
    {
      title: "President",
      company: "Northeastern Club Squash",
      location: "Boston, MA",
      period: "May 2025 - Present",
      description: "Leading a 40+ member team in the College Squash Association. Setting strategy, managing a 100k endowment (currently at 82k), and leading an executive board of six members.",
      achievements: [
        "Managing 40+ member team in College Squash Association",
        "Built endowment from 82k towards 100k goal",
        "Leading executive board of 6 members",
        "Working towards 2M endowment to establish varsity program"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Full Time Squash Coach",
      company: "Spirit Squash Club",
      location: "Beijing, China",
      period: "June 2024 - September 2024",
      description: "Worked as full-time squash coach and front desk associate. Coached 70+ individual and group sessions, teaching techniques and strategy to players of all levels.",
      achievements: [
        "Coached 70+ individual and group sessions over 45 days",
        "Developed personalized training plans for skill enhancement",
        "Managed administrative tasks and coordinated with staff",
        "Ensured excellent customer service and smooth operations"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 translate-y-8 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full transform scale-x-0 animate-scale-x delay-300"></div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
              Here's a timeline of my professional journey and the impact I've made.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 to-slate-700">
              <div 
                ref={timelineRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 to-green-500 origin-top transition-transform duration-1000 ease-out"
                style={{ transformOrigin: 'top' }}
              ></div>
            </div>

            {/* Experience Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`experience-item relative opacity-0 ${
                    index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'
                  } transition-all duration-800 ease-out`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-800 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-r ${exp.color} animate-pulse-glow`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                    <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:scale-105 hover:-translate-y-2">
                      {/* Floating badge */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-bounce-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3">
                          <span className="relative">
                            {exp.company}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
                          </span>
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-gentle" />
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-2 group-hover:text-emerald-300 transition-colors duration-300">
                            <Calendar size={16} className="text-emerald-400 animate-pulse-subtle" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 group-hover:text-emerald-300 transition-colors duration-300">
                            <MapPin size={16} className="text-emerald-400 animate-pulse-subtle delay-200" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                          Key Achievements:
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i} 
                              className="text-slate-300 text-sm flex items-start gap-3 group-hover:text-slate-200 transition-all duration-300 transform group-hover:translate-x-1"
                              style={{transitionDelay: `${i * 100}ms`}}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 animate-pulse-gentle`} style={{animationDelay: `${i * 200}ms`}}></div>
                              <span className="relative">
                                {achievement}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent group-hover:w-full transition-all duration-500" style={{transitionDelay: `${i * 100}ms`}}></span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 opacity-0 animate-fade-in-up delay-1000">
            <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:scale-105 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                Want to Learn More?
              </h3>
              <p className="text-slate-300 mb-8 group-hover:text-slate-200 transition-colors duration-300">
                I'm always open to discussing my experiences and potential opportunities.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-500 hover:to-green-500 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Let's Connect</span>
                <ExternalLink size={18} className="relative z-10 animate-bounce-gentle" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-scale-x {
          animation: scaleX 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 1.5s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientX {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes bounceGentle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-2px) rotate(1deg);
          }
          75% {
            transform: translateY(-1px) rotate(-1deg);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulseGentle {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;