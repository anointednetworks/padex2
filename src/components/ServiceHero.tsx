
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface ServiceHeroProps {
  title: string;
  subheading?: string;
  showReadMoreButton?: boolean;
  onReadMoreClick?: () => void;
  height?: string;
}

export function ServiceHero({ 
  title, 
  subheading = "Guidance for your health and financial well-being",
  showReadMoreButton = false,
  onReadMoreClick,
  height = "28rem",
}: ServiceHeroProps) {
  return (
    <AuroraBackground height={height}>
      <motion.div 
        initial={{
          opacity: 0.0,
          y: 40
        }} 
        whileInView={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }} 
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-full"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">{title}</div>
        <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
          {subheading}
        </div>
        
        {showReadMoreButton && (
          <div className="mt-8 mb-4">
            <RainbowButton onClick={onReadMoreClick}>
              Read more
            </RainbowButton>
          </div>
        )}
      </motion.div>
    </AuroraBackground>
  );
}
