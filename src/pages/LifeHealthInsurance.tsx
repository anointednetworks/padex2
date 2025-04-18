
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { HealthInsuranceSection } from "@/components/resource/HealthInsuranceSection";
import { LifeInsuranceSection } from "@/components/resource/LifeInsuranceSection";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const LifeHealthInsurance = () => {
  // Add a function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Life & Health Insurance"
        description="Explore comprehensive Life and Health Insurance options and find out about insurance benefits you can use while living."
      />
      
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero title="Life & Health Insurance" subheading="Find out about insurance you don't have to die to use" />
      </div>
      
      {/* New Hero Component Section */}
      <Hero />
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-4xl mx-auto">
          <HealthInsuranceSection />
          <LifeInsuranceSection />
          
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-blue-600">Do you want to know how to benefit from life insurance while living?</p>
            <p className="mt-2 text-gray-600 mb-6">Contact us today for a personalized consultation.</p>
            
            <Link to="/contact" onClick={handleNavigation}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};

export default LifeHealthInsurance;
