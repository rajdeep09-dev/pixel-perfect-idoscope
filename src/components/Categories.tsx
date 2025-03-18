
import React, { useState } from 'react';

const Categories = () => {
  const categories = [
    {
      id: 'strength',
      title: 'STRENGTH',
      description: 'Build muscle and increase strength through progressive resistance training.',
      image: 'https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'yoga',
      title: 'YOGA',
      description: 'Improve flexibility, balance, and mental clarity through mindful movement.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'hiit',
      title: 'HIIT',
      description: 'Maximize calorie burn and improve cardiovascular fitness with high-intensity training.',
      image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('yoga');

  return (
    <section id="categories" className="section bg-dark-lighter">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg">
            <span className="text-outline">TRANSFORM</span> YOUR BODY <br />
            <span className="text-outline">TRANSFORM</span> YOUR LIFE!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                activeCategory === category.id ? 'ring-2 ring-neon' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent flex flex-col justify-end p-4">
                <h3 className="font-display font-bold text-xl mb-1">
                  {category.title}
                </h3>
                {activeCategory === category.id && (
                  <p className="text-sm text-gray-300">{category.description}</p>
                )}
              </div>
              {activeCategory === category.id && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-neon rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-dark rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="h-px w-64 bg-white/10 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
