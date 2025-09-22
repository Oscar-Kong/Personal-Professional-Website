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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life, 
              backed by strong academic foundation and hands-on experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Foundation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Academic Foundation</h3>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600">3.758</div>
                  <div className="text-slate-600">GPA at Northeastern University</div>
                </div>
                <div className="text-slate-600 mb-4">Bachelor of Science in Computer Science • Graduation: May 2028</div>
                <div className="text-sm text-blue-600 font-medium">Honor Roll: Fall 2024, Spring 2025</div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">Relevant Coursework</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {academicCourses.map((course, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm border border-slate-200"
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
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Additional Skills & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Leadership", "Team Management", "Peer Tutoring", "Project Planning", 
                "Startup Development", "Sports Coaching", "Problem Solving", "Public Speaking",
                "Agile Methodologies", "API Integration", "Mobile Development", "Web Development"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-slate-300 mb-6">
                I'm always excited to work on new projects and learn new technologies. 
                Let's build something amazing together!
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;