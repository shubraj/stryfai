import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-36 md:pt-40 pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Ultimo aggiornamento: 7 Aprile 2025
            </p>

            <p className="text-gray-300 mb-6">
              Questa Cookie Policy spiega come Stryfai di Danila Kruzilins ("noi", "nostro" o "Stryfai") utilizza i cookie e tecnologie simili sul nostro sito web. Ti consigliamo di leggere questa policy per comprendere i tipi di cookie che utilizziamo, le informazioni che raccogliamo utilizzando i cookie e come queste informazioni vengono utilizzate.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Cosa sono i cookie?</h2>
            <p className="text-gray-300 mb-6">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web o per farli funzionare in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Tipi di cookie che utilizziamo</h2>
            <p className="text-gray-300 mb-4">
              Utilizziamo diversi tipi di cookie per diversi scopi:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Cookie essenziali:</strong> Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta a azioni da te effettuate che costituiscono una richiesta di servizi, come l'impostazione delle tue preferenze di privacy, l'accesso o la compilazione di moduli. Puoi impostare il tuo browser per bloccare o avvisarti di questi cookie, ma alcune parti del sito potrebbero non funzionare correttamente.
              </li>
              <li>
                <strong>Cookie analitici/di performance:</strong> Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono più o meno popolari e a vedere come i visitatori si muovono all'interno del sito. Tutte le informazioni raccolte da questi cookie sono aggregate e quindi anonime.
              </li>
              <li>
                <strong>Cookie funzionali:</strong> Questi cookie consentono al sito web di fornire funzionalità e personalizzazione avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine. Se non consenti questi cookie, alcune o tutte queste funzionalità potrebbero non funzionare correttamente.
              </li>
              <li>
                <strong>Cookie di targeting/pubblicitari:</strong> Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da queste aziende per costruire un profilo dei tuoi interessi e mostrarti annunci rilevanti su altri siti. Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione univoca del tuo browser e dispositivo Internet.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookie di terze parti</h2>
            <p className="text-gray-300 mb-6">
              In alcuni casi, utilizziamo cookie forniti da terze parti affidabili. La sezione seguente spiega quali cookie di terze parti potresti incontrare attraverso questo sito.
            </p>

            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                Questo sito utilizza Google Analytics, uno dei servizi di analisi web più diffusi e affidabili, per aiutarci a capire come utilizzi il sito e come possiamo migliorare la tua esperienza. Questi cookie possono tenere traccia di cose come quanto tempo trascorri sul sito e le pagine che visiti, in modo che possiamo continuare a produrre contenuti coinvolgenti.
              </li>
              <li>
                Utilizziamo cookie di social media per permetterti di condividere i nostri contenuti sui tuoi social network e per tracciare l'efficacia delle nostre campagne sui social media.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Come gestire i cookie</h2>
            <p className="text-gray-300 mb-6">
              Puoi gestire i cookie attraverso le impostazioni del browser. La maggior parte dei browser ti permette di rifiutare o accettare tutti i cookie, o di accettare solo alcuni tipi di cookie. Ti invitiamo a leggere la sezione di aiuto del tuo browser per sapere come modificare le tue preferenze sui cookie.
            </p>

            <p className="text-gray-300 mb-6">
              Puoi anche gestire le preferenze per i cookie pubblicitari visitando <a href="http://www.youronlinechoices.com" className="text-primary hover:underline">www.youronlinechoices.com</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Conseguenze della disabilitazione dei cookie</h2>
            <p className="text-gray-300 mb-6">
              Se disabiliti i cookie, alcune funzionalità del sito potrebbero diventare inaccessibili o non funzionare correttamente. Questo potrebbe limitare la tua esperienza sul sito e ridurre le funzionalità disponibili.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Modifiche alla Cookie Policy</h2>
            <p className="text-gray-300 mb-6">
              Possiamo aggiornare questa Cookie Policy periodicamente per riflettere, ad esempio, cambiamenti nei cookie che utilizziamo o per altre ragioni operative, legali o normative. Ti invitiamo pertanto a consultare regolarmente questa Cookie Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contatti</h2>
            <p className="text-gray-300 mb-6">
              Per domande o commenti su questa Cookie Policy, contattaci all'indirizzo info@stryf.ai.
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
