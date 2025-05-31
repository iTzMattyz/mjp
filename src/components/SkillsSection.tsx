import React from 'react';
import { Code, TerminalSquare, Database, Globe } from 'lucide-react';

const programmingSkills = [
  { name: 'C++', level: 90, icon: <TerminalSquare className="h-6 w-6" /> },
  { name: 'Python', level: 85, icon: <TerminalSquare className="h-6 w-6" /> },
  { name: 'Java', level: 80, icon: <TerminalSquare className="h-6 w-6" /> },
  { name: 'JavaScript', level: 85, icon: <Code className="h-6 w-6" /> },
  { name: 'SQL', level: 75, icon: <Database className="h-6 w-6" /> },
  { name: 'HTML/CSS', level: 80, icon: <Globe className="h-6 w-6" /> }
];

const SkillsSection: React.FC = () => {
  return (
<section id="skills" className="relative py-20 text-white">
  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
  
  <div className="relative z-10 container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white-200">
      Skills in Programmazione
    </h2>
    
    <div className="max-w-3xl mx-auto mb-16">
      <p className="text-lg text-center text-white-100 mb-8">
        Conosco e utilizzo diversi linguaggi per sviluppare applicazioni, automazioni e strumenti AI.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programmingSkills.map((skill, index) => (
        <div 
          key={skill.name}
          className="p-6 transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default SkillsSection;
