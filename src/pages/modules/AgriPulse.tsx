import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeafIcon, Cloud, Image, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AgriPulse = () => {
  const [diseaseImage, setDiseaseImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDiseaseImage(e.target?.result as string);
        // Simulate analysis result
        setTimeout(() => {
          setAnalysisResult('Analysis: Image shows signs of early-stage powdery mildew. Recommended treatment: Apply fungicide containing sulfur or potassium bicarbonate.');
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ModuleLayout 
      title="AgriPulse" 
      description="Smart agriculture solutions for sustainable farming practices in rural communities."
      color="accent"
    >
      <Tabs defaultValue="weather" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="weather" className="text-sm">Weather Forecast</TabsTrigger>
          <TabsTrigger value="disease" className="text-sm">Disease Recognition</TabsTrigger>
          <TabsTrigger value="market" className="text-sm">Marketplace</TabsTrigger>
          <TabsTrigger value="monitor" className="text-sm">Farm Monitoring</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weather" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="text-forest-green h-5 w-5" />
                <span>Dynamic Weather Forecast</span>
              </CardTitle>
              <CardDescription>
                Get accurate weather predictions for better farm planning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-forest-green/10 rounded-md p-6 border border-forest-green/20 text-center col-span-1">
                  <div className="mb-4">
                    <Cloud className="h-16 w-16 mx-auto text-forest-green mb-2" />
                    <h3 className="text-2xl font-bold">23°C</h3>
                    <p className="text-muted-foreground">Partly Cloudy</p>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <span>Humidity:</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Wind:</span>
                      <span className="font-medium">8 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Precipitation:</span>
                      <span className="font-medium">30%</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <h3 className="font-medium mb-4">5-Day Forecast</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { day: 'Mon', temp: '24°C', icon: <Cloud className="h-8 w-8 mx-auto" /> },
                      { day: 'Tue', temp: '26°C', icon: <Cloud className="h-8 w-8 mx-auto" /> },
                      { day: 'Wed', temp: '22°C', icon: <Cloud className="h-8 w-8 mx-auto" /> },
                      { day: 'Thu', temp: '21°C', icon: <Cloud className="h-8 w-8 mx-auto" /> },
                      { day: 'Fri', temp: '23°C', icon: <Cloud className="h-8 w-8 mx-auto" /> }
                    ].map((item, index) => (
                      <div key={index} className="bg-muted p-3 rounded-md text-center">
                        <div className="text-sm font-medium mb-1">{item.day}</div>
                        {item.icon}
                        <div className="text-sm font-bold mt-1">{item.temp}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Crop Planning Advice</h3>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                      Based on the forecast, consider delaying irrigation until Thursday. 
                      Ideal conditions for planting seedlings will be on Tuesday. 
                      Monitor for pests as temperatures rise mid-week.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="disease" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="text-forest-green h-5 w-5" />
                <span>Crop Disease Recognition</span>
              </CardTitle>
              <CardDescription>
                Upload images of crop plants to identify diseases and get treatment recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-6 text-center">
                  {diseaseImage ? (
                    <div>
                      <img 
                        src={diseaseImage} 
                        alt="Crop disease" 
                        className="mx-auto max-h-64 object-contain mb-4" 
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setDiseaseImage(null);
                          setAnalysisResult(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Image className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Upload Crop Image</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Upload clear images of plant leaves or stems for AI-assisted disease detection
                      </p>
                      <div className="mt-4">
                        <label htmlFor="disease-image-upload" className="cursor-pointer">
                          <Button>Select Image</Button>
                          <input
                            id="disease-image-upload"
                            name="disease-image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-muted rounded-md p-6">
                  <h3 className="text-lg font-medium mb-4">Disease Analysis</h3>
                  {analysisResult ? (
                    <div className="bg-white p-4 rounded border">
                      <p>{analysisResult}</p>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>Upload an image to see disease analysis</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="market" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="text-forest-green h-5 w-5" />
                <span>Agricultural Marketplace</span>
              </CardTitle>
              <CardDescription>
                Buy and sell agricultural products, equipment, and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <Input placeholder="Search marketplace..." className="max-w-md" />
                  <Button variant="outline">Search</Button>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <Button variant="outline" size="sm">All Categories</Button>
                  <Button variant="outline" size="sm">Seeds</Button>
                  <Button variant="outline" size="sm">Equipment</Button>
                  <Button variant="outline" size="sm">Produce</Button>
                  <Button variant="outline" size="sm">Services</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    title: 'Organic Tomato Seeds', 
                    price: '$12.99', 
                    seller: 'Green Thumb Farms',
                    location: 'Riverdale' 
                  },
                  { 
                    title: 'Irrigation Equipment', 
                    price: '$349.00', 
                    seller: 'Farm Tech Solutions',
                    location: 'Meadowville' 
                  },
                  { 
                    title: 'Fresh Organic Vegetables', 
                    price: 'Varies', 
                    seller: 'Harmony Acres',
                    location: 'Springfield' 
                  },
                  { 
                    title: 'Tractor Rental Service', 
                    price: '$75/day', 
                    seller: 'Rural Equipment Co.',
                    location: 'Oakridge' 
                  },
                  { 
                    title: 'Sustainable Pest Control', 
                    price: '$29.99', 
                    seller: 'EcoFarm Supplies',
                    location: 'Greenfield' 
                  },
                  { 
                    title: 'Solar Panels for Farms', 
                    price: '$1,299.00', 
                    seller: 'Sunshine Energy',
                    location: 'Sunnydale' 
                  }
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="bg-muted h-32 flex items-center justify-center">
                      <LeafIcon className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-base">{item.title}</h3>
                      <div className="text-sm text-forest-green font-bold mt-1">{item.price}</div>
                      <div className="text-xs text-muted-foreground mt-2 flex justify-between">
                        <span>{item.seller}</span>
                        <span>{item.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="monitor" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LeafIcon className="text-forest-green h-5 w-5" />
                <span>Farm Condition Monitoring</span>
              </CardTitle>
              <CardDescription>
                Track soil conditions, crop health, and other farm metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Soil Moisture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-forest-green">68%</div>
                    <p className="text-xs text-muted-foreground">Optimal range: 60-75%</p>
                    <div className="h-2 bg-muted mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-forest-green rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Soil pH</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-forest-green">6.8</div>
                    <p className="text-xs text-muted-foreground">Optimal range: 6.0-7.0</p>
                    <div className="h-2 bg-muted mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-forest-green rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Nitrogen Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-amber-500">Low</div>
                    <p className="text-xs text-muted-foreground">Recommendation: Apply fertilizer</p>
                    <div className="h-2 bg-muted mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-medium mb-4">Farm Condition Overview</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Crop Health Status</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-100 text-green-700 p-3 rounded text-center">
                        <div className="font-medium">Corn</div>
                        <div className="text-xs">Excellent</div>
                      </div>
                      <div className="bg-amber-100 text-amber-700 p-3 rounded text-center">
                        <div className="font-medium">Tomatoes</div>
                        <div className="text-xs">Good</div>
                      </div>
                      <div className="bg-green-100 text-green-700 p-3 rounded text-center">
                        <div className="font-medium">Beans</div>
                        <div className="text-xs">Excellent</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Recommended Actions</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">!</div>
                        <div>Apply nitrogen-rich fertilizer to the tomato field within the next 3 days</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Corn field is ready for regular irrigation schedule</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Bean plants showing optimal growth; maintain current care routine</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  );
};

export default AgriPulse;
