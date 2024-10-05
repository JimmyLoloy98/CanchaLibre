import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reserva tu cancha de fútbol en segundos
        </h1>
        <p className="text-xl mb-8">Sin llamadas, sin complicaciones. Juega cuando quieras.</p>
        <div className="flex justify-center space-x-4">
          <button className="btn btn-secondary">
            Únete a la Lista de Espera
          </button>
          <button className="btn btn-primary flex items-center">
            Descubre Más <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;