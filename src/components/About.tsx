import React from 'react';
import { Code, Coffee, Heart, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Hello! I'm Weiyi (Oscar), a passionate Computer Science student.
              </h3>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">3.758</div>
                  <div className="text-sm text-slate-600">GPA</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">6+</div>
                  <div className="text-sm text-slate-600">Students Tutored</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">40+</div>
                  <div className="text-sm text-slate-600">Club Members Led</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image & Highlights */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-slate-400">🏆</div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Full Stack Developer</div>
                    <div className="text-sm text-slate-600">Building Recreon startup with modern tech stack</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-teal-100 rounded-full">
                    <Coffee className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Peer Tutor</div>
                    <div className="text-sm text-slate-600">4.88/5.00 rating teaching CS & Math at Knack</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Trophy className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Club President</div>
                    <div className="text-sm text-slate-600">Leading Northeastern Squash Club & coach</div>
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