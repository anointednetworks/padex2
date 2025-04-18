
import React, { useState } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/SEOHead";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const glossaryItems = [
    { term: 'Digital Experience', definition: 'The overall experience a user has when interacting with digital products or services, encompassing usability, accessibility, and design elements.' },
    { term: 'User Interface (UI)', definition: 'The visual elements that users interact with in a digital product, including buttons, menus, and layout.' },
    { term: 'User Experience (UX)', definition: 'The overall experience a user has when interacting with a product, focusing on ease of use, accessibility, and satisfaction.' },
    { term: 'Responsive Design', definition: 'An approach to web design that makes web pages render well on various devices and window or screen sizes.' },
  ];
  
  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Glossary | Illuminated Links" 
        description="Browse our glossary of important terms related to insurance, retirement planning, and financial services."
      />
      <NavBarDemo />
      
      <div className="flex-grow px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Glossary</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Find definitions and explanations for key terms used throughout our services.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
            <div className="mb-6">
              <Input 
                type="text" 
                placeholder="Search glossary terms..." 
                className="w-full p-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="space-y-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div key={item.term} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800">{item.term}</h3>
                    <p className="text-gray-600 mt-1">{item.definition}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No matching terms found. Try a different search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Glossary;
