"use client";

import { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  zIndex?: number;
  position?: 'top' | 'bottom';
  showSectionLabel?: boolean;
}

export default function ScrollProgressBar({
  color = "hsl(var(--primary))",
  height = 4,
  zIndex = 50,
  position = 'top',
  showSectionLabel = true
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsClient(true);

    // Calculate scroll progress and detect current section
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;

      // Calculate progress percentage
      if (totalHeight > 0) {
        const calculatedProgress = (scrollPosition / totalHeight) * 100;
        setProgress(calculatedProgress);
      } else {
        setProgress(0);
      }

      // Detect current section
      const sections = [
        { id: 'hero', name: 'Home' },
        { id: 'feature-showcase', name: 'Risparmio Tempo' },
        { id: 'calculator-section', name: 'Calcolatore' },
        { id: 'features-section', name: 'Funzionalità' },
        { id: 'cta-section', name: 'Inizia Ora' },
        { id: 'future', name: 'Futuro' },
        { id: 'team', name: 'Team' },
        { id: 'contact', name: 'Contatti' }
      ];

      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section.name);
            break;
          }
        }
      }

      // Hide/show based on scroll direction
      if (scrollPosition > lastScrollY + 30) {
        // Scrolling down - hide after threshold
        if (scrollPosition > 200) {
          setIsVisible(false);
        }
      } else if (scrollPosition < lastScrollY - 10) {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(scrollPosition);
    };

    // Initialize on load
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Only render on client to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          [position]: 0,
          left: 0,
          width: '100%',
          height: `${height}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: zIndex,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: color,
            transition: 'width 0.2s ease',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))',
            boxShadow: '0 0 8px rgba(var(--primary-rgb), 0.5)'
          }}
        />
      </div>

      {/* Section label indicator */}
      {showSectionLabel && currentSection && (
        <div
          className="fixed left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-lg z-50 flex items-center gap-2"
          style={{
            top: position === 'top' ? '12px' : 'auto',
            bottom: position === 'bottom' ? '12px' : 'auto',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span className="inline-block w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
          <span>{currentSection}</span>
          <span className="text-xs opacity-80">{Math.round(progress)}%</span>
        </div>
      )}
    </>
  );
}
