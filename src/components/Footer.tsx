import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CanchaLibre</h3>
            <p className="text-sm text-gray-400">Reserva tu cancha de fútbol en segundos. Sin llamadas, sin complicaciones.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-400 hover:text-white">Características</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-400 hover:text-white">Cómo Funciona</a></li>
              <li><a href="#testimonials" className="text-sm text-gray-400 hover:text-white">Testimonios</a></li>
              <li><a href="#faq" className="text-sm text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-sm text-gray-400">Email: canchalibre@gmail.com</p>
            <p className="text-sm text-gray-400">Teléfono: +51 966 199 716</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://wa.me/51966199716" target="_blank" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/canchalibre.pro" target="_blank" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 CanchaLibre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
