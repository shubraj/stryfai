"use client";

import Link from "next/link";
import Image from "next/image";
import ParallaxEffect from "../ui/ParallaxEffect";
import AnimatedButton from "../ui/AnimatedButton";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import CountUpAnimation from "../ui/CountUpAnimation";

// Immagine del team AI
const AiTeamImage = ({ isMounted }: { isMounted: boolean }) => (
  <div className="mt-16 mb-8 max-w-4xl mx-auto px-4">
    {isMounted ? (
      <Image
        src="/images/ai-team-diagram.png"
        alt="Team di agenti IA"
        width={1200}
        height={600}
        className="w-full rounded-lg shadow-lg"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      />
    ) : (
      <div className="w-full aspect-[2/1] bg-muted rounded-lg shadow-lg animate-pulse" />
    )}
  </div>
);

// Componente per visualizzare il goal di 10 milioni di ore
const ObjectivesDisplay = () => (
  <div className="max-w-4xl mx-auto px-4 mb-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
      L'obiettivo di Stryfai
    </h2>

    <Card className="p-6 bg-primary/5 border-primary/20 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Far risparmiare 10 milioni di ore all'anno con gli agenti IA
      </h3>

      <div className="flex justify-center mb-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-ping opacity-30" />
          <div className="relative bg-background border-2 border-primary rounded-full w-40 h-40 flex items-center justify-center z-10">
            <div className="text-center">
              <CountUpAnimation
                targetValue={10000000}
                duration={3000}
                className="text-4xl font-bold text-primary"
                formatFn={(value) => {
                  // Formattazione personalizzata per l'animazione
                  if (value < 1000) return value.toString();
                  if (value < 1000000) return `${(value / 1000).toFixed(0)}K`;
                  return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
                }}
              />
              <span className="block text-sm mt-1">ore/anno</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add CSS animation styles
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');

    // Define the keyframes animation with both fadeInUp and fadeIn
    const keyframes = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;

    styleEl.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(styleEl);

    // Clean up
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 md:pt-40 pb-10 flex flex-col justify-center overflow-hidden"
    >
      {/* Elementi decorativi di sfondo con effetto parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxEffect speed={0.3} direction="up" className="absolute top-20 left-10 opacity-10 hidden md:block">
          <div className="w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        </ParallaxEffect>

        <ParallaxEffect speed={0.15} direction="down" className="absolute bottom-20 right-10 opacity-10 hidden md:block">
          <div className="w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        </ParallaxEffect>

        <ParallaxEffect speed={0.25} direction="right" className="absolute top-1/2 -left-20 opacity-10 hidden md:block">
          <div className="w-72 h-72 rounded-full bg-primary/25 blur-3xl" />
        </ParallaxEffect>
      </div>

      <div className="container mx-auto text-center mb-8 relative z-10">
        {isClient && (
          <>
            <ParallaxEffect speed={0.1} direction="up">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
                Il futuro è qui
              </div>
            </ParallaxEffect>

            <ParallaxEffect speed={0.2} direction="up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Integra Agenti IA nel tuo business
              </h1>
            </ParallaxEffect>

            <ParallaxEffect speed={0.3} direction="up">
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Agenti AI personalizzati per scalare la tua attività, ridurre i costi e risparmiare tempo.
              </p>
            </ParallaxEffect>
          </>
        )}
      </div>

      {/* Immagine del team AI */}
      {isClient ? (
        <ParallaxEffect speed={0.2} direction="up">
          <AiTeamImage isMounted={isClient} />
        </ParallaxEffect>
      ) : (
        <AiTeamImage isMounted={isClient} />
      )}

      {/* Obiettivo di Stryfai */}
      {isClient ? (
        <ParallaxEffect speed={0.3} direction="up">
          <ObjectivesDisplay />
        </ParallaxEffect>
      ) : (
        <ObjectivesDisplay />
      )}
    </section>
  );
}
