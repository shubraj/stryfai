"use client";

import { useEffect, useState } from "react";

interface StatisticDisplayProps {
  target: number;
  label: string;
}

export default function StatisticDisplay({ target, label }: StatisticDisplayProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('statistics-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // Animation duration in ms
    const interval = 30; // Update interval in ms
    const steps = duration / interval;
    const increment = target / steps;
    let current = 0;
    let timer: NodeJS.Timeout;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        timer = setTimeout(updateCounter, interval);
      } else {
        setCount(target);
      }
    };

    updateCounter();

    return () => clearTimeout(timer);
  }, [started, target]);

  // Format the number with commas for thousands
  const formattedCount = count.toLocaleString();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-125 animate-pulse-slow" />
        <div className="bg-background border-2 border-primary rounded-full w-40 h-40 flex items-center justify-center z-10 relative">
          <div className="text-center">
            <span className="text-4xl font-bold text-primary">{formattedCount}</span>
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{label}</h3>
    </div>
  );
}
