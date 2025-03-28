import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapIcon, Upload, LineChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ResourceSafe = () => {
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [observationImage, setObservationImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setObservationImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
    }, 3000);
  };

  return (
    <ModuleLayout 
      title="ResourceSafe" 
      description="Protect and manage natural resources sustainably with advanced mapping, community reporting, and ecological visualization tools."
      color="secondary"
    >
      <Tabs defaultValue="mapping" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="mapping" className="text-sm">GIS Mapping</TabsTrigger>
          <TabsTrigger value="reporting" className="text-sm">Community Reporting</TabsTrigger>
          <TabsTrigger value="visualization" className="text-sm">Ecological Visualization</TabsTrigger>
          <TabsTrigger value="observations" className="text-sm">Environmental Observations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mapping" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapIcon className="text-sky-blue h-5 w-5" />
                <span>GIS Mapping with Layered Data</span>
              </CardTitle>
              <CardDescription>
                Explore environmental data with interactive GIS mapping
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">Topography</Button>
                  <Button variant="outline" size="sm">Water Resources</Button>
                  <Button variant="outline" size="sm">Forest Cover</Button>
                  <Button variant="outline" size="sm">Agricultural Land</Button>
                  <Button variant="outline" size="sm">Wildlife Habitats</Button>
                </div>
              </div>
              
              <div className="aspect-[2/1] bg-sky-blue/10 rounded-md flex items-center justify-center border border-sky-blue/20 mb-6">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Interactive GIS Map</h3>
                  <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                    This interactive map would display environmental data with multiple layers 
                    that can be toggled on/off, allowing users to analyze various aspects of their 
                    local ecosystems and natural resources.
                  </p>
                  <Button>Explore Full Map</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Forest Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-2xl font-bold">
                      <span className="text-sky-blue">32%</span>
                      <span className="text-xs text-muted-foreground self-end">of total area</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">5% decrease since 2018</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Water Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-2xl font-bold">
                      <span className="text-green-600">Good</span>
                      <span className="text-xs text-muted-foreground self-end">in 70% of tested areas</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">15% improvement since 2018</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Protected Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-2xl font-bold">
                      <span className="text-sky-blue">12</span>
                      <span className="text-xs text-muted-foreground self-end">designated zones</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">3 new areas since 2018</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reporting" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-sky-blue h-5 w-5" />
                <span>Community Reporting Interface</span>
              </CardTitle>
              <CardDescription>
                Report environmental issues and collaborate on local solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="col-span-3">
                  <h3 className="font-medium mb-4">Submit Environmental Report</h3>
                  {reportSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-6 text-center">
                      <h4 className="text-lg font-medium mb-2">Report Submitted Successfully!</h4>
                      <p>Thank you for your contribution to environmental protection. Your report has been received and will be reviewed shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleReportSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">Issue Type</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="">Select an issue type</option>
                          <option value="deforestation">Deforestation</option>
                          <option value="water-pollution">Water Pollution</option>
                          <option value="illegal-dumping">Illegal Dumping</option>
                          <option value="wildlife-endangerment">Wildlife Endangerment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Location</label>
                        <Input placeholder="Enter location details or coordinates" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Description</label>
                        <Textarea placeholder="Describe the environmental issue in detail" rows={5} />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Attach Images (optional)</label>
                        <Input type="file" accept="image/*" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Urgency Level</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input type="radio" name="urgency" className="mr-2" />
                            <span>Low</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="urgency" className="mr-2" />
                            <span>Medium</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="urgency" className="mr-2" />
                            <span>High</span>
                          </label>
                        </div>
                      </div>
                      
                      <Button type="submit">Submit Report</Button>
                    </form>
                  )}
                </div>
                
                <div className="col-span-2">
                  <h3 className="font-medium mb-4">Recent Community Reports</h3>
                  <div className="space-y-3">
                    {[
                      {
                        type: "Water Pollution",
                        location: "Green River, North Bank",
                        date: "2 days ago",
                        status: "Under Review"
                      },
                      {
                        type: "Illegal Dumping",
                        location: "Forest Road, Mile 7",
                        date: "5 days ago",
                        status: "Investigating"
                      },
                      {
                        type: "Deforestation",
                        location: "East Ridge, Sector 4",
                        date: "1 week ago",
                        status: "Resolved"
                      },
                      {
                        type: "Wildlife Endangerment",
                        location: "South Lake Area",
                        date: "2 weeks ago",
                        status: "Resolved"
                      }
                    ].map((report, index) => (
                      <div key={index} className="bg-muted/50 p-4 rounded-md border">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-sm">{report.type}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            report.status === 'Resolved' 
                              ? 'bg-green-100 text-green-700'
                              : report.status === 'Investigating'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-amber-100 text-amber-700'
                          }`}>
                            {report.status}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{report.location}</p>
                        <p className="text-xs text-muted-foreground">Reported: {report.date}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Reports</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="visualization" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="text-sky-blue h-5 w-5" />
                <span>Ecological Change Visualization</span>
              </CardTitle>
              <CardDescription>
                Visualize ecological changes over time with interactive charts and graphs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <Button variant="outline" size="sm" className="bg-white">Yearly</Button>
                  <Button variant="outline" size="sm" className="bg-sky-blue/10">5 Years</Button>
                  <Button variant="outline" size="sm" className="bg-white">10 Years</Button>
                  <Button variant="outline" size="sm" className="bg-white">20 Years</Button>
                </div>
                
                <div className="aspect-[2/1] bg-muted rounded-md mb-4 p-6">
                  <h3 className="font-medium mb-2">Forest Cover Changes (2018-2023)</h3>
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">
                      This area would contain an interactive chart showing forest cover changes over time,
                      allowing users to see trends and patterns in deforestation or reforestation efforts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Biodiversity Index</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">2018</span>
                        <span className="text-sm font-medium">63.5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">2023</span>
                        <span className="text-sm font-medium">68.2</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span>▲ 4.7</span>
                        <span>(7.4% increase)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Carbon Sequestration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">2018</span>
                        <span className="text-sm font-medium">125K tons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">2023</span>
                        <span className="text-sm font-medium">142K tons</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span>▲ 17K</span>
                        <span>(13.6% increase)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Water Quality Index</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">2018</span>
                        <span className="text-sm font-medium">72.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">2023</span>
                        <span className="text-sm font-medium">78.9</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span>▲ 6.8</span>
                        <span>(9.4% increase)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-md">
                <h3 className="font-medium mb-4">Environmental Impact Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Positive Factors</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">+</div>
                        <div>Reforestation initiatives have added 2,400 hectares of new forest</div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">+</div>
                        <div>Water treatment facilities have reduced pollution by 28%</div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">+</div>
                        <div>Wildlife conservation efforts have increased bird species by 14</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Negative Factors</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">-</div>
                        <div>Agricultural expansion has reduced natural habitat by 850 hectares</div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">-</div>
                        <div>Increased tourism has added stress to sensitive ecosystems</div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">-</div>
                        <div>Drought conditions have impacted 35% of wetland areas</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="observations" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="text-sky-blue h-5 w-5" />
                <span>Environmental Observation Uploads</span>
              </CardTitle>
              <CardDescription>
                Share environmental observations with images and data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Upload Observation</h3>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-6 text-center">
                    {observationImage ? (
                      <div>
                        <img 
                          src={observationImage} 
                          alt="Environmental observation" 
                          className="mx-auto max-h-64 object-contain mb-4" 
                        />
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium block mb-1 text-left">Observation Type</label>
                            <select className="w-full p-2 border rounded-md">
                              <option value="">Select observation type</option>
                              <option value="wildlife">Wildlife Sighting</option>
                              <option value="plant">Plant Species</option>
                              <option value="landscape">Landscape Change</option>
                              <option value="weather">Weather Event</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1 text-left">Description</label>
                            <Textarea placeholder="Describe what you observed" rows={3} />
                          </div>
                          
                          <div className="flex gap-2">
                            <Button className="flex-1">Submit Observation</Button>
                            <Button 
                              variant="outline" 
                              onClick={() => setObservationImage(null)}
                            >
                              Remove Image
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">Upload Environmental Observation</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Upload images of wildlife, plants, landscapes, or other environmental observations
                        </p>
                        <div className="mt-4">
                          <label htmlFor="observation-upload" className="cursor-pointer">
                            <Button>Select Image</Button>
                            <input
                              id="observation-upload"
                              name="observation-upload"
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
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Community Observations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { type: "Wildlife", date: "2 days ago", user: "Maria G." },
                      { type: "Plant Species", date: "1 week ago", user: "John T." },
                      { type: "Landscape", date: "2 weeks ago", user: "David R." },
                      { type: "Weather Event", date: "3 weeks ago", user: "Sophia L." }
                    ].map((obs, index) => (
                      <div key={index} className="border rounded-md overflow-hidden group cursor-pointer">
                        <div className="h-32 bg-muted flex items-center justify-center">
                          <MapIcon className="h-10 w-10 text-muted-foreground/50" />
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-medium text-sm">{obs.type}</h4>
                            <span className="text-xs text-muted-foreground">{obs.date}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">By {obs.user}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Observations</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  );
};

export default ResourceSafe;
