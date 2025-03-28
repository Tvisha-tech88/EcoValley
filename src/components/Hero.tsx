import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5"></div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center z-10">
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <p className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm inline-block mb-4">
            Transforming Rural Communities
          </p>
        </div>
        
        <h1 
          className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}
        >
          <span className="block font-bold text-foreground">Empowering Rural Innovation</span>
          <span className="block mt-1 text-forest-green">Through Sustainable Technology</span>
        </h1>
        
        <p 
          className={`mt-6 max-w-2xl mx-auto text-muted-foreground text-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}
        >
          EcoValley transforms rural challenges into sustainable opportunities through 
          intelligent technology, empowering communities to thrive in harmony with nature.
        </p>
        
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <Link
            to="/dashboard"
            className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all btn-hover-effect w-full sm:w-auto"
          >
            Explore Modules
          </Link>
          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-sm border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className={`animate-pulse-subtle transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ChevronDown className="h-8 w-8 animate-float" />
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
