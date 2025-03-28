import React, { useState } from 'react';
import ModuleLayout from '@/components/ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, Play, Lightbulb, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const EduReach = () => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      setQuizStarted(false);
    }
  };

  const quizQuestions = [
    {
      question: "What is the process by which plants make their own food using sunlight?",
      options: ["Photosynthesis", "Respiration", "Germination", "Transpiration"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is NOT a renewable energy source?",
      options: ["Solar power", "Wind power", "Coal", "Hydropower"],
      correctAnswer: 2
    },
    {
      question: "What is the main function of soil in an ecosystem?",
      options: ["To provide shade", "To provide nutrients for plants", "To prevent flooding", "To reduce temperature"],
      correctAnswer: 1
    }
  ];

  const handleVideoProgress = () => {
    // Simulate video progress
    if (videoProgress < 100) {
      const newProgress = Math.min(videoProgress + 20, 100);
      setVideoProgress(newProgress);
    }
  };

  return (
    <ModuleLayout 
      title="EduReach" 
      description="Educational resources tailored for rural communities, with video lessons, interactive modules, and progress tracking."
      color="primary"
    >
      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="lessons" className="text-sm">Video Lessons</TabsTrigger>
          <TabsTrigger value="interactive" className="text-sm">Interactive Learning</TabsTrigger>
          <TabsTrigger value="quiz" className="text-sm">Quiz System</TabsTrigger>
          <TabsTrigger value="progress" className="text-sm">Progress Tracking</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lessons" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="text-earth-yellow h-5 w-5" />
                <span>Video Lesson Player</span>
              </CardTitle>
              <CardDescription>
                Watch educational videos on various topics relevant to rural development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="bg-black aspect-video rounded-md flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-earth-yellow/5 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-70" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-medium">Sustainable Farming Techniques</h3>
                    <p className="text-muted-foreground text-sm">Instructor: Dr. Maria Garcia • 45 minutes</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{videoProgress}%</span>
                    </div>
                    <Progress value={videoProgress} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handleVideoProgress}>Continue Watching</Button>
                    <Button variant="outline">Download for Offline</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Related Lessons</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Water Conservation Methods",
                        duration: "32 min",
                        progress: 100
                      },
                      {
                        title: "Organic Pest Control",
                        duration: "28 min",
                        progress: 75
                      },
                      {
                        title: "Crop Rotation Techniques",
                        duration: "41 min",
                        progress: 0
                      },
                      {
                        title: "Soil Health Management",
                        duration: "39 min",
                        progress: 0
                      }
                    ].map((lesson, index) => (
                      <div 
                        key={index} 
                        className="p-3 rounded-md border bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium text-sm">{lesson.title}</h4>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                        <Progress value={lesson.progress} className="h-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interactive" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-earth-yellow h-5 w-5" />
                <span>Interactive Learning Modules</span>
              </CardTitle>
              <CardDescription>
                Engage with interactive educational content on various subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Basic Numeracy Skills",
                    description: "Learn essential math skills for daily farm management and business",
                    tags: ["Math", "Business"],
                    level: "Beginner"
                  },
                  {
                    title: "Sustainable Agriculture",
                    description: "Interactive guide to sustainable farming practices",
                    tags: ["Agriculture", "Environment"],
                    level: "Intermediate"
                  },
                  {
                    title: "Digital Literacy",
                    description: "Essential computer and internet skills for rural communities",
                    tags: ["Technology", "Communication"],
                    level: "Beginner"
                  },
                  {
                    title: "Health & Nutrition",
                    description: "Interactive guide to family health and balanced nutrition",
                    tags: ["Health", "Nutrition"],
                    level: "All Levels"
                  }
                ].map((module, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-3 bg-earth-yellow" />
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-earth-yellow transition-colors">{module.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {module.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <span className="text-xs bg-muted px-2 py-1 rounded">{module.level}</span>
                      </div>
                      <Button className="w-full mt-4">Start Learning</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quiz" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpenIcon className="text-earth-yellow h-5 w-5" />
                <span>Quiz System with Instant Feedback</span>
              </CardTitle>
              <CardDescription>
                Test your knowledge and receive immediate feedback on your answers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {quizStarted ? (
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span>Score: {score}/{quizQuestions.length}</span>
                    </div>
                    <Progress value={(currentQuestion / quizQuestions.length) * 100} className="h-2" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-4">{quizQuestions[currentQuestion].question}</h3>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left p-4 rounded-md border hover:bg-muted/50 transition-colors"
                          onClick={() => handleAnswer(index === quizQuestions[currentQuestion].correctAnswer)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-md mx-auto py-8">
                  {score > 0 ? (
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-earth-yellow/20 text-earth-yellow mb-4">
                        <h3 className="text-2xl font-bold">{score}/{quizQuestions.length}</h3>
                      </div>
                      <h3 className="text-xl font-medium mb-2">Quiz Completed!</h3>
                      <p className="text-muted-foreground mb-6">
                        You answered {score} out of {quizQuestions.length} questions correctly.
                      </p>
                      <Button onClick={startQuiz}>Retake Quiz</Button>
                    </div>
                  ) : (
                    <div>
                      <BookOpenIcon className="h-16 w-16 text-earth-yellow/70 mx-auto mb-4" />
                      <h3 className="text-xl font-medium mb-2">Environmental Science Quiz</h3>
                      <p className="text-muted-foreground mb-6">
                        Test your knowledge about environmental science with this short quiz. 
                        You'll receive instant feedback on your answers.
                      </p>
                      <Button onClick={startQuiz}>Start Quiz</Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="progress" className="bg-white rounded-lg p-6 shadow-sm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="text-earth-yellow h-5 w-5" />
                <span>Progress Tracking Dashboard</span>
              </CardTitle>
              <CardDescription>
                Monitor your learning journey and track your educational progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Completed Courses", value: "7" },
                  { label: "Courses in Progress", value: "3" },
                  { label: "Quiz Score Average", value: "82%" },
                  { label: "Learning Hours", value: "48h" },
                ].map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h3 className="font-medium mb-4">Course Progress</h3>
              <div className="space-y-4">
                {[
                  { course: "Basic Agricultural Practices", progress: 100, completed: "May 15, 2023" },
                  { course: "Water Management", progress: 100, completed: "Jun 22, 2023" },
                  { course: "Sustainable Farming Techniques", progress: 75, completed: null },
                  { course: "Digital Marketing for Farm Products", progress: 60, completed: null },
                  { course: "Financial Literacy for Farmers", progress: 40, completed: null },
                ].map((course, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-md">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{course.course}</h4>
                      <span className="text-sm">
                        {course.completed ? `Completed: ${course.completed}` : `${course.progress}% complete`}
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-medium mb-4">Recommended Next Steps</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-earth-yellow"></div>
                      <span>Complete "Sustainable Farming Techniques" module</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-earth-yellow"></div>
                      <span>Take the "Water Conservation" quiz</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-earth-yellow"></div>
                      <span>Begin "Crop Rotation Techniques" video lesson</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Achievements</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Fast Learner", description: "Completed 5 courses" },
                      { name: "Quiz Master", description: "Scored 100% on 3 quizzes" },
                      { name: "Dedicated", description: "30+ learning hours" },
                    ].map((achievement, index) => (
                      <div key={index} className="bg-earth-yellow/10 border border-earth-yellow/20 p-3 rounded-md text-center">
                        <div className="w-10 h-10 rounded-full bg-earth-yellow/20 flex items-center justify-center mx-auto mb-2">
                          <BookOpenIcon className="h-5 w-5 text-earth-yellow" />
                        </div>
                        <h4 className="text-xs font-medium">{achievement.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    ))}
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

export default EduReach;
