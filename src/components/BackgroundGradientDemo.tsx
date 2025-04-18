
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Image } from "./ui/image";
import { Link } from "react-router-dom";
export function BackgroundGradientDemo() {
  // Function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-20">
      {/* First Service - Annuities (now on the left) */}
      <Link to="/annuities" onClick={handleNavigation} className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
          <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <Image src="/lovable-uploads/0476e7fb-5957-450d-9bde-68f71737f53b.png" alt="Annuities" className="object-contain w-full h-full" width={400} height={200} />
          </div>
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
            Annuities
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Secure your retirement with guaranteed income solutions.
          </p>
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>

      {/* Second Service - Life & Health Insurance (now in the middle) */}
      <Link to="/life-health-insurance" onClick={handleNavigation} className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
          <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <Image src="/lovable-uploads/60ad3502-93e4-40ed-a4e1-625e10f6d2c5.png" alt="Life and Health Insurance" className="object-contain w-full h-full" width={400} height={200} />
          </div>
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">Life & Health Insurance</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Protect your future and loved ones with comprehensive coverage options.
          </p>
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>

      {/* Third Service - Medicare Solutions (remains in the same position) */}
      <Link to="/medicare-solutions" onClick={handleNavigation} className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
          <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <Image src="/lovable-uploads/934875e5-ab27-4deb-aacd-5cbdf5af0fb4.png" alt="Medicare Solutions" className="object-contain w-full h-full" width={400} height={200} />
          </div>
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">Medicare</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Navigate Medicare options with expert guidance and support.
          </p>
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>
    </div>;
}
