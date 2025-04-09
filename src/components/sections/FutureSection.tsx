"use client";

import { useEffect, useRef, useState } from "react";
import ParticlesBackground from "../ui/ParticlesBackground";
import ParallaxEffect from "../ui/ParallaxEffect";

export default function FutureSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  // Calcola la lunghezza massima del testo per ogni passo
  const getTextWidthClass = (text) => {
    const length = text.length;
    if (length < 30) return "w-[200px]";
    if (length < 40) return "w-[300px]";
    if (length < 50) return "w-[350px]";
    return "w-[400px]";
  };

  return (
    <section id="future" className="py-24 bg-gradient-radial from-primary/20 via-background to-background relative overflow-hidden">
      {/* Particelle nel background */}
      <div className="absolute inset-0 z-0">
        {isClient && <ParticlesBackground id="future-particles" />}
      </div>

      <div className="container mx-auto text-center relative z-10">
        {isClient ? (
          <ParallaxEffect speed={0.2} direction="up">
            <h2
              ref={textRef}
              className="text-3xl md:text-5xl font-bold mb-16 opacity-0 transition-all duration-1000 translate-y-10 ease-out"
            >
              Oltre i Limiti: La Nuova Era dell'IA
            </h2>
          </ParallaxEffect>
        ) : (
          <h2
            ref={textRef}
            className="text-3xl md:text-5xl font-bold mb-16"
          >
            Oltre i Limiti: La Nuova Era dell'IA
          </h2>
        )}

        <div className="max-w-3xl mx-auto">
          {isVisible && isClient && (
            <ParallaxEffect speed={0.15} direction="up">
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Oltre i Limiti: La Nuova Era dell'IA</h3>
                <div className="typing-container">
                  <p className="typing-animation text-xl text-gray-300 min-h-[30px]">
                    Stryfai sarà tra le prime aziende guidate al 90% dall'IA
                  </p>
                </div>
              </div>
            </ParallaxEffect>
          )}

          {!isVisible && (
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Oltre i Limiti: La Nuova Era dell'IA</h3>
              <p className="text-xl text-gray-300 min-h-[30px]">
                Stryfai sarà tra le prime aziende guidate al 90% dall'IA
              </p>
            </div>
          )}

          {/* Roadmap */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/50" />

            {/* Timeline items */}
            <div className="relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  {isClient ? (
                    <ParallaxEffect speed={0.3} direction="left">
                      <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg opacity-0 transition-all duration-700 delay-300 translate-y-6 ease-out animate-in hover:bg-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">2025 Q2</h3>
                        {isVisible ? (
                          <div className={`typing-container ${getTextWidthClass("Creazione degli agenti IA verticali")}`}>
                            <p className="typing-animation typing-animation-delay-1 text-gray-300 min-h-[30px]">
                              Creazione degli agenti IA verticali
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-300">Creazione degli agenti IA verticali</p>
                        )}
                      </div>
                    </ParallaxEffect>
                  ) : (
                    <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">2025 Q2</h3>
                      <p className="text-gray-300">Creazione degli agenti IA verticali</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary z-10">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 hidden md:block" />
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary z-10">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  {isClient ? (
                    <ParallaxEffect speed={0.3} direction="right">
                      <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg opacity-0 transition-all duration-700 delay-500 translate-y-6 ease-out animate-in hover:bg-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">2025 Q3-Q4</h3>
                        {isVisible ? (
                          <div className={`typing-container ${getTextWidthClass("Lancio sul mercato degli agenti IA")}`}>
                            <p className="typing-animation typing-animation-delay-1 text-gray-300 min-h-[30px]">
                              Lancio sul mercato degli agenti IA
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-300">Lancio sul mercato degli agenti IA</p>
                        )}
                      </div>
                    </ParallaxEffect>
                  ) : (
                    <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">2025 Q3-Q4</h3>
                      <p className="text-gray-300">Lancio sul mercato degli agenti IA</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  {isClient ? (
                    <ParallaxEffect speed={0.3} direction="left">
                      <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg opacity-0 transition-all duration-700 delay-700 translate-y-6 ease-out animate-in hover:bg-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">2026 Q1</h3>
                        {isVisible ? (
                          <div className={`typing-container ${getTextWidthClass("Stryfai sarà guidata al 90% dall'IA")}`}>
                            <p className="typing-animation typing-animation-delay-2 text-gray-300 min-h-[30px]">
                              Stryfai sarà guidata al 90% dall'IA
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-300">Stryfai sarà guidata al 90% dall'IA</p>
                        )}
                      </div>
                    </ParallaxEffect>
                  ) : (
                    <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">2026 Q1</h3>
                      <p className="text-gray-300">Stryfai sarà guidata al 90% dall'IA</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary z-10">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 hidden md:block" />
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary z-10">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  {isClient ? (
                    <ParallaxEffect speed={0.3} direction="right">
                      <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg opacity-0 transition-all duration-700 delay-900 translate-y-6 ease-out animate-in hover:bg-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">2026 Q2-Q4</h3>
                        {isVisible ? (
                          <div className={`typing-container ${getTextWidthClass("Massima diffusione degli interi team di agenti IA")}`}>
                            <p className="typing-animation typing-animation-delay-2 text-gray-300 min-h-[30px]">
                              Massima diffusione degli interi team di agenti IA
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-300">Massima diffusione degli interi team di agenti IA</p>
                        )}
                      </div>
                    </ParallaxEffect>
                  ) : (
                    <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">2026 Q2-Q4</h3>
                      <p className="text-gray-300">Massima diffusione degli interi team di agenti IA</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  {isClient ? (
                    <ParallaxEffect speed={0.3} direction="left">
                      <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg opacity-0 transition-all duration-700 delay-1100 translate-y-6 ease-out animate-in hover:bg-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">2027</h3>
                        {isVisible ? (
                          <div className={`typing-container ${getTextWidthClass("Presenza dell'AGI cambio totale della situazione, incognito...")}`}>
                            <p className="typing-animation typing-animation-delay-3 text-gray-300 min-h-[30px]">
                              Presenza dell'AGI cambio totale della situazione, incognito...
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-300">Presenza dell'AGI cambio totale della situazione, incognito...</p>
                        )}
                      </div>
                    </ParallaxEffect>
                  ) : (
                    <div className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">2027</h3>
                      <p className="text-gray-300">Presenza dell'AGI cambio totale della situazione, incognito...</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary z-10">
                  <span className="text-primary-foreground font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
