import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartIcon, Calendar, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HealthWatch = () => {
  const [symptomSearch, setSymptomSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const handleSymptomCheck = () => {
    if (symptomSearch.trim()) {
      setShowResults(true);
    }
  };

  return (
    <ModuleLayout 
      title="HealthWatch" 
      description="Healthcare monitoring and resources designed specifically for rural communities."
      color="accent"
    >
      <Tabs defaultValue="symptom" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="symptom" className="text-sm">Symptom Checker</TabsTrigger>
          <TabsTrigger value="telemedicine" className="text-sm">Telemedicine</TabsTrigger>
          <TabsTrigger value="tracking" className="text-sm">Disease Tracking</TabsTrigger>
          <TabsTrigger value="resources" className="text-sm">Medical Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="symptom" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartIcon className="text-forest-green h-5 w-5" />
                <span>Symptom Checker with AI Recommendations</span>
              </CardTitle>
              <CardDescription>
                Check symptoms and receive AI-assisted health recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <div className="mb-6">
                    <h3 className="font-medium mb-4">Enter Your Symptoms</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">Main Symptom</label>
                        <Input 
                          value={symptomSearch}
                          onChange={(e) => setSymptomSearch(e.target.value)}
                          placeholder="e.g., headache, fever, cough" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Additional Symptoms (optional)</label>
                        <Textarea placeholder="List any other symptoms you're experiencing" rows={3} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-1">Age</label>
                          <Input type="number" placeholder="Your age" />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-1">Gender</label>
                          <select className="w-full p-2 border rounded-md">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">Symptom Duration</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="">Select duration</option>
                          <option value="today">Today</option>
                          <option value="days">Several days</option>
                          <option value="week">About a week</option>
                          <option value="weeks">Several weeks</option>
                          <option value="month">A month or more</option>
                        </select>
                      </div>
                      
                      <Button onClick={handleSymptomCheck}>Check Symptoms</Button>
                    </div>
                  </div>
                  
                  {showResults && (
                    <div className="border rounded-md p-6">
                      <h3 className="font-medium text-lg mb-4">AI Assessment Results</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Possible Conditions</h4>
                          <div className="space-y-2">
                            <div className="bg-muted p-3 rounded-md flex justify-between">
                              <span className="font-medium">Tension Headache</span>
                              <span className="text-forest-green">High match</span>
                            </div>
                            <div className="bg-muted p-3 rounded-md flex justify-between">
                              <span className="font-medium">Migraine</span>
                              <span className="text-amber-600">Medium match</span>
                            </div>
                            <div className="bg-muted p-3 rounded-md flex justify-between">
                              <span className="font-medium">Sinus Infection</span>
                              <span className="text-amber-600">Medium match</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">!</div>
                              <div>If symptoms persist for more than 72 hours, seek medical attention</div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                              <div>Rest in a quiet, dark room and stay hydrated</div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                              <div>Over-the-counter pain relievers may help alleviate symptoms</div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
                          <p className="text-amber-800 text-sm">
                            <strong>Disclaimer:</strong> This is not a medical diagnosis. Always consult with a healthcare 
                            professional for proper medical advice and treatment.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="col-span-1">
                  <h3 className="font-medium mb-4">Common Health Issues</h3>
                  <div className="space-y-3">
                    {[
                      "Respiratory Infections",
                      "Digestive Issues",
                      "Skin Conditions",
                      "Joint Pain",
                      "Fever & Flu",
                      "Headaches & Migraines"
                    ].map((issue, index) => (
                      <div key={index} className="bg-muted/50 p-3 rounded-md hover:bg-muted transition-colors cursor-pointer">
                        <span className="text-sm">{issue}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-forest-green/10 rounded-md border border-forest-green/20">
                    <h3 className="font-medium text-forest-green mb-2">Emergency?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you're experiencing severe symptoms, don't wait for an online assessment.
                    </p>
                    <Button variant="destructive" className="w-full">
                      Find Emergency Care
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="telemedicine" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-forest-green h-5 w-5" />
                <span>Telemedicine Appointment Scheduling</span>
              </CardTitle>
              <CardDescription>
                Connect with healthcare providers remotely through video consultations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <h3 className="font-medium mb-4">Available Healthcare Providers</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Dr. Sarah Johnson",
                        specialty: "General Medicine",
                        experience: "15 years",
                        availability: "Today",
                        image: null
                      },
                      {
                        name: "Dr. Michael Chen",
                        specialty: "Pediatrics",
                        experience: "12 years",
                        availability: "Tomorrow",
                        image: null
                      },
                      {
                        name: "Dr. Priya Sharma",
                        specialty: "Dermatology",
                        experience: "8 years",
                        availability: "Thursday",
                        image: null
                      },
                      {
                        name: "Dr. Robert Williams",
                        specialty: "Internal Medicine",
                        experience: "20 years",
                        availability: "Friday",
                        image: null
                      }
                    ].map((doctor, index) => (
                      <div key={index} className="border rounded-md p-4 flex gap-4">
                        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <HeartIcon className="h-8 w-8 text-muted-foreground/40" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{doctor.name}</h4>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              Available {doctor.availability}
                            </span>
                          </div>
                          <p className="text-sm text-forest-green">{doctor.specialty}</p>
                          <p className="text-xs text-muted-foreground mb-3">{doctor.experience} experience</p>
                          <Button size="sm">Schedule Appointment</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Upcoming Appointments</h3>
                  <div className="border rounded-md p-4">
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Wednesday, June 14</div>
                      <h4 className="font-medium">Dr. Sarah Johnson</h4>
                      <p className="text-sm text-forest-green">General Medicine</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">10:30 AM</span>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-medium text-sm mb-2">Appointment Instructions</h4>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        <li>• Ensure you have a stable internet connection</li>
                        <li>• Find a quiet, private space</li>
                        <li>• Have your medication list ready</li>
                        <li>• Prepare questions for the doctor</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-4">Specialties Available</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "General Medicine",
                        "Pediatrics",
                        "Dermatology",
                        "Mental Health",
                        "Cardiology",
                        "Women's Health"
                      ].map((specialty, index) => (
                        <div key={index} className="bg-muted/50 p-2 rounded-md text-center text-sm">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tracking" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-forest-green h-5 w-5" />
                <span>Disease Tracking Map</span>
              </CardTitle>
              <CardDescription>
                Monitor disease outbreaks and health trends in your region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex gap-4 flex-wrap">
                  <Button variant="outline" size="sm">All Conditions</Button>
                  <Button variant="outline" size="sm" className="bg-forest-green/10">Respiratory</Button>
                  <Button variant="outline" size="sm">Gastrointestinal</Button>
                  <Button variant="outline" size="sm">Vector-borne</Button>
                  <Button variant="outline" size="sm">Seasonal</Button>
                </div>
              </div>
              
              <div className="aspect-[2/1] bg-muted rounded-md flex items-center justify-center border mb-6">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Disease Tracking Map</h3>
                  <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                    This interactive map would display current disease prevalence across different 
                    regions, helping communities stay informed about local health trends and potential outbreaks.
                  </p>
                  <Button>Explore Full Map</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Current Health Alerts</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-red-700">Respiratory Infection Outbreak</h4>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">High Alert</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Increased cases of respiratory infections reported in Oakridge and surrounding areas.
                      </p>
                      <div className="text-xs text-muted-foreground">Updated: 2 days ago</div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-amber-700">Seasonal Allergies</h4>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Moderate Alert</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pollen levels are high in the region, causing increased allergy symptoms.
                      </p>
                      <div className="text-xs text-muted-foreground">Updated: 1 day ago</div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-blue-700">Heat-Related Conditions</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Advisory</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        High temperatures expected this week. Stay hydrated and avoid prolonged sun exposure.
                      </p>
                      <div className="text-xs text-muted-foreground">Updated: Today</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Preventive Measures</h3>
                  <div className="bg-muted/50 p-4 rounded-md">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Respiratory Infections</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Practice good hand hygiene and wash hands frequently</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Wear masks in crowded indoor settings</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Stay home if experiencing symptoms</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Seasonal Allergies</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Keep windows closed during high pollen days</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Use air purifiers indoors if available</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Consider over-the-counter allergy medications</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Heat-Related Conditions</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Stay hydrated and drink plenty of water</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Avoid outdoor activities during peak heat hours</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div>Find cool areas like community cooling centers if needed</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="text-forest-green h-5 w-5" />
                <span>Medical Resource Locator</span>
              </CardTitle>
              <CardDescription>
                Find healthcare facilities and resources in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <Input placeholder="Enter your location or zip code" className="flex-grow" />
                  <Button>Search</Button>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">All Resources</Button>
                  <Button variant="outline" size="sm" className="bg-forest-green/10">Hospitals</Button>
                  <Button variant="outline" size="sm">Clinics</Button>
                  <Button variant="outline" size="sm">Pharmacies</Button>
                  <Button variant="outline" size="sm">Emergency Services</Button>
                  <Button variant="outline" size="sm">Mobile Units</Button>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-md p-4 mb-6">
                <h3 className="font-medium mb-4">Nearest Medical Facilities</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Green Valley Community Hospital",
                      type: "Hospital",
                      distance: "8.2 miles",
                      address: "123 Health Lane, Greenfield",
                      phone: "(555) 123-4567",
                      hours: "24/7 Emergency Services"
                    },
                    {
                      name: "Meadowview Rural Health Clinic",
                      type: "Clinic",
                      distance: "3.5 miles",
                      address: "456 Care Street, Meadowville",
                      phone: "(555) 987-6543",
                      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM"
                    },
                    {
                      name: "Cornerstone Pharmacy",
                      type: "Pharmacy",
                      distance: "2.7 miles",
                      address: "789 Wellness Road, Springfield",
                      phone: "(555) 456-7890",
                      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-4PM"
                    },
                    {
                      name: "Sunrise Mobile Health Unit",
                      type: "Mobile Unit",
                      distance: "Visits your area weekly",
                      address: "Various locations",
                      phone: "(555) 234-5678",
                      hours: "Schedule varies - see calendar"
                    }
                  ].map((facility, index) => (
                    <div key={index} className="bg-white rounded-md p-4 border">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{facility.name}</h4>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{facility.distance}</span>
                      </div>
                      <div className="text-xs text-forest-green mb-3">{facility.type}</div>
                      <div className="text-sm text-muted-foreground mb-1">{facility.address}</div>
                      <div className="text-sm text-muted-foreground mb-1">{facility.phone}</div>
                      <div className="text-sm text-muted-foreground mb-3">{facility.hours}</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Get Directions</Button>
                        <Button size="sm">Call</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Emergency Information</h3>
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <h4 className="font-medium text-red-700 mb-2">Emergency Services</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-sm">Emergency Number:</span>
                        <span className="text-sm font-medium">911</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-sm">Poison Control:</span>
                        <span className="text-sm font-medium">(800) 222-1222</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-sm">Mental Health Crisis Line:</span>
                        <span className="text-sm font-medium">(988)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Healthcare Programs</h3>
                  <div className="bg-muted rounded-md p-4">
                    <h4 className="font-medium mb-2">Available Assistance Programs</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Rural Health Clinic Program</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Community Health Worker Program</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Medication Assistance Program</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <div>Telehealth Services</div>
                      </li>
                    </ul>
                    <Button className="w-full mt-4">Learn More</Button>
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

export default HealthWatch;
