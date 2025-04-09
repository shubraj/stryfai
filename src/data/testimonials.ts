export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  hoursSaved: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Martina Rossi",
    role: "Direttore Commerciale",
    company: "Tech Solutions SRL",
    content: "Gli agenti IA di Stryfai hanno trasformato il nostro processo di vendita. Abbiamo automatizzato il follow-up con i clienti, la qualificazione dei lead e la pianificazione delle demo. Il nostro team risparmia almeno 20 ore a settimana e ha aumentato le conversioni del 35%.",
    rating: 5,
    hoursSaved: 1040
  },
  {
    id: "t2",
    name: "Andrea Bianchi",
    role: "CTO",
    company: "Innovate Digital",
    content: "Inizialmente ero scettico sugli agenti IA, ma dopo aver implementato Stryfai per l'assistenza clienti, non potremmo più farne a meno. I nostri agenti gestiscono l'80% delle richieste di supporto di primo livello, permettendo al nostro team di concentrarsi su problemi più complessi.",
    rating: 5,
    hoursSaved: 2160
  },
  {
    id: "t3",
    name: "Sara Marino",
    role: "HR Director",
    company: "GruppoFinance",
    content: "L'agente IA per le risorse umane ha rivoluzionato il nostro processo di selezione. Ora gestiamo lo screening iniziale, la programmazione dei colloqui e l'onboarding in modo automatico. Il risparmio di tempo è stato incredibile, e la qualità delle assunzioni è addirittura migliorata.",
    rating: 4,
    hoursSaved: 960
  },
  {
    id: "t4",
    name: "Luca Ferretti",
    role: "CEO",
    company: "Startup Ventures",
    content: "Come fondatore, indosso molti cappelli ogni giorno. Il mio assistente IA personale mi ha aiutato a gestire email, appuntamenti e ricerche di mercato, restituendomi circa 15 ore settimanali che posso dedicare allo sviluppo strategico dell'azienda. È come avere un co-fondatore instancabile.",
    rating: 5,
    hoursSaved: 780
  },
  {
    id: "t5",
    name: "Chiara Neri",
    role: "Marketing Manager",
    company: "BrandConnect Italia",
    content: "Gli agenti IA di Stryfai hanno automatizzato la nostra analisi dei dati di marketing e la creazione di report. Quello che una volta richiedeva giorni di lavoro, ora viene completato in pochi minuti con una precisione sorprendente. Abbiamo risparmiato oltre 800 ore nell'ultimo anno.",
    rating: 4,
    hoursSaved: 800
  }
];
