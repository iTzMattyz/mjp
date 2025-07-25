import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToContact: () => void;
  heroNameRef: HTMLElement | null;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToContact, heroNameRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!heroNameRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowName(!entry.isIntersecting); // Show name in navbar when name is NOT visible
      },
      { threshold: 0 }
    );

    observer.observe(heroNameRef);
    return () => observer.disconnect();
  }, [heroNameRef]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const nameVisible = showName || isMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        nameVisible
          ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start md:gap-10">
          <a
            href="#"
            aria-hidden={!nameVisible}
            className={`font-bold text-xl transition-opacity duration-300 whitespace-nowrap ${
              nameVisible ? 'opacity-100 text-white' : 'opacity-0 pointer-events-none'
            }`}
          >
            <span className="text-[#058484]">M</span>attia <span className="text-[#058484]">J</span>orgen <span className="text-[#058484]">P</span>rugnoli
          </a>

          <div className="ml-auto hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('ai')}
              className="text-white hover:text-white transition-colors"
            >
              AI & Computer Vision
            </button>
            <button
              onClick={() => scrollToSection('hardware')}
              className="text-white hover:text-white transition-colors"
            >
              Hardware
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-white hover:text-white transition-colors"
            >
              Formazione
            </button>
            <button
              onClick={handleContactClick}
              className="px-5 py-2 bg-[#058484] hover:bg-[#058484] text-white rounded-lg transition-all duration-300"
            >
              Contattami
            </button>
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-900 absolute w-full left-0 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-white hover:text-white py-2 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('ai')}
            className="text-white hover:text-white py-2 transition-colors"
          >
            AI & Computer Vision
          </button>
          <button
            onClick={() => scrollToSection('hardware')}
            className="text-white hover:text-white py-2 transition-colors"
          >
            Hardware
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-white hover:text-white py-2 transition-colors"
          >
            Formazione
          </button>
          <button
            onClick={handleContactClick}
            className="py-2 px-4 bg-[#058484] hover:bg-[#058484] text-white rounded-lg transition-all duration-300"
          >
            Contattami
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
