export interface ConsularVisa {
  id: string;
  chapterNumber: number;
  title: string;
  territory: string;
  country: string;
  consul: string;
  date: string;
  protocolNumber: string;
  sealShape: 'circle' | 'rect' | 'triangle' | 'octagon' | 'wax_gold';
  inkColor: {
    text: string;
    border: string;
    bg: string;
    accent: string;
  };
  symbol: string; // Unicode / emoji icon
  motto: string;
  bounty: number;
  description: string;
}

export const CONSULAR_VISAS: ConsularVisa[] = [
  {
    id: 'visa_oxford',
    chapterNumber: 1,
    title: "Nulla Osta Accademico d'Oltremare",
    territory: 'Oxford • Ashmolean Institute',
    country: 'Regno Unito',
    consul: 'Sir Arthur Penhaligon, Cancelliere',
    date: '12 SETTEMBRE 1928',
    protocolNumber: 'GB-OXF-1928/01',
    sealShape: 'circle',
    inkColor: {
      text: '#1e3a8a', // Deep Royal Blue
      border: '#1d4ed8',
      bg: 'rgba(30, 58, 138, 0.08)',
      accent: '#2563eb',
    },
    symbol: '🏛️',
    motto: 'DOMINVS ILLVMINATIO MEA',
    bounty: 150,
    description: 'Autorizzazione ufficiale alla ricerca di manufatti precolombiani trafugati dall\'archivio universitario.',
  },
  {
    id: 'visa_southampton',
    chapterNumber: 2,
    title: 'Visto d\'Imbarco & Dogana Marittima',
    territory: 'Southampton Ocean Docks',
    country: 'Regno Unito',
    consul: 'Cap. Thomas Sterling, R.M.S. Amazon Star',
    date: '16 SETTEMBRE 1928',
    protocolNumber: 'GB-SOU-1928/44',
    sealShape: 'octagon',
    inkColor: {
      text: '#0f766e', // Marine Teal
      border: '#0d9488',
      bg: 'rgba(15, 118, 110, 0.08)',
      accent: '#14b8a6',
    },
    symbol: '⚓',
    motto: 'PORTVS ET MARE NOSTRVM',
    bounty: 180,
    description: 'Bollatura di stiva per casse di strumenti geodetici, cannocchiali e piastre fotografiche al bromuro.',
  },
  {
    id: 'visa_belem',
    chapterNumber: 3,
    title: 'Permesso Fluviale del Gran Pará',
    territory: 'Belém do Pará • Baía do Guajará',
    country: 'Stati Uniti del Brasile',
    consul: 'Comissário Geral D. Ribeiro',
    date: '28 SETTEMBRE 1928',
    protocolNumber: 'BR-BEL-1928/109',
    sealShape: 'triangle',
    inkColor: {
      text: '#065f46', // Amazon Emerald
      border: '#059669',
      bg: 'rgba(6, 95, 70, 0.08)',
      accent: '#10b981',
    },
    symbol: '🌴',
    motto: 'ORDEM E PROGRESSO AMAZONICO',
    bounty: 200,
    description: 'Attestazione d\'ingresso nel delta fluviale e licenza d\'indagine botanico-archeologica.',
  },
  {
    id: 'visa_manaus',
    chapterNumber: 4,
    title: 'Lasciapassare dell\'Avamposto del Rio Negro',
    territory: 'Manaus • Teatro Amazonas District',
    country: 'Stati Uniti del Brasile',
    consul: 'Prefetto Coloniale Manoel Fontes',
    date: '5 OTTOBRE 1928',
    protocolNumber: 'BR-MAN-1928/73',
    sealShape: 'rect',
    inkColor: {
      text: '#78350f', // Burnt Sepia
      border: '#92400e',
      bg: 'rgba(120, 53, 15, 0.08)',
      accent: '#b45309',
    },
    symbol: '🚢',
    motto: 'CORRENTEZA E MISTERIO',
    bounty: 220,
    description: 'Autorizzazione alla risalita in battello a vapore oltre le correnti oscure del Rio Negro.',
  },
  {
    id: 'visa_iquitos',
    chapterNumber: 5,
    title: 'Dogana di Frontiera Trans-Amazzonica',
    territory: 'Iquitos • Presidio di Frontiera Fluviale',
    country: 'República del Perú',
    consul: 'Intendente Mayor Hernán Valdivia',
    date: '14 OTTOBRE 1928',
    protocolNumber: 'PE-IQT-1928/512',
    sealShape: 'circle',
    inkColor: {
      text: '#831843', // Crimson Rose
      border: '#be185d',
      bg: 'rgba(131, 24, 67, 0.08)',
      accent: '#db2777',
    },
    symbol: '🪶',
    motto: 'FRONTERA DE LA SELVA VIRGEN',
    bounty: 250,
    description: 'Vidimazione del passaporto con transito obbligato attraverso la giungla impenetrabile di Loreto.',
  },
  {
    id: 'visa_cusco',
    chapterNumber: 6,
    title: 'Riconoscimento della Prefettura Imperiale',
    territory: 'Cusco • Plaza de Armas',
    country: 'República del Perú',
    consul: 'Prefecto Don Alonso de Carvajal',
    date: '24 OTTOBRE 1928',
    protocolNumber: 'PE-CUZ-1928/88',
    sealShape: 'circle',
    inkColor: {
      text: '#581c87', // Imperial Purple
      border: '#7e22ce',
      bg: 'rgba(88, 28, 135, 0.08)',
      accent: '#9333ea',
    },
    symbol: '☀️',
    motto: 'OMBLIGO DEL MUNDO ANDINO',
    bounty: 300,
    description: 'Immunità accademica per l\'analisi delle pietre ciclopiche a dodici angoli e dei templi del Sole.',
  },
  {
    id: 'visa_ollantaytambo',
    chapterNumber: 7,
    title: 'Sigillo Militare della Valle Sacra',
    territory: 'Ollantaytambo • Fortezza a Terrazze',
    country: 'República del Perú',
    consul: 'Capitán R. Huamán, Guarnigione Andina',
    date: '2 NOVEMBRE 1928',
    protocolNumber: 'PE-OLL-1928/19',
    sealShape: 'rect',
    inkColor: {
      text: '#9a3412', // Terracotta Rust
      border: '#c2410c',
      bg: 'rgba(154, 52, 18, 0.08)',
      accent: '#ea580c',
    },
    symbol: '🛡️',
    motto: 'BALUARTE INVICTO DE LOS INCAS',
    bounty: 320,
    description: 'Apertura dei valichi fortificati di pietra verso le vertiginose alture andine.',
  },
  {
    id: 'visa_condor_pass',
    chapterNumber: 8,
    title: 'Bollatura d\'Alta Quota del Passo del Cóndor',
    territory: 'Cordillera de Vilcabamba • Quota 4.850m',
    country: 'Terre di Vilcabamba',
    consul: 'Guida Suprema Mateo Quispe',
    date: '9 NOVEMBRE 1928',
    protocolNumber: 'AND-PAS-1928/07',
    sealShape: 'octagon',
    inkColor: {
      text: '#1e40af', // Glacial Cobalt
      border: '#2563eb',
      bg: 'rgba(30, 64, 175, 0.08)',
      accent: '#3b82f6',
    },
    symbol: '🦅',
    motto: 'ALTITVDO LIBERTATIS PERPETVAE',
    bounty: 350,
    description: 'Certificato di superamento delle tempeste di neve perenne sul ghiacciaio del gran condor.',
  },
  {
    id: 'visa_machu_picchu',
    chapterNumber: 9,
    title: 'Omologazione della Cittadella tra le Nubi',
    territory: 'Santuario di Machu Picchu • Huayna Picchu',
    country: 'Santuario Storico',
    consul: 'Prof. J. Bingham Memorial Registrar',
    date: '17 NOVEMBRE 1928',
    protocolNumber: 'MP-SAN-1928/03',
    sealShape: 'circle',
    inkColor: {
      text: '#047857', // Ancient Jade
      border: '#059669',
      bg: 'rgba(4, 120, 87, 0.08)',
      accent: '#10b981',
    },
    symbol: '⛰️',
    motto: 'CIVITAS INTER NVBES CONDITA',
    bounty: 400,
    description: 'Accesso esclusivo ai santuari del Tempio delle Tre Finestre e dell\'Intihuatana.',
  },
  {
    id: 'visa_cloud_gate',
    chapterNumber: 10,
    title: 'Sigillo Esoterico del Portale delle Nuvole',
    territory: 'Soglia di Pietra Ciclopica • Selva Alta',
    country: 'Confine di Paititi',
    consul: 'Iscrizione dell\'Amaru Ancestrale',
    date: '25 NOVEMBRE 1928',
    protocolNumber: 'PAI-SOG-1928/X',
    sealShape: 'triangle',
    inkColor: {
      text: '#854d0e', // Ancient Amber
      border: '#a16207',
      bg: 'rgba(133, 77, 14, 0.08)',
      accent: '#ca8a04',
    },
    symbol: '🐍',
    motto: 'SOLIS PORTA NON MORTALIBVS',
    bounty: 450,
    description: 'Riconoscimento delle rune solari intagliate che aprono il massiccio di granito sigillato.',
  },
  {
    id: 'visa_priest_crypt',
    chapterNumber: 11,
    title: 'Ceralacca dei Guardiani del Sole',
    territory: 'Cripta dei Sacerdoti • Livello Ipogeo',
    country: 'Santuario Sommerso',
    consul: 'Sommo Custode dell\'Aura Dorata',
    date: '3 DICEMBRE 1928',
    protocolNumber: 'PAI-GUA-1928/IX',
    sealShape: 'rect',
    inkColor: {
      text: '#991b1b', // Blood Ruby Wax
      border: '#dc2626',
      bg: 'rgba(153, 27, 27, 0.08)',
      accent: '#ef4444',
    },
    symbol: '🗝️',
    motto: 'CVSTODIA FIDELIS AETERNA',
    bounty: 500,
    description: 'Visto cerimoniale con timbratura impressa a caldo sui misteri del disco d\'oro incorrotto.',
  },
  {
    id: 'visa_paititi_sanctum',
    chapterNumber: 12,
    title: 'Sigillo Sovrano della Città d\'Oro di Paititi',
    territory: 'Sancta Sanctorum • Altare di Inti',
    country: 'Regno di Paititi',
    consul: 'Il Disco Solare Vivente',
    date: '12 DICEMBRE 1928',
    protocolNumber: 'PAITITI-AUREUM-001',
    sealShape: 'wax_gold',
    inkColor: {
      text: '#78350f', // Pure Gold Gilding
      border: '#d97706',
      bg: 'rgba(217, 119, 6, 0.15)',
      accent: '#fbbf24',
    },
    symbol: '👑',
    motto: 'SVPREMA GLORIA IN REVELETIONE',
    bounty: 1000,
    description: 'Il sigillo definitivo della Royal Geographic Society. La leggenda del 1928 è compiuta.',
  },
];
