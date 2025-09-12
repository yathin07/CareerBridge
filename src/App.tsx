import React, { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import JobPreparation from './pages/JobPreparation';
import ProjectFunding from './pages/ProjectFunding';
import Marketplace from './pages/Marketplace';
import TaskCollaboration from './pages/TaskCollaboration';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'job-preparation':
        return <JobPreparation />;
      case 'project-funding':
        return <ProjectFunding />;
      case 'marketplace':
        return <Marketplace />;
      case 'task-collaboration':
        return <TaskCollaboration />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;