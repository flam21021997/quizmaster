const questions_2 = [
  {
    q: "Il Rischio Relativo (RR) indica:",
    correct: "Quante volte è più o meno probabile un evento negli esposti rispetto ai non esposti",
    wrong: [
      "La probabilità assoluta di un evento",
      "Il numero totale di eventi osservati",
      "La differenza tra incidenza e prevalenza"
    ],
    weight: 3
  },
  {
    q: "In uno studio con livello di evidenza Ia le informazioni derivano da:",
    correct: "Revisioni sistematiche o meta-analisi di studi clinici randomizzati",
    wrong: [
      "Studi osservazionali",
      "Case report",
      "Opinioni di esperti"
    ],
    weight: 3
  },
  {
    q: "Il Governo Clinico è:",
    correct: "Il governo dei processi professionali, organizzativi e finanziari basato sull’EB",
    wrong: [
      "Il controllo politico della sanità",
      "Un sistema ispettivo",
      "Una funzione esclusivamente amministrativa"
    ],
    weight: 3
  },
  {
    q: "La Contingency Theory è:",
    correct: "Una teoria situazionale",
    wrong: [
      "Una teoria classica",
      "Una teoria motivazionale",
      "Una teoria comportamentale"
    ],
    weight: 3
  },
  {
    q: "Gli approcci alla gestione delle risorse umane sono:",
    correct: "Lineare, interdipendente e interattivo-evolutivo",
    wrong: [
      "Gerarchico e funzionale",
      "Centralizzato e decentralizzato",
      "Tecnico e amministrativo"
    ],
    weight: 3
  },
  {
    q: "La Mappa del Valore della Risorsa è composta da:",
    correct: "Quattro quadranti",
    wrong: [
      "Tre quadranti",
      "Cinque quadranti",
      "Sei quadranti"
    ],
    weight: 3
  },
  {
    q: "Le fasi della Mappa del Valore della Risorsa sono:",
    correct: "Competenze, valorizzazione, relazioni e performance",
    wrong: [
      "Analisi, pianificazione, controllo",
      "Input, processo, output",
      "Valutazione, sviluppo, risultato"
    ],
    weight: 3
  },
  {
    q: "Le competenze di chi gestisce risorse umane sono:",
    correct: "Leadership e capacità di influenzare",
    wrong: [
      "Solo competenze tecniche",
      "Solo competenze amministrative",
      "Solo competenze cliniche"
    ],
    weight: 3
  },
  {
    q: "Il massimo esponente della Scuola Classica è:",
    correct: "F.W. Taylor",
    wrong: [
      "Elton Mayo",
      "Maslow",
      "Herzberg"
    ],
    weight: 3
  },
  {
    q: "Il modello organizzativo in LINE è caratterizzato da:",
    correct: "Accentramento direzionale",
    wrong: [
      "Decentramento",
      "Autonomia operativa",
      "Gestione per progetti"
    ],
    weight: 3
  },
  {
    q: "Il modello organizzativo divisionale è detto anche:",
    correct: "In staff",
    wrong: [
      "In line",
      "Funzionale",
      "Per processi"
    ],
    weight: 3
  },
  {
    q: "Il concetto fondamentale dell’assistenza sanitaria si basa su:",
    correct: "La relazione tra uomo e salute",
    wrong: [
      "La tecnologia",
      "L’organizzazione",
      "La prestazione economica"
    ],
    weight: 3
  },
  {
    q: "I postulati dell’assistenza sono:",
    correct: "Essere umano, salute e malattia",
    wrong: [
      "Cura, assistenza e riabilitazione",
      "Diagnosi, terapia e follow-up",
      "Prevenzione, cura e gestione"
    ],
    weight: 3
  },
  {
    q: "Un percorso assistenziale è:",
    correct: "Un macroprocesso che comprende l’intera gestione del problema di salute",
    wrong: [
      "Una procedura amministrativa",
      "Un protocollo clinico isolato",
      "Un atto medico"
    ],
    weight: 3
  },
  {
    q: "Un percorso assistenziale di qualità è caratterizzato da:",
    correct: "Adattamento e condivisione locale",
    wrong: [
      "Rigidità applicativa",
      "Standardizzazione assoluta",
      "Centralizzazione decisionale"
    ],
    weight: 3
  },
  {
    q: "L’adozione di un percorso assistenziale presenta il vantaggio di:",
    correct: "Tenere conto degli esiti di salute",
    wrong: [
      "Ridurre i costi amministrativi",
      "Eliminare la variabilità clinica",
      "Standardizzare rigidamente le cure"
    ],
    weight: 3
  },
  {
    q: "L’adozione di un percorso assistenziale presenta lo svantaggio di:",
    correct: "Poter essere applicato a uno specifico problema",
    wrong: [
      "Non considerare gli esiti",
      "Essere privo di evidenze scientifiche",
      "Essere obbligatorio per tutte le patologie"
    ],
    weight: 3
  },
  {
    q: "L’implementazione di un percorso assistenziale è complessa perché:",
    correct: "Può essere percepita come perdita di autonomia decisionale",
    wrong: [
      "Richiede solo risorse economiche",
      "È priva di linee guida",
      "È sempre rifiutata dai pazienti"
    ],
    weight: 3
  },
  {
    q: "Le categorie assistenziali principali sono:",
    correct: "Processi che possono intersecarsi e sovrapporsi",
    wrong: [
      "Procedure rigide",
      "Atti amministrativi",
      "Protocolli isolati"
    ],
    weight: 3
  },
  {
    q: "I trattamenti previsti in un percorso assistenziale devono:",
    correct: "Rispettare il criterio di appropriatezza professionale",
    wrong: [
      "Seguire esclusivamente il costo",
      "Essere uguali per tutti",
      "Dipendere dalla struttura"
    ],
    weight: 3
  },
  {
    q: "Nel percorso assistenziale l’educazione del paziente consiste:",
    correct: "Nel fornire informazioni sulla malattia e sulla gestione",
    wrong: [
      "Nel solo consenso informato",
      "Nella sola dimissione",
      "Nella formazione del personale"
    ],
    weight: 3
  },
  {
    q: "Il monitoraggio del percorso assistenziale riguarda:",
    correct: "Applicazione del percorso e risultati prodotti",
    wrong: [
      "Solo la fase iniziale",
      "Solo i costi",
      "Solo la soddisfazione del personale"
    ],
    weight: 3
  },
  {
    q: "Nel percorso assistenziale il ciclo di valutazione e miglioramento continuo:",
    correct: "È fondamentale",
    wrong: [
      "È facoltativo",
      "È occasionale",
      "È solo documentale"
    ],
    weight: 3
  },
  {
    q: "Il D.Lgs. 42/1999 disciplina:",
    correct: "Le professioni sanitarie",
    wrong: [
      "Il sistema dei LEA",
      "L’accreditamento istituzionale",
      "La dirigenza medica"
    ],
    weight: 3
  },
  {
    q: "La legge 10 agosto 2000 n. 251 disciplina:",
    correct: "Le professioni sanitarie",
    wrong: [
      "Il sistema universitario",
      "Il SSN",
      "La formazione ECM"
    ],
    weight: 3
  },
  {
    q: "Il D.M. 2 aprile 2001 prevede:",
    correct: "La determinazione delle classi di laurea",
    wrong: [
      "La formazione ECM",
      "L’accreditamento",
      "La dirigenza infermieristica"
    ],
    weight: 3
  },
  {
    q: "L’art. 4 del CCNL 2006–2009 prevede per il coordinamento:",
    correct: "Il master di primo livello",
    wrong: [
      "La laurea magistrale",
      "L’anzianità di servizio",
      "Un concorso pubblico"
    ],
    weight: 3
  },
  {
    q: "Le funzioni del coordinatore si collocano in un contesto di:",
    correct: "Governance",
    wrong: [
      "Contabilità",
      "Ispezione",
      "Valutazione fiscale"
    ],
    weight: 3
  },
  {
    q: "Lo staffing è una funzione del management orientata a:",
    correct: "Gestire le risorse umane",
    wrong: [
      "Gestire i budget",
      "Gestire le strutture",
      "Gestire i flussi informativi"
    ],
    weight: 3
  },
  {
    q: "Il coordinatore deve essere riconosciuto come:",
    correct: "Team leader",
    wrong: [
      "Controllore",
      "Ispettore",
      "Amministratore"
    ],
    weight: 3
  },
  {
    q: "Gli indicatori consentono di monitorare i processi al fine di:",
    correct: "Ridurre l’accadimento di eventi avversi",
    wrong: [
      "Aumentare i costi",
      "Standardizzare il personale",
      "Ridurre le prestazioni"
    ],
    weight: 3
  },
  {
    q: "La validazione è un processo volto a esprimere un giudizio di:",
    correct: "Conformità a standard di riferimento",
    wrong: [
      "Efficienza economica",
      "Produttività del personale",
      "Risultato clinico"
    ],
    weight: 3
  },
  {
    q: "L’aggiornamento continuo è indispensabile per migliorare:",
    correct: "Conoscenze e competenze di tutti i professionisti",
    wrong: [
      "Solo le competenze tecniche",
      "Solo le conoscenze teoriche",
      "Solo le abilità pratiche"
    ],
    weight: 3
  },
  {
    q: "Il concetto di Verifica e Revisione della Qualità in sanità nasce:",
    correct: "Negli anni ’80 in Gran Bretagna",
    wrong: [
      "Negli anni ’60 negli USA",
      "Negli anni ’90 in Italia",
      "Negli anni 2000 in Europa"
    ],
    weight: 3
  },
  {
    q: "Nel concetto di qualità, l’asse della struttura riguarda:",
    correct: "Disponibilità delle risorse e modalità di utilizzo",
    wrong: [
      "Comportamento degli operatori",
      "Esiti di salute",
      "Risultati economici"
    ],
    weight: 3
  },
  {
    q: "Nel concetto di qualità, l’asse del processo riguarda:",
    correct: "Il comportamento complessivo degli operatori",
    wrong: [
      "Le risorse strutturali",
      "Gli esiti di salute",
      "I risultati economici"
    ],
    weight: 3
  },
  {
    q: "Nel concetto di qualità, l’asse dell’esito riguarda:",
    correct: "Le condizioni di salute modificate dall’intervento",
    wrong: [
      "La disponibilità delle risorse",
      "I comportamenti degli operatori",
      "La programmazione"
    ],
    weight: 3
  },
  {
    q: "La qualità nei servizi sanitari è:",
    correct: "Il rapporto tra miglioramenti ottenuti e miglioramenti massimi raggiungibili",
    wrong: [
      "Il numero di prestazioni erogate",
      "Il rispetto del budget",
      "La riduzione dei tempi di attesa"
    ],
    weight: 3
  },
  {
    q: "Un intervento sanitario è appropriato quando:",
    correct: "È la cosa giusta, al momento giusto, per il paziente giusto",
    wrong: [
      "È il meno costoso",
      "È il più rapido",
      "È sempre standardizzato"
    ],
    weight: 3
  },
  {
    q: "Il concetto di qualità si applica:",
    correct: "A tutte le azioni che producono esiti di salute",
    wrong: [
      "Solo alle prestazioni cliniche",
      "Solo alla gestione economica",
      "Solo alla prevenzione"
    ],
    weight: 3
  },
  {
    q: "I problemi da sottoporre a verifica devono:",
    correct: "Comportare un elevato beneficio per il paziente",
    wrong: [
      "Essere facilmente risolvibili",
      "Riguardare solo i costi",
      "Essere numerosi"
    ],
    weight: 3
  },
  {
    q: "Gli indicatori nei servizi sanitari sono strumenti per:",
    correct: "Migliorare e monitorare le funzioni che influenzano gli esiti",
    wrong: [
      "Valutare il personale",
      "Ridurre i finanziamenti",
      "Controllare i pazienti"
    ],
    weight: 3
  },
  {
    q: "Il monitoraggio dei risultati serve a:",
    correct: "Verificare i risultati dopo l’intervento",
    wrong: [
      "Programmare le attività",
      "Ridurre i costi",
      "Aumentare la produttività"
    ],
    weight: 3
  },
  {
    q: "La professionalità dell’esperto in formazione è data da:",
    correct: "Conoscenze teoriche, pratiche e comunicativo-relazionali",
    wrong: [
      "Solo esperienza pratica",
      "Solo conoscenze teoriche",
      "Solo titoli accademici"
    ],
    weight: 3
  },
  {
    q: "La blended learning è:",
    correct: "Una formazione mista in presenza e a distanza",
    wrong: [
      "Solo formazione online",
      "Solo formazione in aula",
      "Solo autoformazione"
    ],
    weight: 3
  },
  {
    q: "Il criterio che ispira e guida un Piano Formativo Aziendale è:",
    correct: "L’apprendimento organizzativo",
    wrong: [
      "La riduzione dei costi",
      "L’obbligo normativo",
      "La disponibilità delle risorse"
    ],
    weight: 3
  },
  {
    q: "La domanda di formazione degli addetti riguarda:",
    correct: "La rilevazione di conoscenze, competenze e capacità",
    wrong: [
      "Il numero di corsi svolti",
      "Il budget formativo",
      "La durata dei corsi"
    ],
    weight: 3
  },
  {
    q: "Lo strumento più usato per la rilevazione dei bisogni formativi è:",
    correct: "Le interviste alle figure di responsabilità",
    wrong: [
      "L’analisi dei costi",
      "I report economici",
      "Le statistiche regionali"
    ],
    weight: 3
  },
  {
    q: "Per la rilevazione dei bisogni formativi individuali si usano:",
    correct: "Questionari descrittivi",
    wrong: [
      "Bilanci consuntivi",
      "Indicatori di qualità",
      "Linee guida cliniche"
    ],
    weight: 3
  },
  {
    q: "Per realizzare un percorso formativo occorre considerare:",
    correct: "Tempi, spazi, materiali, relazioni e azioni",
    wrong: [
      "Solo il budget",
      "Solo i docenti",
      "Solo gli obiettivi generali"
    ],
    weight: 3
  },
  {
    q: "Lo studio di caso consiste:",
    correct: "Nell’analisi di una situazione reale per individuare soluzioni",
    wrong: [
      "Nella somministrazione di questionari",
      "Nella lezione frontale",
      "Nell’autoapprendimento"
    ],
    weight: 3
  },
  {
    q: "Nel sistema qualità aziendale è obbligatorio rendere disponibile:",
    correct: "Il manuale della qualità",
    wrong: [
      "Le istruzioni operative",
      "Le procedure tecniche",
      "I report di audit"
    ],
    weight: 3
  },
  {
    q: "Al vertice della piramide del sistema qualità si colloca:",
    correct: "Il manuale della qualità",
    wrong: [
      "Le procedure",
      "Le istruzioni operative",
      "I protocolli clinici"
    ],
    weight: 3
  },
  {
    q: "Una procedura gestionale descrive:",
    correct: "Qualcosa di specifico",
    wrong: [
      "Principi generali",
      "Linee strategiche",
      "Obiettivi politici"
    ],
    weight: 3
  },
  {
    q: "Una procedura deve essere sempre documentata:",
    correct: "No",
    wrong: [
      "Sì",
      "Solo in sanità",
      "Solo se clinica"
    ],
    weight: 3
  },
  {
    q: "Una procedura deve contenere sicuramente:",
    correct: "Lo scopo",
    wrong: [
      "Il budget",
      "Il personale coinvolto",
      "Gli indicatori economici"
    ],
    weight: 3
  },
  {
    q: "Una procedura tecnica è:",
    correct: "Una procedura verticale",
    wrong: [
      "Una procedura orizzontale",
      "Una procedura gestionale",
      "Una procedura amministrativa"
    ],
    weight: 3
  },
  {
    q: "Il campo di applicazione di una procedura indica:",
    correct: "Le attività che essa regolamenta",
    wrong: [
      "Gli obiettivi strategici",
      "Il personale responsabile",
      "Il budget assegnato"
    ],
    weight: 3
  },
  {
    q: "Una procedura può contenere flowchart:",
    correct: "Sì, se utili a renderla più comprensibile",
    wrong: [
      "No, mai",
      "Solo se obbligatori",
      "Solo nelle procedure cliniche"
    ],
    weight: 3
  },
  {
    q: "Le procedure nella piramide della qualità sono collocate:",
    correct: "Dopo il manuale e prima delle istruzioni",
    wrong: [
      "Al vertice",
      "Alla base",
      "Allo stesso livello delle istruzioni"
    ],
    weight: 3
  },
  {
    q: "Una procedura deve contenere:",
    correct: "Data, revisione e firme di redazione, verifica e approvazione",
    wrong: [
      "Solo la firma del direttore",
      "Solo la data",
      "Solo il titolo"
    ],
    weight: 3
  },
  {
    q: "Il D.Lgs. 286/1999 introduce:",
    correct: "Le funzioni di pianificazione e controllo",
    wrong: [
      "Il sistema dei LEA",
      "La riforma sanitaria",
      "Il federalismo sanitario"
    ],
    weight: 3
  },
  {
    q: "Il controllo strategico valuta:",
    correct: "L’adeguatezza delle scelte strategiche",
    wrong: [
      "I costi di produzione",
      "Le prestazioni cliniche",
      "La produttività del personale"
    ],
    weight: 3
  },
  {
    q: "Gli indicatori di gestione strategica sono classificabili in base:",
    correct: "A cliente, processi e sviluppo organizzativo",
    wrong: [
      "A costi e ricavi",
      "A entrate e uscite",
      "A risultati clinici"
    ],
    weight: 3
  },
  {
    q: "La Balanced Scorecard è:",
    correct: "Un sistema bilanciato di indicatori di performance",
    wrong: [
      "Un bilancio contabile",
      "Un piano operativo",
      "Un sistema informativo"
    ],
    weight: 3
  },
  {
    q: "La BSC misura le performance lungo:",
    correct: "Quattro dimensioni",
    wrong: [
      "Tre dimensioni",
      "Cinque dimensioni",
      "Due dimensioni"
    ],
    weight: 3
  },
  {
    q: "Le prospettive della BSC sono:",
    correct: "Strettamente integrate",
    wrong: [
      "Indipendenti",
      "Gerarchiche",
      "Alternative"
    ],
    weight: 3
  },
  {
    q: "Il principio base della BSC è che:",
    correct: "Obiettivi e misure si rafforzano a vicenda",
    wrong: [
      "Conta solo il risultato finale",
      "Conta solo il controllo dei costi",
      "Conta solo la produttività"
    ],
    weight: 3
  },
  {
    q: "Il ciclo del controllo strategico si articola in:",
    correct: "Programmazione, controllo e verifica",
    wrong: [
      "Analisi, pianificazione e valutazione",
      "Obiettivi, azioni e risultati",
      "Budget, controllo e rendicontazione"
    ],
    weight: 3
  },
  {
    q: "Una Balanced Scorecard correttamente costruita rappresenta:",
    correct: "La storia della strategia aziendale",
    wrong: [
      "Il bilancio economico",
      "Il piano operativo annuale",
      "Il sistema informativo aziendale"
    ],
    weight: 3
  },
  {
    q: "Una BSC ben impostata deve contenere:",
    correct: "Un mix di misure di risultato e driver di performance",
    wrong: [
      "Solo indicatori economici",
      "Solo indicatori clinici",
      "Solo indicatori di processo"
    ],
    weight: 3
  },
  {
    q: "La cartella infermieristica è:",
    correct: "Uno strumento che documenta l’attività infermieristica",
    wrong: [
      "Un atto amministrativo",
      "Un documento facoltativo",
      "Un registro contabile"
    ],
    weight: 3
  },
  {
    q: "La cartella infermieristica consente di dimostrare:",
    correct: "I livelli di bisogno e di intervento assistenziale",
    wrong: [
      "La produttività del personale",
      "Il costo delle prestazioni",
      "Il rispetto del budget"
    ],
    weight: 3
  },
  {
    q: "Documentare l’attività infermieristica significa:",
    correct: "Certificare quanto fatto e migliorare la qualità assistenziale",
    wrong: [
      "Aumentare la burocrazia",
      "Ridurre il lavoro clinico",
      "Svolgere solo attività formali"
    ],
    weight: 3
  },
  {
    q: "Dal punto di vista legale la cartella infermieristica equivale a:",
    correct: "Un atto con valenza probatoria privilegiata",
    wrong: [
      "Un appunto personale",
      "Un documento interno",
      "Un registro informativo"
    ],
    weight: 3
  },
  {
    q: "Il processo assistenziale è:",
    correct: "Un’attività intellettuale scientifica e sistemica",
    wrong: [
      "Un insieme di procedure",
      "Un protocollo clinico",
      "Un atto amministrativo"
    ],
    weight: 3
  },
  {
    q: "Nella raccolta dati l’infermiere utilizza:",
    correct: "Osservazione, intuizione, intervista ed esame fisico",
    wrong: [
      "Solo l’osservazione",
      "Solo l’intervista",
      "Solo la documentazione"
    ],
    weight: 3
  },
  {
    q: "La pianificazione assistenziale è:",
    correct: "Una fase continua che consente una risposta personalizzata",
    wrong: [
      "Una fase iniziale statica",
      "Una fase conclusiva",
      "Un atto burocratico"
    ],
    weight: 3
  },
  {
    q: "La diagnosi infermieristica rappresenta:",
    correct: "La dichiarazione di un problema reale o potenziale",
    wrong: [
      "Una diagnosi medica",
      "Un atto prescrittivo",
      "Un protocollo clinico"
    ],
    weight: 3
  },
  {
    q: "Un intervento assistenziale relativo alla diagnosi infermieristica è:",
    correct: "Educazione dell’utente e del care giver",
    wrong: [
      "Prescrizione farmacologica",
      "Diagnosi strumentale",
      "Intervento chirurgico"
    ],
    weight: 3
  },
  {
    q: "I livelli di assistenza sono articolati in:",
    correct: "Tre grandi aree di attività",
    wrong: [
      "Due aree",
      "Quattro aree",
      "Cinque aree"
    ],
    weight: 3
  },
  {
    q: "Per ottenere le prestazioni LEA occorre:",
    correct: "Essere iscritti al Servizio Sanitario Nazionale",
    wrong: [
      "Essere residenti",
      "Essere assicurati privatamente",
      "Essere dipendenti pubblici"
    ],
    weight: 3
  },
  {
    q: "La tessera sanitaria è stata introdotta in base a:",
    correct: "D.L. 269/2003 art. 50",
    wrong: [
      "Legge 833/1978",
      "D.Lgs. 502/1992",
      "Legge 251/2000"
    ],
    weight: 3
  },
  {
    q: "L’assistenza sanitaria agli italiani all’estero è disciplinata dal:",
    correct: "D.P.R. 618/1980",
    wrong: [
      "D.Lgs. 502/1992",
      "Legge 833/1978",
      "D.Lgs. 229/1999"
    ],
    weight: 3
  },
  {
    q: "Il servizio sanitario garantisce la tutela della salute:",
    correct: "Senza distinzione di condizioni individuali e sociali",
    wrong: [
      "Solo ai cittadini residenti",
      "Solo ai lavoratori",
      "Solo agli assicurati"
    ],
    weight: 3
  },
  {
    q: "Il sistema di partecipazione al costo delle prestazioni è disciplinato da:",
    correct: "D.Lgs. 124/1998",
    wrong: [
      "Legge 833/1978",
      "D.Lgs. 502/1992",
      "D.P.R. 128/1969"
    ],
    weight: 3
  },
  {
    q: "La carta dei servizi sanitari rappresenta:",
    correct: "Il patto tra SSN e cittadini",
    wrong: [
      "Un documento interno",
      "Un contratto di lavoro",
      "Un regolamento amministrativo"
    ],
    weight: 3
  }
];