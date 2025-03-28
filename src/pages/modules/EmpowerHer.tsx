import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { UsersRound, BookOpen, LineChart, Award, ArrowRight } from 'lucide-react';

const EmpowerHer = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  // Sample skills assessment data
  const skillsCategories = [
    { name: 'Leadership', score: 75, 
      description: 'Ability to guide, inspire and influence others toward achieving common goals.' },
    { name: 'Financial Management', score: 60, 
      description: 'Skills related to budgeting, accounting, and financial decision-making.' },
    { name: 'Marketing', score: 85, 
      description: 'Knowledge of market analysis, product promotion, and customer engagement.' },
    { name: 'Digital Literacy', score: 50, 
      description: 'Proficiency in using digital tools, online platforms, and technology.' },
    { name: 'Communication', score: 80, 
      description: 'Effectiveness in verbal, written, and interpersonal communication.' },
  ];
  
  // Sample mentors data
  const mentors = [
    {
      name: 'Amara Johnson',
      role: 'Agricultural Entrepreneur',
      location: 'Kenya',
      avatar: '/placeholder.svg',
      bio: 'Founded a cooperative that helps women farmers access markets and fair prices.',
      expertise: ['Agriculture', 'Cooperatives', 'Market Access'],
      availability: 'Weekly'
    },
    {
      name: 'Mei Lin',
      role: 'Microfinance Specialist',
      location: 'Vietnam',
      avatar: '/placeholder.svg',
      bio: 'Helped over 500 women secure microloans to start their own businesses.',
      expertise: ['Microfinance', 'Business Planning', 'Financial Literacy'],
      availability: 'Bi-weekly'
    },
    {
      name: 'Sofia Morales',
      role: 'Technology Educator',
      location: 'Colombia',
      avatar: '/placeholder.svg',
      bio: 'Trains rural women in digital skills and helps them build online businesses.',
      expertise: ['Digital Skills', 'Online Marketing', 'E-commerce'],
      availability: 'Monthly'
    },
    {
      name: 'Layla Ahmed',
      role: 'Community Organizer',
      location: 'Egypt',
      avatar: '/placeholder.svg',
      bio: 'Builds women-led community organizations focused on local development.',
      expertise: ['Community Building', 'Leadership', 'Advocacy'],
      availability: 'Weekly'
    }
  ];
  
  // Sample enterprises data
  const enterprises = [
    {
      name: 'Artisan Cooperative',
      type: 'Cooperative',
      description: 'Group-owned business selling traditional crafts and textiles',
      steps: [
        'Identify skilled artisans in your community',
        'Organize governance structure and membership',
        'Establish quality standards for products',
        'Develop branding and marketing strategy',
        'Connect with local and online marketplaces'
      ]
    },
    {
      name: 'Agricultural Processing',
      type: 'Small Business',
      description: 'Adding value to farm products through processing and preservation',
      steps: [
        'Research demand for processed agricultural products',
        'Learn processing techniques and food safety',
        'Start with small batch production',
        'Develop packaging and local distribution',
        'Expand to larger markets as capacity grows'
      ]
    },
    {
      name: 'Community Ecotourism',
      type: 'Social Enterprise',
      description: 'Providing authentic cultural experiences for responsible tourists',
      steps: [
        'Identify unique cultural and natural assets',
        'Develop tourism experiences with community input',
        'Train local guides and service providers',
        'Build partnerships with tourism operators',
        'Create online presence and booking system'
      ]
    },
    {
      name: 'Mobile Educational Services',
      type: 'Social Enterprise',
      description: 'Bringing education and training to underserved communities',
      steps: [
        'Identify educational needs and gaps in your region',
        'Develop curriculum and training materials',
        'Acquire necessary equipment and transportation',
        'Recruit and train instructors from the community',
        'Create a sustainable revenue model'
      ]
    }
  ];
  
  // Sample success stories
  const successStories = [
    {
      name: 'Maria Rivera',
      location: 'Guatemala',
      business: 'Textiles Cooperative',
      image: '/placeholder.svg',
      story: 'Maria organized 15 women weavers into a cooperative that now sells traditional textiles to international buyers. Their income has tripled in two years, enabling them to fund their children\'s education.',
      impact: '15 women employed, 45 children in school'
    },
    {
      name: 'Priya Sharma',
      location: 'India',
      business: 'Organic Spice Processing',
      image: '/placeholder.svg',
      story: 'Starting with just a small garden, Priya now leads a women\'s collective that processes and packages organic spices for export. They have achieved organic certification and supply to premium markets.',
      impact: '30 women employed, 50% increase in local farm income'
    },
    {
      name: 'Faith Mwangi',
      location: 'Kenya',
      business: 'Mobile Digital Training',
      image: '/placeholder.svg',
      story: 'Faith travels between villages providing digital literacy training to women entrepreneurs. Her mobile classroom has helped hundreds of women access online markets and information.',
      impact: '500+ women trained, 80% now use digital tools for business'
    },
    {
      name: 'Ana Mendoza',
      location: 'Peru',
      business: 'Quinoa Farming Collective',
      image: '/placeholder.svg',
      story: 'Ana transformed traditional quinoa farming by organizing women farmers, implementing sustainable practices, and creating direct market connections. They now export to premium markets worldwide.',
      impact: '25 women farmers, 200% increase in income'
    }
  ];

  return (
    <ModuleLayout
      title="EmpowerHer"
      description="Supporting rural women entrepreneurs and leaders through skills development, mentorship, and resources."
      color="secondary"
    >
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship Matching</TabsTrigger>
          <TabsTrigger value="enterprise">Enterprise Guidance</TabsTrigger>
          <TabsTrigger value="stories">Success Stories</TabsTrigger>
        </TabsList>

        {/* Skills Assessment Tab */}
        <TabsContent value="skills" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Entrepreneurial Skills Assessment</CardTitle>
              <CardDescription>
                Evaluate your skills and identify areas for development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-6">
                  {skillsCategories.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSkill === skill.name ? 'border-sky-blue bg-sky-blue/5' : 'hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSkill(skill.name)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm font-medium">{skill.score}%</span>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div className="md:col-span-2">
                  {selectedSkill ? (
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">{selectedSkill}</h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {skillsCategories.find(s => s.name === selectedSkill)?.description}
                      </p>
                      
                      <h4 className="font-medium mb-3">Development Resources:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <BookOpen className="h-5 w-5 text-sky-blue mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Online Courses</p>
                            <p className="text-sm text-muted-foreground">Self-paced learning modules focused on {selectedSkill.toLowerCase()} skills</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <UsersRound className="h-5 w-5 text-sky-blue mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Community Workshops</p>
                            <p className="text-sm text-muted-foreground">Hands-on training sessions with experienced mentors</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <LineChart className="h-5 w-5 text-sky-blue mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Progress Tracking</p>
                            <p className="text-sm text-muted-foreground">Regular assessments to measure your growth</p>
                          </div>
                        </li>
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t">
                        <button className="bg-sky-blue text-white px-4 py-2 rounded hover:bg-sky-blue/90 transition-colors">
                          Start Learning Path
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <Award className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Select a Skill Category</h3>
                      <p className="text-muted-foreground">
                        Click on a skill category to see details and development resources
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mentorship Matching Tab */}
        <TabsContent value="mentorship" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Matching</CardTitle>
              <CardDescription>
                Connect with experienced mentors who can guide your entrepreneurial journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentors.map((mentor) => (
                  <Card key={mentor.name} className="overflow-hidden">
                    <CardHeader className="flex flex-row items-start space-x-4 pb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{mentor.name}</CardTitle>
                        <CardDescription>{mentor.role} • {mentor.location}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="text-sm mb-4">{mentor.bio}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill) => (
                            <span key={skill} className="bg-sky-blue/10 text-sky-blue text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Availability:</span> {mentor.availability} sessions
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 px-6 py-3">
                      <button className="text-sky-blue text-sm font-medium flex items-center hover:underline">
                        Request Mentorship <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Enterprise Guidance Tab */}
        <TabsContent value="enterprise" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Microenterprise Guidance</CardTitle>
              <CardDescription>
                Step-by-step guides for starting and growing different types of rural enterprises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enterprises.map((enterprise) => (
                  <Card key={enterprise.name} className="overflow-hidden">
                    <CardHeader className="bg-sky-blue/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{enterprise.name}</CardTitle>
                          <CardDescription>
                            <span className="inline-block bg-white text-xs px-2 py-0.5 rounded mt-1">
                              {enterprise.type}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm mb-4">{enterprise.description}</p>
                      <h4 className="text-sm font-medium mb-2">Implementation Steps:</h4>
                      <ol className="space-y-1 ml-4 list-decimal text-sm text-muted-foreground">
                        {enterprise.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </CardContent>
                    <CardFooter className="bg-gray-50 px-6 py-3">
                      <button className="text-sky-blue text-sm font-medium flex items-center hover:underline">
                        View Detailed Guide <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Success Stories Tab */}
        <TabsContent value="stories" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Success Story Platform</CardTitle>
              <CardDescription>
                Inspiring stories of women entrepreneurs from rural communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {successStories.map((story) => (
                  <Card key={story.name} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{story.name}</CardTitle>
                      <CardDescription>
                        {story.business} • {story.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm mb-4">{story.story}</p>
                      <div className="bg-sky-blue/10 text-sky-blue text-sm p-3 rounded-md">
                        <span className="font-medium">Impact:</span> {story.impact}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <button className="text-sky-blue text-sm font-medium flex items-center hover:underline">
                        Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 border-t pt-8">
                <h3 className="text-lg font-medium mb-4">Share Your Success Story</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your story can inspire other women entrepreneurs. Tell us about your journey, challenges, and achievements.
                </p>
                <button className="bg-sky-blue text-white px-4 py-2 rounded hover:bg-sky-blue/90 transition-colors">
                  Submit Your Story
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  );
};

export default EmpowerHer;
