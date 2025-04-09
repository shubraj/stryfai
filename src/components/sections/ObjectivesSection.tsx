"use client";

import { useState, useEffect } from "react";
import StatisticDisplay from "../ui/StatisticDisplay";
import ParallaxEffect from "../ui/ParallaxEffect";
import { Card } from "@/components/ui/card";
import { LucideArrowUp, LucideChartBar, LucideClock, LucideDollarSign, LucideUsers } from "lucide-react";
import CountUpAnimation from "../ui/CountUpAnimation";

// Component per visualizzare una metrica con valore percentuale
const MetricCard = ({ title, value, icon, description, color = "primary" }: { title: string, value: string, icon: React.ReactNode, description: string, color?: string }) => (
  <Card className={`bg-muted p-6 border-${color}/20 hover:border-${color}/50 transition-colors`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className={`p-2 rounded-full bg-${color}/10 text-${color}`}>
        {icon}
      </div>
    </div>
    <div className="flex items-baseline gap-2 mb-3">
      <span className={`text-3xl font-bold text-${color}`}>{value}</span>
      {value.includes("%") && <LucideArrowUp className="h-5 w-5 text-green-500" />}
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </Card>
);

// Grafico a barre semplificato
const BarChart = ({ data }: { data: {label: string, value: number, color: string}[] }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="mt-4 space-y-3">
      {data.map((item, index) => (
        <div key={`metric-${item.label}`} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{item.label}</span>
            <span className="font-medium">{item.value}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full bg-${item.color}`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente per la visualizzazione animata del numero 10 milioni
const AnimatedCounter = () => (
  <div className="flex flex-col items-center mb-8">
    <div className="relative">
      <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-ping opacity-30" />
      <div className="relative bg-background border-2 border-primary rounded-full w-40 h-40 flex items-center justify-center">
        <div className="text-center">
          <CountUpAnimation
            targetValue={10000000}
            duration={3000}
            className="text-4xl font-bold text-primary"
            formatFn={(value) => {
              if (value < 1000) return value.toString();
              if (value < 1000000) return `${(value / 1000).toFixed(0)}K`;
              return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
            }}
          />
          <span className="block text-sm mt-1">ore risparmiate</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ObjectivesSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dati per il grafico dei benefici
  const benefitsData = [
    { label: "Aumento Produttività", value: 43, color: "primary" },
    { label: "Miglioramento Decisioni", value: 39, color: "green-500" },
    { label: "Riduzione Errori", value: 35, color: "cyan-500" },
    { label: "Riduzione Tempi Risposta", value: 34, color: "violet-500" },
    { label: "Miglioramento Rapporti Clienti", value: 31, color: "blue-500" },
  ];

  // Dati per le metriche animati
  const metricsData = [
    {
      title: "Produttività",
      value: "+66%",
      icon: <LucideChartBar className="h-6 w-6" />,
      description: "Aumento medio della produttività dei dipendenti con l'uso di IA"
    },
    {
      title: "Risparmio tempo",
      value: "40%",
      icon: <LucideClock className="h-6 w-6" />,
      description: "Riduzione del tempo impiegato per completare attività ripetitive",
      color: "green-500"
    },
    {
      title: "ROI",
      value: "134%",
      icon: <LucideDollarSign className="h-6 w-6" />,
      description: "Ritorno sull'investimento medio nell'implementazione di agenti IA",
      color: "cyan-500"
    },
    {
      title: "Soddisfazione",
      value: "+47%",
      icon: <LucideUsers className="h-6 w-6" />,
      description: "Aumento della soddisfazione dei clienti con supporto IA",
      color: "violet-500"
    }
  ];

  return (
    <section id="statistics-section" className="py-16 bg-secondary/20">
      <div className="container mx-auto text-center">
        <ParallaxEffect speed={0.2} direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            L'obiettivo di Stryfai
          </h2>
        </ParallaxEffect>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-10 w-full">
              <h3 className="text-2xl font-bold mb-6">Far risparmiare 10 milioni di ore all'anno con gli agenti IA</h3>

              {/* Counter animato per 10 milioni */}
              {isClient && <AnimatedCounter />}
            </div>

            {/* Statistiche basate sui dati reali */}
            <div className="mb-12 w-full">
              <h3 className="text-xl font-bold mb-6">Benefici reali degli agenti IA secondo gli studi più recenti</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {metricsData.map((metric, index) => (
                  <div
                    key={`metric-${metric.title}`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      animation: isClient ? "fadeInUp 0.5s ease-out forwards" : "none",
                      opacity: isClient ? 0 : 1
                    }}
                  >
                    <MetricCard
                      title={metric.title}
                      value={metric.value}
                      icon={metric.icon}
                      description={metric.description}
                      color={metric.color}
                    />
                  </div>
                ))}
              </div>

              {/* Grafico a barre */}
              <Card
                className="bg-muted p-6 border-muted-foreground/10 hover:border-primary/30 transition-colors"
                style={{
                  animation: isClient ? "fadeIn 0.8s ease-out forwards" : "none",
                  opacity: isClient ? 0 : 1
                }}
              >
                <h4 className="text-lg font-semibold mb-4">Percentuale di aziende che riportano benefici dagli agenti IA</h4>
                <BarChart data={benefitsData} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
