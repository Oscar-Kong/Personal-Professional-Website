import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background decoration with animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float delay-300"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Enhanced Profile Image with glow effect */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
          <div className="relative w-32 h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl border-4 border-white/20 backdrop-blur-sm">
            WK
          </div>
        </div>

        {/* Enhanced Name and Title with typewriter effect */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Weiyi (Oscar) Kong
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl">
          <span className="inline-block border-r-2 border-blue-400 pr-1 animate-pulse typewriter">
            Computer Science Student | Full Stack Developer
          </span>
        </div>

        <p className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed animate-fade-in opacity-90">
          Northeastern University Computer Science student passionate about creating innovative solutions 
          and building exceptional digital experiences. Currently working on Recreon startup and 
          leading the Northeastern Squash Club.
        </p>

        {/* Enhanced CTA Buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
          <a 
            href="#" 
            className="px-8 py-4 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-white hover:text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-sm"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Enhanced Social Links with your actual GitHub */}
        <div className="flex gap-6 mb-16">
          <a 
            href="https://github.com/Oscar-Kong" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-slate-700 hover:border-slate-500"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/weiyi-kong-3a65492a5" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-slate-700 hover:border-slate-500"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kong.weiyi@northeastern.edu" 
            className="p-3 bg-slate-800/50 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-slate-700 hover:border-slate-500"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;