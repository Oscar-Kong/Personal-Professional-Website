import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Here's a timeline of my professional journey and the impact I've made.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-green-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full border-4 border-slate-800 shadow-lg animate-pulse" style={{animationDelay: `${index * 0.3}s`}}></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:bg-slate-800/70 card-hover group">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{exp.title}</h3>
                        <div className="text-emerald-400 font-semibold flex items-center gap-1">
                          {exp.company}
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-emerald-400" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-emerald-400" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-700/30">
              <h3 className="text-xl font-bold text-white mb-4">Want to Learn More?</h3>
              <p className="text-slate-300 mb-6">
                I'm always open to discussing my experiences and potential opportunities.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Let's Connect
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;