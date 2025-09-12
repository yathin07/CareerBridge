import { SkillMatch } from '../types';

export function matchSkills(userSkills: string[], requiredSkills: string[], preferredSkills: string[] = []): SkillMatch {
  const userSkillsLower = userSkills.map(skill => skill.toLowerCase());
  const requiredSkillsLower = requiredSkills.map(skill => skill.toLowerCase());
  const preferredSkillsLower = preferredSkills.map(skill => skill.toLowerCase());
  const allJobSkillsLower = [...requiredSkillsLower, ...preferredSkillsLower];
  
  const matching: string[] = [];
  const missing: string[] = [];
  const irrelevant: string[] = [];

  // Find matching skills
  userSkills.forEach(userSkill => {
    if (requiredSkillsLower.includes(userSkill.toLowerCase()) || 
        preferredSkillsLower.includes(userSkill.toLowerCase())) {
      matching.push(userSkill);
    } else {
      irrelevant.push(userSkill);
    }
  });

  // Find missing required skills
  requiredSkills.forEach(requiredSkill => {
    if (!userSkillsLower.includes(requiredSkill.toLowerCase())) {
      missing.push(requiredSkill);
    }
  });

  // Find missing preferred skills
  preferredSkills.forEach(preferredSkill => {
    if (!userSkillsLower.includes(preferredSkill.toLowerCase()) && 
        !missing.includes(preferredSkill)) {
      missing.push(preferredSkill);
    }
  });

  return { matching, missing, irrelevant };
}

export function calculateMatchPercentage(matching: string[], totalRequired: number): number {
  if (totalRequired === 0) return 0;
  return Math.round((matching.length / totalRequired) * 100);
}