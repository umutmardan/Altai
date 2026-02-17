import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif mb-2 tracking-wide">ALTAI HOME SERVICES</h3>
            <p className="text-brand-beige font-light">Painting & Wallcoverings | Toronto & Southern Ontario</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-beige transition-colors opacity-80 hover:opacity-100"><Facebook size={24} /></a>
            <a href="#" className="hover:text-brand-beige transition-colors opacity-80 hover:opacity-100"><Instagram size={24} /></a>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-light/20 pt-8 text-center text-sm text-brand-beige/60">
          <p>&copy; {new Date().getFullYear()} Altai Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
