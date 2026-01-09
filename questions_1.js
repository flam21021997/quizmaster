const questions_1 = [
  {
    q: "La pianificazione strategica è una pianificazione:",
    correct: "Di lungo termine",
    wrong: [
      "Di breve termine",
      "Operativa giornaliera",
      "Esclusivamente finanziaria"
    ],
    weight: 3
  },
  {
    q: "Fra le seguenti attività non rientra tra le fasi della pianificazione strategica:",
    correct: "Traduzione dei programmi nei termini delle più importanti grandezze finanziarie",
    wrong: [
      "Definizione degli obiettivi strategici",
      "Analisi dell’ambiente interno ed esterno",
      "Scelta delle strategie aziendali"
    ],
    weight: 3
  },
  {
    q: "Gli output dei sistemi di pianificazione e budgeting sono:",
    correct: "Il budget",
    wrong: [
      "Il piano industriale",
      "Il bilancio d’esercizio",
      "Il conto economico consuntivo"
    ],
    weight: 3
  },
  {
    q: "L’attività di budgeting mira ad evidenziare:",
    correct: "Costi, ricavi, entrate e uscite riferibili alle singole unità organizzative",
    wrong: [
      "Solo i costi diretti",
      "Esclusivamente i ricavi previsti",
      "I flussi finanziari a lungo termine"
    ],
    weight: 3
  },
  {
    q: "Il budget in genere ha un orizzonte temporale:",
    correct: "Di un anno, ma può riferirsi anche a periodi più brevi",
    wrong: [
      "Sempre pluriennale",
      "Limitato al semestre",
      "Coincidente con il piano strategico"
    ],
    weight: 3
  },
  {
    q: "La lunghezza dell’orizzonte di pianificazione è influenzata:",
    correct: "Dal ciclo di ritorno degli investimenti",
    wrong: [
      "Dalla dimensione dell’azienda",
      "Dalla struttura organizzativa",
      "Dalla tipologia di bilancio adottato"
    ],
    weight: 3
  },
  {
    q: "Qual è l’elemento che non deve essere considerato dall’imprenditore prima di iniziare l’attività:",
    correct: "Il fattore tempo",
    wrong: [
      "Il capitale iniziale",
      "Il mercato di riferimento",
      "I costi di produzione"
    ],
    weight: 3
  },
  {
    q: "Fra i seguenti fattori costituisce una variabile decisionale di pianificazione e budgeting:",
    correct: "L’orizzonte di pianificazione",
    wrong: [
      "La contabilità generale",
      "Il bilancio civilistico",
      "La fiscalità corrente"
    ],
    weight: 3
  },
  {
    q: "La pianificazione è strategica se si riferisce:",
    correct: "Al lungo termine (3–5 anni) e si esplicita nel piano strategico",
    wrong: [
      "Al breve termine e si esplicita nel budget",
      "All’esercizio annuale",
      "Alla programmazione operativa"
    ],
    weight: 3
  },
  {
    q: "La pianificazione strategica è tattica se si riferisce:",
    correct: "A un lasso temporale ridotto e si esplicita nel piano annuale",
    wrong: [
      "A un periodo superiore ai cinque anni",
      "Alla definizione della mission aziendale",
      "Alla formulazione della vision"
    ],
    weight: 3
  },
  {
    q: "Quante aree di intervento si distinguono in sede di progettazione:",
    correct: "Due",
    wrong: [
      "Tre",
      "Quattro",
      "Cinque"
    ],
    weight: 3
  },
  {
    q: "Quanti grandi gruppi di sistemi operativi si è soliti distinguere:",
    correct: "Tre",
    wrong: [
      "Due",
      "Quattro",
      "Cinque"
    ],
    weight: 3
  },
  {
    q: "Quante sono le configurazioni di base:",
    correct: "Cinque",
    wrong: [
      "Tre",
      "Quattro",
      "Sei"
    ],
    weight: 3
  },
  {
    q: "Il vertice strategico ha la responsabilità:",
    correct: "Globale dell’organizzazione",
    wrong: [
      "Della gestione operativa",
      "Della supervisione tecnica",
      "Della contabilità analitica"
    ],
    weight: 3
  },
  {
    q: "La burocrazia professionale è fondata su:",
    correct: "La standardizzazione delle capacità",
    wrong: [
      "La supervisione diretta",
      "L’adattamento reciproco",
      "La standardizzazione dei processi"
    ],
    weight: 3
  },
  {
    q: "Quanti tipi di analisti esistono:",
    correct: "Tre",
    wrong: [
      "Due",
      "Quattro",
      "Cinque"
    ],
    weight: 3
  },
  {
    q: "La struttura semplice si basa sulla:",
    correct: "Supervisione diretta",
    wrong: [
      "Standardizzazione dei processi",
      "Standardizzazione delle competenze",
      "Adattamento reciproco"
    ],
    weight: 3
  },
  {
    q: "L’adattamento reciproco consegue il coordinamento attraverso:",
    correct: "La comunicazione informale",
    wrong: [
      "La gerarchia",
      "Le procedure formalizzate",
      "Il controllo diretto"
    ],
    weight: 3
  },
  {
    q: "La supervisione diretta consegue il coordinamento attraverso:",
    correct: "Una persona che assume la responsabilità del lavoro di altri",
    wrong: [
      "La standardizzazione dei risultati",
      "La comunicazione laterale",
      "L’autonomia operativa"
    ],
    weight: 3
  },
  {
    q: "Le due aree di intervento della progettazione sono:",
    correct: "Macrostruttura e microstruttura",
    wrong: [
      "Struttura e processo",
      "Vertice e linea",
      "Staff e line"
    ],
    weight: 3
  },
  {
    q: "Il break-even point è il punto nel quale:",
    correct: "I ricavi totali uguagliano i costi totali",
    wrong: [
      "I costi fissi sono pari ai costi variabili",
      "Il margine di contribuzione è massimo",
      "Il profitto è positivo"
    ],
    weight: 3
  },
  {
    q: "Il punto di pareggio può essere individuato:",
    correct: "Con metodo grafico e matematico",
    wrong: [
      "Solo con metodo grafico",
      "Solo con metodo matematico",
      "Solo tramite il budget"
    ],
    weight: 3
  },
  {
    q: "La break-even analysis è:",
    correct: "Un metodo soggetto a numerose condizioni di validità",
    wrong: [
      "Un metodo valido in ogni situazione",
      "Un’analisi esclusivamente finanziaria",
      "Un’analisi priva di ipotesi semplificative"
    ],
    weight: 3
  },
  {
    q: "Il profittogramma rappresenta:",
    correct: "Una forma alternativa per rappresentare le relazioni tra costi, volumi e risultati",
    wrong: [
      "Un prospetto di bilancio consuntivo",
      "Un documento di pianificazione strategica",
      "Un grafico dei flussi di cassa"
    ],
    weight: 3
  },
  {
    q: "Se i costi fissi diminuiscono:",
    correct: "Il punto di pareggio si ottiene a un livello di produzione minore",
    wrong: [
      "Il punto di pareggio aumenta",
      "Il margine di contribuzione diminuisce",
      "Il profitto diventa negativo"
    ],
    weight: 3
  },
  {
    q: "Nell’analisi del Break-Even Time i regimi di sviluppo dei volumi sono:",
    correct: "Regolare e irregolare",
    wrong: [
      "Costante e variabile",
      "Progressivo e regressivo",
      "Continuo e discontinuo"
    ],
    weight: 3
  },
  {
    q: "Il margine di sicurezza rappresenta:",
    correct: "La possibilità di assorbire un calo della domanda prima del pareggio",
    wrong: [
      "Il livello minimo di profitto",
      "Il surplus di produzione",
      "Il margine operativo lordo"
    ],
    weight: 3
  },
  {
    q: "Il profittogramma rappresenta le relazioni tra:",
    correct: "Costi, volumi e risultati",
    wrong: [
      "Ricavi e investimenti",
      "Entrate e uscite",
      "Attività e passività"
    ],
    weight: 3
  },
  {
    q: "La funzione di contribuzione è rappresentata da una retta con origine:",
    correct: "Nel valore dei costi fissi",
    wrong: [
      "Nel punto di pareggio",
      "Nel margine operativo",
      "Nel volume massimo di produzione"
    ],
    weight: 3
  },
  {
    q: "Il profittogramma evidenzia:",
    correct: "Il livello di rischiosità e il margine di sicurezza",
    wrong: [
      "Il risultato netto e il cash flow",
      "I ricavi e i costi variabili",
      "Il break-even e il ROI"
    ],
    weight: 3
  },
  {
    q: "L’analisi degli scostamenti individua:",
    correct: "Le difformità tra risultati preventivi e consuntivi",
    wrong: [
      "Le variazioni di bilancio",
      "Le anomalie contabili",
      "Gli errori di pianificazione"
    ],
    weight: 3
  },
  {
    q: "La determinazione delle quantità intermedie consente di individuare:",
    correct: "Volume, efficienza e prezzo",
    wrong: [
      "Costi fissi e variabili",
      "Ricavi e margini",
      "Entrate e uscite"
    ],
    weight: 3
  },
  {
    q: "Le tappe per implementare un sistema di controllo per scostamenti sono:",
    correct: "Cinque",
    wrong: [
      "Tre",
      "Quattro",
      "Sei"
    ],
    weight: 3
  },
  {
    q: "I report dell’analisi degli scostamenti sono:",
    correct: "Di mercato, di produzione e di struttura",
    wrong: [
      "Finanziari e patrimoniali",
      "Gestionali e fiscali",
      "Strategici e operativi"
    ],
    weight: 3
  },
  {
    q: "Le varianti di mercato riguardano:",
    correct: "I ricavi delle vendite e delle prestazioni",
    wrong: [
      "I costi di produzione",
      "I costi fissi industriali",
      "Le scorte di magazzino"
    ],
    weight: 3
  },
  {
    q: "Le varianti sui ricavi sono:",
    correct: "Di volume, di mix e di prezzo",
    wrong: [
      "Di costo, di efficienza e di scarto",
      "Di investimento e disinvestimento",
      "Di produzione e di struttura"
    ],
    weight: 3
  },
  {
    q: "Una variante di volume negativa può essere dovuta:",
    correct: "A un elevato livello delle scorte",
    wrong: [
      "A un aumento dei prezzi",
      "A una riduzione dei costi fissi",
      "A un miglioramento dell’efficienza"
    ],
    weight: 3
  },
  {
    q: "Le varianti di produzione riguardano:",
    correct: "Materie prime, lavoro e costi fissi di produzione",
    wrong: [
      "Solo i costi variabili",
      "Solo il personale",
      "Solo i costi amministrativi"
    ],
    weight: 3
  },
  {
    q: "L’efficienza consuntiva rappresenta:",
    correct: "La quantità di tempo-uomo impiegato nelle lavorazioni",
    wrong: [
      "Il numero di addetti",
      "Il costo medio del lavoro",
      "Il rendimento degli investimenti"
    ],
    weight: 3
  },
  {
    q: "L’ultima serie di fattori della funzione di produzione riguarda:",
    correct: "I costi fissi industriali",
    wrong: [
      "I costi variabili",
      "I ricavi di vendita",
      "Le immobilizzazioni"
    ],
    weight: 3
  },
  {
    q: "La Riforma del Servizio Sanitario Nazionale nasce con:",
    correct: "Il D.Lgs. 502/1992",
    wrong: [
      "La legge 833/1978",
      "Il D.Lgs. 229/1999",
      "La legge 42/1999"
    ],
    weight: 3
  },
  {
    q: "Il D.Lgs. 502/92 attribuisce alle Regioni il compito di:",
    correct: "Disciplinare l’organizzazione nelle linee generali",
    wrong: [
      "Determinare i LEA",
      "Gestire direttamente il SSN",
      "Stabilire i livelli di tassazione"
    ],
    weight: 3
  },
  {
    q: "Il modello aziendale nelle aziende sanitarie impone attenzione a:",
    correct: "Economicità della gestione",
    wrong: [
      "Centralizzazione amministrativa",
      "Riduzione delle prestazioni",
      "Esclusiva attenzione al profitto"
    ],
    weight: 3
  },
  {
    q: "Il mantenimento in carica del Direttore Generale è collegato:",
    correct: "Al pareggio di bilancio",
    wrong: [
      "Alla durata del mandato politico",
      "Alla produttività del personale",
      "Alla soddisfazione dell’utenza"
    ],
    weight: 3
  },
  {
    q: "Il controllo di gestione è:",
    correct: "Un’attività di orientamento e monitoraggio della gestione",
    wrong: [
      "Un controllo ispettivo esterno",
      "Un’attività esclusivamente contabile",
      "Un’attività sanzionatoria"
    ],
    weight: 3
  },
  {
    q: "Nel controllo di gestione le variazioni economiche riguardano:",
    correct: "Le variazioni economiche misurate dall’azienda",
    wrong: [
      "Solo le entrate monetarie",
      "Solo i costi fissi",
      "Le variazioni fiscali"
    ],
    weight: 3
  },
  {
    q: "Nel controllo di gestione l’esercizio amministrativo è solitamente:",
    correct: "Mensile o trimestrale",
    wrong: [
      "Annuale",
      "Biennale",
      "Pluriennale"
    ],
    weight: 3
  },
  {
    q: "Il cash flow è dato dalla differenza tra:",
    correct: "Entrate monetarie e uscite monetarie",
    wrong: [
      "Ricavi e costi",
      "Costi fissi e variabili",
      "Entrate e ricavi"
    ],
    weight: 3
  },
  {
    q: "La redditività nasce:",
    correct: "Dal rapporto tra risultati economici e capitale investito",
    wrong: [
      "Dal margine operativo lordo",
      "Dal cash flow positivo",
      "Dalla riduzione dei costi"
    ],
    weight: 3
  },
  {
    q: "Il controllo organizzativo riguarda:",
    correct: "Le interrelazioni tra sistema di controllo e sistema organizzativo",
    wrong: [
      "La sola struttura gerarchica",
      "Il sistema informativo",
      "Il controllo dei costi"
    ],
    weight: 3
  },
  {
    q: "Le casse mutue erano:",
    correct: "Enti assicurativi",
    wrong: [
      "Enti territoriali",
      "Aziende sanitarie",
      "Strutture private convenzionate"
    ],
    weight: 3
  },
  {
    q: "Dopo la legge 833/78 l’organo centrale statale diviene:",
    correct: "Il Ministero della Sanità",
    wrong: [
      "Il Ministero dell’Economia",
      "Il Parlamento",
      "La Conferenza Stato-Regioni"
    ],
    weight: 3
  },
  {
    q: "La legge di devoluzione regionale è:",
    correct: "La legge n. 3 del 18 ottobre 2001",
    wrong: [
      "La legge 833/1978",
      "Il D.Lgs. 502/1992",
      "Il D.Lgs. 229/1999"
    ],
    weight: 3
  },
  {
    q: "Lo Stato ha potestà esclusiva in sanità per:",
    correct: "La determinazione dei LEA",
    wrong: [
      "L’organizzazione dei servizi",
      "La gestione delle ASL",
      "Il finanziamento regionale"
    ],
    weight: 3
  },
  {
    q: "La competenza concorrente Stato-Regioni significa:",
    correct: "Lo Stato definisce i principi generali e le Regioni la normativa di dettaglio",
    wrong: [
      "Le Regioni decidono in autonomia totale",
      "Lo Stato gestisce direttamente i servizi",
      "Le Regioni fissano i LEA"
    ],
    weight: 3
  },
  {
    q: "Il Dipartimento Qualità è parte:",
    correct: "Del Ministero della Salute",
    wrong: [
      "Delle ASL",
      "Delle Regioni",
      "Dell’INAIL"
    ],
    weight: 3
  },
  {
    q: "Il Dipartimento Innovazione svolge attività di:",
    correct: "Promozione e verifica della ricerca scientifica e tecnologica",
    wrong: [
      "Gestione del personale",
      "Controllo dei costi",
      "Programmazione sanitaria regionale"
    ],
    weight: 3
  },
  {
    q: "Le USL sono:",
    correct: "Insiemi di presidi, uffici e servizi di un comune",
    wrong: [
      "Aziende private",
      "Strutture ospedaliere autonome",
      "Enti assicurativi"
    ],
    weight: 3
  },
  {
    q: "Il precetto costituzionale fondamentale in sanità è:",
    correct: "L’articolo 32 della Costituzione",
    wrong: [
      "L’articolo 38",
      "L’articolo 41",
      "L’articolo 117"
    ],
    weight: 3
  },
  {
    q: "L’Agenzia per i servizi sanitari regionali è:",
    correct: "Un organismo di supporto del Ministero della Salute",
    wrong: [
      "Un ente regionale autonomo",
      "Un’azienda sanitaria",
      "Un organismo privato"
    ],
    weight: 3
  },
  {
    q: "Le ASL sono aziende con:",
    correct: "Personalità giuridica di diritto pubblico e autonomia imprenditoriale",
    wrong: [
      "Personalità giuridica privata",
      "Autonomia esclusivamente contabile",
      "Gestione ministeriale diretta"
    ],
    weight: 3
  },
  {
    q: "I LEA sono:",
    correct: "Livelli essenziali ed uniformi di assistenza",
    wrong: [
      "Livelli economici aziendali",
      "Livelli di assistenza regionale",
      "Livelli di prestazioni facoltative"
    ],
    weight: 3
  },
  {
    q: "Sono escluse dai LEA le prestazioni di:",
    correct: "Chirurgia estetica non conseguente a incidenti",
    wrong: [
      "Medicina preventiva",
      "Assistenza ospedaliera",
      "Assistenza territoriale"
    ],
    weight: 3
  },
  {
    q: "La medicina basata sull’evidenza prevede:",
    correct: "Prestazioni con evidenze scientifiche a carico del SSN",
    wrong: [
      "Prestazioni scelte dal medico",
      "Prestazioni sperimentali",
      "Prestazioni a pagamento"
    ],
    weight: 3
  },
  {
    q: "Entro quanto tempo dall’adozione del Piano Sanitario Nazionale le Regioni adottano i piani sanitari regionali:",
    correct: "Entro 150 giorni",
    wrong: [
      "Entro 90 giorni",
      "Entro 180 giorni",
      "Entro un anno"
    ],
    weight: 3
  },
  {
    q: "La figura di vertice delle aziende USL è:",
    correct: "Il Direttore Generale",
    wrong: [
      "Il Direttore Sanitario",
      "Il Direttore Amministrativo",
      "Il Collegio Sindacale"
    ],
    weight: 3
  },
  {
    q: "Il Direttore Amministrativo è responsabile:",
    correct: "Della direzione dei servizi amministrativi",
    wrong: [
      "Della gestione clinica",
      "Del coordinamento infermieristico",
      "Della programmazione regionale"
    ],
    weight: 3
  },
  {
    q: "Il Collegio Sindacale è:",
    correct: "Un organo con poteri di controllo economico-contabile",
    wrong: [
      "Un organo di direzione",
      "Un organo consultivo",
      "Un organismo regionale"
    ],
    weight: 3
  },
  {
    q: "Il Consiglio dei Sanitari è:",
    correct: "Un organismo elettivo con funzioni consultive tecnico-sanitarie",
    wrong: [
      "Un organo di gestione",
      "Un organo di controllo",
      "Un organismo politico"
    ],
    weight: 3
  },
  {
    q: "L’accreditamento istituzionale è:",
    correct: "Un’autorizzazione regionale per strutture pubbliche o private",
    wrong: [
      "Un contratto di lavoro",
      "Una certificazione ISO",
      "Un titolo universitario"
    ],
    weight: 3
  },
  {
    q: "Gli obiettivi specifici dei carichi di lavoro richiedono:",
    correct: "La partecipazione attiva di tutto il personale",
    wrong: [
      "Il controllo esclusivo della direzione",
      "La riduzione del personale",
      "La standardizzazione rigida"
    ],
    weight: 3
  },
  {
    q: "L’art. 8 del DPR 128/1969 è riferito:",
    correct: "Ai minuti di assistenza effettiva",
    wrong: [
      "Alla programmazione del personale",
      "Alla formazione continua",
      "Alla contabilità sanitaria"
    ],
    weight: 3
  },
  {
    q: "Il D.L. n. 29 del 3/2/1993 riguarda:",
    correct: "La privatizzazione del pubblico impiego",
    wrong: [
      "La riforma sanitaria",
      "Il sistema di accreditamento",
      "La dirigenza medica"
    ],
    weight: 3
  },
  {
    q: "Il ruolo del management è inteso come:",
    correct: "Corretto e razionale utilizzo delle risorse",
    wrong: [
      "Riduzione dei costi a ogni costo",
      "Gestione burocratica",
      "Attività esclusivamente amministrativa"
    ],
    weight: 3
  },
  {
    q: "La programmazione del personale deve partire:",
    correct: "Dai relativi obiettivi",
    wrong: [
      "Dal numero di dipendenti",
      "Dal budget disponibile",
      "Dalla dotazione organica"
    ],
    weight: 3
  },
  {
    q: "Una delle fasi della pianificazione è:",
    correct: "L’individuazione dei profili professionali necessari",
    wrong: [
      "La valutazione fiscale",
      "La rendicontazione",
      "La certificazione dei costi"
    ],
    weight: 3
  },
  {
    q: "Le norme di riferimento per la programmazione del personale sono:",
    correct: "Art. 6 del D.Lgs. 165/2001 e art. 91 del Testo Unico",
    wrong: [
      "Legge 833/1978",
      "D.Lgs. 502/1992",
      "D.P.R. 128/1969"
    ],
    weight: 3
  },
  {
    q: "La risorsa umana in sanità è fondamentale:",
    correct: "Come fattore di produttività e costo economico",
    wrong: [
      "Solo come costo",
      "Solo come risorsa tecnica",
      "Solo come supporto operativo"
    ],
    weight: 3
  },
  {
    q: "La pianta organica è un concetto statico perché:",
    correct: "Si riferisce a un contenitore da riempire",
    wrong: [
      "È aggiornata annualmente",
      "Dipende dal budget",
      "È legata ai LEA"
    ],
    weight: 3
  },
  {
    q: "I carichi di lavoro sono elaborati per:",
    correct: "Rispondere a quesiti organizzativi",
    wrong: [
      "Determinare le retribuzioni",
      "Valutare il bilancio",
      "Ridurre i costi fissi"
    ],
    weight: 3
  },
  {
    q: "La comunicazione è:",
    correct: "Un processo circolare",
    wrong: [
      "Un processo lineare",
      "Un processo unidirezionale",
      "Un atto formale"
    ],
    weight: 3
  },
  {
    q: "La comunicazione interpersonale consente il rapporto attraverso:",
    correct: "Sguardo, espressioni del volto, voce, postura e gestualità",
    wrong: [
      "Solo il linguaggio verbale",
      "Solo la scrittura",
      "Solo il linguaggio tecnico"
    ],
    weight: 3
  },
  {
    q: "La competenza comunicativa significa:",
    correct: "Abilità comunicativa e scelta di stile e canale adeguato",
    wrong: [
      "Uso del linguaggio tecnico",
      "Capacità di scrivere correttamente",
      "Conoscenza dei protocolli"
    ],
    weight: 3
  },
  {
    q: "La comunicazione nelle organizzazioni consente:",
    correct: "La circolazione delle informazioni per mantenere l’efficacia",
    wrong: [
      "Il controllo gerarchico",
      "La riduzione del personale",
      "La standardizzazione rigida"
    ],
    weight: 3
  },
  {
    q: "Nella sequenza comunicativa il codice è:",
    correct: "Il sistema di segni utilizzato per comunicare",
    wrong: [
      "Il messaggio",
      "Il canale",
      "Il contesto"
    ],
    weight: 3
  },
  {
    q: "Avverto, tocco, afferro: quale canale di comunicazione?",
    correct: "Cinestesico",
    wrong: [
      "Visivo",
      "Uditivo",
      "Verbale"
    ],
    weight: 3
  },
  {
    q: "La comunicazione è influenzata:",
    correct: "Dallo stato emotivo e dalla rielaborazione del messaggio",
    wrong: [
      "Solo dal rumore",
      "Solo dal codice",
      "Solo dal canale"
    ],
    weight: 3
  },
  {
    q: "Le cause di distorsione della comunicazione sono:",
    correct: "Attribuibili sia all’emittente che al ricevente",
    wrong: [
      "Solo all’emittente",
      "Solo al ricevente",
      "Solo al contesto"
    ],
    weight: 3
  },
  {
    q: "Affronto e supero l’ostacolo del linguaggio molto tecnico:",
    correct: "Chiedendo feedback al mio interlocutore",
    wrong: [
      "Utilizzando termini ancora più specialistici",
      "Riducendo la comunicazione",
      "Affidandomi solo alla documentazione scritta"
    ],
    weight: 3
  },
  {
    q: "Accolgo un ferito grave al pronto soccorso, sveglio e cosciente:",
    correct: "Lo accolgo con tranquillità, lo rassicuro e lo distendo",
    wrong: [
      "Lo ignoro per evitare stress",
      "Lo lascio in piedi per monitorarlo",
      "Mi concentro solo sugli aspetti burocratici"
    ],
    weight: 3
  },
  {
    q: "Si definisce gruppo di lavoro:",
    correct: "Un insieme organizzato di persone che si influenzano reciprocamente",
    wrong: [
      "Un insieme casuale di individui",
      "Un gruppo senza obiettivi",
      "Una struttura gerarchica rigida"
    ],
    weight: 3
  },
  {
    q: "Il gruppo di lavoro è caratterizzato da persone che:",
    correct: "Condividono valori, norme, ruoli e obiettivi",
    wrong: [
      "Operano in modo indipendente",
      "Hanno solo rapporti formali",
      "Seguono esclusivamente ordini"
    ],
    weight: 3
  },
  {
    q: "Il conflitto è:",
    correct: "Una divergenza di opinione e un difetto di comunicazione relazionale",
    wrong: [
      "Un errore organizzativo",
      "Sempre negativo",
      "Un atto disciplinare"
    ],
    weight: 3
  },
  {
    q: "Il conflitto può essere gestito:",
    correct: "Con un atteggiamento assertivo",
    wrong: [
      "Evitandolo sempre",
      "Imponendo la propria opinione",
      "Delegandolo ad altri"
    ],
    weight: 3
  },
  {
    q: "Il conflitto intrapersonale secondo Rahim emerge:",
    correct: "Dalla non corrispondenza tra competenze e compiti assegnati",
    wrong: [
      "Dal confronto tra colleghi",
      "Da problemi organizzativi",
      "Da carichi di lavoro eccessivi"
    ],
    weight: 3
  },
  {
    q: "Il conflitto interpersonale può essere gestito:",
    correct: "Mirando agli obiettivi assegnati e ignorando quelli degli altri",
    wrong: [
      "Solo con la mediazione esterna",
      "Attraverso sanzioni",
      "Con l’isolamento"
    ],
    weight: 3
  },
  {
    q: "La sottomissione è appropriata nella gestione del conflitto:",
    correct: "Quando il risultato è importante per la controparte",
    wrong: [
      "Quando si ha una posizione di forza",
      "Quando il conflitto è minimo",
      "Quando si è certi di avere ragione"
    ],
    weight: 3
  },
  {
    q: "Si evita il confronto interpersonale quando:",
    correct: "È necessario prendere tempo per calmarsi",
    wrong: [
      "Si vuole imporre la propria idea",
      "Il conflitto è grave",
      "Il problema è strutturale"
    ],
    weight: 3
  },
  {
    q: "Gli obiettivi di una buona leadership sono:",
    correct: "Riconoscere e coordinare adeguate relazioni interpersonali",
    wrong: [
      "Imporre le decisioni",
      "Evitare il confronto",
      "Centralizzare tutte le attività"
    ],
    weight: 3
  },
  {
    q: "Maggiore è la complessità decisionale:",
    correct: "Maggiore è il bisogno di informazioni",
    wrong: [
      "Minore è il bisogno di controllo",
      "Minore è il rischio",
      "Minore è il coinvolgimento"
    ],
    weight: 3
  },
  {
    q: "L’EBM rappresenta:",
    correct: "Un approccio che integra esperienza, evidenze e preferenze del paziente",
    wrong: [
      "Una linea guida obbligatoria",
      "Una pratica esclusivamente clinica",
      "Un modello organizzativo"
    ],
    weight: 3
  },
  {
    q: "L’Evidence Based Nursing è:",
    correct: "Un approccio infermieristico fondato sull’EBP",
    wrong: [
      "Un modello organizzativo",
      "Una procedura amministrativa",
      "Una tecnica assistenziale"
    ],
    weight: 3
  },
  {
    q: "Per formulare un quesito clinico è necessario riferirsi a:",
    correct: "Malattia, esposizione, alternativa ed eventi",
    wrong: [
      "Solo alla diagnosi",
      "Solo alla terapia",
      "Solo agli esiti"
    ],
    weight: 3
  },
  {
    q: "Le migliori evidenze scientifiche si ricercano tramite:",
    correct: "Meta-analisi, linee guida e banche dati",
    wrong: [
      "Opinioni personali",
      "Esperienza clinica isolata",
      "Linee amministrative"
    ],
    weight: 3
  },
  {
    q: "Le linee guida sono:",
    correct: "Raccomandazioni di comportamento clinico",
    wrong: [
      "Obblighi giuridici",
      "Norme disciplinari",
      "Protocolli amministrativi"
    ],
    weight: 3
  },
  {
    q: "Gli studi caso-controllo:",
    correct: "Confrontano soggetti con e senza una condizione",
    wrong: [
      "Seguono una coorte nel tempo",
      "Testano farmaci randomizzati",
      "Valutano interventi clinici"
    ],
    weight: 3
  },
  {
    q: "Gli studi randomizzati controllati (RCT):",
    correct: "Testano farmaci con assegnazione casuale dei soggetti",
    wrong: [
      "Sono studi osservazionali",
      "Non prevedono gruppi di confronto",
      "Non utilizzano placebo"
    ],
    weight: 3
  }
];