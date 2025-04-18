
import React, { useEffect } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
      <NavBarDemo />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:py-20 mt-24 sm:mt-28">
        <BackgroundGradient 
          containerClassName="max-w-2xl w-full" 
          className="p-8 rounded-3xl"
          animate={false}
        >
          <ContactHeader />
          <ContactForm />
        </BackgroundGradient>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Contact;
