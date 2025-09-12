import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}