import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reserva tu cancha deportiva en segundos
        </h1>
        <p className="text-xl mb-10">Sin llamadas, sin complicaciones. Juega cuando quieras.</p>
        <div className="flex justify-center">
          <a href="https://eclectic-treacle-e61945.netlify.app" target="_blank" className="btn btn-secondary flex md:min-w-96 items-center justify-center">
            Reservar ahora! 🚀 <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;