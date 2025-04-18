
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';

export const LifeInsuranceSection: React.FC = () => {
  return (
    <>
      <ResourceSection title="Life Insurance">
        <ResourceParagraph>
          Why do I need Life Insurance? Life insurance is an essential part of financial planning. One reason most people buy life insurance is to replace income that would be lost with the death of a wage earner.
        </ResourceParagraph>

        <ResourceParagraph>
          An important feature of life insurance is that no income tax is payable on proceeds paid to beneficiaries. Do you want to see how the facts find the story?
        </ResourceParagraph>

        <ResourceParagraph>
          How much Insurance do I need? Before buying life insurance, you should assemble personal financial information and review your family's needs. There are a few factors to consider when determining how much protection you should have.
        </ResourceParagraph>

        <ResourceParagraph>
          A rule of thumb used is, buy life insurance that is equal to five to seven times annual gross income. I can assist you with completing a Needs Analysis.
        </ResourceParagraph>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-4">Choosing a Plan</h4>
        <ResourceParagraph>
          Choosing life insurance is an important decision but could be complicated. It is important that you understand your needs and the options available to you.
        </ResourceParagraph>

        <ResourceParagraph>
          Buying life insurance is financial security for your family. Let's discuss life insurance you don't have to die to use. Among its many uses, life insurance helps ensure that, when you die, your dependents will have the financial resources needed to protect their home, and the income needed to run the household.
        </ResourceParagraph>
      </ResourceSection>
    </>
  );
};

