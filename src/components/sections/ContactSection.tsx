"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedButton from "../ui/AnimatedButton";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Chatta con Valentina IA per conoscerci
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Un messaggio, un nuovo inizio
        </p>

        <div className="flex justify-center">
          {isClient ? (
            <AnimatedButton
              variant="magnetic"
              className="rounded-xl shadow-lg hover:shadow-xl text-xl px-8 py-6 font-bold hover:translate-y-[-2px] transition-all bg-primary text-primary-foreground"
              onClick={() => { window.open('https://wa.me/393240467807', '_blank'); }}
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chatta con Valentina IA
              </span>
            </AnimatedButton>
          ) : (
            <Button
              onClick={() => { window.open('https://wa.me/393240467807', '_blank'); }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl text-xl px-8 py-6 font-bold hover:translate-y-[-2px] transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chatta con Valentina IA
              </span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
