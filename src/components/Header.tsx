import React from 'react';
import { Facebook, MessageCircle, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M12 2v20" />
          </svg>
          <span className="text-xl font-bold text-green-600">CanchaLibre</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://wa.me/51966199716" target="_blank" className="text-green-400 hover:text-green-600">
            <MessageCircle className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/canchalibree" target="_blank" className="text-blue-400 hover:text-blue-600">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/canchalibre.pro" target="_blank" className="text-red-400 hover:text-red-600">
            <Instagram className="w-8 h-8" />
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-green-600">Caracteristicas</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-green-600">Como funciona</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-green-600">Testimonios</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-green-600">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;