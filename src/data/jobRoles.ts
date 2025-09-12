import { JobRole } from '../types';

export const jobRoles: JobRole[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Google',
    requiredSkills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Git'],
    preferredSkills: ['Next.js', 'Tailwind CSS', 'Redux', 'Testing', 'Webpack'],
    description: 'Build user-facing features and ensure great user experience',
    experience: '2-4 years',
    salary: '₹12-20 LPA'
  },
  {
    id: '2', 
    title: 'Backend Developer',
    company: 'Microsoft',
    requiredSkills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'Git'],
    preferredSkills: ['TypeScript', 'Redis', 'Docker', 'AWS', 'GraphQL'],
    description: 'Design and implement server-side logic and database systems',
    experience: '3-5 years',
    salary: '₹15-25 LPA'
  },
  {
    id: '3',
    title: 'Full Stack Developer', 
    company: 'Amazon',
    requiredSkills: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js', 'HTML', 'CSS'],
    preferredSkills: ['TypeScript', 'AWS', 'Docker', 'Redis', 'Next.js', 'PostgreSQL'],
    description: 'Work on both frontend and backend development',
    experience: '3-6 years',
    salary: '₹18-30 LPA'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Netflix',
    requiredSkills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Statistics'],
    preferredSkills: ['TensorFlow', 'PyTorch', 'R', 'Tableau', 'Apache Spark', 'AWS'],
    description: 'Analyze data to drive business decisions and build ML models',
    experience: '2-5 years',
    salary: '₹20-35 LPA'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Uber',
    requiredSkills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Git', 'CI/CD'],
    preferredSkills: ['Terraform', 'Ansible', 'Jenkins', 'Python', 'Monitoring', 'Nginx'],
    description: 'Manage infrastructure, deployment pipelines, and system reliability',
    experience: '3-6 years', 
    salary: '₹16-28 LPA'
  },
  {
    id: '6',
    title: 'Mobile Developer',
    company: 'Meta',
    requiredSkills: ['React Native', 'JavaScript', 'TypeScript', 'Mobile UI/UX', 'Git'],
    preferredSkills: ['Flutter', 'Swift', 'Kotlin', 'Redux', 'Testing', 'Firebase'],
    description: 'Build cross-platform mobile applications',
    experience: '2-4 years',
    salary: '₹14-22 LPA'
  },
  {
    id: '7',
    title: 'UI/UX Designer',
    company: 'Airbnb',
    requiredSkills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'User Research'],
    preferredSkills: ['Adobe XD', 'Sketch', 'Design Systems', 'HTML', 'CSS', 'Usability Testing'],
    description: 'Design intuitive user interfaces and experiences',
    experience: '2-5 years',
    salary: '₹10-18 LPA'
  },
  {
    id: '8',
    title: 'Machine Learning Engineer',
    company: 'OpenAI',
    requiredSkills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Statistics', 'Mathematics'],
    preferredSkills: ['Keras', 'MLOps', 'Docker', 'AWS', 'Deep Learning', 'Computer Vision'],
    description: 'Build and deploy machine learning models at scale',
    experience: '3-6 years',
    salary: '₹25-45 LPA'
  }
];