import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModuleLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  color: 'primary' | 'secondary' | 'accent';
}

const ModuleLayout: React.FC<ModuleLayoutProps> = ({
  title,
  description,
  children,
  color
}) => {
  const getBgClass = () => {
    switch(color) {
      case 'primary':
        return 'from-earth-yellow/10 to-transparent';
      case 'secondary': 
        return 'from-sky-blue/10 to-transparent';
      case 'accent':
        return 'from-forest-green/10 to-transparent';
      default:
        return 'from-gray-100 to-transparent';
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className={`bg-gradient-to-b ${getBgClass()} pt-24 pb-12 px-6`}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Modules
              </Link>
            </div>
            
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextClass()}`}>{title}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mb-8">{description}</p>
          </div>
        </div>
        
        <div className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModuleLayout;
