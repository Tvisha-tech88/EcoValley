import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: 'primary' | 'secondary' | 'accent';
  features: string[];
  className?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  path,
  color,
  features,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getGradientClass = () => {
    switch(color) {
      case 'primary':
        return 'from-earth-yellow/20 to-earth-yellow/5';
      case 'secondary': 
        return 'from-sky-blue/20 to-sky-blue/5';
      case 'accent':
        return 'from-forest-green/20 to-forest-green/5';
      default:
        return 'from-gray-100 to-white';
    }
  };

  const getIconBgClass = () => {
    switch(color) {
      case 'primary':
        return 'bg-earth-yellow/10';
      case 'secondary': 
        return 'bg-sky-blue/10';
      case 'accent':
        return 'bg-forest-green/10';
      default:
        return 'bg-gray-100';
    }
  };

  const getTextClass = () => {
    switch(color) {
      case 'primary':
        return 'text-earth-yellow';
      case 'secondary': 
        return 'text-sky-blue';
      case 'accent':
        return 'text-forest-green';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Link
      to={path}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-b p-6 transition-all duration-300 card-hover",
        getGradientClass(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-500",
        isHovered ? "opacity-5" : ""
      )}>
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent" />
      </div>

      <div className="relative z-10">
        <div className={cn(
          "flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300",
          getIconBgClass(),
          isHovered ? "scale-110" : ""
        )}>
          <div className={getTextClass()}>{icon}</div>
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  className={getTextClass()}
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center text-sm font-medium">
          <span className={cn("transition-all duration-300", getTextClass())}>
            Explore {title}
          </span>
          <div className={cn(
            "ml-2 transition-all duration-300 transform",
            isHovered ? "translate-x-1" : ""
          )}>
            {isHovered ? <ArrowUpRight size={16} className={getTextClass()} /> : <ArrowRight size={16} className={getTextClass()} />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
