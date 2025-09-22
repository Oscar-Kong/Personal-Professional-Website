import React from 'react';
import { Code, Coffee, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Hello! I'm Weiyi (Oscar), a passionate Computer Science student.
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a Computer Science student at Northeastern University with a 3.758 GPA, 
                  passionate about full-stack development and creating innovative solutions. 
                  Currently, I'm building Recreon, a startup that connects sports enthusiasts 
                  and enables local competition.
                </p>
                
                <p>
                  My experience spans from tutoring peers in computer science and mathematics 
                  to leading the Northeastern Squash Club with 40+ members. I've worked with 
                  technologies like React.js, Node.js, PostgreSQL, and Python to build 
                  scalable applications.
                </p>
                
                <p>
                  When I'm not coding, you'll find me on the squash court - I've coached 70+ 
                  sessions and am working towards establishing a varsity program at Northeastern. 
                  I believe in combining technical excellence with strong leadership and 
                  teamwork skills.
                </p>
              </div>
            </div>

            {/* Right Column - Image & Highlights */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="w-full h-80 bg-gradient-to-br from-emerald-900/50 to-green-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-emerald-700/30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10"></div>
                <img 
                  src="/images/about/about-photo.jpg" 
                  alt="Weiyi Kong"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback */}
                <div className="hidden text-6xl text-emerald-400">🏆</div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 group">
                  <div className="p-2 bg-emerald-900/50 rounded-full group-hover:bg-emerald-800/50 transition-colors duration-300">
                    <Code className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Full Stack Developer</div>
                    <div className="text-sm text-slate-400">Building Recreon startup with modern tech stack</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 group">
                  <div className="p-2 bg-green-900/50 rounded-full group-hover:bg-green-800/50 transition-colors duration-300">
                    <Coffee className="text-green-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Peer Tutor</div>
                    <div className="text-sm text-slate-400">4.88/5.00 rating teaching CS & Math at Knack</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 group">
                  <div className="p-2 bg-teal-900/50 rounded-full group-hover:bg-teal-800/50 transition-colors duration-300">
                    <Trophy className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Squash Coach</div>
                    <div className="text-sm text-slate-400">Coached 70+ sessions & leading club development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;