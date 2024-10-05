import React from 'react';

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Jugador aficionado',
    content: 'FieldFinder ha hecho que organizar partidos con mis amigos sea mucho más fácil. ¡Ya no perdemos tiempo buscando canchas disponibles!',
  },
  {
    name: 'Ana Martínez',
    role: 'Capitana de equipo',
    content: 'La app es increíblemente intuitiva. Reservar canchas para nuestros entrenamientos nunca había sido tan sencillo.',
  },
  {
    name: 'Luis Gómez',
    role: 'Propietario de canchas',
    content: 'Desde que usamos FieldFinder, nuestras reservas han aumentado y la gestión es mucho más eficiente. ¡Una excelente herramienta!',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;