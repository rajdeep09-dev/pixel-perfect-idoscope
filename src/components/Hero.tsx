
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="bg-dark-lighter px-3 py-1 rounded-full text-neon text-sm font-medium inline-block mb-2">
              Smart Habits, Real Transforms
            </span>
            
            <h1 className="heading-xl">
              <span className="block">STRONGER</span>
              <span className="block text-outline">EVERY DAY</span>
              <span className="block">FITTER</span>
              <span className="block text-outline">FOREVER</span>
            </h1>
            
            <p className="body-text max-w-xl mx-auto lg:mx-0">
              Unlock a stronger, more resilient version of yourself with top-of-the-line training methods and a team of dedicated experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-neon">Get Started</button>
              <button className="btn btn-dark">Learn More</button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-6 lg:pt-12">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display">180K+</p>
                <p className="text-gray-400 text-sm">Active users</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display">700+</p>
                <p className="text-gray-400 text-sm">Trainers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display">350+</p>
                <p className="text-gray-400 text-sm">Total exercises</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/69258fa5-5c0f-4fc3-ac56-5328d28d5557.png" 
                alt="Fitness athlete" 
                className="relative z-10 max-h-[600px] object-contain"
              />
              
              {/* Animated spiral effect */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="w-[400px] h-[400px] animate-spiral-spin">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100,10 C130,10 150,30 150,60 C150,90 130,110 100,110 C70,110 50,90 50,60 C50,30 70,10 100,10 Z"
                      fill="none"
                      stroke="#ceff00"
                      strokeWidth="2"
                      className="neon-glow"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <img src="https://via.placeholder.com/120x40/1a1b21/ceff00?text=Robinhood" alt="Robinhood logo" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/120x40/1a1b21/ceff00?text=Samsara" alt="Samsara logo" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/120x40/1a1b21/ceff00?text=Firebase" alt="Firebase logo" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/120x40/1a1b21/ceff00?text=Canvas" alt="Canvas logo" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
