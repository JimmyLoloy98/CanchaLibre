// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import FieldMap from './components/FieldMap';
import OwnerBenefits from './components/OwnerBenefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        <Comparison />
        <FAQ />
        <FieldMap />
        <OwnerBenefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;