import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  return (
    <section className="relative min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500">
              Mattia Jorgen Prugnoli
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-delay-1">
            Sviluppatore e Ingegnere Informatico
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-lg animate-fade-in-delay-2">
            Specializzato in Intelligenza Artificiale, Computer Vision e sviluppo software,
            con esperienza in hardware e riparazioni elettroniche.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-delay-3">
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contattami
            </button>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Github size={20} />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Linkedin size={20} />
            </a>
            
            <a href="mailto:contact@example.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5 z-10 animate-fade-in-delay-2">
          <div className="rounded-full overflow-hidden border-4 border-pink-600 shadow-xl w-64 h-64 md:w-80 md:h-80 mx-auto">
            <img 
              src="https://i.imgur.com/bWcnOP5.jpeg" 
              alt="Mattia Jorgen Prugnoli" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
