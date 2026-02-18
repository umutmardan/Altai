import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import AgreeableBeige from '../assets/Agreeable Beige.png';
import Aleutian from '../assets/Aleutian.png';
import CowboyBoots from '../assets/Cowboy Boots.png';
import NaturalLinen from '../assets/Natural Linen.png';
import UrbanBronze from '../assets/Urban Bronze.png';
import WhiteTruffle from '../assets/White Truffle.png';

const colors = [
  { name: 'Agreeable Beige', hex: '#DFD3C3', image: AgreeableBeige },
  { name: 'Aleutian', hex: '#98a9b7', image: Aleutian },
  { name: 'Cowboy Boots', hex: '#695239', image: CowboyBoots },
  { name: 'Natural Linen', hex: '#BFB6AA', image: NaturalLinen },
  { name: 'Urban Bronze', hex: '#54504a', image: UrbanBronze },
  { name: 'White Truffle', hex: '#d7c8c2', image: WhiteTruffle },
];

const RoomIllustrator = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section id="room-design" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 font-serif">Visualize Your Space</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a color from the palette to see how different shades can transform the room.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Palette */}
          <div className="flex lg:flex-col gap-4 p-6 bg-white rounded-2xl shadow-lg order-2 lg:order-1">
            <h3 className="text-lg font-semibold text-gray-700 hidden lg:block mb-2 flex items-center gap-2">
              <Palette size={20} /> Palette
            </h3>
            <div className="flex lg:flex-col gap-4 overflow-x-auto pb-2 lg:pb-0">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`group relative w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 transition-all duration-300 transform hover:scale-110 focus:outline-none ${
                    selectedColor.name === color.name ? 'border-brand-dark shadow-xl scale-110' : 'border-white shadow-md'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                >
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Room Image Display */}
          <div className="relative w-full max-w-4xl aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white order-1 lg:order-2 flex items-center justify-center bg-gray-100">
            <img
              src={selectedColor.image}
              alt={`Room painted in ${selectedColor.name}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-600 pointer-events-none shadow-sm">
              Currently viewing: <span className="font-bold text-brand-dark">{selectedColor.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomIllustrator;
