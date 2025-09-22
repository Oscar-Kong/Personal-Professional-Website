import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            WK
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Weiyi (Oscar) Kong
        </h1>
        
        <div className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl">
          <span className="inline-block border-r-2 border-blue-400 pr-1 animate-pulse">
            Computer Science Student | Full Stack Developer
          </span>
        </div>

        <p className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
          Northeastern University Computer Science student passionate about creating innovative solutions 
          and building exceptional digital experiences. Currently working on Recreon startup and 
          leading the Northeastern Squash Club.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </button>
          <a 
            href="#" 
            className="px-8 py-4 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-white hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-16">
          <a href="#" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/weiyi-kong-3a65492a5" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:kong.weiyi@northeastern.edu" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;