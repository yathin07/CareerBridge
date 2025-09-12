import React, { useState } from 'react';
import { Users, Clock, Filter, RotateCcw, Calendar, MessageCircle } from 'lucide-react';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillTag from '../components/common/SkillTag';
import { categories } from '../data/skillsData';
import { gigs } from '../data/gigs';
import { formatCurrency } from '../utils/formatters';

export default function TaskCollaboration() {
  const [activeTab, setActiveTab] = useState<'find' | 'post'>('find');
  const [skillFilter, setSkillFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [timelineFilter, setTimelineFilter] = useState('');
  const [filteredGigs, setFilteredGigs] = useState(gigs);

  const [gigForm, setGigForm] = useState({
    title: '',
    description: '',
    minBudget: '',
    maxBudget: '',
    deadline: '',
    skills: '',
    category: ''
  });

  const applyFilters = () => {
    let filtered = gigs;

    if (skillFilter && skillFilter !== 'All Skills') {
      filtered = filtered.filter(gig =>
        gig.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()))
      );
    }

    if (budgetFilter) {
      const [min, max] = budgetFilter.split('-').map(Number);
      filtered = filtered.filter(gig => {
        if (max) {
          return gig.budget.min >= min && gig.budget.max <= max;
        } else {
          return gig.budget.min >= min;
        }
      });
    }

    if (timelineFilter && timelineFilter !== 'All Timelines') {
      filtered = filtered.filter(gig => gig.deadline === timelineFilter);
    }

    setFilteredGigs(filtered);
  };

  const resetFilters = () => {
    setSkillFilter('');
    setBudgetFilter('');
    setTimelineFilter('');
    setFilteredGigs(gigs);
  };

  const handleGigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gig posted successfully! You will receive applications from qualified freelancers.');
    setGigForm({
      title: '',
      description: '',
      minBudget: '',
      maxBudget: '',
      deadline: '',
      skills: '',
      category: ''
    });
  };

  const skillOptions = [
    { value: '', label: 'All Skills' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Machine Learning', label: 'Machine Learning' }
  ];

  const budgetOptions = [
    { value: '', label: 'All Budgets' },
    { value: '0-25000', label: 'Under ₹25,000' },
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000', label: 'Above ₹1,00,000' }
  ];

  const timelineOptions = [
    { value: '', label: 'All Timelines' },
    { value: 'Less than a week', label: 'Less than a week' },
    { value: '1-2 weeks', label: '1-2 weeks' },
    { value: '2-3 weeks', label: '2-3 weeks' },
    { value: '2-4 weeks', label: '2-4 weeks' },
    { value: '3-4 weeks', label: '3-4 weeks' }
  ];

  const categoryOptions = categories.map(category => ({ value: category, label: category }));

  React.useEffect(() => {
    applyFilters();
  }, [skillFilter, budgetFilter, timelineFilter]);

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">Task-Based Collaboration</h1>
          </div>
          <p className="text-gray-400">
            Post or find task-based gigs for project collaboration
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-800">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('find')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'find'
                    ? 'border-green-500 text-green-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                Find Gigs
              </button>
              <button
                onClick={() => setActiveTab('post')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'post'
                    ? 'border-green-500 text-green-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                Post a Gig
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'find' ? (
          <div>
            {/* Filters */}
            <Card className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Filter Gigs</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <Select
                  label="Skill"
                  value={skillFilter}
                  onChange={setSkillFilter}
                  options={skillOptions}
                />

                <Select
                  label="Budget"
                  value={budgetFilter}
                  onChange={setBudgetFilter}
                  options={budgetOptions}
                />

                <Select
                  label="Timeline"
                  value={timelineFilter}
                  onChange={setTimelineFilter}
                  options={timelineOptions}
                />

                <div className="flex space-x-2">
                  <Button onClick={applyFilters} variant="primary" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                  <Button onClick={resetFilters} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Gigs List */}
            <div className="space-y-6">
              {filteredGigs.map((gig) => (
                <Card key={gig.id} hover>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{gig.title}</h3>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted {gig.postedDate}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2 text-green-400">
                          <span className="text-lg">₹</span>
                          <span className="font-semibold">
                            {formatCurrency(gig.budget.min)} - {formatCurrency(gig.budget.max)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>{gig.deadline}</span>
                        </div>
                        <div className="text-blue-400">
                          {gig.applications} applications
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{gig.description}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {gig.skills.map((skill, index) => (
                            <SkillTag key={index} skill={skill} />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {gig.owner.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white text-sm">{gig.owner.name}</p>
                            <p className="text-xs text-gray-400">
                              ★ {gig.owner.rating} • {gig.owner.projectsCompleted} projects
                            </p>
                          </div>
                        </div>

                        <Button variant="primary" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Post Gig Form */
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6">Post a Gig</h2>
            
            <form onSubmit={handleGigSubmit} className="space-y-6">
              <Input
                label="Gig Title"
                placeholder="e.g., Need help with React Native animations"
                value={gigForm.title}
                onChange={(value) => setGigForm({ ...gigForm, title: value })}
                required
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                  label="Minimum Budget (₹)"
                  type="number"
                  placeholder="25000"
                  value={gigForm.minBudget}
                  onChange={(value) => setGigForm({ ...gigForm, minBudget: value })}
                  required
                />

                <Input
                  label="Maximum Budget (₹)"
                  type="number"
                  placeholder="50000"
                  value={gigForm.maxBudget}
                  onChange={(value) => setGigForm({ ...gigForm, maxBudget: value })}
                  required
                />

                <Select
                  label="Deadline"
                  value={gigForm.deadline}
                  onChange={(value) => setGigForm({ ...gigForm, deadline: value })}
                  options={timelineOptions.filter(option => option.value !== '')}
                  required
                />

                <Select
                  label="Category"
                  value={gigForm.category}
                  onChange={(value) => setGigForm({ ...gigForm, category: value })}
                  options={categoryOptions}
                  required
                />
              </div>

              <Input
                label="Required Skills (comma separated)"
                placeholder="React Native, Animation, Mobile Development"
                value={gigForm.skills}
                onChange={(value) => setGigForm({ ...gigForm, skills: value })}
                required
              />

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Gig Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Describe the task, requirements, and what you're looking for in detail"
                  value={gigForm.description}
                  onChange={(e) => setGigForm({ ...gigForm, description: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Post Gig
              </Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}