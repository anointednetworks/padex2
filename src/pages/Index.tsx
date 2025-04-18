
import { NavBarDemo } from "@/components/NavBarDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const Index = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Aurora Background Demo Section */}
      <div className="w-full h-screen">
        <AuroraBackgroundDemo />
      </div>
      
      {/* Hero Section */}
      <div id="welcome-section" className="flex items-center justify-center py-20 pt-32">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Your Health Is Your Greatest Wealth</h1>
          
          <div className="flex justify-center mt-12">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
              
              <p className="text-gray-600 text-left mb-4">Navigating today's economic landscape comes with challenges, but it also brings opportunities for those who recognize long-term trends.</p>
              
              <p className="text-gray-600 text-left mb-4">Whether you're planning for retirement or seeking clarity on investment strategies that will benefit you immediately and long-term, we are here to help you address your most important financial questions.</p>
              
              <p className="text-gray-600 text-left mb-4">Our priority is your overall health and financial success. We want to learn more about your business and personal situation and identify your dreams and goals.</p>
              
              <p className="text-gray-600 text-left mb-4">Long-term relationships that encourage open and honest communication have been the cornerstone of my foundation of success.</p>
              
              <p className="text-gray-600 text-left">We look forward to your notes regarding any questions you may have, and how investment concepts or products can be tailored for your unique situation and needs.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient Section */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
        <BackgroundGradientDemo />
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};
export default Index;

