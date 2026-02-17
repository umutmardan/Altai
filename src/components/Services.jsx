import React from 'react';
import { Paintbrush, FileText } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 font-serif">Our Expertise</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            With over 15 years of combined experience, we bring craftsmanship and attention to detail to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Painting Service */}
          <div className="bg-white rounded-3xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-stone-100 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-light/10 flex items-center justify-center mb-8 group-hover:bg-brand-light/20 transition-colors">
              <Paintbrush className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Professional Painting</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform your home with our premium painting services. We specialize in interior and exterior painting, ensuring smooth, durable finishes that breathe new life into your spaces.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Interior Walls & Ceilings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Exterior Siding & Trim
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Detailed Prep & Clean-up
              </li>
            </ul>
          </div>

          {/* Wallpaper Service */}
          <div className="bg-white rounded-3xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-stone-100 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-light/10 flex items-center justify-center mb-8 group-hover:bg-brand-light/20 transition-colors">
              <FileText className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Wallpaper Installation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Elevate your interior design with our professional wallpaper installation. From classic patterns to modern murals, we ensure perfect alignment and a seamless look.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Pattern Matching & Seam Hiding
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Custom Murals & Feature Walls
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Removal & Surface Preparation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
