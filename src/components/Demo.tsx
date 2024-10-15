import React from 'react';

const Demo: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona CanchaLibre</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1586428268321-8e067843a113?fm=jpg&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CanchaLibre App Demo"
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ol className="space-y-6">
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                <p className="md:text-lg">Abre al Chatbot y explora las canchas disponibles en tiempo real</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                <p className="md:text-lg">Elige tu cancha, horario preferido y agendalo</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                <p className="md:text-lg">Realiza el pago de forma segura dentro de nuestro Chatbot</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">4</span>
                <p className="md:text-lg">¡Listo! Recibe la confirmación y prepárate para jugar</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
