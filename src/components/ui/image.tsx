
import React from "react";
import { cn } from "@/lib/utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, objectFit = "cover", ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(`object-${objectFit}`, className)}
        alt={alt || "Image"}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
