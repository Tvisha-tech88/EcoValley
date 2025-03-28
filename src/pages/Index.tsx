import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DropletIcon, LeafIcon, BookOpenIcon, MapIcon, HeartIcon, CloudIcon, UserIcon } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModuleCard from '@/components/ModuleCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
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
      features: [
        'Skills assessment tools',
        'Mentorship matching system',
        'Microenterprise guidance',
        'Success story platform'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      
      <main>
        <Hero />
        
        {/* Modules section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our suite of specialized tools designed to address unique challenges
                faced by rural communities through sustainable technology solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                  custom={index + 2}
                >
                  <ModuleCard {...module} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transforming rural communities through sustainable technology and innovative solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { figure: '250+', label: 'Rural Communities', color: 'text-earth-yellow' },
                { figure: '50,000+', label: 'People Impacted', color: 'text-sky-blue' },
                { figure: '15+', label: 'Countries Reached', color: 'text-forest-green' },
                { figure: '7', label: 'Specialized Modules', color: 'text-accent' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={index + 2}
                  className="bg-white rounded-xl shadow-sm p-6 text-center"
                >
                  <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.figure}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-24 px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-forest-green to-forest-green/90 text-white p-12 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Community?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join EcoValley today and access powerful tools designed to help rural communities thrive sustainably.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/register" 
                className="bg-white text-forest-green px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all btn-hover-effect w-full sm:w-auto"
              >
                Get Started
              </a>
              <a 
                href="/contact" 
                className="border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
