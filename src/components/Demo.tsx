import React from 'react';

const Demo: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona FieldFinder</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="FieldFinder App Demo"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ol className="space-y-6">
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                <p>Abre la app y selecciona tu ubicación</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                <p>Explora las canchas disponibles en tiempo real</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                <p>Elige tu cancha y horario preferido</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">4</span>
                <p>Realiza el pago de forma segura dentro de la app</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">5</span>
                <p>¡Listo! Recibe la confirmación y prepárate para jugar</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;