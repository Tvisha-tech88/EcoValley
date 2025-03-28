import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DropletIcon, LeafIcon, BookOpenIcon, MapIcon, HeartIcon, CloudIcon, UserIcon, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleCard from '@/components/ModuleCard';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const modules = [
    {
      title: 'AquaGuard',
      description: 'Monitor and protect water quality in rural communities',
      icon: <DropletIcon size={24} />,
      path: '/modules/aquaguard',
      color: 'secondary' as const,
      category: 'environment',
      features: [
        'Clickable water quality map',
        'Contamination detection tool',
        'Real-time data visualization',
        'Upload water sample images'
      ]
    },
    {
      title: 'AgriPulse',
      description: 'Smart agriculture solutions for sustainable farming',
      icon: <LeafIcon size={24} />,
      path: '/modules/agripulse',
      color: 'accent' as const,
      category: 'agriculture',
      features: [
        'Dynamic weather forecast widget',
        'Crop disease recognition',
        'Marketplace interface',
        'Farm condition monitoring'
      ]
    },
    {
      title: 'EduReach',
      description: 'Educational resources tailored for rural communities',
      icon: <BookOpenIcon size={24} />,
      path: '/modules/edureach',
      color: 'primary' as const,
      category: 'education',
      features: [
        'Video lesson players',
        'Interactive learning modules',
        'Quiz systems with instant feedback',
        'Progress tracking dashboard'
      ]
    },
    {
      title: 'ResourceSafe',
      description: 'Protect and manage natural resources sustainably',
      icon: <MapIcon size={24} />,
      path: '/modules/resourcesafe',
      color: 'secondary' as const,
      category: 'environment',
      features: [
        'GIS mapping with layered data',
        'Community reporting interface',
        'Ecological change visualization',
        'Environmental observation uploads'
      ]
    },
    {
      title: 'HealthWatch',
      description: 'Healthcare monitoring and resources for rural areas',
      icon: <HeartIcon size={24} />,
      path: '/modules/healthwatch',
      color: 'accent' as const,
      category: 'health',
      features: [
        'Symptom checker with AI',
        'Telemedicine appointment scheduling',
        'Disease tracking map',
        'Medical resource locator'
      ]
    },
    {
      title: 'ClimateSmart',
      description: 'Climate adaptation strategies for rural communities',
      icon: <CloudIcon size={24} />,
      path: '/modules/climatesmart',
      color: 'primary' as const,
      category: 'environment',
      features: [
        'Carbon footprint calculator',
        'Climate change visualization',
        'Sustainable practice guides',
        'Local ecosystem gallery'
      ]
    },
    {
      title: 'EmpowerHer',
      description: 'Supporting rural women entrepreneurs and leaders',
      icon: <UserIcon size={24} />,
      path: '/modules/empowerher',
      color: 'secondary' as const,
      category: 'social',
      features: [
        'Skills assessment tools',
        'Mentorship matching system',
        'Microenterprise guidance',
        'Success story platform'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'environment', name: 'Environment' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'education', name: 'Education' },
    { id: 'health', name: 'Health' },
    { id: 'social', name: 'Social Empowerment' }
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || module.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Dashboard header */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">EcoValley Modules</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our interactive modules designed to address the unique challenges 
                faced by rural communities through sustainable technology solutions.
              </p>
            </div>
            
            {/* Search and filter */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search modules..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-accent text-white'
                        : 'bg-white border border-border hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Modules grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredModules.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map((module, index) => (
                  <motion.div
                    key={module.title}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={index + 1}
                  >
                    <ModuleCard {...module} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No modules found matching your search.</p>
                <button
                  className="mt-4 text-accent hover:underline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
