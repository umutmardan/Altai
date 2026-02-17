import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 to-black/60 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Crafting Beautiful Spaces <br />
          <span className="text-brand-beige font-serif italic">Together</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
          Professional Painting & Wallpaper Installation by a dedicated Father & Son team serving Southern Ontario.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-brand-dark bg-brand-beige hover:bg-white transition-all duration-300 shadow-lg hover:shadow-brand-beige/20 transform hover:-translate-y-1"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#room-design"
            className="inline-flex justify-center items-center px-8 py-4 border border-brand-beige text-lg font-semibold rounded-full text-brand-beige hover:bg-brand-beige hover:text-brand-dark transition-all duration-300"
          >
            Try Room Visualizer
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-bold text-brand-light mb-1">15+</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Years Combined Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-light mb-1">100%</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction Guarantee</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-light mb-1">Family</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Owned & Operated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
