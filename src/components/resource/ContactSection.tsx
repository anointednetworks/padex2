
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MoveRight } from "lucide-react";

export const ContactSection: React.FC = () => {
  // Add a function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ResourceSection title="Contact Us">
      <ResourceParagraph>
        We would love to hear from you! Please reach out with any questions or to schedule a session.
      </ResourceParagraph>
      <div className="mt-4 text-center">
        <Link to="/contact" onClick={handleNavigation}>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </ResourceSection>
  );
};
