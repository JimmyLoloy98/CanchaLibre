import React from 'react';
import { MapPin } from 'lucide-react';

const FieldMap: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Canchas Cercanas</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Mapa de canchas"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            {['Cancha Central', 'Estadio Municipal', 'Club Deportivo', 'Complejo Futbolístico'].map((field, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold">{field}</span>
                  </div>
                  <p className="text-sm text-gray-600">A 2.5 km de tu ubicación</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldMap;