import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-36 md:pt-40 pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Termini e Condizioni</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Ultimo aggiornamento: 7 Aprile 2025
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduzione</h2>
            <p className="text-gray-300">
              Benvenuto su Stryfai. Questi Termini e Condizioni regolano l'utilizzo dei nostri servizi, inclusi il nostro sito web e le soluzioni di intelligenza artificiale. Utilizzando i nostri servizi, accetti di essere vincolato da questi termini. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Definizioni</h2>
            <p className="text-gray-300 mb-4">
              In questi Termini e Condizioni:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>"Noi", "nostro", "Stryfai" si riferisce a Stryfai di Danila Kruzilins.</li>
              <li>"Servizi" si riferisce a tutti i prodotti, servizi, contenuti, funzionalità e applicazioni offerte da Stryfai, inclusi gli agenti IA su misura.</li>
              <li>"Tu", "tuo", "utente" si riferisce alla persona o entità che accede o utilizza i nostri Servizi.</li>
              <li>"Contenuto" si riferisce a testi, immagini, video, audio, dati e altre informazioni.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Utilizzo dei Servizi</h2>
            <p className="text-gray-300 mb-4">
              I nostri Servizi sono progettati per fornire progetti IA su misura e agenti IA personalizzati per i nostri clienti. Accetti di utilizzare i nostri Servizi solo per scopi legali e in conformità con questi Termini.
            </p>
            <p className="text-gray-300">
              Non puoi utilizzare i nostri Servizi:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>In violazione di qualsiasi legge o regolamento applicabile.</li>
              <li>Per violare i diritti di qualsiasi persona o entità.</li>
              <li>Per inviare pubblicità o materiale promozionale non richiesto.</li>
              <li>Per impersonare qualsiasi persona o entità.</li>
              <li>Per interferire con o compromettere la sicurezza dei nostri Servizi.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Proprietà Intellettuale</h2>
            <p className="text-gray-300 mb-4">
              Tutti i diritti di proprietà intellettuale relativi ai nostri Servizi sono di proprietà di Stryfai o dei suoi licenziatari. Nulla in questi Termini ti concede diritti sulla nostra proprietà intellettuale.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Privacy</h2>
            <p className="text-gray-300 mb-4">
              La tua privacy è importante per noi. La nostra Informativa sulla Privacy descrive come raccogliamo, utilizziamo e condividiamo le tue informazioni personali. Utilizzando i nostri Servizi, acconsenti alla raccolta e all'utilizzo delle tue informazioni come descritto nella nostra Informativa sulla Privacy.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Limitazione di Responsabilità</h2>
            <p className="text-gray-300 mb-4">
              Nei limiti consentiti dalla legge, Stryfai non sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall'utilizzo o dall'impossibilità di utilizzare i nostri Servizi.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Modifiche ai Termini</h2>
            <p className="text-gray-300 mb-4">
              Possiamo modificare questi Termini in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione dei Termini aggiornati sul nostro sito web. L'utilizzo continuato dei nostri Servizi dopo la pubblicazione delle modifiche costituisce accettazione di tali modifiche.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Legge Applicabile</h2>
            <p className="text-gray-300 mb-4">
              Questi Termini sono regolati e interpretati in conformità con le leggi italiane. Qualsiasi controversia derivante da o relativa a questi Termini sarà soggetta alla giurisdizione esclusiva dei tribunali italiani.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">9. Contatti</h2>
            <p className="text-gray-300 mb-4">
              Per domande o commenti su questi Termini, contattaci all'indirizzo info@stryf.ai.
            </p>

            <p className="text-gray-300 mt-10">
              <strong>Dati Aziendali:</strong><br />
              Stryfai di Danila Kruzilins<br />
              P.IVA: 03095410357<br />
              Email: info@stryf.ai
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
