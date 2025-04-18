
import React, { useRef } from 'react';
import { AnnuitiesSection } from './AnnuitiesSection';
import { HealthInsuranceSection } from './HealthInsuranceSection';
import { MedicareSection } from './MedicareSection';
import { LifeInsuranceSection } from './LifeInsuranceSection';
import { LongTermCareSection } from './LongTermCareSection';
import { RetirementSection } from './RetirementSection';
import { TaxSection } from './TaxSection';
import { ContactSection } from './ContactSection';

export const ResourcesTab: React.FC = () => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={resourcesContainerRef} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8 pt-12">
      <AnnuitiesSection />
      <HealthInsuranceSection />
      <MedicareSection />
      <LifeInsuranceSection />
      <LongTermCareSection />
      <RetirementSection />
      <TaxSection />
      <ContactSection />
    </div>
  );
};
