import React from 'react';
import { Building } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-blue-500" />
            <h1 className="text-xl font-bold text-white">CareerBridge</h1>
          </div>
        </div>
      </div>
    </header>
  );
}