import { Gig } from '../types';

export const gigs: Gig[] = [
  {
    id: '1',
    title: 'Need help with React Native animations',
    description: 'I have a React Native app and need help implementing complex animations for user onboarding. Looking for someone with experience in React Native Reanimated and Lottie animations. The project involves creating smooth transitions and micro-interactions.',
    budget: { min: 22500, max: 37500 },
    deadline: '1-2 weeks',
    skills: ['React Native', 'Mobile Development', 'Animation'],
    category: 'Frontend Development',
    owner: {
      id: '1',
      name: 'James Wilson',
      email: 'james@example.com',
      skills: ['React Native', 'Mobile Development'],
      experience: 3,
      education: 'B.Tech Computer Science',
      rating: 4.9,
      projectsCompleted: 15
    },
    applications: 5,
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Help integrating payment gateway in Node.js app',
    description: 'I need help integrating Razorpay payment gateway in my Node.js/Express application. The database is MongoDB and I need someone familiar with this stack. Should include webhook handling and proper error management.',
    budget: { min: 7500, max: 22500 },
    deadline: 'Less than a week',
    skills: ['Node.js', 'Express', 'MongoDB', 'Payment Integration'],
    category: 'Backend Development',
    owner: {
      id: '2',
      name: 'Laura Thompson',
      email: 'laura@example.com',
      skills: ['Node.js', 'MongoDB', 'Backend Development'],
      experience: 2,
      education: 'B.S. Computer Science',
      rating: 4.7,
      projectsCompleted: 8
    },
    applications: 8,
    postedDate: '5 days ago'
  },
  {
    id: '3',
    title: 'Fix deployment issues with Kubernetes cluster',
    description: 'Having issues with my Kubernetes deployment on AWS EKS. The pods are not starting correctly and there are networking issues. Need someone experienced with K8s troubleshooting and AWS networking.',
    budget: { min: 22500, max: 37500 },
    deadline: 'Less than a week',
    skills: ['Kubernetes', 'AWS', 'DevOps', 'Networking'],
    category: 'DevOps',
    owner: {
      id: '3',
      name: 'David Kumar',
      email: 'david@example.com',
      skills: ['DevOps', 'AWS', 'Kubernetes'],
      experience: 4,
      education: 'M.Tech Information Systems',
      rating: 4.8,
      projectsCompleted: 22
    },
    applications: 3,
    postedDate: '1 day ago'
  },
  {
    id: '4',
    title: 'Build responsive dashboard with React and D3.js',
    description: 'Need to create a responsive analytics dashboard using React and D3.js. The dashboard should display various charts and graphs with real-time data updates. Experience with data visualization libraries is essential.',
    budget: { min: 37500, max: 75000 },
    deadline: '2-3 weeks',
    skills: ['React', 'D3.js', 'Data Visualization', 'Dashboard'],
    category: 'Frontend Development',
    owner: {
      id: '4',
      name: 'Priya Singh',
      email: 'priya@example.com',
      skills: ['React', 'Data Analysis', 'Dashboard'],
      experience: 5,
      education: 'M.S. Data Science',
      rating: 4.9,
      projectsCompleted: 18
    },
    applications: 12,
    postedDate: '3 days ago'
  },
  {
    id: '5',
    title: 'Machine Learning model for price prediction',
    description: 'Looking for help building a machine learning model to predict real estate prices based on various features. Need someone experienced with Python, scikit-learn, and data preprocessing. Dataset will be provided.',
    budget: { min: 45000, max: 90000 },
    deadline: '2-4 weeks',
    skills: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Analysis'],
    category: 'Data Science',
    owner: {
      id: '5',
      name: 'Rahul Gupta',
      email: 'rahul@example.com',
      skills: ['Python', 'Data Science', 'Real Estate'],
      experience: 6,
      education: 'MBA + B.Tech',
      rating: 4.6,
      projectsCompleted: 11
    },
    applications: 7,
    postedDate: '1 week ago'
  },
  {
    id: '6',
    title: 'UI/UX redesign for mobile banking app',
    description: 'Need to redesign the user interface for our mobile banking application. Looking for modern, clean design with focus on usability and accessibility. Should include wireframes, prototypes, and design system.',
    budget: { min: 52500, max: 112500 },
    deadline: '3-4 weeks',
    skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
    category: 'UI/UX Design',
    owner: {
      id: '6',
      name: 'Anita Mehta',
      email: 'anita@example.com',
      skills: ['Product Management', 'Banking', 'Mobile Apps'],
      experience: 8,
      education: 'MBA Finance',
      rating: 4.8,
      projectsCompleted: 25
    },
    applications: 15,
    postedDate: '4 days ago'
  }
];