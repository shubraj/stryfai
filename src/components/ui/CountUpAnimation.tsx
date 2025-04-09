"use client";

import { useState, useEffect, useRef } from "react";

interface CountUpAnimationProps {
  targetValue: number;
  duration?: number; // in milliseconds
  prefix?: string;
  suffix?: string;
  formatFn?: (value: number) => string;
  className?: string;
  startOnView?: boolean; // whether to start animation when component is in view
}

export default function CountUpAnimation({
  targetValue,
  duration = 2000,
  prefix = "",
  suffix = "",
  formatFn,
  className = "",
  startOnView = true,
}: CountUpAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const formatValue = (value: number): string => {
    if (formatFn) return formatFn(value);

    // Default formatting for large numbers
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smoother animation
    const easeOutQuad = (t: number): number => t * (2 - t);
    const easedProgress = easeOutQuad(progress);

    const currentCount = Math.floor(easedProgress * targetValue);
    setCount(currentCount);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(targetValue);
      setHasAnimated(true);
    }
  };

  const startAnimation = () => {
    if (hasAnimated || !isMounted) return;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle animation start
  useEffect(() => {
    if (!isMounted) return;

    if (!startOnView) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, startOnView, isMounted]);

  // For server-side rendering and initial client render,
  // render the same content to avoid hydration mismatch
  const initialValue = formatValue(0);
  const animatedValue = formatValue(count);

  return (
    <div ref={ref} className={className}>
      {prefix}
      <span className="transition-all duration-75">
        {isMounted ? animatedValue : initialValue}
      </span>
      {suffix}
    </div>
  );
}
