import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    scrollToContact();
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl">
            <span className="text-violet-500">M</span>attia <span className="text-violet-500">J</span>orgen <span className="text-violet-500">P</span>rugnoli
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-violet-300 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('ai')}
              className="text-violet-300 hover:text-white transition-colors"
            >
              AI & Computer Vision
            </button>
            <button 
              onClick={() => scrollToSection('hardware')}
              className="text-violet-300 hover:text-white transition-colors"
            >
              Hardware
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-violet-300 hover:text-white transition-colors"
            >
              Formazione
            </button>
            <button
              onClick={handleContactClick}
              className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all duration-300"
            >
              Contattami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900 absolute w-full left-0 transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-violet-300 hover:text-white py-2 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('ai')}
            className="text-violet-300 hover:text-white py-2 transition-colors"
          >
            AI & Computer Vision
          </button>
          <button 
            onClick={() => scrollToSection('hardware')}
            className="text-violet-300 hover:text-white py-2 transition-colors"
          >
            Hardware
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-violet-300 hover:text-white py-2 transition-colors"
          >
            Formazione
          </button>
          <button
            onClick={handleContactClick}
            className="py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all duration-300"
          >
            Contattami
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;