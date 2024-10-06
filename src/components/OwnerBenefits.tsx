import React from 'react';
import { Calendar, DollarSign, BarChart, Users } from 'lucide-react';

const benefits = [
  { icon: Calendar, title: 'Gestión de Horarios', description: 'Administra tus reservas en tiempo real' },
  { icon: DollarSign, title: 'Pagos Automatizados', description: 'Recibe pagos directamente en tu cuenta' },
  { icon: BarChart, title: 'Análisis de Ocupación', description: 'Optimiza tu negocio con datos detallados' },
  { icon: Users, title: 'Más Clientes', description: 'Aumenta tu visibilidad y atrae nuevos jugadores' },
];

const OwnerBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Beneficios para Propietarios de Canchas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a className="btn btn-primary" href="https://forms.gle/97PcdarKpU7iPBoNA" >Únete como Propietario</a>
        </div>
      </div>
    </section>
  );
};

export default OwnerBenefits;