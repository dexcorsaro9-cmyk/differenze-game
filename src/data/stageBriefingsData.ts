export interface StageBriefing {
  stageNumber: number;
  actTitle: string;
  stageTitle: string;
  location: string;
  date: string;
  coordinates: string;
  dispatchCode: string;
  bannerImage: string;
  tagline: string;
  loreStory: string[];
  missionObjectives: string[];
  targetRelic: {
    name: string;
    description: string;
  };
  explorerQuotes: {
    samira: string;
    mateo: string;
  };
}

export const STAGE_BRIEFINGS: Record<number, StageBriefing> = {
  1: {
    stageNumber: 1,
    actTitle: "Atto I: L'Enigma d'Europa",
    stageTitle: "Lo Studio di Oxford & Il Taccuino Perduto",
    location: "Oxford & Londra, Inghilterra",
    date: "12 Ottobre 1928 — Ore 23:45",
    coordinates: "51°45'N, 1°15'W",
    dispatchCode: "RGS-EXP-1928-OXF-01",
    bannerImage: "/oxford_study_A.jpg",
    tagline: "Un'irruzione notturna, una mappa contraffatta e il primo indizio verso la Città d'Oro.",
    loreStory: [
      "La pioggia battente sferza le vetrate gotiche del Dipartimento di Epigrafia di Oxford. Solo poche ore fa, il Professor Evelyn Bellini — la massima autorità britannica sulle civiltà precolombiane — è scomparso nel nulla senza lasciare traccia.",
      "Entrando nel suo studio privato, l'odore di inchiostro di china e ceralacca bruciata impregna l'aria. Cassetti forzati, tomi secolari aperti sul pavimento e la cassaforte a muro spalancata. Chiunque sia penetrato qui cercava il leggendario 'Taccuino di Paititi', il registro in cui Bellini ha condensato vent'anni di rilievi geodetici e trascrizioni di cronache coloniali perdute.",
      "Ma l'intruso ha commesso un errore fatale: per non destare sospetti ha sostituito il taccuino originale con una copia contraffatta, alterando sottili dettagli nei manoscritti, nei sigilli e negli strumenti di misura. Soltanto un occhio addestrato può riconoscere le 10 discrepanze fisiche deliberate.",
      "Tu sei stato convocato d'urgenza dalla Reale Società Geografica. Confrontando minuziosamente gli schizzi d'archivio con la scena reale dello studio, dobbiamo decifrare il primo crittogramma e scoprire dove Bellini ha nascosto le coordinate di fuga prima dell'irruzione."
    ],
    missionObjectives: [
      "Ispeziona lo studio e identifica le 10 discrepanze d'archivio nei primi 10 livelli.",
      "Recupera la testimonianza segreta di Padre Lopez del 1600 nascosta nel cassetto a doppio fondo.",
      "Sblocca il Sigillo di Cera di Bellini per convalidare la rotta di fuga verso la Francia."
    ],
    targetRelic: {
      name: "Il Sigillo di Cera di Bellini",
      description: "Anello in ottone massiccio con lo stemma della Reale Società Geografica, utilizzato per autenticare i faldoni segreti."
    },
    explorerQuotes: {
      samira: "Osserva con attenzione la calligrafia sui tomi e la posizione delle lenti. Chi si è introdotto qui conosceva il latino, ma ignorava i simboli astronomici andini. Ogni differenza è un indizio lasciato da Bellini!",
      mateo: "L'allineamento degli strumenti topografici e la ceralacca sul tavolo rivelano la fretta del falsario. La triangolazione non torna: troviamo le discrepanze e tracciamo la rotta esatta."
    }
  },

  2: {
    stageNumber: 2,
    actTitle: "Atto I: L'Enigma d'Europa",
    stageTitle: "I Sotterranei dell'Ossario & Le Catacombe",
    location: "Catacombe di Parigi, Francia",
    date: "26 Ottobre 1928 — Ore 03:15",
    coordinates: "48°51'N, 2°20'E",
    dispatchCode: "RGS-EXP-1928-PAR-02",
    bannerImage: "/levels/stage_2_A.jpg",
    tagline: "Trenta metri sotto il selciato di Parigi, tra le ombre millenarie dei Cavalieri Templari.",
    loreStory: [
      "La prima traccia decifrata a Oxford ci ha condotti a Parigi, a bordo del piroscafo notturno attraverso la Manica. Qui, la mappa di Bellini non indicava i musei del Louvre, ma le viscere calcaree della città: le Catacombe e le gallerie vietate dell'Ossario.",
      "Nel 1307, prima della caduta dell'Ordine del Tempio, una flotta salpò da La Rochelle portando con sé non l'oro dei pellegrini, bensì rotte nautiche misteriose donate dagli astronomi arabi di Cordova. I maestri costruttori murarono i rilievi nelle gallerie di pietra calcarea a trenta metri sotto la collina di Sainte-Geneviève.",
      "Le pareti d'ossa e le cripte sotterranee conservano i bassorilievi con la Croce Patente e le meridiane ipogee. Tra la polvere dei secoli e le infiltrazioni d'acqua sorgiva, dobbiamo confrontare i rilievi del taccuino con le incisioni tombali per sbloccare il passaggio verso il Mediterraneo."
    ],
    missionObjectives: [
      "Discendi nelle cave calcaree e decifra i bassorilievi templari celati nei muri dell'ossario.",
      "Trova le anomalie tra i graffiti del XVIII secolo e i sigilli medievali autentici.",
      "Recupera la Croce Patente d'Argento, bussola magnetica per orientarsi nelle cripte."
    ],
    targetRelic: {
      name: "La Croce Patente d'Argento",
      description: "Antico talismano templare la cui lega metallica oscilla in prossimità di faglie magnetiche sotterranee."
    },
    explorerQuotes: {
      samira: "L'umidità delle catacombe ha cancellato molte iscrizioni, ma le croci scolpite nella roccia viva resistono. Cerca le anomalie nei crani e nei faldoni incisi.",
      mateo: "La struttura di questi cunicoli segue la pianta di una fortezza templare sotterranea. La luce delle nostre lanterne a carburo rivelerà ogni minimo scostamento nella pietra."
    }
  },

  3: {
    stageNumber: 3,
    actTitle: "Atto I: L'Enigma d'Europa",
    stageTitle: "La Bottega dell'Alchimista & Il Canal Grande",
    location: "Canal Grande e Murano, Venezia, Italia",
    date: "14 Novembre 1928 — Ore 19:20",
    coordinates: "45°26'N, 12°19'E",
    dispatchCode: "RGS-EXP-1928-VEN-03",
    bannerImage: "/levels/stage_3_A.jpg",
    tagline: "Vetri risonanti, specchi d'alchimia e le lettere segrete del Milione di Marco Polo.",
    loreStory: [
      "La Croce d'Argento di Parigi ha orientato il nostro ago magnetico verso la Serenissima Repubblica di Venezia. Tra la nebbia salmastra che avvolge il Canal Grande e i palazzi trecenteschi affacciati sulle lagune, si cela la bottega di un antico maestro vetraio e cartografo.",
      "Al suo ritorno dal Catai nel 1295, Marco Polo consegnò al Consiglio dei Dieci una pergamena vergata su seta con le correnti marine del Grande Oceano Orientale. Gli alchimisti di Murano incorporarono la formula ottica dentro specchi concavi capaci di decifrare carte stellari altrimenti invisibili.",
      "L'officina è rimasta intatta per quattro secoli: alambicchi, lenti di quarzo, registri doganali e carte nautiche su pelle di capra. Tra i riflessi dell'acqua veneziana e i banchi di lavoro in noce, dobbiamo individuare le discrepanze per estrarre la Carta Nautica di Murano."
    ],
    missionObjectives: [
      "Esplora la bottega alchemica e scova il vano nascosto dietro gli specchi al mercurio.",
      "Confronta le carte nautiche del Mediterraneo orientale con gli strumenti d'epoca.",
      "Recupera la Carta Nautica di Murano per tracciare la rotta verso l'Egeo e l'isola di Creta."
    ],
    targetRelic: {
      name: "La Carta Nautica di Murano",
      description: "Mappa nautica vergata con inchiostri alchemici luminescenti che rivela le secche e i canali marini dell'Egeo."
    },
    explorerQuotes: {
      samira: "I maestri vetrai veneziani proteggevano i loro segreti con la pena di morte. Ogni fiala e ogni specchio nella bottega può contenere un filtro ottico per il nostro taccuino!",
      mateo: "I canali di Venezia riflettono la luce delle lanterne creando inganni visivi. Mantieni lo sguardo fermo sugli strumenti geometrici e sui codici miniati."
    }
  },

  4: {
    stageNumber: 4,
    actTitle: "Atto I: L'Enigma d'Europa",
    stageTitle: "Il Labirinto di Minosse & La Lineare B",
    location: "Palazzo di Cnosso, Creta, Grecia",
    date: "02 Dicembre 1928 — Ore 11:30",
    coordinates: "35°17'N, 25°11'E",
    dispatchCode: "RGS-EXP-1928-CRT-04",
    bannerImage: "/levels/stage_4_A.jpg",
    tagline: "I meandri di pietra minoici e la chiave del Primo Quadrante Celeste.",
    loreStory: [
      "Lasciate le lagune venete a bordo di una goletta mercantile, siamo sbarcati sulle coste aride di Creta. A Cnosso, dove Sir Arthur Evans ha da poco riportato alla luce i cortili e le colonne scarlatte della civiltà minoica, riposa la radice prima dell'astronomia mediterranea.",
      "Sotto il piano del palazzo reale si sviluppa la rete labirintica delle cisterne e dei santuari ipogei. Qui, gli scribi di Cnosso incisero su tavolette d'argilla in Lineare B il moto del disco solare e le stagioni del mare profondo.",
      "La mappa di Bellini rivela che l'Astrolabio di Tolomeo fu custodito all'interno di un sarcofago d'alabastro intatto. Esaminando i grandi pithoi, gli affreschi dei tori saltatori e le gradinate megalitiche, chiuderemo l'Atto I e otterremo la chiave per il deserto egizio."
    ],
    missionObjectives: [
      "Addentrati nei corridoi del Labirinto e decifra le tavolette minoiche con le doppie asce (Labrys).",
      "Identifica le differenze nelle pitture parietali e negli altari rituali a gradoni.",
      "Ricomponi il Primo Quadrante della Mappa e ottieni l'Astrolabio di Tolomeo."
    ],
    targetRelic: {
      name: "L'Astrolabio di Tolomeo",
      description: "Manufatto astronomico ellenistico in bronzo dorato in grado di calcolare la latitudine delle terre boreali."
    },
    explorerQuotes: {
      samira: "Le colonne rovesciate e i motivi a spirale minoici nascondono un ritmo matematico antichissimo. Risolvendo le anomalie delle tavolette sbloccheremo il primo quarto dell'atlante!",
      mateo: "L'architettura di Cnosso è progettata per disorientare chiunque non possieda un filo geodetico. Con il taccuino alla mano, ogni colonna e ogni giara rivelerà la sua posizione originale."
    }
  },

  5: {
    stageNumber: 5,
    actTitle: "Atto II: La Pista del Deserto",
    stageTitle: "La Biblioteca Sommersa & Il Faro d'Alessandria",
    location: "Porto Antico di Alessandria, Egitto",
    date: "18 Dicembre 1928 — Ore 15:10",
    coordinates: "31°12'N, 29°53'E",
    dispatchCode: "RGS-EXP-1928-ALX-05",
    bannerImage: "/levels/stage_5_A.jpg",
    tagline: "Nelle profondità marine del porto tolemaico, dove riposa la sapienza di Alessandro.",
    loreStory: [
      "Inauguriamo l'Atto II giungendo alle porte dell'Oriente e dell'Africa: Alessandria d'Egitto. Davanti a noi si stendono le acque turchesi dove secoli di terremoti hanno inabissato le fondamenta del celeberrimo Faro e i padiglioni del quartiere reale di Cleopatra.",
      "Utilizzando le prime campane da palombaro e scandagli manuali, ci immergiamo tra i blocchi ciclopici di granito d'Aswan crollati sul fondale. Tra le colonne spezzate giacciono le camere stagne di pietra in cui gli studiosi tolemaici sigillarono i papiri più preziosi prima dell'incendio.",
      "Uno di questi cilindri di piombo contiene il trattato astronomico sulle costellazioni del sud che non tramontano mai. Confronta i rilievi sottomarini e le statue sfingi coperte di conchiglie per rintracciare il Medaglione di Serapide."
    ],
    missionObjectives: [
      "Esamina i reperti sommersi del Faro e individua i sarcofagi di granito rosa tolemaico.",
      "Trova le anomalie tra le statue sommerse e i rilievi idrografici del porto antico.",
      "Recupera il Medaglione di Serapide, chiave idraulica per le chiuse del Nilo."
    ],
    targetRelic: {
      name: "Il Medaglione di Serapide",
      description: "Medaglia votiva coniata in elettro dorato che reca la mappa delle cateratte meridionali del Nilo."
    },
    explorerQuotes: {
      samira: "Il sale marino e i coralli hanno incrostato le iscrizioni greche e geroglifiche. Dobbiamo distinguere le incisioni originali dalle fratture della pietra marina.",
      mateo: "Le correnti subacquee rendono l'ispezione pericolosa. Mantieni salda la fune da palombaro e concentrati sui basamenti delle sfingi e sui blocchi squadrati del Faro."
    }
  },

  6: {
    stageNumber: 6,
    actTitle: "Atto II: La Pista del Deserto",
    stageTitle: "La Tomba dei Trenta Sacerdoti & La Valle dei Re",
    location: "Valle dei Re, Luxor, Egitto",
    date: "04 Gennaio 1929 — Ore 06:40",
    coordinates: "25°44'N, 32°36'E",
    dispatchCode: "RGS-EXP-1928-LUX-06",
    bannerImage: "/levels/stage_6_A.jpg",
    tagline: "Nel cuore della tebaide, tra affreschi dorati e meandri ipogei scavati nella roccia calcarea.",
    loreStory: [
      "Risalendo il Nilo a bordo di un feluca tradizionale, siamo approdati a Tebe, l'odierna Luxor. A pochi anni dalla clamorosa scoperta di Tutankhamon da parte di Howard Carter nel 1922, la Valle dei Re brulica di scavi archeologici.",
      "Ma la nostra destinazione è un ipogeo dimenticato: la Tomba dei Trenta Sacerdoti di Amon-Ra, scavata nelle gole più scoscese delle falesie tebane. Questo sepolcro non fu eretto per ospitare corpi mummificati, bensì un gigantesco meccanismo segreto di contrappesi in granito nero.",
      "Risolvendo le discrepanze visive tra gli affreschi del Libro dei Morti, le barche solari e le canopi funerarie, azioneremo i contrappesi che aprono la camera cieca contenente la Chiave Ankh di Diaspro."
    ],
    missionObjectives: [
      "Penetra nella tomba scavata nella falesia e decifra le scene di pesatura del cuore (Psicostasia).",
      "Riconosci le 10 discrepanze fisiche tra le divinità oranti, le offerte e i simboli geroglifici.",
      "Aziona i contrappesi di granito e recupera la Chiave Ankh di Diaspro Rosso."
    ],
    targetRelic: {
      name: "La Chiave Ankh di Diaspro",
      description: "Scettro sacro intagliato in diaspro rosso del Sinai, necessario per sbloccare i portali monolitici del deserto."
    },
    explorerQuotes: {
      samira: "I pigmenti blu egizio, ocra rossa e oro hanno conservato la loro brillantezza per oltre tremila anni. Ogni geroglifico variato altera il significato dell'intera invocazione!",
      mateo: "Attento alle trappole a bilanciere sul pavimento. Le ombre delle nostre torce devono rivelare le pietre di taglio che azionano la camera interna."
    }
  },

  7: {
    stageNumber: 7,
    actTitle: "Atto II: La Pista del Deserto",
    stageTitle: "L'Oracolo di Siwa & Le Sabbie del Sahara",
    location: "Oasi di Siwa, Deserto Libico, Egitto",
    date: "21 Gennaio 1929 — Ore 17:50",
    coordinates: "29°12'N, 25°31'E",
    dispatchCode: "RGS-EXP-1928-SIW-07",
    bannerImage: "/levels/stage_7_A.jpg",
    tagline: "Dune infuocate, palmeti millenari e il santuario dove pregò Alessandro il Grande.",
    loreStory: [
      "Una carovana di dromedari ci ha guidato per dieci giorni attraverso il Grande Mare di Sabbia, sfidando tempeste di ghibli e miraggi accecanti, fino all'isolata Oasi di Siwa.",
      "Sull'acropoli di Aghurmi si ergono le maestose rovine del Tempio dell'Oracolo di Ammone, lo stesso luogo in cui nel 331 a.C. Alessandro Magno fu proclamato figlio della divinità solare. Sotto l'altare delle libagioni, tra blocchi calcarei erosi dal vento, giace una cripta segreta.",
      "La leggenda narra che i sacerdoti dell'oracolo occultarono qui una clessidra a polvere d'oro e un cilindro di bronzo contenente la triangolazione tra le oasi africane e la gola rocciosa di Petra in Transgiordania."
    ],
    missionObjectives: [
      "Raggiungi l'acropoli di Aghurmi tra i palmeti e ispeziona l'altare oracolare.",
      "Identifica le alterazioni nei rilievi solari causate dai saccheggiatori e dal vento.",
      "Recupera la Clessidra a Polvere d'Oro per sincronizzare le porte a tempo di Petra."
    ],
    targetRelic: {
      name: "La Clessidra a Polvere d'Oro",
      description: "Clessidra sigillata contenente sabbia aurifera purissima, usata dagli ingegneri antichi per scandire le chiusure idrauliche."
    },
    explorerQuotes: {
      samira: "Le iscrizioni oracolari di Siwa fondono caratteri demotici e greco arcaico. Trova i simboli del disco solare cornuto per localizzare l'altare sotterraneo.",
      mateo: "Il riverbero del sole sulle dune può ingannare la vista. Esamina con cura le ombre proiettate dai capitelli e le colonne superstiti."
    }
  },

  8: {
    stageNumber: 8,
    actTitle: "Atto II: La Pista del Deserto",
    stageTitle: "Il Tesoro nella Roccia & Il Canyon del Siq",
    location: "Al-Khazneh & Wadi Rum, Petra, Giordania",
    date: "09 Febbraio 1929 — Ore 14:15",
    coordinates: "30°19'N, 35°26'E",
    dispatchCode: "RGS-EXP-1928-PET-08",
    bannerImage: "/levels/stage_8_A.jpg",
    tagline: "La facciata monumentale scolpita nella pietra rosa e il compimento dell'Atto II.",
    loreStory: [
      "Attraversata la penisola del Sinai, siamo penetrati nella stretta fessura del Siq di Petra, dove pareti di arenaria rossa alte cento metri bloccano il cielo. All'improvviso, tra la gola rocciosa appare la maestosa facciata ellenistica di Al-Khazneh (Il Tesoro).",
      "I maestri costruttori Nabatei non erano semplici scultori: erano i più grandi ingegneri idraulici del deserto. Dietro i capitelli corinzi e l'urna sommitale si cela un complesso sistema di canali e dighe che convogliava le rare alluvioni montane verso una cisterna sacra.",
      "Completando questo capitolo raggiungeremo il Livello 80 e sbloccheremo la Prima Chiave Suprema: lo Scarabeo d'Ossidiana del Faraone. Con questo reperto, la rotta europea e mediorientale è conclusa: il viaggio transatlantico verso il Sud America può finalmente cominciare!"
    ],
    missionObjectives: [
      "Percorri il Siq e ispeziona la facciata monolitica di Al-Khazneh e le tombe reali.",
      "Risolvi le 10 discrepanze d'arenaria negli acroteri, nei capitelli e nelle urne scolpite.",
      "Sblocca lo Scarabeo d'Ossidiana: la chiave che proietta le rotte delle Ande perdute."
    ],
    targetRelic: {
      name: "Lo Scarabeo d'Ossidiana del Faraone",
      description: "La Prima Chiave Suprema del Tesoro: pietra vulcanica levigata che, esposta ai raggi solari, riflette coordinate andine."
    },
    explorerQuotes: {
      samira: "Le sfumature rosa, ocra e violacee dell'arenaria di Petra sono spettacolari. Ma non farti distrarre: i Nabatei hanno camuffato i fori delle chiuse dietro i bassorilievi delle Amazzoni!",
      mateo: "Siamo al giro di boa della nostra spedizione. Ottenuto lo Scarabeo, caricheremo gli strumenti di volo: il Sud America e la giungla inesplorata ci attendono!"
    }
  },

  9: {
    stageNumber: 9,
    actTitle: "Atto III: Il Santuario della Giungla",
    stageTitle: "La Gola del Diavolo & Le Cascate dell'Iguazú",
    location: "Cascate dell'Iguazú & Missioni Guaraní, Brasile/Argentina",
    date: "01 Marzo 1929 — Ore 09:30",
    coordinates: "25°41'S, 54°26'W",
    dispatchCode: "RGS-EXP-1928-IGU-09",
    bannerImage: "/levels/stage_9_A.jpg",
    tagline: "Il rombo di 275 cascate, il vapore della giungla e l'ingresso nel continente andino.",
    loreStory: [
      "Inauguriamo l'epico Atto III: dopo una traversata oceanica a bordo di un trimotore idrovolante, siamo atterrati sulle acque tumultuose dell'alto fiume Paraná, al confine tra Brasile e Argentina.",
      "Davanti a noi si scatena la furia della Garganta del Diablo (La Gola del Diavolo): un fronte d'acqua largo tre chilometri che precipita per oltre ottanta metri nel vuoto, generando un arcobaleno perenne e un boato che fa tremare il terreno per miglia.",
      "Nascosta dietro il muro d'acqua incessante si trova la Caverna Sacra dei popoli Guaraní, accessibile solo camminando su passerelle scivolose di basalto. Qui i sacerdoti deposero il Disco d'Argento Lunare, che riflette i raggi della luna piena per rivelare il passaggio verso le valli andine di Nazca."
    ],
    missionObjectives: [
      "Guarda attraverso il velo d'acqua della Gola del Diavolo e individua le passerelle indigene.",
      "Trova le anomalie nella vegetazione pluviale, nei basalti vulcanici e nei nidi di rondoni.",
      "Recupera il Disco d'Argento Lunare per deviare le cascate interne del santuario."
    ],
    targetRelic: {
      name: "Il Disco d'Argento Lunare",
      description: "Lamina circolare d'argento puro intagliata con le fasi sinodiche della luna, usata per disattivare trappole d'acqua."
    },
    explorerQuotes: {
      samira: "Lo scroscio dell'acqua è assordante e l'umidità impregna ogni cosa. Custodisci il taccuino nella cerata e cerca i petroglifi incisi sulla roccia lavica bagnata.",
      mateo: "Il vapore delle cascate crea una nebbia perenne. Tieni gli occhi aperti sulle biforcazioni del salto d'acqua e sui blocchi di basalto umido."
    }
  },

  10: {
    stageNumber: 10,
    actTitle: "Atto III: Il Santuario della Giungla",
    stageTitle: "I Geoglifi degli Dei & L'Altopiano di Nazca",
    location: "Pampa di Nazca & Palpa, Perù",
    date: "16 Marzo 1929 — Ore 07:15",
    coordinates: "14°43'S, 75°08'W",
    dispatchCode: "RGS-EXP-1928-NAZ-10",
    bannerImage: "/levels/stage_10_A.jpg",
    tagline: "Cento livelli di spedizione: i disegni monumentali visibili solo dall'alto dei cieli.",
    loreStory: [
      "Salendo verso l'altopiano arido del Perù meridionale, ci troviamo di fronte a uno dei più grandi enigmi dell'umanità: le Linee e i Geoglifi di Nazca. Tracciati rimuovendo l'ossido di ferro dai ciottoli del deserto oltre duemila anni fa, questi disegni colossali si estendono per centinaia di metri quadrati.",
      "A bordo del nostro aereo da ricognizione o arrampicandoci sulle alture della pampa, osserviamo il Colibrì, la Scimmia con la coda a spirale, il Ragno sacro e i trapezi geometrici. Il becco del Colibrì gigante punta con rigore astronomico verso la cima delle Ande innevate.",
      "Superare i dieci livelli di Nazca ci porterà al traguardo del Livello 100! Recupereremo la Tavoletta Astronomica di Nazca, che custodisce le proporzioni megalitiche necessarie per aprire i portoni ciclopici di Machu Picchu."
    ],
    missionObjectives: [
      "Sorvola i geoglifi e confronta le linee geometriche con i calcoli stellari del taccuino.",
      "Riconosci le 10 discrepanze d'alta quota nel piumaggio degli uccelli sacri e nei puquios a spirale.",
      "Raggiungi il prestigioso traguardo del Livello 100 e ottieni la Tavoletta Astronomica."
    ],
    targetRelic: {
      name: "La Tavoletta Astronomica di Nazca",
      description: "Placca in quarzo levigato con le formule di calcolo solstiziale utilizzate dai costruttori andini."
    },
    explorerQuotes: {
      samira: "Dall'alto della pampa, i geoglifi appaiono come una preghiera incisa per le divinità del cielo. Ogni variazione nel profilo delle figure è un codice geografico millimetrico.",
      mateo: "I canali a spirale dei puquios e le linee trapezoidali fungono da gigantesco teodolite terrestre. Abbiamo raggiunto quota 100: la meta finale è a un passo!"
    }
  },

  11: {
    stageNumber: 11,
    actTitle: "Atto III: Il Santuario della Giungla",
    stageTitle: "La Cittadella tra le Nubi & L'Intihuatana",
    location: "Machu Picchu & Valle Sacra dell'Urubamba, Perù",
    date: "28 Marzo 1929 — Ore 05:50",
    coordinates: "13°09'S, 72°32'W",
    dispatchCode: "RGS-EXP-1928-MAC-11",
    bannerImage: "/levels/stage_11_A.jpg",
    tagline: "Tra le vette scoscese di Huayna Picchu, l'ultimo avamposto prima dell'ignoto.",
    loreStory: [
      "L'aria è sottile e tersa a duemilaquattrocento metri d'altitudine. Tra le creste granitiche che dominano la gola vertiginosa dell'Urubamba, sorge la città perduta degli imperatori inca: Machu Picchu.",
      "Nel silenzio dell'alba, quando le nubi salgono dalla giungla sottostante avvolgendo i terrazzamenti agricoli, raggiungiamo la sommità della collina sacra: l'Intihuatana ('il luogo dove si lega il sole'). Questo monolito scolpito nella roccia viva non è solo una meridiana, ma il perno astronomico dell'intero impero.",
      "Durante l'equinozio di primavera, l'ombra del pilastro di pietra si proietta verso una fessura segreta sotto il Tempio del Condor. Qui giace il Tumi d'Oro dei Re del Sole, l'impugnatura cerimoniale che consente di penetrare nell'ultimo santuario inaccessibile: Paititi."
    ],
    missionObjectives: [
      "Esplora i terrazzamenti megalitici, il Tempio delle Tre Finestre e la Casa del Guardiano.",
      "Identifica le 10 discrepanze nei conci ciclopici di granito bianco accostati senza malta.",
      "Allinea l'ombra dell'Intihuatana per recuperare il Tumi d'Oro dei Re del Sole."
    ],
    targetRelic: {
      name: "Il Tumi d'Oro dei Re del Sole",
      description: "Coltello cerimoniale a mezzaluna in oro massiccio 24 carati: è la chiave fisica per il varco supremo."
    },
    explorerQuotes: {
      samira: "I conci di granito di Machu Picchu combaciano con una precisione tale che non passa una lama di rasoio. Cerca qualsiasi millimetro di discrepanza nelle giunture della roccia sacra!",
      mateo: "Guardando oltre le vette del Huayna Picchu si scorge la fitta foresta amazzonica del Madre de Dios. Mancano solo 10 livelli: il segreto di Bellini sta per svelarsi."
    }
  },

  12: {
    stageNumber: 12,
    actTitle: "Atto III: Il Santuario della Giungla",
    stageTitle: "La Camera d'Oro di Paititi — Gran Finale",
    location: "Santuario Segreto di Paititi, Amazzonia Peruviana",
    date: "05 Aprile 1929 — Ore 12:00 (Mezzogiorno del Sole allo Zenit)",
    coordinates: "12°45'S, 71°50'W",
    dispatchCode: "RGS-EXP-1928-PAI-12",
    bannerImage: "/levels/stage_12_A.jpg",
    tagline: "Il mistero svelato: 120 livelli, 12 tappe mondiali, il Cuore Solare di Paititi.",
    loreStory: [
      "Siamo finalmente giunti nel cuore inviolato della giungla amazzonica, oltre le gole inesplorate del Río Madre de Dios. Dove le mappe dei conquistatori segnavano 'Terra Incognita', tra felci giganti e cascate dorate, si ergono le porte monumentali di Paititi.",
      "La città d'oro non è mai stata un miraggio o una favola per avventurieri avidi: è il santuario supremo dove gli ultimi saggi inca protessero la saggezza cosmica, la medicina dei templi e il Cuore Solare d'Oro massiccio prima della caduta di Vilcabamba.",
      "Sulla soglia del tempio troviamo gli ultimi appunti autografi del Professor Bellini: 'Chi ha avuto la tenacia di compiere questo viaggio possiede gli occhi per comprendere il vero tesoro'. Negli ultimi dieci livelli, dal 111 al 120, affronteremo le sfide visive più raffinate e calibrate per completare la grande spedizione!"
    ],
    missionObjectives: [
      "Varcare il portale monolitico di Paititi e accedere alla Sala dei Dodici Re del Sole.",
      "Risolvere le 10 discrepanze d'oro e giada nei livelli finali fino al livello 120.",
      "Sbloccare Il Cuore Solare di Paititi e completare l'intera epopea archeologica al 100%!"
    ],
    targetRelic: {
      name: "Il Cuore Solare di Paititi",
      description: "La Reliquia Suprema dell'archeologia: monumentale disco solare in oro zecchino e smeraldi colombiani."
    },
    explorerQuotes: {
      samira: "Tutti i fili conduttori da Oxford a Parigi, da Creta alle piramidi, convergono in questa sala. La nostra spedizione entra nella storia dell'archeologia mondiale!",
      mateo: "Centoventi livelli di dedizione, rigore cartografico e passione pura. Prepara la bussola per l'ultima volta: il Santuario d'Oro è aperto davanti a noi!"
    }
  }
};
