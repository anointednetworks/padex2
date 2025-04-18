
import React, { useRef } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { ResourcesTab } from '@/components/resource/ResourcesTab';

const Projects = () => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToAnnuities = () => {
    if (resourcesContainerRef.current) {
      const yOffset = -100;
      const element = resourcesContainerRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Resource Center | Illuminated Links" 
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being." 
      />
      <NavBarDemo />
      
      <ServiceHero 
        title="Resources" 
        subheading="Guidance for your health and financial well-being" 
        onReadMoreClick={scrollToAnnuities} 
        showReadMoreButton={true} 
      />
      
      <div className="container mx-auto px-4 py-8 pt-40">
        <div className="max-w-4xl mx-auto" ref={resourcesContainerRef}>
          <ResourcesTab />
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
