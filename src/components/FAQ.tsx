import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Es segura la app para hacer pagos?',
    answer: 'Sí, CanchaLibre utiliza sistemas de pago seguros y encriptados para proteger tu información financiera.',
  },
  {
    question: '¿Qué tipos de canchas están disponibles?',
    answer: 'Ofrecemos una variedad de canchas, incluyendo fútbol 5, fútbol 7, y fútbol 11, tanto al aire libre como cubiertas.',
  },
  {
    question: '¿Puedo cancelar o cambiar mi reserva?',
    answer: 'Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes del horario programado sin costo adicional.',
  },
  {
    question: '¿Hay promociones o descuentos al usar la app?',
    answer: 'Sí, ofrecemos promociones regulares y un programa de fidelidad para usuarios frecuentes con descuentos exclusivos.',
  },
  {
    question: '¿Cómo puedo contactar con el soporte si tengo problemas?',
    answer: 'Puedes contactar con nuestro equipo de soporte 24/7 a través del chat en la app o por correo electrónico.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
