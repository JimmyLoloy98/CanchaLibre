import React from 'react';

const Demo: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona CanchaLibre</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              // width="400"
              height="650"
              src="https://embed.figma.com/proto/dnk08Isb7UvLeMzMwAsnaW/CanchaLibre-APP?node-id=111-601&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=111%3A554&starting-point-node-id=111%3A601&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ol className="sm:space-y-6 md:space-y-8">
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                <p className="md:text-lg">Inicia sesión con tu cuenta</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                <p className="md:text-lg">Edita la información de tus canchas</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                <p className="md:text-lg">Click en el botón de "guardar"</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">4</span>
                <p className="md:text-lg">¡Listo! Tus usuarios van a amar reservar con CanchaLibre</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
