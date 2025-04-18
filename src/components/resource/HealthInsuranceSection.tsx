
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';

export const HealthInsuranceSection: React.FC = () => {
  return (
    <>
      <ResourceSection title="Introduction to Health Insurance">
        <ResourceParagraph>
          Why Do You Need Health Insurance?
          Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness?  Let's discuss insurance you don't have to die to use.  It allows you to pay your bills while recuperating, without stress.  It is also an option to consider for some Long-Term Care.
        </ResourceParagraph>
        <ResourceParagraph>
          Health Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.
        </ResourceParagraph>
      </ResourceSection>
    </>
  );
};
