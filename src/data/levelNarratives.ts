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
    prologue: "Qualcuno si è introdotto nello studio notturno del Professor Bellini frugando tra i reperti andini. Trova le 6 anomalie fisiche per ricostruire la dinamica dell'irruzione.",
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
    title: "L'Atelier Cartografico della RGS",
    subtitle: "Scrittoio Idrografico 1928 • Rilievi delle Rotte Oceaniche",
    prologue: "Sulla massiccia scrivania in mogano dell'atelier cartografico, la studiosa calcola la rotta verso la Manica. Tra il sestante nautico Thomas Mercer, la lampada ministeriale in vetro verde e l'ampia pergamena idrografica del Sud America con rilievi costieri a inchiostro cobalto, gli emissari hanno cercato di sottrarre le coordinate nautiche prima della partenza.",
    resolution: "Con la lente convessa e il sestante d'ottone verifichi la batimetria: il canale marittimo verso la Manica è confermato e il diario di triangolazione reca la rotta esatta per il treno e traghetto Dover-Calais!",
    unlockedSecret: "'Il meridiano di Greenwich converge sulle linee telluriche delle cattedrali gotiche francesi. La traversata della Manica è solo il primo passo verso l'origine del culto solare.' - Rilievo Idrografico RGS 1928",
  },
  7: {
    title: "Il Caveau dei Manoscritti Blindati",
    subtitle: "Cassaforte Corazzata Chatwood • Dispacci Riservati di Paititi",
    prologue: "Davanti al possente portale in acciaio chiodato del caveau sotterraneo Chatwood spalancato sul buio, l'archivista esamina i dispacci confidenziali. Alla luce della lanterna in ottone, tra il mazzo di chiavi maestre, il disco cifrato medievale 'Volvelle' e la ceralacca rossa, occorre isolare gli indizi prima che la valigia da viaggio venga caricata.",
    resolution: "Attivando il disco Volvelle d'ottone, decifri la missiva papale del 1603: il Gran Cancelliere aveva affidato ai Templari di Parigi la custodia del secondo quadrante della Stele!",
    unlockedSecret: "'Le chiavi del caveau non aprono solo forzieri terreni: la combinazione a dischi concentrici corrisponde alle porte segrete dei sotterranei di Saint-Sulpice a Parigi.' - Lettera Cifrata di Padre Lopez",
  },
  8: {
    title: "La Fucina di Restauro Archeologico",
    subtitle: "Banco da Lavoro dell'Antiquario • Studio del Vaso di Cusco",
    prologue: "Nel laboratorio di restauro tra morsetti in ghisa e lenti a braccio articolato, l'archeologo analizza un'urna precolombiana in terracotta policroma con tracce di giunzione. Accanto all'idolo votivo in bronzo con ossidazione a verdigris e agli strumenti di micro-scavo, gli agenti della Mano Oscura hanno tentato di manomettere i frammenti della mappa ceramica.",
    resolution: "Grazie alle spatole di precisione e alla resina protettiva naturale, ricomponi il profilo del vaso di Cusco: sul fondo dell'argilla cotta è incisa la mappa del reticolo sotterraneo parigino!",
    unlockedSecret: "'L'idolo in bronzo ossidato conduce alle cripte dove i maestri scalpellini medievali incisero i simboli del dio Sole sotto le fondamenta parigine.' - Scheda di Laboratorio Archeologico",
  },
  9: {
    title: "La Stazione Telegrafica & Radio 1928",
    subtitle: "Centrale Trasmissioni d'Emergenza • Messaggio per Dover",
    prologue: "Tra le valvole termoioniche a bagliore caldo della radio Marconi a onde corte e il martelletto del tasto Morse in bachelite, l'operatore riceve gli ultimi bollettini d'allerta da Whitehall. Il passaporto britannico con il biglietto ferroviario per il molo di Dover e il baule rinforzato con etichette della linea transatlantica Cunard sono già sul banco di partenza.",
    resolution: "Intercetti il telegramma cifrato attraverso le cuffie ad archetto: gli emissari dell'Ombra hanno preso posto sul convoglio per Dover, ma il tuo dispaccio ha allertato la guardia doganale a Calais!",
    unlockedSecret: "'PARIGI ALLERTATA STOP CATACOMBE SORVEGLIATE STOP INCONTRARE CONTATTO AL QUARTIERE LATINO ORE VENTITRE STOP FIRMATO WHITEHALL.' - Telegramma Originale della Stazione di Londra",
  },
  10: {
    title: "La Camera Segreta delle Reliquie di Oxford",
    subtitle: "Sanctum degli Antichi Manufatti • Milestone di Tappa 1",
    prologue: "Nell'intima camera di sicurezza del museo, illuminata da un candelabro a tre fiamme in bronzo, riposano i tesori più preziosi della spedizione. Sotto la campana di vetro soffiato troneggia la Maschera Solare d'oro massiccio affiancata dal pugnale cerimoniale Tumi di giada, dal lama votivo e dal monumentale registro delle acquisizioni del 1928.",
    resolution: "TAPPA 1 COMPLETATA! Sollevi con i guanti di cotone il Primo Frammento della Stele di Paititi custodito sul velluto rosso! La prima reliquia della saga è nelle tue mani. La spedizione sale a bordo dell'espresso notturno per Dover: le Catacombe di Parigi ti attendono!",
    unlockedSecret: "'PRIMO FRAMMENTO ACQUISITO [1/12]: Il Disco dell'Inti. Il treno notturno fende la nebbia verso la Manica. La Mano Oscura è alle nostre spalle, ma Parigi nasconde enigmi ancora più antichi.' - Diario di Spedizione del Prof. Bellini, Ottobre 1928",
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
    subtitle: "La Cripta della Meridiana • Scena della Ricognizione",
    prologue: "Sotto la navata di Saint-Sulpice, l'esploratore segue la lamina di bronzo del Meridiano di Parigi incastonata tra i lastroni medievali. Sul sarcofago d'altare risaltano l'astrolabio gnomonico in ottone di Cassini, la mappa celeste delle costellazioni, la bussola e la borsa di cuoio della spedizione, rischiarati da una lanterna da minatore e torce a staffa. Trova le 8 tracce dell'antico allineamento.",
    resolution: "Traguardando l'astrolabio lungo la lamina del meridiano scopri che la deviazione gnomonica punta dritto verso l'antico ingresso sotterraneo di Barrière d'Enfer!",
    unlockedSecret: "'Il meridiano di Parigi non segna solo il tempo terrestre: chiude la retta solare con le pietre sacre di Saint-Sulpice.' - Taccuino di Spedizione",
  },
  13: {
    title: "L'Entrata Murata di Barrière d'Enfer",
    subtitle: "Portale d'Accesso ai Cunicoli • L'Empire de la Mort",
    prologue: "Davanti al portale in quercia chiodata con il celebre monito scolpito sulla volta d'arco ('Arrête! C'est ici l'empire de la Mort'), la guida ha abbandonato un carretto da scavo con piccone, lanterna a petrolio, corda di canapa e stadia metrica. Trova le 8 prove per forzare il passaggio nei cunicoli.",
    resolution: "Rimuovendo il catenaccio della porta socchiusa, scorgi i primi gradini calcari che sprofondano verso il laboratorio alchemico dei Templari!",
    unlockedSecret: "'Qui finisce la luce di Parigi e inizia il dominio della memoria: le gallerie dei cavatori nascondono ciò che i re non poterono distruggere.' - Diario di Bellini",
  },
  14: {
    title: "Il Laboratorio Alchemico dei Templari",
    subtitle: "Cripta dei Saggiatori Medievali • Analisi dell'Oro",
    prologue: "Nel recesso ipogeo della cava, tra archi a tutto sesto, l'antica officina templare è rimasta intatta. Sul massiccio banco di rovere si ergono un alembicco in rame con serpentina di vetro, la bilancia analitica dei saggiatori con pesi d'oro, crogioli ceramici, pergamene con sigilli cerimoniali in ceralacca e flaconi di mercurio e vetriolo. Individua gli 8 reperti alchemici.",
    resolution: "Dalla distillazione dei reagenti sul fondo del pallone Pyrex affiora una lamina con l'indicazione idraulica della cisterna romana della Bièvre!",
    unlockedSecret: "'L'oro di Paititi non teme la ruggine né il fuoco: la sua lega fu temperata con lo stesso allume custodito dai mastri di Parigi.' - Nota Alchemica",
  },
  15: {
    title: "La Cisterna Romana della Bièvre",
    subtitle: "Canale Fluviale Sotterraneo • Battello di Ricognizione",
    prologue: "Tra le possenti arcate romane riflesse nelle acque scure e calme della cisterna, un battello in legno 'L'Explorateur 1928' è ormeggiato alla bitta di ghisa del molo. Accanto alla lanterna nautica e alla cassa stencillata della Société Hydrologique de Paris 1928, giacciono la borsa nautica, la catena d'ancoraggio e il piede di porco. Trova gli 8 indizi della rotta fluviale.",
    resolution: "Salendo a bordo del battello, ritrovi tra le maglie della catena il sigillo di piombo che apre la via verso l'atelier del Louvre!",
    unlockedSecret: "'Le acque sotterranee della Bièvre scorrono silenziose verso la Senna: seguendo la corrente si giunge sotto le fondamenta dei palazzi reali.' - Rilievo Idrografico",
  },
  16: {
    title: "La Cassa d'Ebano del Gran Maestro",
    subtitle: "Nicchia Murata di Rue Saint-Jacques",
    prologue: "Rimuovi lo strato di malta medievale per estrarre la cassetta d'ebano sigillata con resina fossile.",
    resolution: "All'interno è preservato un rotolo su pergamena di vitello: descrive l'officina alchemica di Venezia che fuse il secondo sigillo.",
    unlockedSecret: "'A Venezia, sull'isola dove il fuoco trasforma la sabbia in cristallo, cercate colui che legge i cieli senza cannocchiale.'",
  },
  17: {
    title: "L'Atelier di Restauro al Louvre (1928)",
    subtitle: "Laboratorio Riservato • Perizia del Dipinto delle Caravelle",
    prologue: "Nell'atelier notturno del museo parigino, la tela secentesca 'Maris Mediterranei' troneggia sul grande cavalletto in rovere. Alla luce calda della lampada ministeriale verde smeraldo, il banco è cosparso di vasetti di lapis lazuli e cinabro, pennelli in setola, la lente d'ingrandimento sui registri d'analisi, spatole e la tavolozza d'artista. Scopri gli 8 segreti svelati dal restauro.",
    resolution: "La riflettografia a luce radente rivela la mappa segreta celata sotto la caravella dell'ammiraglio: conduce direttamente alla cava di Montmartre!",
    unlockedSecret: "'Lo strato pittorico inferiore nasconde la pianta esatta delle gallerie minerarie: i maestri fiamminghi conoscevano la via di fuga.' - Scheda Tecnica Louvre 1928",
  },
  18: {
    title: "La Cava di Gesso Sotterranea di Montmartre",
    subtitle: "Gallerie dei Minatori • Binario Decauville",
    prologue: "Nelle profondità della collina di Montmartre, sostenuta da massicce armature in travi di quercia, una vagonetta mineraria in ghisa colma di blocchi di gesso sosta sui binari. Accanto al teodolite ottico di precisione su treppiede, alla lanterna ad acetilene appesa e al cassone con gli scalpelli da cava, gli agenti della Mano Oscura hanno lasciato tracce del loro passaggio. Trova gli 8 elementi dell'esplorazione mineraria.",
    resolution: "Nel cassone della vagonetta rinvieni i calcoli geodetici definitivi: la galleria conduce al pozzo dell'Espresso Orientale verso l'Italia!",
    unlockedSecret: "'Le cave di Montmartre furono scavate fin dall'epoca gallo-romana. Tra i banchi di gesso puro i costruttori incisero il cardine della rotta per Venezia.' - Registro dei Minatori 1928",
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
      prologue: "Hai superato 119 livelli di enigmi e scavi. Davanti a te si erge il portale ciclopico della Camera d'Oro di Paititi. Risolvi le ultime 6 differenze per spalancare il Tesoro Supremo dell'Umanità!",
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
    prologue: `Esplora il settore ${levelInStage} di ${theme.name}. Esamina attentamente ogni elemento per scovare le 6 differenze fisiche celate tra i reperti.`,
    resolution: `Settore ${levelInStage} decifrato! Hai individuato tutti gli indizi archeologici necessari. Il passaggio al settore successivo è sgombro.`,
    unlockedSecret: `'Le tracce confermano l'accuratezza dei manoscritti di Padre Lopez. Proseguiamo l'esplorazione senza indugio.' - Diario di Bellini`,
  };
}
