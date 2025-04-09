"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { LucideClock, LucideLink, LucideHeadphones } from "lucide-react";
import { useState } from "react";

export default function AnnixPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const features = [
    {
      id: "time-management",
      title: "Time Management",
      description: "Reclaim your day with intelligent scheduling and task prioritisation. Let AI handle the routine while you focus on what matters.",
      icon: <LucideClock className="h-10 w-10 text-primary" />,
    },
    {
      id: "smart-integration",
      title: "Smart Integration",
      description: "Seamlessly connects with your email, calendar, and productivity tools. One assistant, all your workflows.",
      icon: <LucideLink className="h-10 w-10 text-primary" />,
    },
    {
      id: "voice-commands",
      title: "Voice Commands",
      description: "Natural conversation with your AI assistant. Speak naturally and get things done hands-free.",
      icon: <LucideHeadphones className="h-10 w-10 text-primary" />,
    },
  ];

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Joined waitlist successfully!");
    setName("");
    setEmail("");
  };

  const handleSubmitSourceCode = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Source code request submitted!");
    setName("");
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[80vh] pt-36 md:pt-40 pb-20 flex flex-col justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Annix -Your Personal AI Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Be the first to secure your spot and join the waitlist to be notified when we launch
          </p>

          <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="bg-secondary border-border"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-secondary border-border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="bg-secondary border-muted-foreground/10 p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-primary/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get the Source Code</h2>
          <p className="text-gray-300 mb-8">
            If you'd like to download the source code and create your own app, complete the form and we'll send you the full source code of the frontend app to your email:
          </p>

          <form onSubmit={handleSubmitSourceCode} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="bg-secondary border-border"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-secondary border-border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
