import React from 'react';

interface SkillTagProps {
  skill: string;
  type?: 'matching' | 'missing' | 'irrelevant' | 'default';
  className?: string;
}

export default function SkillTag({ skill, type = 'default', className = '' }: SkillTagProps) {
  const typeClasses = {
    matching: 'bg-green-900 text-green-300 border-green-700',
    missing: 'bg-red-900 text-red-300 border-red-700',
    irrelevant: 'bg-yellow-900 text-yellow-300 border-yellow-700',
    default: 'bg-gray-800 text-gray-300 border-gray-700'
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium border rounded-full ${typeClasses[type]} ${className}`}>
      {skill}
    </span>
  );
}