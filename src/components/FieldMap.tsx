import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const FieldMap: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Canchas Cercanas</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1667598736309-1ea3b0fb1afa?fm=jpg&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mapa de canchas"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            {['Grass Potokar', 'Morumbi', 'Los Laureles', 'Complejo UNAS'].map((field, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-lg font-semibold">{field}</span>
                  </div>
                  <p className="text-md text-gray-600">A 1.5 km de tu ubicación</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://maps.app.goo.gl/Q8ST2LvsBdPT6ug27" target="_blank" className="btn btn-secondary my-2 max-w-fit mx-auto flex items-center border-0">
            Explora más locales deportivos<ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FieldMap;