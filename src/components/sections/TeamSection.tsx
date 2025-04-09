"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import ParallaxEffect from "../ui/ParallaxEffect";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
  isAi?: boolean;
};

export default function TeamSection() {
  // Stato per tracciare il montaggio del componente
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: "danila",
      name: "Danila Kardin",
      role: "Founder & CEO",
      description: "Guida la strategia aziendale e coordina il team per raggiungere obiettivi di crescita e innovazione.",
      imageUrl: "/images/danila-kardin.png"
    },
    {
      id: "giovanni",
      name: "Giovanni Menozzi",
      role: "Co-Founder & CTO",
      description: "Responsabile dello sviluppo tecnologico e gestione degli agenti IA aziendali.",
      imageUrl: "/images/giovanni-menozzi.png"
    },
    {
      id: "valentina",
      name: "Valentina IA",
      role: "Customer Interaction Specialist",
      description: "Risponde ai messaggi diretti, WhatsApp e chatbot, garantendo risposte rapide ed efficaci 24/7.",
      isAi: true,
      imageUrl: "/images/valentina-ia.png"
    },
    {
      id: "giulio",
      name: "Giulio IA",
      role: "Social Media Video Producer",
      description: "Crea video verticali ottimizzati per i social media in massimo 5 minuti per aumentare engagement e visibilità.",
      isAi: true,
      imageUrl: "/images/giulio-ia.png"
    },
    {
      id: "romeo",
      name: "Romeo IA",
      role: "Marketing Strategist",
      description: "Crea e implementa strategie di marketing innovative, ottimizzando la presenza digitale e massimizzando l'efficacia delle campagne di comunicazione.",
      isAi: true,
      imageUrl: "/images/romeo-ia.png"
    },
    {
      id: "francesco",
      name: "Francesco IA",
      role: "AI Trend Researcher",
      description: "Analizza quotidianamente oltre 100 fonti globali su IA e tool emergenti, inviando report sintetici e di valore al team.",
      isAi: true,
      imageUrl: "/images/francesco-ia.png"
    },
    {
      id: "davide",
      name: "Davide IA",
      role: "Competitive Intelligence Analyst",
      description: "Monitora e analizza i competitor, identificando trend di mercato e movimenti strategici significativi.",
      isAi: true,
      imageUrl: "/images/davide-ia.png"
    },
    {
      id: "andrea",
      name: "Andrea IA",
      role: "Prompt Engineer Specialist",
      description: "Sviluppa prompt avanzati per massimizzare le performance operative degli agenti IA aziendali.",
      isAi: true,
      imageUrl: "/images/andrea-ia.png"
    },
    {
      id: "roberto",
      name: "Roberto IA",
      role: "Digital Ads Analyst",
      description: "Analizza settimanalmente le campagne pubblicitarie digitali, fornendo report dettagliati per ottimizzarne i risultati.",
      isAi: true,
      imageUrl: "/images/roberto-ia.png"
    },
    {
      id: "valerio",
      name: "Valerio IA",
      role: "AI Integration Expert",
      description: "Esperto nell'integrare agenti IA con sistemi aziendali esistenti e nella progettazione di workflow automatizzati efficienti.",
      isAi: true,
      imageUrl: "/images/valerio-ia.png"
    },
    {
      id: "giuseppe",
      name: "Giuseppe IA",
      role: "Business Analyst",
      description: "Identifica opportunità di integrazione e sviluppo di soluzioni IA personalizzate nei processi aziendali dei clienti.",
      isAi: true,
      imageUrl: "/images/giuseppe-ia.png"
    },
    {
      id: "laura",
      name: "Laura IA",
      role: "Team Coach & Wellbeing Advisor",
      description: "Supporta il team nel chiarimento degli obiettivi, facilitando input strategici e promuovendo il benessere psicologico e fisico di tutto il gruppo.",
      isAi: true,
      imageUrl: "/images/laura-ia.png"
    }
  ];

  const upcomingHires: TeamMember[] = [
    {
      id: "danilo-ceo",
      name: "Danilo IA",
      role: "CEO",
      description: "Gestisce completamente l'intera azienda e ha il totale potere decisionale.",
      isAi: true,
      imageUrl: "/images/danilo-ia.png"
    }
  ];

  // Approccio estremamente semplificato per renderizzare le immagini
  function TeamMemberImage({ src, alt }: { src: string, alt: string }) {
    // Se non siamo ancora montati, restituiamo un placeholder
    if (!mounted) {
      return (
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-300" />
      );
    }

    // Solo quando siamo montati, renderizziamo l'immagine
    return (
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className="w-full h-full object-cover rounded-full"
        priority={alt.includes("Danila") || alt.includes("Giovanni")} // Priorità alle immagini più importanti
      />
    );
  }

  // Componente semplificato per il profilo
  const ProfileImage = ({ member }: { member: TeamMember }) => {
    if (!member.imageUrl) {
      return (
        <div className="mb-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-primary/10 mx-auto">
          <span className="text-primary text-lg font-semibold">
            {member.isAi ? "IA" : member.name.charAt(0)}
          </span>
        </div>
      );
    }

    return (
      <div className="mb-4 w-20 h-20 sm:w-24 sm:h-24 mx-auto overflow-hidden">
        <TeamMemberImage
          src={member.imageUrl}
          alt={`Foto profilo di ${member.name}`}
        />
      </div>
    );
  };

  // TeamMemberCard semplificato
  const TeamMemberCard = ({ member, variant = "standard" }: { member: TeamMember, variant?: "standard" | "highlight" }) => (
    <article
      className={`bg-muted hover:shadow-md transition-all duration-300 p-4 sm:p-6 h-full
        ${variant === "highlight"
          ? "border-primary/30 hover:border-primary"
          : "border-muted-foreground/10 hover:border-primary/30"}`}
      aria-labelledby={`member-name-${member.id}`}
      aria-describedby={`member-role-${member.id} member-desc-${member.id}`}
    >
      <div className="flex flex-col items-center text-center h-full">
        <ProfileImage member={member} />
        <h3
          id={`member-name-${member.id}`}
          className="text-lg sm:text-xl font-semibold mb-1"
        >
          {member.name}
        </h3>
        <p
          id={`member-role-${member.id}`}
          className="text-primary font-medium text-xs sm:text-sm mb-2 sm:mb-3"
        >
          {member.role}
        </p>
        <p
          id={`member-desc-${member.id}`}
          className="text-gray-400 text-xs sm:text-sm"
        >
          {member.description}
        </p>
      </div>
    </article>
  );

  // Renderizzazione condizionale per ParallaxEffect
  const MaybeParallax = ({
    children,
    enable,
    ...props
  }: {
    children: React.ReactNode;
    enable: boolean;
    [key: string]: any
  }) => {
    if (!enable) return children;
    return <ParallaxEffect {...props}>{children}</ParallaxEffect>;
  };

  return (
    <section
      id="team"
      className="py-12 sm:py-20 bg-gradient-to-b from-muted to-background relative"
      aria-labelledby="team-heading"
    >
      {/* Elementi decorativi di sfondo */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ParallaxEffect speed={0.1} direction="up" className="absolute -top-40 right-20 opacity-5 hidden md:block">
            <div className="w-96 h-96 rounded-full bg-primary blur-3xl" />
          </ParallaxEffect>
        </div>
      )}

      <div className="container px-4 mx-auto">
        {/* Intestazione della sezione */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-gray-400 uppercase mb-2">PERSONE DIETRO STRYFAI E NON SOLO</p>
          <h2 id="team-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Il nostro Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Ora, le aziende saranno così. Se vuoi anche te Agenti IA per la tua attività, allora chatta con Valentina IA, il pulsante lo trovi sotto.
          </p>
        </div>

        {/* Griglia dei membri del team */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          aria-label="Membri del team"
        >
          {teamMembers.map((member) => (
            <div key={member.id}>
              <MaybeParallax
                enable={mounted}
                speed={0.05}
                direction="up"
              >
                <TeamMemberCard member={member} />
              </MaybeParallax>
            </div>
          ))}
        </div>

        {/* Informazioni sui costi */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <div
            className="bg-muted rounded-lg p-5 sm:p-8 mb-8 sm:mb-12 text-center"
            aria-labelledby="cost-heading"
          >
            <h3 id="cost-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Il costo dell'intero team</h3>
            <p className="text-lg sm:text-xl text-primary font-medium">
              Escludendo il costo delle due persone, il costo mensile è di <span className="font-bold">65 euro</span>
            </p>
          </div>

          {/* Prossime assunzioni */}
          <div className="text-center mb-6 sm:mb-10">
            <h3 id="upcoming-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Le prossime assunzioni</h3>
          </div>

          <div
            className="flex justify-center"
            aria-labelledby="upcoming-heading"
          >
            {upcomingHires.map((member) => (
              <div key={member.id} className="w-full max-w-md mx-auto">
                <MaybeParallax
                  enable={mounted}
                  speed={0.1}
                  direction="up"
                >
                  <TeamMemberCard member={member} variant="highlight" />
                </MaybeParallax>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
