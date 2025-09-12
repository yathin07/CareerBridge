import { Project, MarketplaceProject } from '../types';

export const fundingProjects: Project[] = [
  {
    id: '1',
    title: 'HealthTracker - AI-powered health monitoring',
    description: 'A comprehensive health monitoring app that uses AI to analyze user health data, predict potential issues, and provide personalized recommendations. Features include symptom tracking, medication reminders, doctor consultations, and integration with wearable devices.',
    fundingNeeded: 2500000,
    category: 'Healthcare',
    stage: 'MVP Development', 
    techStack: ['React Native', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
    targetAudience: 'Healthcare professionals, patients with chronic conditions',
    owner: {
      id: '1',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      skills: ['React Native', 'Node.js', 'Healthcare'],
      experience: 4,
      education: 'B.Tech in Computer Science',
      rating: 4.8,
      projectsCompleted: 12
    },
    interestedInvestors: 23
  },
  {
    id: '2',
    title: 'EduConnect - Online learning platform',
    description: 'A modern online learning platform with interactive courses, live sessions, AI-powered personalized learning paths, and peer-to-peer collaboration. Focused on providing quality education in rural areas with offline capabilities.',
    fundingNeeded: 1800000,
    category: 'Education',
    stage: 'Beta Testing',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Firebase', 'PWA'],
    targetAudience: 'Students, educators, rural communities',
    owner: {
      id: '2',
      name: 'Arjun Patel',
      email: 'arjun@example.com', 
      skills: ['React', 'Node.js', 'Education Technology'],
      experience: 6,
      education: 'M.Tech in Software Engineering',
      rating: 4.9,
      projectsCompleted: 18
    },
    interestedInvestors: 31
  },
  {
    id: '3',
    title: 'GreenLogistics - Sustainable delivery network',
    description: 'An eco-friendly logistics platform that optimizes delivery routes using AI to minimize carbon footprint. Features include electric vehicle integration, carbon tracking, and partnerships with local businesses for last-mile delivery.',
    fundingNeeded: 3200000,
    category: 'Logistics',
    stage: 'Market Ready',
    techStack: ['Flutter', 'Django', 'PostgreSQL', 'Google Maps API', 'IoT', 'Machine Learning'],
    targetAudience: 'E-commerce businesses, environmentally conscious consumers',
    owner: {
      id: '3', 
      name: 'Kavya Reddy',
      email: 'kavya@example.com',
      skills: ['Flutter', 'Django', 'Logistics', 'Sustainability'],
      experience: 5,
      education: 'MBA + B.Tech',
      rating: 4.7,
      projectsCompleted: 15
    },
    interestedInvestors: 45
  }
];

export const marketplaceProjects: MarketplaceProject[] = [
  {
    id: '1',
    title: 'TaskFlow - Project Management Tool',
    description: 'A fully functional project management tool with task assignment, progress tracking, team collaboration features, Gantt charts, time tracking, and reporting. Built with modern technologies and ready for deployment.',
    price: 89999,
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    category: 'Team collaboration and task management',
    previewUrl: 'https://taskflow-demo.vercel.app',
    owner: {
      id: '4',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      skills: ['React', 'Node.js', 'Project Management'],
      experience: 7,
      education: 'B.S. in Computer Science',
      rating: 4.9,
      projectsCompleted: 8
    },
    rating: 4.9,
    sales: 127
  },
  {
    id: '2',
    title: 'HealthTracker - Fitness App',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics with beautiful visualizations. Includes workout plans, meal tracking, progress analytics, and social features.',
    price: 64999,
    techStack: ['Flutter', 'Firebase', 'Chart.js', 'SQLite'],
    category: 'Health and fitness tracking',
    previewUrl: 'https://healthtracker-demo.netlify.app',
    owner: {
      id: '5',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      skills: ['Flutter', 'Firebase', 'Mobile Development'],
      experience: 4,
      education: 'B.Tech in Information Technology',
      rating: 4.6,
      projectsCompleted: 5
    },
    rating: 4.8,
    sales: 89
  },
  {
    id: '3',
    title: 'E-Commerce Template with Admin Dashboard',
    description: 'A complete e-commerce solution with product listings, shopping cart, checkout, payment integration, order management, and a comprehensive admin dashboard for inventory management.',
    price: 134999,
    techStack: ['Vue.js', 'Express', 'MongoDB', 'Stripe API', 'Admin Panel'],
    category: 'Online store with inventory management',
    previewUrl: 'https://ecommerce-template-demo.com',
    owner: {
      id: '6',
      name: 'Michael Chen',
      email: 'michael@example.com',
      skills: ['Vue.js', 'Express', 'E-commerce'],
      experience: 6,
      education: 'M.S. in Software Engineering',
      rating: 4.9,
      projectsCompleted: 12
    },
    rating: 4.7,
    sales: 203
  },
  {
    id: '4',
    title: 'CRM System for Small Business',
    description: 'A customer relationship management system designed for small businesses. Features include contact management, sales pipeline, email integration, reporting, and customer communication history.',
    price: 74999,
    techStack: ['Angular', 'Spring Boot', 'MySQL', 'Email API'],
    category: 'Customer relationship management',
    previewUrl: 'https://crm-demo.herokuapp.com',
    owner: {
      id: '7',
      name: 'Lisa Thompson',
      email: 'lisa@example.com',
      skills: ['Angular', 'Spring Boot', 'CRM'],
      experience: 5,
      education: 'B.S. in Business Information Systems',
      rating: 4.7,
      projectsCompleted: 9
    },
    rating: 4.6,
    sales: 67
  }
];