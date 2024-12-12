import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const FieldMap: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Canchas Cercanas</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18728.914304254995!2d-76.0066083506962!3d-9.309396209034434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1734038908010!5m2!1sen!2spe" className="w-full h-72 md:max-w-3xl md:h-96 border mx-auto" loading="lazy"></iframe>
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