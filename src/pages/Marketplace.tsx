import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, RotateCcw, Eye, MessageCircle, Star } from 'lucide-react';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillTag from '../components/common/SkillTag';
import { categories } from '../data/skillsData';
import { marketplaceProjects } from '../data/projects';
import { formatCurrency } from '../utils/formatters';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<'browse' | 'sell'>('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(marketplaceProjects);

  const [sellForm, setSellForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    techStack: '',
    previewUrl: ''
  });

  const applyFilters = () => {
    let filtered = marketplaceProjects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTech && selectedTech !== 'All Tech Stacks') {
      filtered = filtered.filter(project =>
        project.techStack.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()))
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(project => {
        if (max) {
          return project.price >= min && project.price <= max;
        } else {
          return project.price >= min;
        }
      });
    }

    setFilteredProjects(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedTech('');
    setPriceRange('');
    setFilteredProjects(marketplaceProjects);
  };

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Project submitted for review! It will be live on the marketplace soon.');
    setSellForm({
      title: '',
      description: '',
      price: '',
      category: '',
      techStack: '',
      previewUrl: ''
    });
  };

  const techOptions = [
    { value: '', label: 'All Tech Stacks' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Flutter', label: 'Flutter' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'MongoDB', label: 'MongoDB' }
  ];

  const priceRangeOptions = [
    { value: '', label: 'All Prices' },
    { value: '0-50000', label: 'Under ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-200000', label: '₹1,00,000 - ₹2,00,000' },
    { value: '200000', label: 'Above ₹2,00,000' }
  ];

  const categoryOptions = categories.map(category => ({ value: category, label: category }));

  React.useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedTech, priceRange]);

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-white">Project Selling Marketplace</h1>
          </div>
          <p className="text-gray-400">
            Buy or sell completed projects and products
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
                onClick={() => setActiveTab('sell')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'sell'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                Sell Your Project
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'browse' ? (
          <div>
            {/* Filters */}
            <Card className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                <Select
                  value={selectedTech}
                  onChange={setSelectedTech}
                  options={techOptions}
                />

                <Select
                  value={priceRange}
                  onChange={setPriceRange}
                  options={priceRangeOptions}
                />

                <div className="flex space-x-2">
                  <Button onClick={applyFilters} variant="primary" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button onClick={resetFilters} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Projects Grid */}
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} hover>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <span className="text-2xl font-bold text-orange-400">{formatCurrency(project.price)}</span>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <span className="text-sm text-gray-500 block mb-2">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <SkillTag key={index} skill={tech} />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                              {project.owner.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-white">{project.owner.name}</p>
                              <div className="flex items-center space-x-2 text-xs">
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                  <span>{project.owner.rating}</span>
                                </div>
                                <span>•</span>
                                <span>{project.owner.projectsCompleted} projects</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-yellow-400">★ {project.rating}</p>
                            <p className="text-xs">{project.sales} sales</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Demo
                          </Button>
                          <Button variant="primary" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Seller
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Sell Project Form */
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6">Sell Your Project</h2>
            
            <form onSubmit={handleSellSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                  label="Project Title"
                  placeholder="e.g., TaskFlow - Project Management Tool"
                  value={sellForm.title}
                  onChange={(value) => setSellForm({ ...sellForm, title: value })}
                  required
                />

                <Select
                  label="Category"
                  value={sellForm.category}
                  onChange={(value) => setSellForm({ ...sellForm, category: value })}
                  options={categoryOptions}
                  required
                />

                <Input
                  label="Price (₹)"
                  type="number"
                  placeholder="89999"
                  value={sellForm.price}
                  onChange={(value) => setSellForm({ ...sellForm, price: value })}
                  required
                />

                <Input
                  label="Tech Stack (comma separated)"
                  placeholder="React, Node.js, MongoDB"
                  value={sellForm.techStack}
                  onChange={(value) => setSellForm({ ...sellForm, techStack: value })}
                  required
                />

                <Input
                  label="Live Preview URL"
                  type="url"
                  placeholder="https://your-project-demo.com"
                  value={sellForm.previewUrl}
                  onChange={(value) => setSellForm({ ...sellForm, previewUrl: value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Describe your project, its features, and what makes it valuable"
                  value={sellForm.description}
                  onChange={(e) => setSellForm({ ...sellForm, description: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                List Project for Sale
              </Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}