import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Reserva instantánea', traditional: false, app: true },
  { feature: 'Disponibilidad en tiempo real', traditional: false, app: true },
  { feature: 'Pago seguro online', traditional: false, app: true },
  { feature: 'Notificaciones automáticas', traditional: false, app: true },
  { feature: 'Gestión de equipos', traditional: false, app: true },
  { feature: 'Promociones exclusivas', traditional: false, app: true },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FieldFinder vs. Método Tradicional</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Característica</th>
                <th className="py-3 px-6 text-center">Método Tradicional</th>
                <th className="py-3 px-6 text-center">FieldFinder</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.traditional ? (
                      <Check className="inline-block w-6 h-6 text-green-600" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-600" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.app ? (
                      <Check className="inline-block w-6 h-6 text-green-600" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;