import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
          <div className="bg-blue-900/40 p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
            <div className="mr-4 bg-pink-100 p-3 rounded-lg text-pink-600">
  <GraduationCap className="h-10 w-10" />
</div>
              <h3 className="text-2xl font-bold text-white">Ingegneria Informatica e dell'Informazione</h3>
            </div>
            <div className="flex items-center mb-4 text-blue-100">
            <div className="mr-2 bg-pink-100 p-2 rounded-lg text-pink-600">
  <MapPin className="h-5 w-5" />
</div>
              <span>Università di Siena</span>
            </div>
            <div className="flex items-center mb-6 text-blue-100">
            <div className="mr-2 bg-pink-100 p-2 rounded-lg text-pink-600">
  <Calendar className="h-5 w-5" />
</div>
              <span>2021 - 2025</span>
            </div>
            <p className="text-blue-100 mb-6">
              Laureato in Ingegneria Informatica e dell'Informazione presso l'Università di Siena,
              con specializzazione in algoritmi di Intelligenza Artificiale e sviluppo software.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white text-pink-600 rounded-full text-sm">Machine Learning</div>
              <div className="px-3 py-1 bg-white text-pink-600 rounded-full text-sm">Algoritmi</div>
              <div className="px-3 py-1 bg-white text-pink-600 rounded-full text-sm">Data Science</div>
              <div className="px-3 py-1 bg-white text-pink-600 rounded-full text-sm">Sviluppo Software</div>
              <div className="px-3 py-1 bg-white text-pink-600 rounded-full text-sm">Reti</div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 z-10">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20"></div>
            <img 
              src="https://sienafree.it/wp-content/uploads/2023/11/universita-di-siena-san-niccolo-1-810x540.jpg.webp" 
              alt="University of Siena" 
              className="w-full h-auto rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center">
              <div className="mr-2 bg-pink-100 p-2 rounded-lg text-pink-600">
  <BookOpen className="h-5 w-5" />
</div>
                <span className="text-gray-800 font-medium">Università di Siena</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;