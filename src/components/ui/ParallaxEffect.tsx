"use client";

import { useEffect, useRef, useState, type ReactNode, useCallback } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Valore positivo = scorre più lento, negativo = scorre più veloce
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ParallaxEffect({
  children,
  speed = 0.2,
  className = "",
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize direction transform to avoid recalculations
  const directionTransform = useRef(direction);

  // Cache speed value to avoid unnecessary re-renders
  const speedRef = useRef(speed);

  // Create memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;
    const elementHeight = elementRect.height;
    const windowHeight = window.innerHeight;

    // Check if element is visible in viewport
    const isElementVisible =
      elementTop < windowHeight &&
      elementTop + elementHeight > 0;

    setIsVisible(isElementVisible);

    if (isElementVisible) {
      // Calculate how much of the element is visible in the viewport
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      // Calculate parallax offset
      const parallaxOffset = scrollProgress * speedRef.current * 100;
      setOffset(parallaxOffset);
    }
  }, []);

  useEffect(() => {
    // Update refs when props change
    speedRef.current = speed;
    directionTransform.current = direction;
  }, [speed, direction]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll(); // Calculate initial offset
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      {
        threshold: 0.1, // Activate when at least 10% of element is visible
        rootMargin: '50px' // Expand observation area for smoother transitions
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Get transform based on direction and current offset
  const getTransform = () => {
    if (!isVisible) return 'none';

    switch (directionTransform.current) {
      case 'up': return `translateY(${-offset}px)`;
      case 'down': return `translateY(${offset}px)`;
      case 'left': return `translateX(${-offset}px)`;
      case 'right': return `translateX(${offset}px)`;
      default: return `translateY(${-offset}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-transform will-change-transform ${className}`}
      style={{
        transform: getTransform(),
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
