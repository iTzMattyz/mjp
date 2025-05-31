import React, { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import AISection from './components/AISection';
import HardwareSection from './components/HardwareSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef<HTMLElement>(null);
  const [heroNameRef, setHeroNameRef] = useState<HTMLElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans">
      <Navbar scrollToContact={scrollToContact} heroNameRef={heroNameRef} />
      
      <main>
        <HeroSection scrollToContact={scrollToContact} setHeroNameRef={setHeroNameRef} />
        <SkillsSection />
        <AISection />
        <HardwareSection />
        <EducationSection />
        <ContactSection contactRef={contactRef} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
