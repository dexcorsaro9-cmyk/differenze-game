export interface LevelStoryData {
  title: string;
  subtitle: string;
  prologue: string;
  resolution: string;
  unlockedSecret: string;
}

// Full 120-Level Credible Archaeological Expedition Saga
// Following Professor Evelyn Bellini across 12 distinct historical chapters towards Paititi
export const LEVEL_NARRATIVES_120: Record<number, LevelStoryData> = {
  // --- TAPPA 1: LO STUDIO DI OXFORD E IL MANOSCRITTO LOPEZ (Livelli 1-10) ---
  1: {
    title: "Lo Studio Notturno di Oxford",
    subtitle: "Dipartimento di Archeologia • Scena del Furto",
    prologue: "Qualcuno si è introdotto nello studio notturno del Professor Bellini frugando tra i reperti andini. Trova le 10 anomalie fisiche per ricostruire la dinamica dell'irruzione.",
    resolution: "Hai individuato il cassetto segreto forzato: la lettera originale del gesuita Padre Lopez del 1600 è intatta! Conferma che il tesoro di Paititi non è un mito, ma la riserva reale dell'oro sacro degli Inca.",
    unlockedSecret: "'Il tempo stringe. L'ombra della Confraternita dell'Ossidiana è già sulle mie tracce. Devo raggiungere gli archivi parigini prima che brucino i registri.' - Diario di Bellini, pag. 1",
  },
  2: {
    title: "I Sotterranei della Bodleian Library",
    subtitle: "Cripta dei Testi Proibiti • Oxford",
    prologue: "Nei sotterranei medievali sotto Oxford, la Mano Oscura è scesa prima di noi per trafugare reliquie sacre e sabotare l'indagine archeologica. Trova le 6 tracce fisiche della profanazione.",
    resolution: "Hai decifrato la cripta violata: la mappa andina rivela che 40 lama carichi d'oro sacro partirono da Cusco nel 1533 sotto la guida del Sommo Sacerdote Willaq Umu verso la città segreta di Paititi!",
    unlockedSecret: "'Non cercate oro nelle valli conosciute. L'oro degli dèi riposa dove il fiume scorre all'indietro verso le nubi.' - Annotazione a margine del 1588",
  },
  3: {
    title: "Il Laboratorio di Archeometria",
    subtitle: "Analisi Spettrografica • Ashmolean Museum",
    prologue: "Nei laboratori dell'Ashmolean Museum, l'assistente di Bellini stava decifrando l'inchiostro simpatico della mappa andina. La Mano Oscura ha fatto irruzione per sabotare l'analisi chimica e trafugare i composti prima che la rotta verso Parigi venisse svelata. Trova le 6 tracce fisiche del sabotaggio.",
    resolution: "Hai neutralizzato il sabotaggio del laboratorio: la reazione al cinabro ha rivelato il tracciato segreto! Le coordinate templari non partono dall'Atlantico, ma dai sotterranei di Parigi verso cui Bellini sta fuggendo.",
    unlockedSecret: "'L'inchiostro simpatico è a base di cinabro peruviano e allume di rocca. Chi ha vergato questa mappa conosceva sia la metallurgia inca che l'alchimia veneziana.' - Note di laboratorio di Bellini",
  },
  4: {
    title: "La Cripta di St. Peter-in-the-East",
    subtitle: "Navata Normanna del XII Secolo • Oxford",
    prologue: "La Mano Oscura è scesa nella cripta normanna di Sir Arthur Harrington, il mecenate che finanziò la rotta segreta del 1595. Gli intrusi hanno violato la tomba e forzato la cancellata delle cripte inferiori per occultare l'allineamento con Parigi. Individua le 6 prove fisiche della profanazione.",
    resolution: "Hai recuperato i rilievi della tomba profanata: sulla lastra tombale è incisa una meridiana ipogea che punta dritta al meridiano di Parigi, confermando dove Bellini si sta dirigendo!",
    unlockedSecret: "'Chi cerca la luce del sole eterno deve prima scendere nelle tenebre della Senna.' - Epitaffio latino decifrato dal pomo della spada di Harrington",
  },
  5: {
    title: "Il Gabinetto Numismatico",
    subtitle: "Collezione di Monete Coloniali Spagnole • Oxford",
    prologue: "La Mano Oscura ha violato il Gabinetto Numismatico di Oxford mentre la studiosa esaminava le emissioni di Lima e Potosí. Gli emissari hanno asportato i campioni chiave e gli strumenti di perizia per occultare il punzone del Serpente a Due Teste. Individua le 6 prove fisiche della sottrazione.",
    resolution: "Hai ricostruito la sequenza del furto: la traccia metallurgica dei dobloni sottratti e il calibro dei pesi confermano che la lega proviene dalla miniera segreta di Paititi, citata nei registri coloniali!",
    unlockedSecret: "'La purezza dell'oro è al 98%, una raffinatezza ignota ai saggiatori spagnoli del '600: solo gli orafi imperiali di Cusco possedevano questo segreto.' - Registro di zecca numismatica",
  },
  6: {
    title: "L'Osservatorio di Radcliffe",
    subtitle: "Torre delle Stelle di Oxford • Scena dell'Intrusione",
    prologue: "La Mano Oscura ha scalato la torre dell'osservatorio all'imbrunire per sabotare la triangolazione celeste della rotta verso Parigi. Gli emissari hanno forzato la bifora gotica, bloccato la pendola e rubato la sfera armillare con i rilievi stellari. Trova le 6 tracce fisiche della profanazione.",
    resolution: "Hai recuperato i dati di triangolazione: ricalcolando l'azimut stellare con la deviazione magnetica di 3 gradi est, l'allineamento celeste punta dritto verso l'ossario sotterraneo di Parigi!",
    unlockedSecret: "'Gli astronomi inca allineavano i templi del sole con l'ammasso delle Pleiadi. Chi ha costruito i sotterranei di Parigi ha seguito le medesime coordinate celesti.' - Quaderno d'osservazione dell'astronomo",
  },
  7: {
    title: "La Biblioteca di Christ Church",
    subtitle: "Archivio Geografico Riservato • Furto delle Carte Andine",
    prologue: "Nella solenne biblioteca di Christ Church, gli emissari della Mano Oscura hanno frugato tra le carte di navigazione e staccato il ritratto del rettore per raggiungere la cassaforte a muro. Hanno sottratto gli sgabelli di consultazione, la targa d'archivio di Francis Drake e i tomi di rotta oceanica. Individua i 6 indizi della perquisizione clandestina.",
    resolution: "Ricomponendo i registri mancanti, scopri l'annotazione di Sir Arthur Harrington: la rotta verso la Città d'Oro di Paititi richiede tre sigilli templari celati nell'ossario sotterraneo di Parigi.",
    unlockedSecret: "'Chi cerca Paititi deve prima varcare la porta dei morti a Parigi. Ma badate: il potere del Sigillo Solare può redimere l'umanità, distruggere gli imperi, o consumare chiunque osi brandirlo.' - Nota manoscritta del Rettore",
  },
  8: {
    title: "La Divinity School di Oxford",
    subtitle: "Navata Gotica delle Cripte • Scena del Sabotaggio",
    prologue: "Sotto le vertiginose volte a ventaglio della Divinity School, gli agenti dell'Ombra hanno divelto le lampade murali in bronzo per operare al buio. Hanno asportato i pesanti leggii cerimoniali, scalpellato il pendaglio della chiave di volta e sollevato la lastra sepolcrale della navata per fuggire attraverso le antiche catacombe della città. Rileva i 6 segni della profanazione.",
    resolution: "Scendendo nella cavità aperta sotto la lastra sepolcrale, trovi le ceneri di un messaggio cifrato: la Mano Oscura mira a consegnare il Sigillo al proprio Maestro per instaurare il Nuovo Ordine.",
    unlockedSecret: "'Se il Sigillo cadrà nella Mano Oscura, la storia sarà riscritta nel sangue. Se sarà donato al mondo, la scienza trionferà. Se sarà distrutto, il mondo rimarrà nell'illusione della pace.' - Crittogramma della Divinity School",
  },
  9: {
    title: "La Galleria Superiore di Duke Humfrey",
    subtitle: "Ballatoi dei Codici Proibiti • Inseguimento Notturno",
    prologue: "Arrampicandosi lungo i ballatoi lignei della Duke Humfrey's Library, gli infiltrati hanno sabotato la ringhiera, rubato la scala d'accesso ai palchetti e rimosso i blasoni dei fondatori per accedere al nascondiglio del Codice di Paititi. Trova le 6 alterazioni lasciate nella galleria superiore.",
    resolution: "Nel vano segreto aperto dietro il cassettone del soffitto trovi il passaporto diplomatico del professor Bellini con il visto consolare per Parigi e i biglietti del treno espresso per Dover.",
    unlockedSecret: "'Tre finali attendono colui che ricomporrà i 12 frammenti: l'Illuminazione Globale, il Dominio dell'Ombra, o il Sacrificio del Guardiano. Parigi è solo la prima prova.' - Marginalia del Codice di Humfrey",
  },
  10: {
    title: "Il Museo di Storia Naturale di Oxford",
    subtitle: "Salone dei Grandi Scheletri • Milestone di Tappa 1",
    prologue: "L'ultimo scontro a Oxford si consuma tra le navate in ghisa e vetro del Museo di Storia Naturale. Prima di fuggire verso il piroscafo, gli agenti hanno rimosso la statua del naturalista, divelto il cranio fossile monumentale, trafugato i tabelloni zoologici e ribaltato i banchi espositivi per strappare il Primo Frammento della Stele. Isola le 6 prove dell'assalto.",
    resolution: "TAPPA 1 COMPLETATA! Recuperi il Primo Frammento della Stele intarsiato d'oro dalle fauci del fossile! La prima reliquia della saga è nelle tue mani. La via per Parigi e le Catacombe dei Templari è aperta!",
    unlockedSecret: "'PRIMO FRAMMENTO ACQUISITO [1/12]: L'Occhio del Falco Solare. La campana di mezzanotte rintocca a Oxford: la spedizione sale a bordo del treno notturno. Destinazione: Parigi!' - Diario di Spedizione di Bellini",
  },

  // --- TAPPA 2: LE CATACOMBE DEI TEMPLARI A PARIGI (Livelli 11-20) ---
  11: {
    title: "La Biblioteca Nazionale di Rue de Richelieu",
    subtitle: "Dipartimento dei Manoscritti Orientali • Parigi",
    prologue: "Consulta il codice cartaceo dell'Ordine del Tempio confiscato durante il processo del 1307 sotto Filippo il Bello.",
    resolution: "Nel codice è allegata una planimetria idraulica delle cave sotterranee medievali sotto il colle di Sainte-Geneviève.",
    unlockedSecret: "'I cavalieri non nascosero reliquie religiose comuni, ma la guida geografica donata loro dagli astronomi arabi di Cordova.'",
  },
  12: {
    title: "I Sotterranei di Saint-Sulpice",
    subtitle: "La Meridiana Gnomonica e la Cripta",
    prologue: "Segui la linea d'ottone incastonata nel pavimento della chiesa fino alla camera cieca situata sotto il coro.",
    resolution: "Un blocco di pietra ruota rivelando la scala a chiocciola che scende nelle cave della Parigi sotterranea.",
    unlockedSecret: "'Il raggio di sole tocca l'obelisco all'equinozio. Il segreto è custodito 35 metri sotto il calpestio stradale.'",
  },
  13: {
    title: "L'Entrata Proibita delle Catacombe",
    subtitle: "Cunicoli di Calcare • Barrière d'Enfer",
    prologue: "Avanza nel labirinto di pietra con le lampade ad acetilene, schivando i pozzi artesiani e i franamenti recenti.",
    resolution: "Raggiungi la sala dei sarcofagi medievali: la parete di fondo è contrassegnata dalla croce templare a otto punte.",
    unlockedSecret: "'L'aria odora di calce e terra umida. Qui sotto il rumore della città svanisce, sostituito dal gocciolio perenne della roccia.'",
  },
  14: {
    title: "L'Ossario dei Cavalieri",
    subtitle: "Galleria delle Ossa Incise",
    prologue: "Ispeziona la catasta d'ossa: alcuni teschi presentano incisioni geometriche con simboli navali e nodi marinari.",
    resolution: "Allineando tre teschi secondo le tacche incise, scatta il meccanismo a perno di una porta di ferro arrugginito.",
    unlockedSecret: "'Non erano guerrieri qualunque. Erano i piloti della flotta templare di La Rochelle che attraversò l'Atlantico prima di Colombo.'",
  },
  15: {
    title: "La Sala dell'Acquedotto Sotterraneo",
    subtitle: "Condotte Romane della Bièvre",
    prologue: "Attraversa il canale d'acqua sorgiva sotterranea usando le paratoie di quercia plurisecolari.",
    resolution: "Sul pilastro centrale trovi una placca di piombo con incise le rotte dei venti alisei meridionali.",
    unlockedSecret: "'I venti del sud soffiano costanti verso la costa del Brasile. I costruttori sapevano dove conduceva la corrente.'",
  },
  16: {
    title: "La Cassa d'Ebano del Gran Maestro",
    subtitle: "Nicchia Murata di Rue Saint-Jacques",
    prologue: "Rimuovi lo strato di malta medievale per estrarre la cassetta d'ebano sigillata con resina fossile.",
    resolution: "All'interno è preservato un rotolo su pergamena di vitello: descrive l'officina alchemica di Venezia che fuse il secondo sigillo.",
    unlockedSecret: "'A Venezia, sull'isola dove il fuoco trasforma la sabbia in cristallo, cercate colui che legge i cieli senza cannocchiale.'",
  },
  17: {
    title: "L'Atelier Segreto del Louvre",
    subtitle: "Laboratorio di Restauro dei Dipinti Fiamminghi",
    prologue: "Analizza il dipinto allegorico attribuito a Philippe de Champaigne con una lente a filtro rosso.",
    resolution: "Sotto la mano dell'ammiraglio ritratto compare l'esatta planimetria del palazzo veneziano sul Canal Grande.",
    unlockedSecret: "'L'arte è il miglior nascondiglio per la verità: milioni di occhi la guardano ogni giorno senza vederla.'",
  },
  18: {
    title: "Il Pozzo dei Minatori di Montmartre",
    subtitle: "Cave di Gesso Sotterranee",
    prologue: "Recupera il teodolite d'emergenza caduto nella fessura della parete calcarea prima che la falda acquifera salga.",
    resolution: "Il livello dell'acqua defluisce rivelando il simbolo della Repubblica di Venezia scolpito nel gesso.",
    unlockedSecret: "'I maestri scalpellini veneziani lavorarono qui nel 1480. Hanno lasciato la loro firma per chi fosse venuto dopo.'",
  },
  19: {
    title: "La Stazione di Gare de Lyon",
    subtitle: "Piattaforma dell'Espresso Orientale",
    prologue: "Organizza gli appunti di viaggio sul treno d'epoca mentre lasci Parigi in direzione delle Alpi e della laguna veneta.",
    resolution: "Confrontando i rilievi, il secondo cerchio di coordinate si chiude con esattezza millimetrica su Venezia.",
    unlockedSecret: "'Il treno scivola nella notte verso l'Italia. Il mistero si infittisce: templari, alchimisti e sacerdoti inca uniti dallo stesso filo.'",
  },
  20: {
    title: "IL SECONDO FRAMMENTO: La Croce Patente d'Argento",
    subtitle: "Venezia, Bacino di San Marco • Tappa 2 Completata!",
    prologue: "Ricomponi il secondo frammento della mappa del tesoro unendo il sigillo parigino con la chiave a stella templare.",
    resolution: "TAPPA 2 CONCLUSA! Hai sbloccato la reliquia 'La Croce Patente d'Argento' e il 2° quadrante della Mappa del Tesoro!",
    unlockedSecret: "'La croce d'argento vibra leggermente vicino all'acqua della laguna. Ci guiderà fino alla bottega dell'alchimista!' - Diario di Bellini",
  },

  // --- TAPPE SUCCESSIVE FINO AL LIVELLO 120 ---
  // (Tappa 3: Venezia, Tappa 4: Creta, Tappa 5: Alessandria, Tappa 6: Luxor, Tappa 7: Siwa, Tappa 8: Petra, Tappa 9: Iguazu, Tappa 10: Nazca, Tappa 11: Machu Picchu, Tappa 12: Paititi)
};

// Procedural generator fallback with credible archeological lore for any level not explicitly listed
export function getCredibleLevelStory(levelId: number, stageNumber: number, levelInStage: number): LevelStoryData {
  if (LEVEL_NARRATIVES_120[levelId]) {
    return LEVEL_NARRATIVES_120[levelId];
  }

  const STAGE_THEMES = [
    { name: "Oxford & la Bodleian Library", act: "L'Enigma delle Biblioteche", era: "1928 / Archivi del 1600" },
    { name: "Le Catacombe dei Templari a Parigi", act: "L'Ordre du Temple", era: "1307 / Sotterranei di Parigi" },
    { name: "L'Officina degli Astrolabi a Venezia", act: "La Repubblica Marinara", era: "1459 / Canal Grande" },
    { name: "Il Labirinto Minoico di Creta", act: "Il 30° Parallelo", era: "1400 a.C. / Cnosso" },
    { name: "La Biblioteca Sommersa di Alessandria", act: "I Custodi di Tolomeo", era: "280 a.C. / Porto Antico" },
    { name: "La Valle dei Re a Luxor", act: "I Sacerdoti del Sole", era: "1279 a.C. / Tebe d'Egitto" },
    { name: "L'Oracolo di Amon a Siwa", act: "La Pista delle Dune", era: "331 a.C. / Sahara Libico" },
    { name: "La Gola di Roccia di Petra", act: "I Mercanti Nabatei", era: "I Secolo d.C. / Wadi Musa" },
    { name: "Le Missioni Gesuite di Iguazú", act: "La Giungla del Guaranì", era: "1680 / Paranà e Missioni" },
    { name: "I Geoglifi Celesti di Nazca", act: "La Mappa delle Stelle", era: "500 d.C. / Pampa di Nazca" },
    { name: "L'Intihuatana di Machu Picchu", act: "La Valle Sacra degli Inca", era: "1450 d.C. / Antisuyu" },
    { name: "IL SANTUARIO PERDUTO DI PAITITI", act: "Il Tesoro Supremo dell'Inti", era: "1533 d.C. / Madre de Dios" },
  ];

  const theme = STAGE_THEMES[stageNumber - 1] || STAGE_THEMES[0];
  const isFinal = levelId === 120;
  const isMilestone = levelInStage === 10;

  if (isFinal) {
    return {
      title: "LA CAMERA D'ORO DI PAITITI: IL TESORO SUPREMO!",
      subtitle: "Il Sancta Sanctorum dell'Inti • Epilogo della Spedizione",
      prologue: "Hai superato 119 livelli di enigmi e scavi. Davanti a te si erge il portale ciclopico della Camera d'Oro di Paititi. Risolvi le ultime 10 differenze per spalancare il Tesoro Supremo dell'Umanità!",
      resolution: "LIVELLO 120 COMPLETATO! LA MAPPA È DECIFRATA AL 100%! Il colossale Disco Solare d'Oro Puro di Coricancha risplende davanti ai tuoi occhi tra piramidi di manufatti sacri e smeraldi. La spedizione archeologica più epica della storia è compiuta!",
      unlockedSecret: "'Ce l'abbiamo fatta! Il tesoro di Paititi non è una favola per sognatori: è la testimonianza vivente della grandezza dello spirito umano. Hai scritto la storia dell'archeologia!' - Professor Evelyn Bellini",
    };
  }

  if (isMilestone) {
    return {
      title: `Il Traguardo della Tappa ${stageNumber}: Il ${stageNumber}° Sigillo`,
      subtitle: `${theme.name} • Frammento ${stageNumber}/12 Rivelato`,
      prologue: `Sei giunto al termine del settore di ${theme.name}. Risolvi quest'ultimo enigma per unire il ${stageNumber}° frammento della mappa del tesoro.`,
      resolution: `Tappa ${stageNumber} completata con successo! Hai sbloccato il frammento cartografico e la reliquia di tappa. La rotta verso Paititi è sempre più nitida!`,
      unlockedSecret: `'Ogni settore completato ci avvicina al cuore impenetrabile dell'Antisuyu. La mappa sta prendendo vita sotto i nostri occhi.' - Diario di Bellini`,
    };
  }

  const SUB_AREAS = [
    "L'Ingresso del Sito e la Prima Ricognizione",
    "La Camera delle Iscrizioni Rupestri",
    "Il Meccanismo Idraulico della Volta",
    "Il Pozzo dei Rilievi Sacri",
    "Il Corridoio della Declinazione Stellare",
    "La Fessura Murata con Sigillo di Bronzo",
    "Il Basamento degli Allineamenti Astronomici",
    "La Galleria dei Bassorilievi Cifrati",
    "L'Anticamera dell'Altare Principale",
  ];

  const subAreaTitle = SUB_AREAS[levelInStage - 1] || `Settore ${levelInStage} dello Scavo`;

  return {
    title: `${subAreaTitle}`,
    subtitle: `${theme.name} • Settore ${levelInStage}/10 (${theme.era})`,
    prologue: `Esplora il settore ${levelInStage} di ${theme.name}. Esamina attentamente ogni elemento per scovare le 10 differenze fisiche celate tra i reperti.`,
    resolution: `Settore ${levelInStage} decifrato! Hai individuato tutti gli indizi archeologici necessari. Il passaggio al settore successivo è sgombro.`,
    unlockedSecret: `'Le tracce confermano l'accuratezza dei manoscritti di Padre Lopez. Proseguiamo l'esplorazione senza indugio.' - Diario di Bellini`,
  };
}
