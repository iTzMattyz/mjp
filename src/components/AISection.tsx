import React from 'react';
import { Brain, Cpu, Eye, Zap } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section id="ai" className="relative min-h-[80vh] lg:min-h-[70vh] -mt-16 flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-16">
            Esperienza in AI e Computer Vision
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl">
            Mi occupo di addestramento modelli di Intelligenza Artificiale e Computer Vision 
            per progetti di riconoscimento visivo e automazione intelligente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-blue-200">Sviluppo algoritmi di apprendimento automatico per applicazioni avanzate</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                <p className="text-blue-200">Progettazione sistemi di riconoscimento visivo e analisi delle immagini</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
                <p className="text-blue-200">Implementazione di reti neurali per problemi complessi</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automazione</h3>
                <p className="text-blue-200">Creazione di sistemi intelligenti per l'automazione di processi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative rounded-lg overflow-hidden border-4 border-pink-600 shadow-xl">
          <img 
            src="https://www.zerounoweb.it/wp-content/uploads/2024/09/computervision-1.jpg" 
            alt="AI e Computer Vision" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AISection;
