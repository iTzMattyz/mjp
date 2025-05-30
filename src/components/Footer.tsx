import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white font-bold text-xl">
            <span className="text-violet-500">M</span>attia <span className="text-violet-500">J</span>orgen <span className="text-violet-500">P</span>rugnoli
            </a>
            <p className="mt-2 text-gray-400">
              Sviluppatore e Ingegnere Informatico
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300">
              <Github size={20} />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300">
              <Linkedin size={20} />
            </a>
            
            <a href="mailto:contact@example.com"
              className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mattia Jorgen Prugnoli. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;