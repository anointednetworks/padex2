
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { ResourceList } from './ResourceList';

export const MedicareSection: React.FC = () => {
  return (
    <ResourceSection title="Introduction to Medicare">
      <ResourceParagraph>
        The Medicare Program Medicare is a health insurance program for:
      </ResourceParagraph>
      
      <ResourceList items={[
        'People 65 and over',
        'People under age 65 with certain disabilities',
        'People with End-Stage Renal Disease (permanent kidney failure requiring dialysis or a kidney transplant)'
      ]} />
      
      <ResourceParagraph>
        The Original Medicare Has Two Parts:
      </ResourceParagraph>
      
      <ResourceList items={[
        <React.Fragment key="part-a">
          <span className="font-medium">Part A</span>
          <p>Hospital Insurance (<a href="https://www.medicare.gov/providers-services/original-medicare/part-a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part A</a>).</p>
          <p>Most people pay for Part A through their payroll taxes when they are working.</p>
        </React.Fragment>,
        <React.Fragment key="part-b">
          <span className="font-medium">Part B</span>
          <p>Medical Insurance (<a href="https://www.medicare.gov/providers-services/original-medicare/part-b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part B</a>)</p>
        </React.Fragment>,
        <React.Fragment key="part-c">
          <span className="font-medium">Part C Medicare Advantage</span>
          <p>(<a href="https://www.medicare.gov/health-drug-plans/health-plans" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Advantage</a>)</p>
          <p>NOTE: A Member can only receive Medicare Part C, if he/she has Part A and is currently enrolled in Part B.</p>
        </React.Fragment>,
        <React.Fragment key="part-d">
          <span className="font-medium">Part D</span>
          <p>(<a href="https://www.medicare.gov/health-drug-plans/part-d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part D</a>)</p>
          <p>Prescription Drug Coverage</p>
          <p>Medicare Prescription Drug Plans are offered by insurance companies and other private companies approved by Medicare.</p>
        </React.Fragment>
      ]} />

      <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part A</h3>
      <ResourceParagraph>
        Medicare Part A is Hospital Insurance and covers cost associated with confinement in a hospital or skilled nursing facility. (<a href="https://www.medicare.gov/providers-services/original-medicare/part-a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part A</a>)
      </ResourceParagraph>
      
      <ResourceParagraph>
        In general, Part A covers:
      </ResourceParagraph>
      <ResourceList items={[
        'Inpatient care in a hospital',
        'Skilled nursing facility care',
        'Nursing home care (inpatient care in a skilled nursing facility that\'s not custodial or long-term care)',
        'Hospice care',
        'Home health care'
      ]} />

      <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part B</h3>
      <ResourceParagraph>
        Medicare Part B is Medical Insurance and covers physicians' services, outpatient care, test, and supplies. (<a href="https://www.medicare.gov/providers-services/original-medicare/part-b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part B</a>)
      </ResourceParagraph>
      
      <ResourceParagraph>
        Part B covers 2 types of services:
      </ResourceParagraph>
      <ResourceList items={[
        'Medically necessary services: Services or supplies that are needed to diagnose or treat your medical condition and that meet accepted standards of medical practice.',
        'Preventive services: Health care to prevent illness (like the flu) or detect it at an early stage, when treatment is most likely to work.',
        'Preventative Services are free if the services are rendered from a health care provider who accepts assignment.'
      ]} />
      
      <ResourceParagraph>
        Part B covers services such as:
      </ResourceParagraph>
      <ResourceList items={[
        'Clinical research',
        'Ambulance services',
        'Durable medical equipment (DME)',
        <React.Fragment key="mental-health">
          Mental health:
          <ResourceList 
            items={['Inpatient', 'Outpatient', 'Partial hospitalization']} 
            nested={true} 
          />
        </React.Fragment>,
        'Limited outpatient prescription drugs'
      ]} />

      <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part D</h3>
      <ResourceParagraph>
        Medicare offers insurance coverage for prescription drugs through Medicare prescriptions drug plans and other health plan options. Medicare's prescription drug coverage will typically pay over half of your drug costs, for a monthly premium. (<a href="https://www.medicare.gov/health-drug-plans/part-d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">see Medicare Part D</a>)
      </ResourceParagraph>
      
      <ResourceParagraph>
        Important points you need to know:
      </ResourceParagraph>
      <ResourceList items={[
        'Medicare prescription drug coverage helps you pay for the prescriptions you need.',
        'Medicare prescription drug coverage is available to all people with Medicare.',
        'There is additional help for those who need it most.',
        'Medicare prescription drug coverage pays for brand name as well as generic drugs.'
      ]} />

      <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medigap Policies</h3>
      <ResourceParagraph>
        Medigap is Medicare Supplement Insurance that helps fill "gaps" in Original Medicare and is sold by private companies. Original Medicare pays for much, but not all, of the cost for covered health care services and supplies. A Medicare Supplement Insurance (Medigap) policy can help pay some of the remaining health care costs, like:
      </ResourceParagraph>
      <ResourceList items={[
        'Copayments',
        'Coinsurance',
        'Deductibles'
      ]} />
      
      <ResourceParagraph>
        Some Medigap policies also cover services that Original Medicare doesn't cover, like medical care when you travel outside the U.S. If you have Original Medicare and you buy a Medigap policy, here's what happens:
      </ResourceParagraph>
      <ResourceList items={[
        'Medicare will pay its share of the Medicare-approved amount for covered health care costs.',
        'Then, your Medigap policy pays its share. Let\'s discuss how to make the decision that best suites you.'
      ]} />
    </ResourceSection>
  );
};
