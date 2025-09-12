export interface User {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experience: number;
  education: string;
  rating: number;
  projectsCompleted: number;
}

export interface JobRole {
  id: string;
  title: string;
  company: string;
  requiredSkills: string[];
  preferredSkills: string[];
  description: string;
  experience: string;
  salary: string;
}

export interface SkillMatch {
  matching: string[];
  missing: string[];
  irrelevant: string[];
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  url: string;
  rating: number;
  duration: string;
  price: string;
  skill: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fundingNeeded: number;
  category: string;
  stage: string;
  techStack: string[];
  targetAudience: string;
  owner: User;
  interestedInvestors: number;
}

export interface MarketplaceProject {
  id: string;
  title: string;
  description: string;
  price: number;
  techStack: string[];
  category: string;
  previewUrl: string;
  owner: User;
  rating: number;
  sales: number;
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
  };
  deadline: string;
  skills: string[];
  category: string;
  owner: User;
  applications: number;
  postedDate: string;
}

export interface Application {
  id: string;
  gigId: string;
  applicant: User;
  proposal: string;
  proposedBudget: number;
  deliveryTime: string;
}