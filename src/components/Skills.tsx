import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Expo Framework", level: 75 },
        { name: "IntelliJ", level: 80 },
        { name: "Racket", level: 70 }
      ]
    }
  ];

  const academicCourses = [
    "Object Oriented Design",
    "User Understanding", 
    "Artificial Intelligence",
    "Algorithm Design",
    "Foundation to Database",
    "Discrete Structures",
    "Mathematical Reasoning",
    "Human Computer Interactions"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-emerald-400">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Foundation - Simplified without redundant GPA */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Foundation</h3>
            <div className="bg-gradient-to-r from-slate-800/70 to-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-700/30">
              <div className="text-center mb-6">
                <div className="text-slate-300 mb-4">Bachelor of Science in Computer Science • Northeastern University</div>
                <div className="text-slate-300 mb-4">Graduation: May 2028 • Honor Roll: Fall 2024, Spring 2025</div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Relevant Coursework</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {academicCourses.map((course, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium border border-emerald-700/30 hover:border-emerald-600/50 hover:bg-emerald-900/30 transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills & Interests */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Additional Skills & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Leadership", "Team Management", "Peer Tutoring", "Project Planning", 
                "Startup Development", "Sports Coaching", "Problem Solving", "Public Speaking",
                "Agile Methodologies", "API Integration", "Mobile Development", "Web Development"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium hover:bg-emerald-800/50 hover:text-emerald-200 transition-all duration-300 border border-emerald-700/30 hover:border-emerald-600/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;