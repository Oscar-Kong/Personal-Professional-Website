import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });

    const items = containerRef.current?.querySelectorAll('.experience-card');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Knack Peer Tutor",
      company: "Knack",
      location: "Boston, MA",
      period: "January 2025 - Present",
      description: "Deliver one-on-one and small-group support in Computer Science & Mathematics courses to 6+ students, helping peers master complex theory and practical coding assignments.",
      highlights: [
        "Achieved 4.88/5.00 average review rating from students",
        "Tutored courses: Discrete Structures, CS Fundamentals, Mathematical Reasoning, HCI",
        "Diagnosed learning gaps and crafted individualized study plans"
      ]
    },
    {
      title: "Full Time Squash Coach",
      company: "Spirit Squash Club",
      location: "Beijing, China", 
      period: "June 2024 - September 2024",
      description: "Worked as full-time squash coach and front desk associate. Coached 70+ individual and group sessions, teaching techniques and strategy to players of all levels.",
      highlights: [
        "Coached 70+ individual and group sessions over 45 days",
        "Developed personalized training plans for skill enhancement",
        "Managed administrative tasks and coordinated with staff"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Experience Grid - Same format as friend's site */}
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="experience-card opacity-0 translate-y-8 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-500 hover:bg-slate-800/70 group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-emerald-400 font-semibold text-lg mb-3 flex items-center gap-2">
                      {exp.company}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="text-slate-400 text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-emerald-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-emerald-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Key Highlights:</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .experience-card {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .experience-card:nth-child(2) {
          transition-delay: 0.2s;
        }

        .experience-card:nth-child(3) {
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Experience;