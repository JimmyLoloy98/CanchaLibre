import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        <nav>
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