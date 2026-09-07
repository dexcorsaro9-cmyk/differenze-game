import type { SagaMilestone } from '../types/game';

export const SAGA_MILESTONES_120: SagaMilestone[] = [
  // --- ATTO I: L'ENIGMA D'EUROPA (Livelli 1 - 40) - Difficoltà: Facile -> Normale ---
  {
    stageNumber: 1,
    targetLevel: 10,
    zoneName: "Atto I: L'Enigma d'Europa",
    stageTitle: "Lo Studio di Oxford",
    location: "Oxford, Inghilterra",
    diaryPageNumber: 1,
    storyFragment: "Nello studio del Dipartimento, dietro alla libreria secolare, abbiamo scovato la prima pergamena in codice. I simboli combaciano con il diario del navigatore portoghese scomparso nel 1512. La mappa non inizia nelle Americhe, ma tra le antiche cripte parigine!",
    unlockedRelic: "Il Sigillo di Cera di Bellini",
    relicDescription: "Un anello d'ottone con lo stemma della Reale Società Geografica, usato per marchiare le mappe autentiche.",
    mapCoordinates: "51°45'N, 1°15'W"
  },
  {
    stageNumber: 2,
    targetLevel: 20,
    zoneName: "Atto I: L'Enigma d'Europa",
    stageTitle: "I Sotterranei dell'Ossario",
    location: "Catacombe di Parigi, Francia",
    diaryPageNumber: 2,
    storyFragment: "Scendendo per trenta metri nei corridoi di pietra calcarea sotto Parigi, abbiamo rinvenuto il bassorilievo dell'Ordine Templare. La loro flotta non trasportava oro, ma la Pietra Guida per orientarsi oltre l'orizzonte!",
    unlockedRelic: "La Croce Patente d'Argento",
    relicDescription: "Un antico talismano che oscilla indicando giacimenti magnetici sotterranei.",
    mapCoordinates: "48°51'N, 2°20'E"
  },
  {
    stageNumber: 3,
    targetLevel: 30,
    zoneName: "Atto I: L'Enigma d'Europa",
    stageTitle: "La Bottega dell'Alchimista",
    location: "Canal Grande, Venezia",
    diaryPageNumber: 3,
    storyFragment: "Dietro uno specchio di Murano in un palazzo trecentesco, giaceva il carteggio segreto tra Marco Polo e gli astronomi d'Oriente. La rotta punta dritta verso l'isola del Minotauro!",
    unlockedRelic: "La Carta Nautica di Murano",
    relicDescription: "Pergamena su pelle di capra con le correnti segrete e le scogliere sommerse del Mediterraneo.",
    mapCoordinates: "45°26'N, 12°19'E"
  },
  {
    stageNumber: 4,
    targetLevel: 40,
    zoneName: "Atto I: L'Enigma d'Europa",
    stageTitle: "Il Labirinto di Minosse",
    location: "Palazzo di Cnosso, Creta",
    diaryPageNumber: 4,
    storyFragment: "Al centro del labirinto sotterraneo, dentro un sarcofago d'alabastro intatto, abbiamo completato il primo quadrante della mappa! Il richiamo dell'archeologia ci spinge verso le sabbie d'Egitto.",
    unlockedRelic: "L'Astrolabio di Tolomeo",
    relicDescription: "Uno strumento astronomico in bronzo dorato in grado di calcolare la posizione solare originaria.",
    mapCoordinates: "35°17'N, 25°11'E"
  },

  // --- ATTO II: LA PISTA DEL DESERTO (Livelli 41 - 80) - Difficoltà: Normale -> Medio-Alta ---
  {
    stageNumber: 5,
    targetLevel: 50,
    zoneName: "Atto II: La Pista del Deserto",
    stageTitle: "La Biblioteca Sommersa",
    location: "Porto Antico di Alessandria, Egitto",
    diaryPageNumber: 5,
    storyFragment: "Nelle acque del porto antico, abbiamo scoperto i resti di una camera stagna di pietra. Un rotolo di papiro sigillato con pece racconta del faraone che nascose la seconda chiave oltre il Nilo!",
    unlockedRelic: "Il Medaglione di Serapide",
    relicDescription: "Moneta coniata in elettro dorato, chiave per attivare le chiuse idrauliche dei templi egizi.",
    mapCoordinates: "31°12'N, 29°53'E"
  },
  {
    stageNumber: 6,
    targetLevel: 60,
    zoneName: "Atto II: La Pista del Deserto",
    stageTitle: "La Tomba dei Trenta Sacerdoti",
    location: "Valle dei Re, Luxor, Egitto",
    diaryPageNumber: 6,
    storyFragment: "Dietro la parete falsa della tomba reale, non c'erano sarcofagi, ma un imponente meccanismo a bilanciere di granito nero. Risolvendo l'enigma, abbiamo sbloccato il passaggio verso l'Oasi di Siwa.",
    unlockedRelic: "La Chiave Ankh di Diaspro",
    relicDescription: "Scettro cerimoniale intagliato in diaspro rosso del Sinai, indispensabile per sbloccare portali a scorrimento.",
    mapCoordinates: "25°44'N, 32°36'E"
  },
  {
    stageNumber: 7,
    targetLevel: 70,
    zoneName: "Atto II: La Pista del Deserto",
    stageTitle: "L'Oracolo delle Dune",
    location: "Oasi di Siwa, Deserto Occidentale",
    diaryPageNumber: 7,
    storyFragment: "Le tempeste di sabbia non hanno fermato la spedizione. Sotto l'altare dove pregò Alessandro Magno, abbiamo trovato il cilindro di bronzo con le incisioni del canyon di Petra!",
    unlockedRelic: "La Clessidra a Polvere d'Oro",
    relicDescription: "Una clessidra sigillata contenente sabbia aurifera per temporizzare trappole a pressione.",
    mapCoordinates: "29°12'N, 25°31'E"
  },
  {
    stageNumber: 8,
    targetLevel: 80,
    zoneName: "Atto II: La Pista del Deserto",
    stageTitle: "La Porta Scavata nella Roccia",
    location: "Al-Khazneh, Petra, Giordania",
    diaryPageNumber: 8,
    storyFragment: "Livello 80 completato! La facciata di Petra nascondeva un immenso acquedotto segreto. Abbiamo allineato i tre flussi e recuperato lo Scarabeo d'Ossidiana: la rotta per le Ande è tracciata!",
    unlockedRelic: "Lo Scarabeo d'Ossidiana del Faraone",
    relicDescription: "La Prima Chiave Suprema del Tesoro: proietta fasci luminosi che rivelano sentieri montuosi invisibili.",
    mapCoordinates: "30°19'N, 35°26'E"
  },

  // --- ATTO III: IL SANTUARIO NELLA GIUNGLA & IL TESORO FINALE (Livelli 81 - 120) - Difficoltà: Esperto ---
  {
    stageNumber: 9,
    targetLevel: 90,
    zoneName: "Atto III: Il Santuario della Giungla",
    stageTitle: "La Gola del Tuono d'Acqua",
    location: "Cascate dell'Iguazú, Foresta Pluviale",
    diaryPageNumber: 9,
    storyFragment: "Il rombo delle cascate era assordante. Camminando dietro il velo d'acqua della Gola del Diavolo, abbiamo scoperto la caverna dei Guaranì e disattivato la grata con il talismano di diaspro.",
    unlockedRelic: "Il Disco d'Argento Lunare",
    relicDescription: "Disco cerimoniale d'argento puro che riflette la luna piena per deviare le cascate interne.",
    mapCoordinates: "25°41'S, 54°26'W"
  },
  {
    stageNumber: 10,
    targetLevel: 100,
    zoneName: "Atto III: Il Santuario della Giungla",
    stageTitle: "I Geoglifi degli Dei",
    location: "Altopiano di Nazca, Perù",
    diaryPageNumber: 10,
    storyFragment: "Cento livelli superati! Il becco del Colibrì gigante tracciato sul terreno punta con precisione millimetrica verso una gola nascosta sopra Machu Picchu. L'aria si fa rarefatta, siamo vicinissimi!",
    unlockedRelic: "La Tavoletta Astronomica di Nazca",
    relicDescription: "Tavoletta di quarzo con le proporzioni matematiche per aprire le porte megalitiche delle Ande.",
    mapCoordinates: "14°43'S, 75°08'W"
  },
  {
    stageNumber: 11,
    targetLevel: 110,
    zoneName: "Atto III: Il Santuario della Giungla",
    stageTitle: "La Cittadella tra le Nubi",
    location: "Machu Picchu, Valle Sacra",
    diaryPageNumber: 11,
    storyFragment: "All'Intihuatana, la pietra sacra che lega il sole, l'ombra del solstizio ha aperto il pozzo segreto sotto il Tempio del Condor. Mancano solo 10 livelli alla Sala Suprema di Paititi!",
    unlockedRelic: "Il Tumi d'Oro dei Re del Sole",
    relicDescription: "Scettro a mezzaluna in oro 24k: è l'impugnatura della chiave finale.",
    mapCoordinates: "13°09'S, 72°32'W"
  },
  {
    stageNumber: 12,
    targetLevel: 120,
    zoneName: "Atto III: Il Santuario della Giungla",
    stageTitle: "LA CAMERA D'ORO DI PAITITI: IL TESORO FINALE!",
    location: "Il Santuario di Paititi, Cuore della Montagna",
    diaryPageNumber: 12,
    storyFragment: "LIVELLO 120 COMPLETATO! LA MAPPA DEL TESORO È RICOMPOSTA AL 100%! La colossale Porta d'Oro di Paititi si è aperta con un boato glorioso. Davanti ai nostri occhi risplende il Tesoro Supremo dell'Umanità: piramidi di manufatti dorati, smeraldi colombiani e l'Occhio di Quetzalcoatl! Il Professor Bellini ti stringe la mano: 'Hai decifrato il più grande mistero della storia!'",
    unlockedRelic: "IL TESORO FINALE: L'OCCHIO SUPREMO DI PAITITI",
    relicDescription: "La Reliquia Leggendaria Suprema: il tesoro perduto delle civiltà precolombiane che racchiude tutta la conoscenza e le ricchezze dell'Eldorado!",
    mapCoordinates: "12°27'S, 71°30'W - TESORO CONQUISTATO!"
  }
];
