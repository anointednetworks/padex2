
import React from 'react';

interface ResourceSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default ResourceSection;
