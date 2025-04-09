import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to generate image loading strategy
 * @param imageSrc Source of the image
 * @param isPriority Whether to prioritize loading this image
 * @returns Object with size, loading, and priority properties for Next.js Image
 */
export function getOptimizedImageProps(imageSrc: string, isPriority = false) {
  return {
    src: imageSrc,
    sizes: "(max-width: 640px) 80px, (max-width: 768px) 96px, 112px",
    priority: isPriority,
    loading: isPriority ? undefined : "lazy" as const
  };
}
