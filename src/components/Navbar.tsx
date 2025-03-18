
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mr-2">
                <div className="w-4 h-4 rounded-full bg-neon"></div>
              </div>
              <span className="text-xl font-bold text-white">ULTRAFITVO</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-sm text-white hover:text-neon transition-colors">Categories</a>
            <a href="#about" className="text-sm text-white hover:text-neon transition-colors">About Us</a>
            <a href="#pricing" className="text-sm text-white hover:text-neon transition-colors">Pricing</a>
            <a href="#join" className="text-sm text-white hover:text-neon transition-colors">Store</a>
            <a href="#blog" className="text-sm text-white hover:text-neon transition-colors">Blog</a>
          </nav>
          
          {/* Call to Action Button */}
          <div className="hidden md:block">
            <button className="btn btn-neon">Get Started</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-lighter">
          <div className="container mx-auto py-4 px-6 space-y-4">
            <a href="#categories" className="block text-white hover:text-neon transition-colors py-2">Categories</a>
            <a href="#about" className="block text-white hover:text-neon transition-colors py-2">About Us</a>
            <a href="#pricing" className="block text-white hover:text-neon transition-colors py-2">Pricing</a>
            <a href="#join" className="block text-white hover:text-neon transition-colors py-2">Store</a>
            <a href="#blog" className="block text-white hover:text-neon transition-colors py-2">Blog</a>
            <button className="btn btn-neon w-full">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
