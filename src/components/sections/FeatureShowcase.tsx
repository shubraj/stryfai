"use client";

import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SavingsCalculator from "../ui/SavingsCalculator";
import { LucideCheck, LucideChevronsUp, LucideArrowRight, LucideClock, LucideArrowDown, LucideCalculator, LucideList } from "lucide-react";

export default function FeatureShowcase() {
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    // Set up smooth scrolling animation
    const setupScrollAnimation = () => {
      const elements = [calculatorRef.current, featuresRef.current, ctaRef.current].filter(el => el);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0', 'translate-y-6');

              // Set active section for navigation
              if (entry.target === calculatorRef.current) setActiveSection('calculator');
              else if (entry.target === featuresRef.current) setActiveSection('features');
              else if (entry.target === ctaRef.current) setActiveSection('cta');
            }
          }
        },
        { threshold: 0.25, rootMargin: '0px 0px -100px 0px' }
      );

      for (const el of elements) {
        if (el) {
          el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
          observer.observe(el);
        }
      }

      return () => {
        for (const el of elements) {
          if (el) observer.unobserve(el);
        }
      };
    };

    setupScrollAnimation();

    // Setup scroll to section logic
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (calculatorRef.current &&
          scrollPos >= calculatorRef.current.offsetTop &&
          scrollPos < (featuresRef.current?.offsetTop || Number.MAX_VALUE)) {
        setActiveSection('calculator');
      } else if (featuresRef.current &&
                scrollPos >= featuresRef.current.offsetTop &&
                scrollPos < (ctaRef.current?.offsetTop || Number.MAX_VALUE)) {
        setActiveSection('features');
      } else if (ctaRef.current &&
                scrollPos >= ctaRef.current.offsetTop) {
        setActiveSection('cta');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -80; // Header height offset
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Features list
  const features = [
    { id: "custom-agents", text: "Agenti IA personalizzati per il tuo business" },
    { id: "integration", text: "Integrazione con i tuoi sistemi esistenti" },
    { id: "fast-deploy", text: "Configurazione e deployment rapidi" },
    { id: "dashboard", text: "Dashboard di analisi e monitoraggio" }
  ];

  return (
    <section ref={sectionRef} id="feature-showcase" className="py-12 md:py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-down">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <LucideClock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Risparmio di tempo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Quanto tempo puoi risparmiare con Agenti IA
          </h2>
        </div>

        {/* Features and Calculator - stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12 md:mb-20">
          {/* Calculator - Moved to top on mobile for better visibility */}
          <div id="calculator-section" ref={calculatorRef} className="lg:w-2/3 order-1">
            <div className="bg-muted rounded-lg p-0 shadow-lg">
              <SavingsCalculator
                title="Calcola il tuo risparmio con gli agenti IA"
              />
            </div>
          </div>

          {/* Features list */}
          <div id="features-section" ref={featuresRef} className="lg:w-1/3 order-2 mt-8 lg:mt-0">
            <Card className="p-5 md:p-6 bg-muted border-primary/10 h-full shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Caratteristiche Principali</h3>
              <ul className="space-y-3 md:space-y-4">
                {features.map((feature) => (
                  <li
                    key={`feature-${feature.id}`}
                    className="flex items-start gap-3 hover:bg-secondary/20 p-2 rounded-lg transition-colors duration-300"
                  >
                    <LucideCheck className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div id="cta-section" ref={ctaRef}>
          <Card className="bg-primary/10 border-primary/20 p-6 md:p-8 text-center rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">
              Pronto a far crescere la tua azienda con gli agenti IA?
            </h3>
            <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Diventa un'azienda che risparmia migliaia di ore ogni anno grazie alla potenza degli agenti IA.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all w-full sm:w-auto"
              href="#contact"
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <LucideChevronsUp className="h-6 w-6" />
                <span className="font-medium">Inizia subito l'implementazione</span>
              </a>
            </Button>
          </Card>
        </div>

        {/* Back to top button - appears when scrolled */}
        {isClient && (
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
              aria-label="Torna in cima"
            >
              <LucideChevronsUp className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
