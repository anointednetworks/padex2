
import React from 'react';

interface ResourceListProps {
  items: string[] | React.ReactNode[];
  nested?: boolean;
}

export const ResourceList: React.FC<ResourceListProps> = ({ items, nested = false }) => {
  return (
    <ul className={`list-disc ${nested ? 'pl-8 mt-1' : 'pl-8 mb-4 text-gray-700'}`}>
      {items.map((item, index) => (
        <li key={index} className={nested ? '' : 'mb-1'}>
          {typeof item === 'string' ? <span>{item}</span> : item}
        </li>
      ))}
    </ul>
  );
};
