import React from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUpRight, CloudRain, Leaf, Trees, Wind } from 'lucide-react';

const ClimateSmart = () => {
  // Sample data for charts
  const carbonFootprintData = [
    { name: 'Jan', residential: 140, transport: 240, food: 120 },
    { name: 'Feb', residential: 130, transport: 220, food: 110 },
    { name: 'Mar', residential: 120, transport: 230, food: 125 },
    { name: 'Apr', residential: 150, transport: 200, food: 115 },
    { name: 'May', residential: 160, transport: 250, food: 130 },
    { name: 'Jun', residential: 170, transport: 260, food: 135 },
  ];

  const climateChangeData = [
    { year: '1960', temperature: 0.0 },
    { year: '1970', temperature: 0.1 },
    { year: '1980', temperature: 0.2 },
    { year: '1990', temperature: 0.3 },
    { year: '2000', temperature: 0.4 },
    { year: '2010', temperature: 0.6 },
    { year: '2020', temperature: 0.8 },
    { year: '2030', temperature: 1.0, projected: true },
    { year: '2040', temperature: 1.3, projected: true },
    { year: '2050', temperature: 1.5, projected: true },
  ];
  
  // Sample ecosystem data
  const ecosystemItems = [
    { title: 'Rainforest', icon: <Trees className="h-8 w-8 text-forest-green" />, description: 'Diverse and dense tropical forests with high rainfall' },
    { title: 'Grasslands', icon: <Wind className="h-8 w-8 text-earth-yellow" />, description: 'Open areas dominated by grasses rather than trees' },
    { title: 'Wetlands', icon: <CloudRain className="h-8 w-8 text-sky-blue" />, description: 'Areas where water covers the soil or is present at or near the surface' },
    { title: 'Savanna', icon: <Leaf className="h-8 w-8 text-forest-green" />, description: 'Mixed woodland-grassland ecosystem with scattered trees' },
  ];

  // Sample sustainable practices
  const sustainablePractices = [
    {
      title: 'Renewable Energy',
      description: 'Transition to solar, wind, and hydroelectric power sources',
      steps: [
        'Assess energy needs and potential for renewable sources',
        'Start with small implementations such as solar lanterns',
        'Gradually build community-based renewable infrastructure',
        'Train local technicians for maintenance and repairs'
      ]
    },
    {
      title: 'Sustainable Agriculture',
      description: 'Implement farming practices that protect soil health and conserve water',
      steps: [
        'Introduce crop rotation and diversification',
        'Implement water conservation techniques',
        'Reduce chemical inputs through integrated pest management',
        'Create composting systems for natural fertilizer'
      ]
    },
    {
      title: 'Waste Reduction',
      description: 'Develop systems for minimizing, reusing, and recycling waste',
      steps: [
        'Conduct a community waste audit',
        'Introduce segregation of biodegradable and non-biodegradable waste',
        'Establish composting for organic waste',
        'Create recycling collection points and upcycling workshops'
      ]
    },
    {
      title: 'Water Conservation',
      description: 'Techniques for preserving and efficiently using water resources',
      steps: [
        'Implement rainwater harvesting systems',
        'Use drip irrigation for agriculture',
        'Protect and restore local water sources',
        'Educate on water-saving household practices'
      ]
    }
  ];

  return (
    <ModuleLayout
      title="ClimateSmart"
      description="Helping rural communities adapt to climate change through sustainable practices and educational resources."
      color="primary"
    >
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="calculator">Carbon Calculator</TabsTrigger>
          <TabsTrigger value="visualization">Climate Visualization</TabsTrigger>
          <TabsTrigger value="practices">Sustainable Practices</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem Gallery</TabsTrigger>
        </TabsList>

        {/* Carbon Footprint Calculator Tab */}
        <TabsContent value="calculator" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Calculator</CardTitle>
              <CardDescription>
                Track and analyze your carbon footprint across different categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={carbonFootprintData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'CO₂ (kg)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="residential" name="Home Energy" stackId="a" fill="#F2D06B" />
                    <Bar dataKey="transport" name="Transportation" stackId="a" fill="#87CEEB" />
                    <Bar dataKey="food" name="Food & Diet" stackId="a" fill="#2E8B57" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Footprint</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5,120 kg CO₂</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your carbon footprint for the last 6 months
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Community Average</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6,250 kg CO₂</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      You're using 18% less than average
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Reduction Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4,500 kg CO₂</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      You're 620 kg away from your goal
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Climate Change Visualization Tab */}
        <TabsContent value="visualization" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Climate Change Visualization</CardTitle>
              <CardDescription>
                Visualize temperature changes over time and projected future trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={climateChangeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F2D06B" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F2D06B" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Temperature Change (°C)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#F2D06B" 
                      fillOpacity={1} 
                      fill="url(#colorTemp)" 
                      connectNulls 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Historical Change</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+0.8°C</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Temperature increase since 1960
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Projected by 2050</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+1.5°C</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Based on current emission trends
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Local Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">High</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Increased drought & flooding risks
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sustainable Practices Tab */}
        <TabsContent value="practices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Practice Guides</CardTitle>
              <CardDescription>
                Practical solutions for sustainable living in rural communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sustainablePractices.map((practice, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-earth-yellow/10">
                      <CardTitle className="flex justify-between items-center">
                        {practice.title}
                        <ArrowUpRight className="h-4 w-4 text-earth-yellow" />
                      </CardTitle>
                      <CardDescription>{practice.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <h4 className="font-medium mb-2 text-sm">Implementation Steps:</h4>
                      <ol className="space-y-1 ml-4 list-decimal text-sm text-muted-foreground">
                        {practice.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ecosystem Gallery Tab */}
        <TabsContent value="ecosystem" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Local Ecosystem Gallery</CardTitle>
              <CardDescription>
                Explore and learn about the diversity of local ecosystems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {ecosystemItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="p-4">
                        {item.icon}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Upload Your Ecosystem Observations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share photos and observations of your local ecosystem to contribute to our community knowledge base.
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    className="flex-1 py-2 px-3 border border-border rounded text-sm"
                    accept="image/*"
                  />
                  <button
                    className="bg-forest-green text-white px-4 py-2 rounded text-sm"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  );
};

export default ClimateSmart;
