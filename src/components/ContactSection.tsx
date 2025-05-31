import React, { useState, useRef } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC<{contactRef: React.RefObject<HTMLElement>}> = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/manjweea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Grazie per il tuo messaggio! Ti risponderò al più presto.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Errore durante l’invio del messaggio.');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Si è verificato un errore. Riprova più tardi.',
      });
    }
  };

  return (
    <section ref={contactRef} id="contact" className="relative min-h-[80vh] lg:min-h-[70vh] -mt-16 flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Contattami
        </h2>
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white-300">Inviami un messaggio</h3>
              <p className="text-white-300 mb-8">
              Hai un progetto da realizzare o desideri metterti in contatto? Compila il modulo e ti risponderò il prima possibile.              </p>
              <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                  <Mail className="h-6 w-6" />
                </div>
                <a href="mailto:mattia.prugnoli@gmail.com" className="underline text-white hover:text-pink-400">
  mattia.prugnoli@gmail.com
</a>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-pink-100 p-2 rounded-lg text-pink-600">
                  <User className="h-6 w-6" />
                </div>
                <span>Mattia Jorgen Prugnoli</span>
              </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Nome e Cognome</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/80 border border-pink-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="absolute right-3 top-2.5 bg-pink-100 p-1.5 rounded-lg text-pink-600">
  <User className="h-5 w-5" />
</div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/80 border border-pink-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="absolute right-3 top-2.5 bg-pink-100 p-1.5 rounded-lg text-pink-600">
  <Mail className="h-5 w-5" />
</div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Messaggio</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-pink-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                  <div className="absolute right-3 top-2.5 bg-pink-100 p-1.5 rounded-lg text-pink-600">
  <MessageSquare className="h-5 w-5" />
</div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Invia <Send className="inline ml-2 h-5 w-5" />
              </button>
              {formStatus && formStatus.submitted && (
                <div className={`mt-4 text-center font-semibold ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
