import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 relative overflow-hidden">
      {/* Enhanced Background decoration with green theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-lime-400 rounded-full animate-float delay-300"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Enhanced Profile Image with green glow effect */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src="/images/profile/profile-photo.jpg" 
            alt="Weiyi (Oscar) Kong - Computer Science Student"
            className="relative w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-emerald-400/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback initials with green theme */}
          <div className="hidden relative w-32 h-32 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl border-4 border-emerald-400/20 backdrop-blur-sm">
            WK
          </div>
        </div>

        {/* Enhanced Name and Title with green gradient */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            Weiyi (Oscar) Kong
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-emerald-200 mb-8 max-w-2xl">
          <span className="inline-block border-r-2 border-emerald-400 pr-1 animate-pulse typewriter">
            Computer Science Student | Full Stack Developer
          </span>
        </div>

        <p className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed animate-fade-in opacity-90">
          Northeastern University Computer Science student passionate about creating innovative solutions 
          and building exceptional digital experiences. Currently working on Recreon startup and 
          leading the Northeastern Squash Club.
        </p>

        {/* Enhanced CTA Buttons with green theme */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            Get In Touch
          </button>
          <a 
            href="#" 
            className="px-8 py-4 border-2 border-emerald-400 text-emerald-300 rounded-lg font-semibold hover:border-emerald-300 hover:text-emerald-200 hover:bg-emerald-900/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-sm"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Enhanced Social Links with green theme */}
        <div className="flex gap-6 mb-16">
          <a 
            href="https://github.com/Oscar-Kong" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 text-emerald-300 rounded-full hover:bg-emerald-700/50 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-emerald-700/50 hover:border-emerald-500"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/weiyi-kong-3a65492a5" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 text-emerald-300 rounded-full hover:bg-emerald-700/50 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-emerald-700/50 hover:border-emerald-500"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kong.weiyi@northeastern.edu" 
            className="p-3 bg-slate-800/50 text-emerald-300 rounded-full hover:bg-emerald-700/50 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-emerald-700/50 hover:border-emerald-500"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors duration-300 p-2 rounded-full hover:bg-emerald-900/20"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;