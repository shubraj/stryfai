"use client";

import { Card } from "@/components/ui/card";
import { LucideHeadphones, LucideUser, LucideUserCheck, LucideDatabase, LucideClipboardCheck, LucideWrench } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      id: "executive-ai",
      title: "Executive AI Assistants",
      description: "24/7 executive assistant that handles emails, schedules meetings, manages tasks, and makes calls on your behalf.",
      icon: <LucideUser className="h-8 w-8 text-primary" />,
    },
    {
      id: "sdr-agents",
      title: "AI SDR Agents",
      description: "Automate your entire sales development process with AI agents that qualify leads, book meetings, and nurture prospects.",
      icon: <LucideUserCheck className="h-8 w-8 text-primary" />,
    },
    {
      id: "voice-agents",
      title: "Voice AI Agents",
      description: "Transform your customer service with agents that handle inbound calls, book appointments, and make outbound calls.",
      icon: <LucideHeadphones className="h-8 w-8 text-primary" />,
    },
    {
      id: "rag-agents",
      title: "RAG Agents",
      description: "Get instant, accurate answers from your company's data, policies, and procedures - all while maintaining complete confidentiality.",
      icon: <LucideClipboardCheck className="h-8 w-8 text-primary" />,
    },
    {
      id: "sql-agents",
      title: "AI SQL Agents",
      description: "Get instant business insights without writing complex queries. Ask questions in plain English and receive accurate data analysis from your databases.",
      icon: <LucideDatabase className="h-8 w-8 text-primary" />,
    },
    {
      id: "workflow-automations",
      title: "Workflow Automations",
      description: "Build seamless workflows that eliminate manual tasks, reduce errors, and ensure nothing falls through the cracks.",
      icon: <LucideWrench className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
            Services
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Use Cases
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Personalised & Integrated seamlessly with your current systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="bg-muted border-muted-foreground/10 p-6 hover:border-primary/30 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-lg bg-primary/5">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
