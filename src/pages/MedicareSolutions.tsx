
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const MedicareSolutions = () => {
  // Add a function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Hero Section */}
      <div className="w-full">
        <ServiceHero 
          title="Medicare Solutions" 
          subheading="Navigate Medicare options with expert guidance and support" 
        />
      </div>
      
      {/* Content Section with Medigap Policies */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Medigap Policies</h2>
            
            <p className="text-gray-600 text-left mb-4">Medigap is Medicare Supplement Insurance that helps fill &quot;gaps&quot; in Original Medicare and is sold by private companies. Original Medicare pays for much, but not all, of the cost for covered health care services and supplies.</p>
            
            <p className="text-gray-600 text-left mb-4">We provide personalized guidance on all aspects of Medicare to ensure you have the right coverage while maximizing your benefits and minimizing your costs.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Medicare Advantage</h3>
            <p className="text-gray-600 text-left mb-6">Medicare Advantage Plans are health plan options that are approved by Medicare but run by private companies. They are part of the Medicare Program, and sometimes called &quot;Part C.&quot; When you join a Medicare Advantage Plan, you are still in Medicare.</p>
            
            <div className="text-center mt-8">
              <Link to="/contact" onClick={handleNavigation}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Component Section - Now below the content */}
      <div className="w-full pb-20">
        <Hero />
      </div>
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};

export default MedicareSolutions;
