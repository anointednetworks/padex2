
import React, { useState } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Resume = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const glossaryItems = [
    { term: 'ACA (Affordable Care Act)', definition: 'A comprehensive healthcare reform law enacted in March 2010, also known as Obamacare. It expanded Medicaid eligibility, created health insurance exchanges, and mandated that individuals have health insurance.' },
    { term: 'COBRA', definition: 'The Consolidated Omnibus Budget Reconciliation Act allows employees to continue their health insurance coverage after leaving employment.' },
    { term: 'Deductible', definition: 'The amount you pay for covered healthcare services before your insurance plan starts to pay.' },
    { term: 'EOB (Explanation of Benefits)', definition: 'A statement from your health insurance company explaining what medical treatments and/or services were paid for on your behalf.' },
    { term: 'FSA (Flexible Spending Account)', definition: 'A special account you put money into that you use to pay for certain out-of-pocket health care costs.' },
    { term: 'HIPAA (Health Insurance Portability and Accountability Act)', definition: 'A federal law that protects sensitive patient health information from being disclosed without the patient\'s consent or knowledge.' },
    { term: 'HMO (Health Maintenance Organization)', definition: 'A type of health insurance plan that usually limits coverage to care from doctors who work for or contract with the HMO.' },
    { term: 'HSA (Health Savings Account)', definition: 'A tax-advantaged savings account designed to help people save for medical expenses.' },
    { term: 'Open Enrollment', definition: 'A period during which eligible individuals may enroll in a group health plan.' },
    { term: 'PPO (Preferred Provider Organization)', definition: 'A type of health plan that contracts with medical providers to create a network of participating providers.' }
  ];
  
  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex-grow py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">Benefits Glossary</h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive list of terms and definitions related to employee benefits and insurance.
          </p>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search terms or definitions..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 text-gray-400"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </Button>
            )}
          </div>
          
          <div className="space-y-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.term}</h3>
                  <p className="text-gray-600">{item.definition}</p>
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
      
      <NavBarDemo />
      <StackedCircularFooter />
    </div>
  );
};

export default Resume;
