
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { ResourceList } from './ResourceList';

export const LongTermCareSection: React.FC = () => {
  return (
    <ResourceSection title="Intro to Long Term Care">
      <ResourceParagraph>
        What is Long Term Care?
      </ResourceParagraph>

      <ResourceParagraph>
        Long Term Care is the assistance individuals need when they are unable to care for themselves and need help with Activities of Daily Living (ADLs):
      </ResourceParagraph>
      <ResourceList items={[
        'bathing',
        'dressing',
        'transferring',
        'toileting',
        'continence (control of bodily functions)',
        'eating'
      ]} />
      
      <ResourceParagraph>
        - or they have severe cognitive impairment such as Alzheimer's disease. The need for long term care can result from an accident, chronic illness or short-term disability, or from advance age. Long term care can include a broad range of services, provided in any setting outside a hospital. It might be help with simple daily tasks like bathing or dressing. It might include skilled care in your own home, an assisted living facility, some other community resources, or a nursing facility.
      </ResourceParagraph>
    </ResourceSection>
  );
};
