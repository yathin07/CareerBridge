import React, { useState } from 'react';
import { TrendingUp, Eye, MessageCircle, Users, Calendar } from 'lucide-react';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillTag from '../components/common/SkillTag';
import { industries, projectStages } from '../data/skillsData';
import { fundingProjects } from '../data/projects';
import { formatCurrency } from '../utils/formatters';

export default function ProjectFunding() {
  const [activeTab, setActiveTab] = useState<'submit' | 'browse'>('browse');
  const [formData, setFormData] = useState({
    title: '',
    targetAudience: '',
    fundingNeeded: '',
    description: '',
    domain: '',
    stage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Project submitted successfully! Investors will review your proposal.');
    setFormData({
      title: '',
      targetAudience: '',
      fundingNeeded: '',
      description: '',
      domain: '',
      stage: ''
    });
  };

  const industryOptions = industries.map(industry => ({ value: industry, label: industry }));
  const stageOptions = projectStages.map(stage => ({ value: stage, label: stage }));

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">Project Funding & Investor Matchmaking</h1>
          </div>
          <p className="text-gray-400">
            Connect your innovative ideas with potential investors
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-800">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('browse')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'browse'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                Browse Projects
              </button>
              <button
                onClick={() => setActiveTab('submit')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'submit'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                Submit Your Project
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'submit' ? (
          /* Submit Project Form */
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6">Submit Your Project</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                  label="Project Title"
                  placeholder="e.g., HealthTrack: AI-powered health monitoring"
                  value={formData.title}
                  onChange={(value) => setFormData({ ...formData, title: value })}
                  required
                />

                <Select
                  label="Domain/Industry"
                  value={formData.domain}
                  onChange={(value) => setFormData({ ...formData, domain: value })}
                  options={industryOptions}
                  required
                />

                <Input
                  label="Target Audience"
                  placeholder="e.g., Healthcare professionals, patients with chronic conditions"
                  value={formData.targetAudience}
                  onChange={(value) => setFormData({ ...formData, targetAudience: value })}
                  required
                />

                <Select
                  label="Project Stage"
                  value={formData.stage}
                  onChange={(value) => setFormData({ ...formData, stage: value })}
                  options={stageOptions}
                  required
                />

                <Input
                  label="Funding Needed"
                  placeholder="e.g., 25,00,000"
                  value={formData.fundingNeeded}
                  onChange={(value) => setFormData({ ...formData, fundingNeeded: value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Describe your project, its unique value proposition, and how it solves a problem"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Find Investors
              </Button>
            </form>
          </Card>
        ) : (
          /* Browse Projects */
          <div className="space-y-6">
            {fundingProjects.map((project) => (
              <Card key={project.id} hover>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Funding Needed</span>
                        <p className="text-green-400 font-semibold">{formatCurrency(project.fundingNeeded)}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Category</span>
                        <p className="text-white">{project.category}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Stage</span>
                        <p className="text-white">{project.stage}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Interested Investors</span>
                        <p className="text-blue-400 font-semibold">{project.interestedInvestors}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm text-gray-500 block mb-2">Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <SkillTag key={index} skill={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {project.owner.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white">{project.owner.name}</p>
                          <p className="text-xs">★ {project.owner.rating} • {project.owner.projectsCompleted} projects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Button variant="primary" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="secondary" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Express Interest
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}