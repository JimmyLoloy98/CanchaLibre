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
          <a href="https://wa.me/51966199716" target="_blank" className="btn btn-secondary">
            Unirme como propietario
          </a>
          <a href="https://wa.me/51966199716" target="_blank" className="btn btn-primary flex items-center">
            Quiero reservar una cancha<ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;