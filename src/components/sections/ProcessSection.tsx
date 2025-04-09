"use client";

import { Card } from "@/components/ui/card";
import { LucideMap, LucideRocket, LucideCode } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      id: "plan",
      title: "1. Plan your roadmap",
      description: "We take the time to understand your needs, laying out a strategic roadmap for your bespoke solution",
      icon: <LucideMap className="h-10 w-10 text-primary" />,
    },
    {
      id: "build",
      title: "2. Build your MVP",
      description: "Our developers will then start building your custom AI solution- intuitive, beautiful, and functional.",
      icon: <LucideCode className="h-10 w-10 text-primary" />,
    },
    {
      id: "iterate",
      title: "3. Iterate and launch.",
      description: "We work in agile bi-weekly sprints. Where well work to push the roadmap and iterate real-time.",
      icon: <LucideRocket className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Proven Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="bg-muted border-muted-foreground/10 p-8 hover:border-primary/30 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-primary/5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-secondary to-background py-16 px-8 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Imagine what your business looks like at peak performance?
          </h3>
          <p className="text-gray-400">
            Ora, le aziende saranno così. Se vuoi anche te Agenti IA per la tua attività, allora chatta con Valentina IA, il pulsante lo trovi sotto.
          </p>
        </div>
      </div>
    </section>
  );
}
