import React from 'react';
import { BrainCircuit, TrendingUp, ShoppingBag, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      id: 'job-preparation',
      icon: BrainCircuit,
      title: 'Smart Job Preparation',
      description: 'Analyze your skills, compare with job requirements, and get personalized learning paths to land your dream job.',
      color: 'blue',
      buttonText: 'Explore'
    },
    {
      id: 'project-funding',
      icon: TrendingUp,
      title: 'Project Funding',
      description: 'Submit your project idea or startup pitch and get matched with potential investors based on domain and innovation level.',
      color: 'green',
      buttonText: 'Explore'
    },
    {
      id: 'marketplace',
      icon: ShoppingBag,
      title: 'Project Marketplace',
      description: 'Buy or sell completed projects and browse through curated projects from other developers to purchase.',
      color: 'orange',
      buttonText: 'Explore'
    },
    {
      id: 'task-collaboration',
      icon: Users,
      title: 'Task Collaboration',
      description: 'Post or find task-based gigs to collaborate on specific parts of projects that need specialized expertise.',
      color: 'green',
      buttonText: 'Explore'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Create Your Profile',
      description: 'Input your skills, interests, and career goals to get personalized recommendations.'
    },
    {
      number: '2', 
      title: 'Explore Modules',
      description: 'Choose the module that suits your current needs—whether it\'s job preparation, funding, or collaboration.'
    },
    {
      number: '3',
      title: 'Connect & Grow',
      description: 'Get matched with opportunities, investors, or collaborators that align with your goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Bridging Skills with Opportunities
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              CareerBridge helps freshers, innovators, and developers connect with the right 
              opportunities, resources, and collaborators.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our Platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our four unique modules designed to boost your career and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-${feature.color}-600 flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  onClick={() => onNavigate(feature.id)}
                  variant="primary"
                  className="w-full"
                >
                  {feature.buttonText} →
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              How CareerBridge Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 CareerBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}