import React from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Element */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-light/5 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-serif tracking-tight">Our Story</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full opacity-60" />
        </div>

        <div className="prose prose-lg text-gray-600 mx-auto leading-loose">
          <p className="mb-8 first-letter:text-5xl first-letter:font-serif first-letter:text-brand-dark first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
            Altai Home Services a family legacy. As a dedicated <strong>Father & Son team with over 15 years of combined experience</strong>, we have honed our craft to deliver exceptional results that stand the test of time.
          </p>

          <p className="mb-8">
            We take immense pride in serving our local communities across Southern Ontario. From the bustling streets of <strong>Toronto and Mississauga</strong> to the scenic neighborhoods of <strong>St. Catharines, Niagara Region, Brampton, and Hamilton</strong>, we are committed to beautifying homes one wall at a time.
          </p>

          <div className="my-12 p-8 md:p-10 bg-gradient-to-br from-brand-light/20 to-brand-beige/20 rounded-3xl border border-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Heart size={120} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-6">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Our Commitment to Giving</h3>
              <p className="text-gray-700 font-medium max-w-lg">
                We believe that success is best shared. That's why <span className="text-brand-dark font-bold">a portion of every project's profit is donated</span> to support those in need across Canada and around the world.
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
