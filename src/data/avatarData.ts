import { assetUrl } from '../utils/assetUrl';
export type AvatarGender = 'female' | 'male';

export interface WardrobePerk {
  type: 'coin_boost' | 'freeze_boost' | 'radar_boost' | 'free_shield';
  value: number; // e.g., 10 (+10%), 5 (+5s), 25 (+25%), 1 (1 error shield)
  label: string;
}

export interface WardrobeOutfit {
  id: string;
  name: string;
  avatarId: 'samira' | 'mateo';
  description: string;
  cost: number;
  requiredLevel: number;
  requiredRelics?: number;
  perk: WardrobePerk;
  image: string;
  tag: string;
}

export type EquipmentSlot =
  | 'headgear'
  | 'torso'
  | 'legs'
  | 'boots'
  | 'main_hand'
  | 'off_hand'
  | 'talisman'
  | 'back'
  | 'tool'; // alias for main_hand

export interface WardrobeAccessory {
  id: string;
  name: string;
  slot: EquipmentSlot;
  description: string;
  cost: number;
  requiredLevel: number;
  perk?: WardrobePerk;
  iconName: string;
  tag: string;
}

export interface ExplorerCharacter {
  id: 'samira' | 'mateo';
  name: string;
  title: string;
  specialization: string;
  bio: string;
  image: string; // FULL BODY RENDER ON STONE PEDESTAL
  portrait: string; // CLOSE-UP HEADSHOT
  accentColor: string;
  badgeBg: string;
  defaultOutfitId: string;
  originCity: string;
  originCountry: string;
  originCoords: { lat: number; lon: number };
}

export interface ExplorerProfile {
  avatarId: 'samira' | 'mateo';
  playerName: string;
  equippedOutfitId: string; // Torso / Outfit
  equippedHeadgearId: string | null;
  equippedToolId: string | null; // Main Hand Tool
  equippedOffHandId?: string | null; // Off Hand Shield/Item
  equippedLegsId?: string | null; // Legs / Cargo Pants
  equippedBootsId?: string | null; // Boots / Footwear
  equippedTalismanId: string | null; // Neck Amulet
  equippedBackId?: string | null; // Backpack / Cloak
  unlockedOutfitIds: string[];
  unlockedAccessoryIds: string[];
}

export const EXPLORERS: Record<'samira' | 'mateo', ExplorerCharacter> = {
  samira: {
    id: 'samira',
    name: 'Dr. Samira Cruz',
    title: 'Epigrafista & Archeo-Acustica',
    specialization: 'Decifrazione Lingue Perdute & Risonanza Architettonica',
    bio: 'Formatasi all\'Università di Coimbra e pioniera delle spedizioni andine. Decifra iscrizioni pre-incaiche registrando frequenze di risonanza tra le rovine di Paititi.',
    image: assetUrl('/avatars/female_explorer.jpg'),
    portrait: assetUrl('/avatars/female_samira.jpg'),
    accentColor: 'from-emerald-600 to-teal-800',
    badgeBg: 'bg-emerald-950/80 border-emerald-500/50',
    defaultOutfitId: 'samira_base',
    originCity: 'Coimbra',
    originCountry: 'Portogallo',
    originCoords: { lat: 40.21, lon: -8.41 },
  },
  mateo: {
    id: 'mateo',
    name: 'Mateo Solano',
    title: 'Topografo & Geo-Archeologo',
    specialization: 'Cartografia Geodetica & Speleologia delle Terre Alte',
    bio: 'Maestro cartografo specializzato nelle forre delle valli andine. Triangola le antiche mappe indigene con la geomorfologia reale scoprendo percorsi creduti scomparsi.',
    image: assetUrl('/avatars/male_explorer.jpg'),
    portrait: assetUrl('/avatars/male_mateo.jpg'),
    accentColor: 'from-amber-600 to-amber-900',
    badgeBg: 'bg-amber-950/80 border-amber-500/50',
    defaultOutfitId: 'mateo_base',
    originCity: 'Cusco',
    originCountry: 'Perù',
    originCoords: { lat: -13.53, lon: -71.96 },
  },
};

export const ALL_OUTFITS: WardrobeOutfit[] = [
  // Samira Outfits
  {
    id: 'samira_base',
    avatarId: 'samira',
    name: 'Tenuta da Epigrafia (Base)',
    description: 'Camicia in lino verde salvia e sabbia con maniche rimboccate, cargo ardesia rinforzati, taccuino di campo e bussola.',
    cost: 0,
    requiredLevel: 1,
    perk: { type: 'coin_boost', value: 0, label: 'Assetto Standard' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Iniziale',
  },
  {
    id: 'samira_speleo',
    avatarId: 'samira',
    name: 'Tuta Speleologica di Vilcabamba',
    description: 'Cordura blu petrolio antistrappo, imbragatura da calata in titanio anodizzato e guanti mezze dita per roccia umida.',
    cost: 350,
    requiredLevel: 15,
    perk: { type: 'coin_boost', value: 10, label: '+10% Monete guadagnate' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Speleologia',
  },
  {
    id: 'samira_rain',
    avatarId: 'samira',
    name: 'Giacca Cerata "Nebbie Andine"',
    description: 'Giacca cerata foderata in lana color ocra bruciata con collo antivento e fibbia quechua.',
    cost: 500,
    requiredLevel: 30,
    perk: { type: 'freeze_boost', value: 5, label: '+5s Durata Congelamento' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Resistente',
  },
  {
    id: 'samira_cenote',
    avatarId: 'samira',
    name: 'Muta Idrodinamica da Cenote',
    description: 'Muta termica idrorepellente con inserti turchesi bioluminescenti e custodia idrostatica per taccuino.',
    cost: 650,
    requiredLevel: 50,
    perk: { type: 'radar_boost', value: 25, label: '+25% Ampiezza Radar' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Subacquea',
  },
  {
    id: 'samira_society',
    avatarId: 'samira',
    name: 'Spedizione Reale 1928',
    description: 'Elegante giacca sartoriale coloniale a doppio petto in twill sabbia, camicia in seta avorio e sciarpa blu zaffiro.',
    cost: 800,
    requiredLevel: 75,
    perk: { type: 'free_shield', value: 1, label: '1 Scudo Errore Gratuito' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Accademica',
  },
  {
    id: 'samira_inti',
    avatarId: 'samira',
    name: 'Vestale del Sole di Paititi',
    description: 'Tunica cerimoniale leggera in cotone grezzo con ricami solari in filo dorato e mantellina corta con piume zaffiro.',
    cost: 1200,
    requiredLevel: 100,
    requiredRelics: 4,
    perk: { type: 'coin_boost', value: 25, label: '+25% Monete Totali' },
    image: assetUrl('/avatars/female_samira.jpg'),
    tag: 'Reliquia Sacra',
  },

  // Mateo Outfits
  {
    id: 'mateo_base',
    avatarId: 'mateo',
    name: 'Cantiere Geologico (Base)',
    description: 'Sotto-maglia termico con sopra-camicia da lavoro terracotta, cargo grafite ripstop e cilindro porta-mappe a tracolla.',
    cost: 0,
    requiredLevel: 1,
    perk: { type: 'coin_boost', value: 0, label: 'Assetto Standard' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Iniziale',
  },
  {
    id: 'mateo_recon',
    avatarId: 'mateo',
    name: 'Ricognitore "Roccia Viva"',
    description: 'Gilet tecnico multi-tasche in ripstop verde muschio con ganci a molla, guanti da ferrata e scarponi da scalata.',
    cost: 350,
    requiredLevel: 15,
    perk: { type: 'coin_boost', value: 10, label: '+10% Monete guadagnate' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Alpinismo',
  },
  {
    id: 'mateo_alpine',
    avatarId: 'mateo',
    name: 'Parka d\'Alta Quota "Cóndor"',
    description: 'Parka termico antivento blu notte con inserti ambra, cappuccio protettivo da bufera e ghette da neve.',
    cost: 500,
    requiredLevel: 30,
    perk: { type: 'freeze_boost', value: 5, label: '+5s Durata Congelamento' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Termico',
  },
  {
    id: 'mateo_jungle',
    avatarId: 'mateo',
    name: 'Guado Tropicale "Madre de Dios"',
    description: 'Maglia tecnica a ventilazione rapida con protezione UV e pantaloni modulari con tasche drenanti antiumidità.',
    cost: 650,
    requiredLevel: 50,
    perk: { type: 'radar_boost', value: 25, label: '+25% Ampiezza Radar' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Fluviale',
  },
  {
    id: 'mateo_guild',
    avatarId: 'mateo',
    name: 'Maestro Cartografo',
    description: 'Gilet in velluto a coste color noce con taschini per orologio e lenti, camicia chambray e cintura con fibbia d\'argento.',
    cost: 800,
    requiredLevel: 75,
    perk: { type: 'free_shield', value: 1, label: '1 Scudo Errore Gratuito' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Geodetico',
  },
  {
    id: 'mateo_guard',
    avatarId: 'mateo',
    name: 'Guardia d\'Oro di Paititi',
    description: 'Pettorina in bronzo martellato e lamine d\'oro incise a serpente sacro (Amaru) con mantello cerimoniale cremisi.',
    cost: 1200,
    requiredLevel: 100,
    requiredRelics: 4,
    perk: { type: 'coin_boost', value: 25, label: '+25% Monete Totali' },
    image: assetUrl('/avatars/male_mateo.jpg'),
    tag: 'Reliquia Sacra',
  },
];

export const ALL_ACCESSORIES: WardrobeAccessory[] = [
  // Slot: Headgear
  {
    id: 'acc_visor',
    name: 'Visiera Antiriflesso da Epigrafia',
    slot: 'headgear',
    description: 'Protegge gli occhi dai riflessi solari sulle pareti rocciose incise.',
    cost: 120,
    requiredLevel: 5,
    iconName: 'Glasses',
    tag: 'Ottico',
  },
  {
    id: 'acc_bandana',
    name: 'Bandana Traspirante da Giungla',
    slot: 'headgear',
    description: 'Tessuto traspirante in fibra naturale ad asciugatura istantanea.',
    cost: 160,
    requiredLevel: 10,
    iconName: 'Sparkles',
    tag: 'Comfort',
  },
  {
    id: 'acc_wax_hat',
    name: 'Cappello da Spedizione in Tela Cerata',
    slot: 'headgear',
    description: 'Ampia tesa circolare impermeabile per piogge torrenziali e sole equatoriale.',
    cost: 220,
    requiredLevel: 25,
    iconName: 'Compass',
    tag: 'Protezione',
  },
  {
    id: 'acc_speleo_helmet',
    name: 'Casco con Faro Caldo a LED',
    slot: 'headgear',
    description: 'Illumina le cavità più profonde con fascio a spettro naturale antiriflesso.',
    cost: 300,
    requiredLevel: 45,
    perk: { type: 'radar_boost', value: 15, label: '+15% Ampiezza Radar' },
    iconName: 'Lightbulb',
    tag: 'Esplorazione',
  },
  {
    id: 'acc_solar_crown',
    name: 'Corona Solare di Paititi',
    slot: 'headgear',
    description: 'Sottile diadema dorato lavorato a sbalzo con motivi di Inti.',
    cost: 550,
    requiredLevel: 80,
    perk: { type: 'coin_boost', value: 10, label: '+10% Monete' },
    iconName: 'Crown',
    tag: 'Regale',
  },

  // Slot: Tools
  {
    id: 'tool_tuning_fork',
    name: 'Diapason Archeo-Acustico',
    slot: 'tool',
    description: 'Strumento in bronzo sintonizzato per far risuonare le camere funerarie segrete.',
    cost: 180,
    requiredLevel: 8,
    perk: { type: 'radar_boost', value: 10, label: '+10% Ampiezza Radar' },
    iconName: 'Music',
    tag: 'Acustico',
  },
  {
    id: 'tool_monocle',
    name: 'Monocolo da Epigrafia a Lenti Multiple',
    slot: 'tool',
    description: 'Tre lenti sovrapposte per rilevare incisioni microscopiche e crepe nascoste.',
    cost: 240,
    requiredLevel: 20,
    perk: { type: 'freeze_boost', value: 3, label: '+3s Congelamento' },
    iconName: 'Eye',
    tag: 'Precisione',
  },
  {
    id: 'tool_theodolite',
    name: 'Teodolite Geodetico Tascabile',
    slot: 'tool',
    description: 'Miniaturizzazione in ottone brunito per triangolazioni topografiche perfette.',
    cost: 320,
    requiredLevel: 40,
    perk: { type: 'coin_boost', value: 5, label: '+5% Monete' },
    iconName: 'Crosshair',
    tag: 'Topografia',
  },
  {
    id: 'tool_notebook_silver',
    name: 'Taccuino Storico con Sigillo d\'Argento',
    slot: 'tool',
    description: 'Carta di stracci impermeabile per annotare ogni minima differenza senza sbiadire.',
    cost: 400,
    requiredLevel: 60,
    perk: { type: 'free_shield', value: 1, label: '1 Scudo Errore Gratuito' },
    iconName: 'BookOpen',
    tag: 'Mappe & Note',
  },

  // Slot: Talismans
  {
    id: 'talisman_amber',
    name: 'Girocollo con Perlina d\'Ambra Fossile',
    slot: 'talisman',
    description: 'Antica resina contenente inclusioni botaniche di 30 milioni di anni fa.',
    cost: 150,
    requiredLevel: 12,
    perk: { type: 'freeze_boost', value: 3, label: '+3s Congelamento' },
    iconName: 'Sparkles',
    tag: 'Naturale',
  },
  {
    id: 'talisman_jade_chachapoya',
    name: 'Amuleto di Giada dei Guerrieri delle Nubi',
    slot: 'talisman',
    description: 'Gemma verde levigata con spirali protettive dei Chachapoyas.',
    cost: 280,
    requiredLevel: 35,
    perk: { type: 'coin_boost', value: 8, label: '+8% Monete' },
    iconName: 'Shield',
    tag: 'Protezione',
  },
  {
    id: 'talisman_jaguar_tooth',
    name: 'Dente Fossile di Giaguaro Dorato',
    slot: 'talisman',
    description: 'Incastonato in lamina d\'argento con artigli incisi.',
    cost: 350,
    requiredLevel: 55,
    perk: { type: 'radar_boost', value: 15, label: '+15% Ampiezza Radar' },
    iconName: 'Zap',
    tag: 'Predatore',
  },
  {
    id: 'talisman_sun_disk_mini',
    name: 'Sigillo Solare di Inti',
    slot: 'talisman',
    description: 'Miniatura benedetta dai sacerdoti del Tempio del Sole.',
    cost: 600,
    requiredLevel: 85,
    perk: { type: 'coin_boost', value: 15, label: '+15% Monete' },
    iconName: 'Sun',
    tag: 'Sacro',
  },

  // Slot: Legs / Pantaloni
  {
    id: 'legs_cargo_khaki',
    name: 'Pantaloni Cargo da Scavo (Base)',
    slot: 'legs',
    description: 'Tessuto rip-stop in cotone pesante con tasche per scalpelli e taccuini.',
    cost: 0,
    requiredLevel: 1,
    iconName: 'Shield',
    tag: 'Standard',
  },
  {
    id: 'legs_leather_kneepads',
    name: 'Pantaloni Rinforzati con Ginocchiere in Cuoio',
    slot: 'legs',
    description: 'Protezioni ergonomiche sagomate per scavi prolungati su pietra ruvida.',
    cost: 190,
    requiredLevel: 14,
    perk: { type: 'coin_boost', value: 5, label: '+5% Monete' },
    iconName: 'Shield',
    tag: 'Rinforzato',
  },
  {
    id: 'legs_alpine_thermal',
    name: 'Calzoni Termici da Guado & Ghiacciaio',
    slot: 'legs',
    description: 'Fodera in flanella cerata per scalate alpine e fiumi sotterranei andini.',
    cost: 290,
    requiredLevel: 32,
    perk: { type: 'freeze_boost', value: 3, label: '+3s Congelamento' },
    iconName: 'Snowflake',
    tag: 'Termico',
  },
  {
    id: 'legs_inti_gold',
    name: 'Pantaloni Cerimoniali dei Sacerdoti del Sole',
    slot: 'legs',
    description: 'Decorati con bande geometriche e filamenti d\'oro puro dell\'Inti.',
    cost: 480,
    requiredLevel: 72,
    perk: { type: 'coin_boost', value: 12, label: '+12% Monete' },
    iconName: 'Crown',
    tag: 'Regale',
  },

  // Slot: Boots / Calzature
  {
    id: 'boots_leather_hiker',
    name: 'Scarponi da Marcia in Cuoio Ingrassato (Base)',
    slot: 'boots',
    description: 'Suola rinforzata cucita a guardolo per terreni sconnessi.',
    cost: 0,
    requiredLevel: 1,
    iconName: 'Compass',
    tag: 'Standard',
  },
  {
    id: 'boots_swamp_buckle',
    name: 'Stivali da Palude con Fibbie d\'Ottone',
    slot: 'boots',
    description: 'Gamba alta impermeabile per superare i fanghi delle valli amazzoniche.',
    cost: 170,
    requiredLevel: 16,
    perk: { type: 'freeze_boost', value: 2, label: '+2s Congelamento' },
    iconName: 'Shield',
    tag: 'Palude',
  },
  {
    id: 'boots_andean_crampons',
    name: 'Calzari da Scalata con Tacchetti Geodetici',
    slot: 'boots',
    description: 'Punte in ferro battuto per aderenza massima sulle creste di Machu Picchu.',
    cost: 310,
    requiredLevel: 42,
    perk: { type: 'radar_boost', value: 10, label: '+10% Ampiezza Radar' },
    iconName: 'Crosshair',
    tag: 'Scalata',
  },
  {
    id: 'boots_jaguar_royal',
    name: 'Stivali Reali in Pelle di Giaguaro & Lamina d\'Oro',
    slot: 'boots',
    description: 'Calzari consacrati indossati dal generale Inka prima della fondazione di Paititi.',
    cost: 540,
    requiredLevel: 78,
    perk: { type: 'coin_boost', value: 15, label: '+15% Monete' },
    iconName: 'Crown',
    tag: 'Sacro',
  },

  // Slot: Off-Hand / Scudo & Strumento Secondario
  {
    id: 'off_sacred_shield',
    name: 'Scudo di Bronzo dei Guardiani dell\'Inti',
    slot: 'off_hand',
    description: 'Antico disco protettivo a sbalzo che devia gli imprevisti e assorbe i fallimenti.',
    cost: 450,
    requiredLevel: 48,
    perk: { type: 'free_shield', value: 1, label: '1 Scudo Errore Gratuito' },
    iconName: 'Shield',
    tag: 'Difesa',
  },
  {
    id: 'off_compass_brass',
    name: 'Bussola Azimutale della Royal Geographic Society',
    slot: 'off_hand',
    description: 'Quadrante in argento sterling graduato in 360° per orientamento istantaneo.',
    cost: 210,
    requiredLevel: 18,
    perk: { type: 'radar_boost', value: 12, label: '+12% Ampiezza Radar' },
    iconName: 'Compass',
    tag: 'Navigazione',
  },
  {
    id: 'off_lopez_map',
    name: 'Carta Idrografica Autografa di Padre Lopez (1600)',
    slot: 'off_hand',
    description: 'La mappa originale con annotazioni cifrate sui corsi d\'acqua sotterranei.',
    cost: 280,
    requiredLevel: 28,
    perk: { type: 'freeze_boost', value: 4, label: '+4s Congelamento' },
    iconName: 'BookOpen',
    tag: 'Manoscritto',
  },
  {
    id: 'off_lantern_brass',
    name: 'Lampada da Minatore a Carburo con Specchio Ustorio',
    slot: 'off_hand',
    description: 'Luce calda ad alta penetrazione per illuminare i rilievi più celati.',
    cost: 360,
    requiredLevel: 50,
    perk: { type: 'coin_boost', value: 10, label: '+10% Monete' },
    iconName: 'Lightbulb',
    tag: 'Illuminazione',
  },

  // Slot: Back / Schiena & Zaini
  {
    id: 'back_canvas_pack',
    name: 'Zaino da Campo in Canapa 1928 (Base)',
    slot: 'back',
    description: 'Robusto zaino da trekking con cinghie in cuoio e moschettoni in ferro.',
    cost: 0,
    requiredLevel: 1,
    iconName: 'Shield',
    tag: 'Standard',
  },
  {
    id: 'back_waxed_cloak',
    name: 'Mantello da Tempesta in Tela Cerata',
    slot: 'back',
    description: 'Ampio mantello scuro a prova di tempesta tropicale e polvere di scavo.',
    cost: 260,
    requiredLevel: 24,
    perk: { type: 'coin_boost', value: 6, label: '+6% Monete' },
    iconName: 'Sparkles',
    tag: 'Pioggia',
  },
  {
    id: 'back_andean_poncho',
    name: 'Poncho Cerimoniale in Lana di Vigogna e Tintura Porpora',
    slot: 'back',
    description: 'Tessitura ancestrale con simboli delle quattro province del Tawantinsuyu.',
    cost: 390,
    requiredLevel: 56,
    perk: { type: 'coin_boost', value: 10, label: '+10% Monete' },
    iconName: 'Sun',
    tag: 'Tradizione',
  },
  {
    id: 'back_topographer_quiver',
    name: 'Fodero Topografico in Cuoio con Triangolazioni Reali',
    slot: 'back',
    description: 'Custodia rigida anti-urto per carte millimetriche, sestante e aste graduate.',
    cost: 490,
    requiredLevel: 66,
    perk: { type: 'free_shield', value: 1, label: '1 Scudo Errore Gratuito' },
    iconName: 'Crosshair',
    tag: 'Topografia',
  },
];
