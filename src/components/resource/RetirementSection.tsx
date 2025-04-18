
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';

export const RetirementSection: React.FC = () => {
  return (
    <ResourceSection title="Retirement">
      <ResourceParagraph>
        Where will your retirement money come from? If you're like most people, qualified-retirement plans, Social Security, personal savings and investments are expected to play a role. Once you have estimated the amount of money you may need for retirement, a sound approach involves taking a close look at your potential retirement-income sources.
      </ResourceParagraph>
      <ResourceParagraph>
        When you retire, how will you treat your next chapter?
      </ResourceParagraph>
    </ResourceSection>
  );
};
