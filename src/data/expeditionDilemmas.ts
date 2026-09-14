export interface DilemmaChoice {
  id: string;
  title: string;
  description: string;
  consequence: string;
  rewardText: string;
  rewardType: 'coins' | 'shield' | 'hint' | 'freeze' | 'compass' | 'lore';
  rewardValue?: number;
  alignment: 'academy' | 'secret_archive' | 'sacred_jungle';
  badge: string;
  icon: string;
}

export interface ExpeditionDilemma {
  stageNumber: number; // 1 to 11
  milestoneLevelId: number; // 10, 20, 30, ... 110
  location: string;
  era: string;
  title: string;
  context: string;
  situation: string;
  choices: [DilemmaChoice, DilemmaChoice];
}

export const EXPEDITION_DILEMMAS: Record<number, ExpeditionDilemma> = {
  1: {
    stageNumber: 1,
    milestoneLevelId: 10,
    location: "Oxford, Inghilterra",
    era: "Novembre 1928",
    title: "La Fuga dall'Ateneo Vittoriano",
    context: "Il Professore ha lasciato lo studio pochi minuti prima che la Mano Oscura forzasse il portone.",
    situation: "Le sirene della polizia di Oxford riecheggiano nella nebbia. Due agenti corrotti della setta stanno setacciando il piazzale dell'Ashmolean Museum per intercettarti.",
    choices: [
      {
        id: "oxford_archive_raid",
        title: "Incursione nell'Archivio Riservato",
        description: "Fai irruzione nell'ufficio del Rettore colluso per sottrarre i telegrammi cifrati della Mano Oscura.",
        consequence: "Recuperi documenti compromettenti e fondi di ricerca prima di fuggire dalla finestra posteriore.",
        rewardText: "+250 Monete d'Oro & Dossier",
        rewardType: "coins",
        rewardValue: 250,
        alignment: "academy",
        badge: "CONOSCENZA ACCADEMICA",
        icon: "🏛️"
      },
      {
        id: "oxford_shadow_escape",
        title: "La Fuga Furtiva tra le Ombre",
        description: "Scivoli nei cunicoli sotterranei delle caldaie, prendendo il treno notturno per Roma sotto falso nome.",
        consequence: "Eviti ogni scontro a fuoco e metti al sicuro gli appunti di Bellini con la massima prudenza.",
        rewardText: "Scudo del Guardiano (+1 Protezione)",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "secret_archive",
        badge: "PRUDENZA DEL CUSTODE",
        icon: "🗝️"
      }
    ]
  },
  2: {
    stageNumber: 2,
    milestoneLevelId: 20,
    location: "Roma, Italia",
    era: "Dicembre 1928",
    title: "Il Crollo nelle Catacombe di San Callisto",
    context: "Un candelotto di dinamite piazzato dai mercenari fa tremare la volta di tufo della cripta millenaria.",
    situation: "I massi precipitano minacciosi. Padre Lopez è rimasto bloccato nel loculo con i manoscritti, mentre l'emissario nemico sta fuggendo con una copia della mappa.",
    choices: [
      {
        id: "rome_save_lopez",
        title: "Soccorri Padre Lopez e i Manoscritti",
        description: "Ti lanci tra le macerie per sollevare la colonna caduta e trarre in salvo l'anziano studioso.",
        consequence: "Padre Lopez si salva e per riconoscenza ti consacra una lente d'ingrandimento in ottone pontificio.",
        rewardText: "+2 Lenti d'Ingrandimento (Indizio)",
        rewardType: "hint",
        rewardValue: 2,
        alignment: "secret_archive",
        badge: "DEVOZIONE AI CUSTODI",
        icon: "✝️"
      },
      {
        id: "rome_hunt_spy",
        title: "Insegui e Neutralizza la Spia",
        description: "Ti getti nel corridoio buio per disarmare l'agente della Mano Oscura prima che raggiunga la superficie.",
        consequence: "Recuperi la mappa originale e il borsello d'oro destinato ai cospiratori romani.",
        rewardText: "+300 Monete d'Oro & Reliquia",
        rewardType: "coins",
        rewardValue: 300,
        alignment: "academy",
        badge: "RISOLUZIONE FERMA",
        icon: "⚔️"
      }
    ]
  },
  3: {
    stageNumber: 3,
    milestoneLevelId: 30,
    location: "Venezia, Italia",
    era: "Gennaio 1929",
    title: "L'Ombra sul Canale della Giudecca",
    context: "La nebbia della laguna avvolge il palazzo ducale dove è custodito il terzo sigillo di cristallo.",
    situation: "Un gondoliere misterioso offre di farti oltrepassare il blocco navale della Mano Oscura, ma richiede una prova della tua lealtà.",
    choices: [
      {
        id: "venice_bribe_gondola",
        title: "Paga il Gondoliere della Laguna",
        description: "Consegni un doblone d'argento per scivolare silenzioso nei rii secondari fino al porto di Malamocco.",
        consequence: "Navighi nell'oscurità più totale, ottenendo un congegno a bussola per orientarti tra le correnti.",
        rewardText: "+1 Bussola Radar Nautica",
        rewardType: "compass",
        rewardValue: 1,
        alignment: "secret_archive",
        badge: "VIE SEGRETE LAGUNARI",
        icon: "🛶"
      },
      {
        id: "venice_archival_bluff",
        title: "Falsifica il Lasciapassare del Doge",
        description: "Utilizzi il torchio di San Marco per stampare un'autorizzazione consolare della flotta adriatica.",
        consequence: "I gendarmi ti scortano con onori militari, rifornendo la spedizione con provviste scientifiche.",
        rewardText: "+2 Congela Tempo (Cronometro)",
        rewardType: "freeze",
        rewardValue: 2,
        alignment: "academy",
        badge: "INGEGNO DIPLOMATICO",
        icon: "📜"
      }
    ]
  },
  4: {
    stageNumber: 4,
    milestoneLevelId: 40,
    location: "Creta & Cairo, Egitto",
    era: "Febbraio 1929",
    title: "La Notte del Bazar di Khan el-Khalili",
    context: "Sotto le volte del mercato delle spezie si cela l'accesso sotterraneo al pozzo delle anime.",
    situation: "Una carovana della Mano Oscura sta caricando casse di reperti rubati da Giza diretti al porto di Alessandria.",
    choices: [
      {
        id: "cairo_sabotage_trucks",
        title: "Sabota i Camion della Mano Oscura",
        description: "Versi polvere abrasiva nei serbatoi dei veicoli mercenari per paralizzare il loro convoglio.",
        consequence: "L'esplosione dei motori sventa la fuga nemica e ti permette di recuperare i fondi trafugati.",
        rewardText: "+350 Monete d'Oro",
        rewardType: "coins",
        rewardValue: 350,
        alignment: "academy",
        badge: "GUERRIGLIA ARCHEOLOGICA",
        icon: "💥"
      },
      {
        id: "cairo_bedouin_pact",
        title: "Stringi un Patto con le Guide Beduine",
        description: "Offri rispetto e doni ai nomadi del deserto che custodiscono le vere rotte verso le oasi segrete.",
        consequence: "I beduini ti proteggono con i loro amuleti e svelano passaggi invisibili tra le dune.",
        rewardText: "Scudo del Guardiano & +1 Indizio",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "sacred_jungle",
        badge: "PATTO DEL DESERTO",
        icon: "🐪"
      }
    ]
  },
  5: {
    stageNumber: 5,
    milestoneLevelId: 50,
    location: "Alessandria, Egitto",
    era: "Marzo 1929",
    title: "I Papiri della Biblioteca Sommersa",
    context: "Nelle cisterne greco-romane sotto il livello del mare l'acqua comincia a salire rapidamente.",
    situation: "Un antico meccanismo a sifone sta allagando la sala ipogea. Devi scegliere cosa salvare prima che il corridoio sia sommerso.",
    choices: [
      {
        id: "alex_save_papyrus",
        title: "Metti in Salvo i Rotoli di Paititi",
        description: "Ti arrampichi sulle scaffalature di bronzo per sigillare i papiri nautici in una custodia stagna.",
        consequence: "Salvi l'unica mappa che collega le rotte fenicie al Rio delle Amazzoni, guadagnando enorme stima accademica.",
        rewardText: "+2 Indizi Scientifici & +200 Monete",
        rewardType: "hint",
        rewardValue: 2,
        alignment: "academy",
        badge: "SALVATORE DEL SAPERE",
        icon: "📜"
      },
      {
        id: "alex_seal_vault",
        title: "Sigilla la Botola della Cripta",
        description: "Azioni il contrappeso di granito per murare la tomba, impedendo alla Mano Oscura di profanarla in futuro.",
        consequence: "Il segreto resta sepolto per sempre nelle profondità marine, protetto da qualsiasi cupidigia.",
        rewardText: "Scudo del Guardiano (+1 Protezione)",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "secret_archive",
        badge: "SIGILLATORE ETERNO",
        icon: "🔒"
      }
    ]
  },
  6: {
    stageNumber: 6,
    milestoneLevelId: 60,
    location: "Luxor, Egitto",
    era: "Aprile 1929",
    title: "L'Agguato nella Valle dei Re",
    context: "Fuori dalla tomba di Tutankhamon le torce dei mercenari circondano l'accampamento della spedizione.",
    situation: "Il traditore all'interno del team ha svelato la posizione del sesto sigillo. La notte egiziana si tinge di fuoco.",
    choices: [
      {
        id: "luxor_confront_traitor",
        title: "Affronta il Traditore al Lume delle Lanterne",
        description: "Smascheri la talpa davanti a tutti i lavoranti, costringendola a consegnare i taccuini cifrati.",
        consequence: "Ripristini l'onore della spedizione e recuperi l'oro promesso dalla setta alla spia.",
        rewardText: "+400 Monete d'Oro",
        rewardType: "coins",
        rewardValue: 400,
        alignment: "academy",
        badge: "GIUSTIZIA D'ONORE",
        icon: "⚖️"
      },
      {
        id: "luxor_spirit_path",
        title: "Fuggi Attraverso il Canalone degli Spiriti",
        description: "Segui le tracce millenarie degli imbalsamatori lungo la gola rocciosa non tracciata sulle mappe inglesi.",
        consequence: "Gli inseguitori si perdono nel labirinto di pietraie mentre tu raggiungi il battello sul Nilo.",
        rewardText: "+2 Congela Tempo (Clessidra)",
        rewardType: "freeze",
        rewardValue: 2,
        alignment: "sacred_jungle",
        badge: "PASSI SILENZIOSI",
        icon: "🌙"
      }
    ]
  },
  7: {
    stageNumber: 7,
    milestoneLevelId: 70,
    location: "Oasi di Siwa, Deserto Libico",
    era: "Maggio 1929",
    title: "La Tempesta dell'Oracolo di Amon",
    context: "Il Ghibli, il vento rovente del deserto, spazza le rovine doriche cancellando ogni punto di riferimento.",
    situation: "Il pozzo dell'oasi è quasi prosciugato. Due carovane si offrono di guidarti verso la costa atlantica per imbarcarti verso le Americhe.",
    choices: [
      {
        id: "siwa_oracle_guidance",
        title: "Consulta le Tavole dell'Oracolo",
        description: "Decifri le iscrizioni sulle colonne di alabastro per calcolare la rotta astronomica esatta verso Gibilterra.",
        consequence: "Le stelle guidano la tua carovana senza esitazioni attraverso il mare di sabbia.",
        rewardText: "+2 Bussole Radar Solari",
        rewardType: "compass",
        rewardValue: 2,
        alignment: "academy",
        badge: "ASTRONOMIA CELESTE",
        icon: "⭐"
      },
      {
        id: "siwa_sacred_well",
        title: "Dona l'Acqua Residua ai Pellegrini",
        description: "Rinunci a parte delle scorte per dissetare i sacerdoti custodi del tempio rimasti nell'oasi.",
        consequence: "L'anziano custode ti dona una collana di lapislazzuli protettiva che devia le sventure.",
        rewardText: "Scudo del Guardiano & +1 Indizio",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "sacred_jungle",
        badge: "BENEDIZIONE DI AMON",
        icon: "💧"
      }
    ]
  },
  8: {
    stageNumber: 8,
    milestoneLevelId: 80,
    location: "Petra, Giordania",
    era: "Giugno 1929",
    title: "La Gola Segreta del Khazneh",
    context: "Tra le fessure di arenaria rosa del Tesoro dei Nabatei è custodito l'ottavo sigillo di ossidiana.",
    situation: "La Mano Oscura ha minato la porta principale della gola del Siq per intrappolare la tua spedizione all'interno del canyon.",
    choices: [
      {
        id: "petra_disarm_dynamite",
        title: "Disinnesca le Cariche Esplosive",
        description: "Con mano ferma e bisturi d'acciaio tagli i cordoni detonanti prima che la scintilla raggiunga la dinamite.",
        consequence: "Salvi l'antico monumento nabateo da una distruzione irreparabile, guadagnando una medaglia d'onore.",
        rewardText: "Scudo del Guardiano & +300 Monete",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "secret_archive",
        badge: "SALVATORE DI PETRA",
        icon: "✂️"
      },
      {
        id: "petra_rock_ascent",
        title: "Scala le Pareti Rosse di Jebel al-Madhbah",
        description: "Ti arrampichi con corde di canapa sui precipizi rocciosi cogliendo di sorpresa le vedette nemiche dall'alto.",
        consequence: "Metti in fuga i cospiratori e metti le mani sull'archivio d'armi e provviste della Mano Oscura.",
        rewardText: "+2 Lenti d'Ingrandimento & +200 Monete",
        rewardType: "hint",
        rewardValue: 2,
        alignment: "academy",
        badge: "AUDACIA DEI DIRUPI",
        icon: "🧗"
      }
    ]
  },
  9: {
    stageNumber: 9,
    milestoneLevelId: 90,
    location: "Cascate di Iguazú, Sudamerica",
    era: "Luglio 1929",
    title: "Il Fragore della Gola del Diavolo",
    context: "La spedizione approda finalmente nel continente sudamericano, dove le acque ruggiscono nella giungla primordiale.",
    situation: "Dietro la cortina d'acqua della cascata più potente si cela l'altare sacro dei Guaraní. Un piroscafo nemico si avvicina a motori spenti.",
    choices: [
      {
        id: "iguazu_native_alliance",
        title: "Patto di Sangue con i Cacicchi Guaraní",
        description: "Chiedi il permesso agli sciamani della selva offrendo rispetto per gli spiriti delle acque e della terra.",
        consequence: "I guerrieri indigeni confondono i mercenari con trappole di fango e liane, aprendoti la via sacra.",
        rewardText: "Scudo del Guardiano & +2 Congela Tempo",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "sacred_jungle",
        badge: "FRATELLANZA INDIGENA",
        icon: "🏹"
      },
      {
        id: "iguazu_steam_boat",
        title: "Affonda il Piroscafo della Mano Oscura",
        description: "Libera i tronchi di mogano legati alla riva per farli collidere a tutta velocità contro lo scafo del battello nemico.",
        consequence: "La nave avversaria cola a picco nel vortice del fiume; recuperi il forziere con le sterline della setta.",
        rewardText: "+500 Monete d'Oro",
        rewardType: "coins",
        rewardValue: 500,
        alignment: "academy",
        badge: "BATTAGLIA FLUVIALE",
        icon: "🚢"
      }
    ]
  },
  10: {
    stageNumber: 10,
    milestoneLevelId: 100,
    location: "Altopiano di Nazca, Perù",
    era: "Agosto 1929",
    title: "Il Volo del Condor di Nazca",
    context: "I geoglifi giganti incisi sul deserto di pietra rivelano il loro allineamento solo durante il solstizio d'inverno.",
    situation: "Un biplano monoposto noleggiato a Lima ha finito il carburante sulla pista di terra battuta. La Mano Oscura sta risalendo la vallata con camionette armate.",
    choices: [
      {
        id: "nazca_astronomical_vigil",
        title: "Trascrivi le Coordinate Stellari Notturne",
        description: "Rimani sul poggio roccioso al gelo della notte andina per fissare sulla carta la convergenza del becco del Condor.",
        consequence: "Ottieni la latitudine perfetta della Porta del Sole di Paititi, introvabile con qualsiasi altro metodo.",
        rewardText: "+3 Bussole Radar d'Oro",
        rewardType: "compass",
        rewardValue: 3,
        alignment: "academy",
        badge: "GEOMETRIA DEGLI DEI",
        icon: "🦅"
      },
      {
        id: "nazca_conceal_glyphs",
        title: "Cancella le Piste per Proteggere i Glifi",
        description: "Spargi la ghiaia ferrosa per confondere i solchi e deviare i fuoristrada nemici verso il baratro del canyon.",
        consequence: "I mercenari finiscono in un vicolo cieco e i millenari disegni rimangono intatti e inviolati.",
        rewardText: "Scudo del Guardiano & +250 Monete",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "secret_archive",
        badge: "CUSTODE DEL DESERTO",
        icon: "🏜️"
      }
    ]
  },
  11: {
    stageNumber: 11,
    milestoneLevelId: 110,
    location: "Machu Picchu, Perù",
    era: "Settembre 1929",
    title: "La Soglia della Valle Sacra",
    context: "Sulla vetta dell'Intihuatana, la pietra che lega il Sole, si apre l'ultimo varco che conduce alla città perduta di Paititi.",
    situation: "Il Generale capo della Mano Oscura ha preso in ostaggio la tua fidata guida andina. Pretende la consegna dei primi 11 Sigilli.",
    choices: [
      {
        id: "machu_save_guide",
        title: "Salva la Guida e Riconsegna il Disco Solare",
        description: "Rinunci all'orgoglio scientifico per salvare una vita umana innocente, gettandoti nell'abisso nebbioso.",
        consequence: "La guida ti abbraccia in lacrime e ti svela l'antico canto quechua che spalanca le porte del tempio d'oro.",
        rewardText: "Scudo Supremo & +2 Lenti d'Ingrandimento",
        rewardType: "shield",
        rewardValue: 1,
        alignment: "sacred_jungle",
        badge: "UMANITÀ E ONORE",
        icon: "🏔️"
      },
      {
        id: "machu_outsmart_general",
        title: "Tendi una Trappola Ingegneristica al Generale",
        description: "Fai leva sul contrappeso dell'Intihuatana facendo franare la scalinata di pietra sotto i piedi degli invasori.",
        consequence: "Il Generale precipita nel vuoto mentre tu recuperi i sigilli e l'intero tesoro di spedizione nemico.",
        rewardText: "+600 Monete d'Oro & Gloria Eterna",
        rewardType: "coins",
        rewardValue: 600,
        alignment: "academy",
        badge: "STRATEGIA SUPREMA",
        icon: "⚡"
      }
    ]
  }
};
