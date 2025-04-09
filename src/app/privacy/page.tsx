import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-36 md:pt-40 pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Ultimo aggiornamento: 7 Aprile 2025
            </p>

            <p className="text-gray-300 mb-6">
              La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni personali quando utilizzi i nostri servizi di progetti e agenti IA su misura.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Informazioni che raccogliamo</h2>
            <p className="text-gray-300 mb-4">
              Possiamo raccogliere le seguenti informazioni:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li><strong>Informazioni personali:</strong> nome, indirizzo email, numero di telefono, indirizzo postale e altre informazioni che ci fornisci volontariamente.</li>
              <li><strong>Informazioni sull'utilizzo:</strong> come interagisci con i nostri servizi, inclusi i dati di accesso, le pagine visitate e le funzionalità utilizzate.</li>
              <li><strong>Informazioni sul dispositivo:</strong> tipo di dispositivo, sistema operativo, browser web e altri dettagli tecnici.</li>
              <li><strong>Dati di localizzazione:</strong> informazioni sulla tua posizione se ci consenti di accedere alla tua posizione.</li>
              <li><strong>Cookie e tecnologie simili:</strong> utilizziamo cookie e tecnologie simili per raccogliere informazioni sui tuoi dispositivi e sul tuo comportamento online.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Come utilizziamo le tue informazioni</h2>
            <p className="text-gray-300 mb-4">
              Utilizziamo le informazioni raccolte per:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Fornire, mantenere e migliorare i nostri servizi di progetti e agenti IA su misura.</li>
              <li>Personalizzare la tua esperienza con i nostri servizi.</li>
              <li>Comunicare con te, inclusi aggiornamenti, notifiche e supporto.</li>
              <li>Analizzare l'utilizzo dei nostri servizi e migliorarne l'efficacia.</li>
              <li>Prevenire frodi e proteggere i nostri utenti e i nostri servizi.</li>
              <li>Adempiere agli obblighi legali e normativi.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Condivisione delle informazioni</h2>
            <p className="text-gray-300 mb-4">
              Possiamo condividere le tue informazioni con:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li><strong>Fornitori di servizi:</strong> terze parti che ci aiutano a fornire e migliorare i nostri servizi.</li>
              <li><strong>Partner commerciali:</strong> società con cui collaboriamo per offrire servizi o promozioni congiunte.</li>
              <li><strong>Autorità governative:</strong> quando richiesto dalla legge o necessario per proteggere i nostri diritti.</li>
              <li><strong>Acquirenti di attività:</strong> in caso di fusione, acquisizione o vendita di attività, le tue informazioni potrebbero essere trasferite come parte dell'operazione.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Sicurezza dei dati</h2>
            <p className="text-gray-300 mb-4">
              Adottiamo misure di sicurezza tecniche, amministrative e fisiche ragionevoli per proteggere le tue informazioni personali. Tuttavia, nessun sistema è completamente sicuro, e non possiamo garantire la sicurezza assoluta delle tue informazioni.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. I tuoi diritti</h2>
            <p className="text-gray-300 mb-4">
              In base al GDPR e ad altre leggi sulla privacy applicabili, potresti avere i seguenti diritti:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Accedere alle tue informazioni personali.</li>
              <li>Correggere informazioni personali inesatte.</li>
              <li>Cancellare le tue informazioni personali in determinate circostanze.</li>
              <li>Limitare o opporti al trattamento delle tue informazioni personali.</li>
              <li>Portabilità dei dati in determinate circostanze.</li>
              <li>Revocare il consenso in qualsiasi momento, se il trattamento si basa sul consenso.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Cookie</h2>
            <p className="text-gray-300 mb-4">
              Utilizziamo cookie e tecnologie simili per raccogliere informazioni sui tuoi dispositivi e sul tuo comportamento online. Per ulteriori informazioni sui cookie che utilizziamo e su come gestirli, consulta la nostra Cookie Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Possiamo aggiornare questa Privacy Policy periodicamente. Ti informeremo di eventuali modifiche pubblicando la nuova Privacy Policy sul nostro sito web e, se le modifiche sono significative, ti forniremo un avviso più prominente.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contatti</h2>
            <p className="text-gray-300 mb-4">
              Per domande o commenti su questa Privacy Policy, contattaci all'indirizzo info@stryf.ai.
            </p>

            <p className="text-gray-300 mt-10">
              <strong>Titolare del trattamento:</strong><br />
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
