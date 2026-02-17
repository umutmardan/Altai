import React, { useState } from 'react';
import { Palette } from 'lucide-react';

const colors = [
  { name: 'Classic Beige', hex: '#d6bd98', class: 'bg-[#d6bd98]' },
  { name: 'Sage Green', hex: '#677d6a', class: 'bg-[#677d6a]' },
  { name: 'Deep Forest', hex: '#1a3636', class: 'bg-[#1a3636]' },
  { name: 'Warm Terracotta', hex: '#c27ba0', class: 'bg-[#c27ba0]' }, // Adjusted to a warm pink/clay
  { name: 'Modern Charcoal', hex: '#40534c', class: 'bg-[#40534c]' },
];

const RoomIllustrator = () => {
  const [wallColors, setWallColors] = useState({
    left: '#e5e5e5',
    back: '#e5e5e5',
    right: '#e5e5e5',
  });
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleWallClick = (wall) => {
    setWallColors((prev) => ({
      ...prev,
      [wall]: selectedColor.hex,
    }));
  };

  return (
    <section id="room-design" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 font-serif">Visualize Your Space</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a color from the palette and click on the walls to see how different shades can transform a room.
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

          {/* Room SVG */}
          <div className="relative w-full max-w-4xl aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white order-1 lg:order-2">
            <svg viewBox="0 0 800 600" className="w-full h-full cursor-pointer">
              {/* Ceiling */}
              <polygon points="0,0 800,0 600,100 200,100" fill="#f3f4f6" />

              {/* Floor */}
              <polygon points="0,600 800,600 600,500 200,500" fill="#d1d5db" />
              {/* Rug */}
              <ellipse cx="400" cy="550" rx="150" ry="30" fill="#9ca3af" opacity="0.5" />

              {/* Left Wall */}
              <polygon
                points="0,0 200,100 200,500 0,600"
                fill={wallColors.left}
                onClick={() => handleWallClick('left')}
                className="transition-colors duration-500 hover:brightness-95"
              />

              {/* Right Wall */}
              <polygon
                points="800,0 600,100 600,500 800,600"
                fill={wallColors.right}
                onClick={() => handleWallClick('right')}
                className="transition-colors duration-500 hover:brightness-95"
              />

              {/* Back Wall */}
              <rect
                x="200"
                y="100"
                width="400"
                height="400"
                fill={wallColors.back}
                onClick={() => handleWallClick('back')}
                className="transition-colors duration-500 hover:brightness-95"
              />

              {/* Shadows/Lighting Overlays */}
              <polygon points="0,0 200,100 200,500 0,600" fill="black" opacity="0.1" pointerEvents="none" />
              <polygon points="800,0 600,100 600,500 800,600" fill="black" opacity="0.15" pointerEvents="none" />

              {/* Simple Furniture Outlines (Non-interactive) */}
              {/* Painting Frame on Back Wall */}
              <rect x="350" y="180" width="100" height="120" fill="#fff" stroke="#333" strokeWidth="4" pointerEvents="none" />
              <rect x="360" y="190" width="80" height="100" fill="#eee" pointerEvents="none" />

              {/* Couch */}
              <path
                d="M 250 450 L 550 450 L 550 520 L 250 520 Z"
                fill="#57534e"
                pointerEvents="none"
              />
              <path
                d="M 250 450 Q 250 400 300 400 L 500 400 Q 550 400 550 450"
                fill="#78716c"
                pointerEvents="none"
              />
              {/* Plant */}
              <path d="M 680 500 Q 650 350 700 300 Q 750 350 720 500" fill="#166534" pointerEvents="none" />
              <rect x="680" y="500" width="40" height="50" fill="#b45309" pointerEvents="none" />
            </svg>

            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-600 pointer-events-none">
              Click walls to paint
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomIllustrator;
