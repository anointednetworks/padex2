"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
export function AuroraBackgroundDemo() {
  const handleReadMore = (e: React.MouseEvent) => {
    // Prevent event bubbling and default link behavior
    e.preventDefault();
    e.stopPropagation();
    console.log("Read More button clicked");
    // Scroll down to the welcome section
    const welcomeSection = document.getElementById('welcome-section');
    if (welcomeSection) {
      console.log("Welcome section found, scrolling");
      welcomeSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.log("Welcome section not found, using fallback");
      // Fallback if the welcome section can't be found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  return <AuroraBackground>
      <motion.div initial={{
      opacity: 0.0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut"
    }} className="relative flex flex-col gap-4 items-center justify-center px-4 z-10">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Padex Benefit Advisors</div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">Securing your financial future</div>
        <div className="mt-6 relative z-20">
          <RainbowButton onClick={handleReadMore}>Read more</RainbowButton>
        </div>
      </motion.div>
    </AuroraBackground>;
}