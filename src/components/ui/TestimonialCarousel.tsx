"use client";

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { LucideQuote, LucideChevronLeft, LucideChevronRight, LucideStar } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  hoursSaved: number;
}

interface TestimonialCarouselProps {
  className?: string;
  title?: string;
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ className = "", title, testimonials }: TestimonialCarouselProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Move to autoplay after component mounts
  useEffect(() => {
    setIsClient(true);

    // Auto-advance testimonials every 8 seconds
    const interval = setInterval(() => {
      if (!animating) {
        nextTestimonial();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [animating]);

  // Navigate to next testimonial
  const nextTestimonial = () => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 500);
  };

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimating(false);
    }, 500);
  };

  if (!isClient || testimonials.length === 0) {
    return (
      <div className={`w-full bg-muted rounded-lg p-8 flex items-center justify-center ${className}`}>
        <div className="text-gray-400">Caricamento testimonianze...</div>
      </div>
    );
  }

  const testimonial = testimonials[currentIndex];

  return (
    <div className={`w-full ${className}`}>
      {title && <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>}

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-background text-primary border border-primary/20 hover:bg-primary/10 transition-colors hidden md:flex"
          aria-label="Testimonianza precedente"
        >
          <LucideChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-background text-primary border border-primary/20 hover:bg-primary/10 transition-colors hidden md:flex"
          aria-label="Testimonianza successiva"
        >
          <LucideChevronRight className="h-5 w-5" />
        </button>

        {/* Testimonial Card */}
        <Card
          key={testimonial.id}
          className={`relative bg-muted p-8 border-primary/10 transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="absolute -top-4 left-8 bg-primary text-primary-foreground p-2 rounded-full">
            <LucideQuote className="h-5 w-5" />
          </div>

          <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
            {/* Profile image */}
            {testimonial.image ? (
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-400">{testimonial.role}</span>
              </div>
              <p className="text-sm text-gray-400">{testimonial.company}</p>

              {/* Rating stars */}
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LucideStar
                    key={`star-${i}`}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                  />
                ))}
              </div>
            </div>

            {/* Hours saved */}
            <div className="bg-primary/10 p-3 rounded-lg text-center">
              <span className="block text-2xl font-bold text-primary">{testimonial.hoursSaved.toLocaleString()}</span>
              <span className="text-xs text-gray-300">ore risparmiate</span>
            </div>
          </div>

          <blockquote className="text-gray-300 italic relative">
            "{testimonial.content}"
          </blockquote>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => {
                  if (!animating && i !== currentIndex) {
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(i);
                      setAnimating(false);
                    }, 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Vai alla testimonianza ${i + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-between mt-4 md:hidden">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-md bg-muted text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
        >
          <LucideChevronLeft className="h-4 w-4" />
          <span>Precedente</span>
        </button>

        <button
          onClick={nextTestimonial}
          className="p-2 rounded-md bg-muted text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
        >
          <span>Successivo</span>
          <LucideChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
