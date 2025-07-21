import React from 'react';
import { HardDrive, PenTool as Tool, Cpu, Wrench } from 'lucide-react';

const HardwareSection: React.FC = () => {
  return (
    <section id="hardware" className="relative min-h-[80vh] lg:min-h-[70vh] -mt-16 flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-2/5 mt-12 lg:mt-0 z-10">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Hardware Expertise" 
              className="w-full h-auto rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
        <div className="lg:w-1/2 z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-16">
            Esperienza Hardware
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Ho maturato esperienza pratica in un centro specializzato nella riparazione hardware, acquisendo competenze nell’assemblaggio di computer, nella diagnosi di guasti e nell’intervento su componenti elettronici.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Assemblaggio PC</h3>
              </div>
              <p className="text-gray-200">Esperienza nella selezione componenti e assemblaggio di computer personalizzati</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                  <Tool className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Riparazioni</h3>
              </div>
              <p className="text-gray-200">Interventi di riparazione su computer, laptop e dispositivi elettronici</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Diagnostica</h3>
              </div>
              <p className="text-gray-200">Analisi e risoluzione di problemi hardware e software complessi</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
              <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Manutenzione</h3>
              </div>
              <p className="text-gray-200">Pulizia, aggiornamento e manutenzione periodica dei sistemi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
