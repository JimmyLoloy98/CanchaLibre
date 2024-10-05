import React from 'react';
import { Clock, CreditCard, Bell, Percent, Shield, Users } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Disponibilidad en tiempo real', description: 'Ve qué canchas están libres al instante' },
  { icon: CreditCard, title: 'Pagos seguros', description: 'Reserva y paga directamente desde la app' },
  { icon: Bell, title: 'Notificaciones', description: 'Recibe recordatorios y actualizaciones automáticas' },
  { icon: Percent, title: 'Promociones exclusivas', description: 'Accede a descuentos y ofertas especiales' },
  { icon: Shield, title: 'Reservas garantizadas', description: 'Tu cancha estará lista cuando llegues' },
  { icon: Users, title: 'Organiza partidos', description: 'Invita a tus amigos y coordina fácilmente' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;