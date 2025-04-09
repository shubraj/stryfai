"use client";

import { useState, useEffect, useRef } from "react";
import CountUpAnimation from "./CountUpAnimation";

interface MobileOptimizedCounterProps {
  targetValue: number;
  label: string;
  sublabel?: string;
  className?: string;
  duration?: number;
  formatFn?: (value: number) => string;
}

export default function MobileOptimizedCounter({
  targetValue,
  label,
  sublabel,
  className = "",
  duration = 2000,
  formatFn
}: MobileOptimizedCounterProps) {
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Add mobile-specific styles
  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return;

    // Create a style element for mobile-specific animations
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @media (max-width: 767px) {
        .mobile-counter-animation {
          transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
        .mobile-counter-animation.in-view {
          transform: scale(1.05);
        }
        .counter-label {
          font-size: 1rem;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .counter-label.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-counter-pulse {
          animation: mobilePulse 2s infinite;
        }
        @keyframes mobilePulse {
          0% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.2); }
          70% { box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0); }
          100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0); }
        }
      }
    `;

    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, [isClient]);

  // Default formatting function
  const defaultFormatFn = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  // For consistent rendering between server and client
  const formattedValue = (formatFn || defaultFormatFn)(isClient && isInView ? targetValue : 0);

  return (
    <div
      ref={ref}
      className={`text-center p-4 ${className} mobile-counter-animation ${isInView ? 'in-view' : ''}`}
    >
      <div className={`bg-primary/10 p-4 rounded-lg mb-2 ${isInView ? 'mobile-counter-pulse' : ''}`}>
        {isClient ? (
          <CountUpAnimation
            targetValue={targetValue}
            duration={duration}
            className="text-3xl md:text-4xl font-bold text-primary"
            formatFn={formatFn || defaultFormatFn}
            startOnView={true}
          />
        ) : (
          <div className="text-3xl md:text-4xl font-bold text-primary">
            {formattedValue}
          </div>
        )}
      </div>

      <div
        className={`counter-label ${isInView ? 'in-view' : ''}`}
        style={{
          opacity: isInView ? 1 : 0.7,
          transform: `translateY(${isInView ? '0' : '10px'})`,
          transition: 'opacity 0.5s ease, transform 0.5s ease'
        }}
      >
        <div className="font-medium text-gray-300">{label}</div>
        {sublabel && <div className="text-xs text-gray-400 mt-1">{sublabel}</div>}
      </div>
    </div>
  );
}
