import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropletIcon, Upload, AlertTriangle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AquaGuard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        // Simulate analysis result
        setTimeout(() => {
          setAnalysisResult('Analysis complete: Water appears to contain elevated levels of nitrates (8.7mg/L). Recommended action: Further testing required.');
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ModuleLayout 
      title="AquaGuard" 
      description="Monitor and protect water quality in rural communities with interactive tools and real-time data visualization."
      color="secondary"
    >
      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="map" className="text-sm">Water Quality Map</TabsTrigger>
          <TabsTrigger value="detect" className="text-sm">Contamination Detection</TabsTrigger>
          <TabsTrigger value="visualize" className="text-sm">Data Visualization</TabsTrigger>
          <TabsTrigger value="upload" className="text-sm">Sample Upload</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DropletIcon className="text-sky-blue h-5 w-5" />
                <span>Interactive Water Quality Map</span>
              </CardTitle>
              <CardDescription>
                Explore water quality data across different rural communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-sky-blue/10 rounded-md flex items-center justify-center border border-sky-blue/20">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    This interactive map would display water quality data from various monitoring stations 
                    across rural communities, with color-coded indicators showing water quality status.
                  </p>
                  <Button variant="outline">View Full Map</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="detect" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-sky-blue h-5 w-5" />
                <span>Contamination Detection Tool</span>
              </CardTitle>
              <CardDescription>
                Analyze water samples for potential contamination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sky-blue/10 rounded-md p-6 border border-sky-blue/20">
                  <h3 className="text-lg font-medium mb-4">Detection Parameters</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground">pH Level</label>
                        <div className="mt-1 font-medium">7.2</div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Turbidity</label>
                        <div className="mt-1 font-medium">1.5 NTU</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Chlorine</label>
                        <div className="mt-1 font-medium">0.5 mg/L</div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Bacteria</label>
                        <div className="mt-1 font-medium">None detected</div>
                      </div>
                    </div>
                    <Button className="w-full">Run Analysis</Button>
                  </div>
                </div>
                <div className="bg-muted rounded-md p-6">
                  <h3 className="text-lg font-medium mb-4">Results Dashboard</h3>
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-700 mb-4">
                      <DropletIcon size={36} />
                    </div>
                    <h4 className="text-xl font-bold">Safe Water</h4>
                    <p className="text-muted-foreground mt-2">All parameters within safe limits</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="visualize" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="text-sky-blue h-5 w-5" />
                <span>Real-time Data Visualization</span>
              </CardTitle>
              <CardDescription>
                View trends and patterns in water quality data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-sky-blue/10 rounded-md flex items-center justify-center border border-sky-blue/20">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Water Quality Trends</h3>
                  <p className="text-muted-foreground mb-4">
                    This section would display charts and graphs showing water quality trends over time,
                    allowing users to identify patterns and potential issues.
                  </p>
                  <Button variant="outline">Explore Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upload" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="text-sky-blue h-5 w-5" />
                <span>Water Sample Image Upload</span>
              </CardTitle>
              <CardDescription>
                Upload images of water samples for quick analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-6 text-center">
                  {selectedImage ? (
                    <div>
                      <img 
                        src={selectedImage} 
                        alt="Water sample" 
                        className="mx-auto max-h-64 object-contain mb-4" 
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSelectedImage(null);
                          setAnalysisResult(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Upload Water Sample Image</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Upload clear images of water samples for AI-assisted analysis
                      </p>
                      <div className="mt-4">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Button>Select Image</Button>
                          <input
                            id="file-upload"
                            name="file-upload"
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
                  <h3 className="text-lg font-medium mb-4">Analysis Results</h3>
                  {analysisResult ? (
                    <div className="bg-white p-4 rounded border">
                      <p>{analysisResult}</p>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>Upload an image to see analysis results</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  );
};

export default AquaGuard;
