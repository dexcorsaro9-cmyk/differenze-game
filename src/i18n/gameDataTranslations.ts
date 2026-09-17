import type { Language } from './types';
import type { CollectibleRelic } from '../data/collectiblesData';
import type { ExpeditionMedal } from '../data/achievementsData';
import type { ConsularVisa } from '../data/passportData';
import type { StageBriefing } from '../data/stageBriefingsData';
import type { WardrobeOutfit, ExplorerCharacter, WardrobeAccessory, EquipmentSetBonus } from '../data/avatarData';
import type { ExpeditionDilemma } from '../data/expeditionDilemmas';

interface RelicLoc {
  name: string;
  subtitle: string;
  era: string;
  location: string;
  lore: string;
  hintClue: string;
}

const RELICS_I18N: Record<string, Record<'en' | 'es', RelicLoc>> = {
  relic_chachapoya_idol: {
    en: {
      name: "The Golden Chachapoya Idol",
      subtitle: "Fertility Symbol of the Cloud Warriors",
      era: "Pre-Inca Peru (c. 1400 AD)",
      location: "Kuelap Fortress, Amazonian Andes",
      lore: "Cast in solid gold by Chachapoya high priests. It depicts the primordial earth deity. Professor Bellini noted: 'Heavy, cold as the metal of gods, yet imbued with an inexplicable warmth.'",
      hintClue: "Search Professor Bellini's Oxford study, hidden among ancient folios on the mahogany desk."
    },
    es: {
      name: "El Ídolo de Oro de Chachapoya",
      subtitle: "Símbolo de Fertilidad de los Guerreros de las Nubes",
      era: "Perú Preincaico (c. 1400 d.C.)",
      location: "Fortaleza de Kuélap, Andes Amazónicos",
      lore: "Fundido en oro macizo por los sacerdotes Chachapoya. Representa la deidad primordial de la tierra. Bellini anota: 'Pesado, frío como el metal divino, pero rebosante de un calor inexplicable.'",
      hintClue: "Buscar en el estudio de Bellini en Oxford, entre los códices antiguos del escritorio de caoba."
    }
  },
  relic_egyptian_scarab: {
    en: {
      name: "Cheops' Lapis Lazuli Scarab",
      subtitle: "Seal of the Reborn Sun",
      era: "Old Kingdom (4th Dynasty, c. 2560 BC)",
      location: "Giza Plateau, Egypt",
      lore: "Carved from a single block of Afghan lapis lazuli with protective hieroglyphs. It guarded the pharaoh's crossing through the shadowy Duat.",
      hintClue: "Concealed in the shadows of the Doric capitals in the fourth excavation sector."
    },
    es: {
      name: "El Escarabajo de Lapislázuli de Keops",
      subtitle: "Sello del Sol Renacido",
      era: "Imperio Antiguo (IV Dinastía, c. 2560 a.C.)",
      location: "Meseta de Guiza, Egipto",
      lore: "Tallado en un bloque de lapislázuli afgano con jeroglíficos protectores. Custodiaba el tránsito del faraón a través de la Duat.",
      hintClue: "Oculto entre las sombras de los capiteles dóricos del cuarto sector de excavación."
    }
  },
  relic_coronado_cross: {
    en: {
      name: "Coronado's Golden Cross",
      subtitle: "Relic of the Seven Cities Conquistadors",
      era: "Colonial Era (1541 AD)",
      location: "Palo Duro Canyon, New Mexico",
      lore: "A massive processional cross adorned with a Burmese sapphire. Presented to Francisco Vázquez de Coronado by Charles V before the Cíbola expedition.",
      hintClue: "Hidden in the eighth sector, where the trail borders the ancient cistern."
    },
    es: {
      name: "La Cruz de Oro de Coronado",
      subtitle: "Reliquia de los Conquistadores de las Siete Ciudades",
      era: "Época Colonial (1541 d.C.)",
      location: "Cañón de Palo Duro, Nuevo México",
      lore: "Una imponente cruz procesional con un zafiro birmano central. Entregada a Francisco Vázquez de Coronado por Carlos V antes de buscar Cíbola.",
      hintClue: "Escondida en el octavo sector, donde la senda bordea la antigua cisterna."
    }
  },
  relic_crystal_skull: {
    en: {
      name: "The Vilcabamba Crystal Skull",
      subtitle: "Resonator of the Sun Lords",
      era: "Archaic Andean Tradition (Unknown Dating)",
      location: "Cavern of Bones, Vilcabamba, Peru",
      lore: "Carved against the natural quartz axis without chisel marks. Emits a faint harmonic hum near solar gold relics.",
      hintClue: "Discovered in the twelfth underground sector, behind the cracked granite pillar."
    },
    es: {
      name: "La Calavera de Cristal de Vilcabamba",
      subtitle: "Resonador Místico de los Señores del Sol",
      era: "Tradición Andina Arcaica (Datación Desconocida)",
      location: "Caverna de los Huesos, Vilcabamba, Perú",
      lore: "Tallada contra el eje natural del cuarzo hialino sin marcas de cincel. Emite un tenue zumbido armónico ante reliquias solares.",
      hintClue: "Localizada en el duodécimo sector subterráneo, tras el pilar de granito agrietado."
    }
  },
  relic_sun_disk: {
    en: {
      name: "The Great Golden Sun Disk of Paititi",
      subtitle: "The Sacred Heart of the Lost Empire",
      era: "Tawantinsuyu Era (c. 1450 AD)",
      location: "Sancta Sanctorum, Golden City of Paititi",
      lore: "The supreme sacred relic of Andean civilization: it captured the first rays of dawn, bathing the entire valley in blinding golden luminescence.",
      hintClue: "The ultimate treasure: revealed upon conquering Level 120 at the summit of the Sun Sanctum."
    },
    es: {
      name: "El Gran Disco Solar de Oro de Paititi",
      subtitle: "El Corazón Sagrado del Imperio Perdido",
      era: "Época del Tawantinsuyu (c. 1450 d.C.)",
      location: "Sancta Sanctorum, Ciudad de Oro de Paititi",
      lore: "La máxima reliquia sagrada de los Andes: captaba los primeros rayos del alba, inundando todo el valle con resplandores dorados deslumbrantes.",
      hintClue: "El tesoro supremo: descubierto en el nivel 120, en la cúspide del santuario sagrado."
    }
  }
};

export function getLocalizedRelic(relic: CollectibleRelic, lang: Language): CollectibleRelic {
  if (lang === 'it') return relic;
  const loc = RELICS_I18N[relic.id]?.[lang as 'en' | 'es'];
  if (!loc) return relic;
  return {
    ...relic,
    name: loc.name,
    subtitle: loc.subtitle,
    era: loc.era,
    location: loc.location,
    lore: loc.lore,
    hintClue: loc.hintClue,
  };
}

// =========================================================================
// MEDALS TRANSLATIONS
// =========================================================================
interface MedalLoc {
  title: string;
  subtitle: string;
  description: string;
}

const MEDALS_I18N: Record<string, Record<'en' | 'es', MedalLoc>> = {
  hawk_eye: {
    en: { title: "Hawk Eye", subtitle: "Pure Perception", description: "Find 5 differences without using any hint or compass radar." },
    es: { title: "Ojo de Halcón", subtitle: "Percepción Pura", description: "Encuentra 5 diferencias sin usar ninguna pista ni radar." }
  },
  speed_demon: {
    en: { title: "Golden Chronograph", subtitle: "Lightning Speed", description: "Complete any expedition level in under 45 seconds." },
    es: { title: "Cronógrafo de Oro", subtitle: "Velocidad Relámpago", description: "Completa cualquier nivel de expedición en menos de 45 segundos." }
  },
  flawless_run: {
    en: { title: "Flawless Expedition", subtitle: "Zero Mistakes", description: "Decipher an entire excavation site without making a single mistaken tap." },
    es: { title: "Expedición Impecable", subtitle: "Cero Errores", description: "Descifra un yacimiento arqueológico entero sin cometer ningún fallo." }
  },
  full_set_synergy: {
    en: { title: "Priest's Aura", subtitle: "Complete Set", description: "Equip at least 3 pieces of the same Archaeological Set in the Armory." },
    es: { title: "Aura de los Sacerdotes", subtitle: "Conjunto Completo", description: "Equipa al menos 3 piezas del mismo Conjunto Arqueológico en la Armería." }
  },
  lore_master: {
    en: { title: "Master Epigrapher", subtitle: "Historical Archive", description: "Gather and record at least 20 historical clues in the Expedition Journal." },
    es: { title: "Epigrafista Experimentado", subtitle: "Archivo Histórico", description: "Reúne y documenta al menos 20 pistas históricas en el Cuaderno de Campo." }
  },
  relic_hunter: {
    en: { title: "Relic Hunter", subtitle: "Forbidden Archaeology", description: "Uncover at least 3 golden relics hidden within the excavation sites." },
    es: { title: "Cazador de Reliquias", subtitle: "Arqueología Prohibida", description: "Halla al menos 3 reliquias doradas ocultas en los yacimientos." }
  },
  andes_climber: {
    en: { title: "Condor Climber", subtitle: "Toward High Peaks", description: "Reach Stage 5 (Central Andes & Vilcabamba Crypt)." },
    es: { title: "Escalador del Cóndor", subtitle: "Hacia las Alturas", description: "Alcanza la Etapa 5 (Andes Centrales y Cripta de Vilcabamba)." }
  },
  sun_priest: {
    en: { title: "Heir of the Sun", subtitle: "Gates of Paititi", description: "Reach Stage 9 (Sun Temple & Sancta Sanctorum)." },
    es: { title: "Heredero del Sol", subtitle: "Las Puertas de Paititi", description: "Alcanza la Etapa 9 (Templo del Sol y Sancta Sanctorum)." }
  },
  combo_master: {
    en: { title: "Unstoppable Flame", subtitle: "Perfect Rhythm", description: "Chain a Combo x4 or higher streak by spotting differences in rapid succession." },
    es: { title: "Llama Imparable", subtitle: "Ritmo Perfecto", description: "Encadena un Combo x4 o superior descubriendo diferencias en rápida sucesión." }
  },
  cartographer: {
    en: { title: "Master Cartographer", subtitle: "Geodetic Navigator", description: "Complete at least 10 stages and inspect your journey on the 3D Globe." },
    es: { title: "Maestro Cartógrafo", subtitle: "Navegante Geodésico", description: "Completa al menos 10 etapas y consulta tu ruta en el Globo 3D." }
  },
  wealthy_explorer: {
    en: { title: "Vilcabamba Strongbox", subtitle: "Archaeological Wealth", description: "Accumulate a total expedition treasury of over 1,000 Gold Coins." },
    es: { title: "Cofre de Vilcabamba", subtitle: "Riqueza Arqueológica", description: "Acumula un tesoro total de expedición de más de 1.000 Monedas de Oro." }
  },
  grand_archaeologist: {
    en: { title: "Legend of 1928", subtitle: "Royal Geographic Champion", description: "Triumph across all 120 excavation sites and unveil the ultimate fate of Paititi." },
    es: { title: "Leyenda de 1928", subtitle: "Héroe de la Real Sociedad", description: "Triunfa en los 120 yacimientos y descubre el destino definitivo de Paititi." }
  }
};

export function getLocalizedMedal(medal: ExpeditionMedal, lang: Language): ExpeditionMedal {
  if (lang === 'it') return medal;
  const loc = MEDALS_I18N[medal.id]?.[lang as 'en' | 'es'];
  if (!loc) return medal;
  return {
    ...medal,
    title: loc.title,
    subtitle: loc.subtitle,
    description: loc.description,
  };
}

// =========================================================================
// CONSULAR VISAS TRANSLATIONS
// =========================================================================
interface VisaLoc {
  title: string;
  territory: string;
  country: string;
  consul: string;
  description: string;
}

const VISAS_I18N: Record<string, Record<'en' | 'es', VisaLoc>> = {
  visa_oxford: {
    en: { title: "Academic Overseas Clearance", territory: "Oxford • Ashmolean Institute", country: "United Kingdom", consul: "Sir Arthur Penhaligon, Chancellor", description: "Official mandate to investigate pre-Columbian artifacts stolen from university archives." },
    es: { title: "Autorización Académica de Ultramar", territory: "Oxford • Instituto Ashmolean", country: "Reino Unido", consul: "Sir Arthur Penhaligon, Canciller", description: "Permiso oficial para investigar artefactos precolombinos sustraídos del archivo universitario." }
  },
  visa_southampton: {
    en: { title: "Embarkation Visa & Maritime Customs", territory: "Southampton Ocean Docks", country: "United Kingdom", consul: "Capt. Thomas Sterling, R.M.S. Amazon Star", description: "Hold clearance for surveyor crates, telescopes, and bromide photographic glass plates." },
    es: { title: "Visado de Embarque y Aduana Marítima", territory: "Muelles Oceánicos de Southampton", country: "Reino Unido", consul: "Cap. Thomas Sterling, R.M.S. Amazon Star", description: "Despacho de bodega para instrumentos geodésicos, telescopios y placas fotográficas al bromuro." }
  },
  visa_belem: {
    en: { title: "Riverine Permit of the Gran Pará", territory: "Belém do Pará • Guajará Bay", country: "United States of Brazil", consul: "General Commissioner D. Ribeiro", description: "River delta entry certificate and license for botanical-archaeological field research." },
    es: { title: "Permiso Fluvial del Gran Pará", territory: "Belém do Pará • Bahía de Guajará", country: "Estados Unidos del Brasil", consul: "Comisario General D. Ribeiro", description: "Certificado de entrada al delta fluvial y licencia de investigación botánico-arqueológica." }
  },
  visa_manaus: {
    en: { title: "Rio Negro Outpost Safe-Conduct", territory: "Manaus • Teatro Amazonas District", country: "United States of Brazil", consul: "Colonial Prefect Manoel Fontes", description: "Clearance for steamship ascent across the dark headwaters of the Rio Negro." },
    es: { title: "Salvoconducto del Puesto del Río Negro", territory: "Manaos • Distrito del Teatro Amazonas", country: "Estados Unidos del Brasil", consul: "Prefecto Colonial Manoel Fontes", description: "Autorización para remontar en vapor las oscuras corrientes del Río Negro." }
  },
  visa_iquitos: {
    en: { title: "Trans-Amazonian Border Customs", territory: "Iquitos • River Frontier Outpost", country: "Republic of Peru", consul: "Chief Intendant Hernán Valdivia", description: "Passport endorsement granting overland passage through the virgin jungles of Loreto." },
    es: { title: "Aduana de Frontera Transamazónica", territory: "Iquitos • Presidio Fronterizo Fluvial", country: "República del Perú", consul: "Intendente Mayor Hernán Valdivia", description: "Visado de pasaporte que concede paso a través de la selva virgen de Loreto." }
  },
  visa_cusco: {
    en: { title: "Imperial Prefecture Endorsement", territory: "Cusco • Plaza de Armas", country: "Republic of Peru", consul: "Prefect Don Alonso de Carvajal", description: "Academic immunity for surveying twelve-angled cyclopean stones and Sun Temples." },
    es: { title: "Reconocimiento de la Prefectura Imperial", territory: "Cusco • Plaza de Armas", country: "República del Perú", consul: "Prefecto Don Alonso de Carvajal", description: "Inmunidad académica para inspeccionar muros ciclópeos de doce ángulos y templos del Sol." }
  },
  visa_ollantaytambo: {
    en: { title: "Sacred Valley Military Seal", territory: "Ollantaytambo • Terraced Fortress", country: "Republic of Peru", consul: "Captain R. Huamán, Andean Garrison", description: "Unlocking fortified stone mountain passes leading up to dizzying Andean heights." },
    es: { title: "Sello Militar del Valle Sagrado", territory: "Ollantaytambo • Fortaleza Aterrazada", country: "República del Perú", consul: "Capitán R. Huamán, Guarnición Andina", description: "Franqueo de los pasos fortificados de piedra hacia las alturas andinas." }
  },
  visa_condor_pass: {
    en: { title: "Condor Pass High-Altitude Endorsement", territory: "Vilcabamba Range • Altitude 4,850m", country: "Lands of Vilcabamba", consul: "Master Guide Mateo Quispe", description: "Certificate of survival through eternal blizzards across the Great Condor Glacier." },
    es: { title: "Sello de Alta Cota del Paso del Cóndor", territory: "Cordillera de Vilcabamba • Cota 4.850m", country: "Tierras de Vilcabamba", consul: "Guía Supremo Mateo Quispe", description: "Certificado de superación de las ventiscas perpetuas sobre el glaciar del cóndor." }
  },
  visa_machu_picchu: {
    en: { title: "Citadel in the Clouds Accreditation", territory: "Machu Picchu Sanctuary • Huayna Picchu", country: "Historic Sanctuary", consul: "Prof. J. Bingham Memorial Registrar", description: "Exclusive survey access to the Temple of the Three Windows and the Intihuatana stone." },
    es: { title: "Homologación de la Ciudadela en las Nubes", territory: "Santuario de Machu Picchu • Huayna Picchu", country: "Santuario Histórico", consul: "Registrador Memorial Prof. J. Bingham", description: "Acceso exclusivo a los recintos del Templo de las Tres Ventanas y el Intihuatana." }
  },
  visa_cloud_gate: {
    en: { title: "Esoteric Seal of the Cloud Gate", territory: "Cyclopean Stone Threshold • High Jungle", country: "Border of Paititi", consul: "Inscription of the Ancestral Serpent", description: "Recognition of carved solar runes unlocking the sealed granite mountain gateway." },
    es: { title: "Sello Esotérico del Portal de las Nubes", territory: "Umbral de Piedra Ciclópea • Selva Alta", country: "Frontera de Paititi", consul: "Inscripción del Amaru Ancestral", description: "Reconocimiento de las runas solares grabadas que abren la montaña de granito sellada." }
  },
  visa_priest_crypt: {
    en: { title: "Wax Seal of the Sun Guardians", territory: "Crypt of Priests • Hypogeum Chamber", country: "Submerged Sanctuary", consul: "High Custodian of the Golden Aura", description: "Ceremonial visa hot-stamped over the ancient mysteries of the incorruptible sun disk." },
    es: { title: "Lacre de los Guardianes del Sol", territory: "Cripta de los Sacerdotes • Hipogeo", country: "Santuario Sumergido", consul: "Sumo Custodio del Aura Dorada", description: "Visado ceremonial estampado en caliente sobre los misterios del disco de oro incorruptible." }
  },
  visa_paititi_sanctum: {
    en: { title: "Sovereign Seal of the Golden City of Paititi", territory: "Sancta Sanctorum • Altar of Inti", country: "Realm of Paititi", consul: "The Living Solar Disk", description: "The definitive seal of the Royal Geographic Society. The 1928 legend is fulfilled." },
    es: { title: "Sello Soberano de la Ciudad de Oro de Paititi", territory: "Sancta Sanctorum • Altar de Inti", country: "Reino de Paititi", consul: "El Disco Solar Viviente", description: "El sello definitivo de la Real Sociedad Geográfica. La leyenda de 1928 se ha cumplido." }
  }
};

export function getLocalizedVisa(visa: ConsularVisa, lang: Language): ConsularVisa {
  if (lang === 'it') return visa;
  const loc = VISAS_I18N[visa.id]?.[lang as 'en' | 'es'];
  if (!loc) return visa;
  return {
    ...visa,
    title: loc.title,
    territory: loc.territory,
    country: loc.country,
    consul: loc.consul,
    description: loc.description,
  };
}

// =========================================================================
// STAGE BRIEFINGS TRANSLATIONS
// =========================================================================
interface BriefingLoc {
  actTitle: string;
  stageTitle: string;
  location: string;
  date: string;
  tagline: string;
  loreStory: string[];
  missionObjectives: string[];
  targetRelic: { name: string; description: string };
  explorerQuotes: { samira: string; mateo: string };
}

const BRIEFINGS_I18N: Record<number, Record<'en' | 'es', BriefingLoc>> = {
  1: {
    en: {
      actTitle: "Act I: The Riddle of Europe",
      stageTitle: "The Oxford Study & The Lost Notebook",
      location: "Oxford & London, England",
      date: "September 12, 1928 — 23:45 hrs",
      tagline: "A midnight break-in, a forged map, and the first trail leading toward the City of Gold.",
      loreStory: [
        "Driving rain lashes the Gothic windows of Oxford. Hours ago, Professor Bellini vanished without a trace.",
        "Inside his private study: forced drawers and open folios. The intruder was hunting for the legendary Paititi Notebook.",
        "Yet the thief made a fatal mistake: substituting the original with a forgery riddled with deliberate physical discrepancies.",
        "Summoned by the Royal Geographic Society, your mission is to survey the anomalies and reconstruct Bellini's escape route."
      ],
      missionObjectives: [
        "Inspect the study and pinpoint the archival discrepancies across the first 10 levels.",
        "Recover Father Lopez's confidential 1600 letter hidden inside the false-bottom drawer.",
        "Unlock Bellini's Wax Seal to validate the escape route heading to France."
      ],
      targetRelic: { name: "Bellini's Wax Signet", description: "Solid brass signet ring bearing the crest of the Royal Geographic Society." },
      explorerQuotes: {
        samira: "Study the handwriting in the manuscripts and lens positions. Whoever broke in missed the Andean celestial markers. Every difference is a deliberate breadcrumb!",
        mateo: "The hasty alignment of the surveyor theodolite reveals rushed work. Let's catalog the discrepancies and chart the true bearing."
      }
    },
    es: {
      actTitle: "Acto I: El Enigma de Europa",
      stageTitle: "El Estudio de Oxford y el Cuaderno Perdido",
      location: "Oxford y Londres, Inglaterra",
      date: "12 de Septiembre de 1928 — 23:45 hrs",
      tagline: "Un allanamiento nocturno, un mapa falsificado y la primera pista hacia la Ciudad Dorada.",
      loreStory: [
        "La lluvia azota los ventanales góticos de Oxford. Hace pocas horas, el Profesor Bellini desapareció sin dejar rastro.",
        "En su despacho: cajones forzados y códices abiertos. El intruso buscaba el legendario Cuaderno de Paititi.",
        "Pero cometió un fallo: reemplazó el original por una falsificación con sutiles discrepancias deliberadas.",
        "Convocado por la Real Sociedad Geográfica, tu deber es descifrar las anomalías y seguir la ruta de escape de Bellini."
      ],
      missionObjectives: [
        "Inspecciona el despacho e identifica las anomalías documentales en los primeros 10 niveles.",
        "Recupera la carta confidencial del Padre López de 1600 oculta en el doble fondo.",
        "Desbloquea el Sello de Lacre de Bellini para convalidar la ruta hacia Francia."
      ],
      targetRelic: { name: "El Sello de Lacre de Bellini", description: "Anillo de latón macizo con el emblema de la Real Sociedad Geográfica." },
      explorerQuotes: {
        samira: "Observa la caligrafía y las lentes. Quien entró ignoraba la astronomía andina. ¡Cada diferencia es una pista dejada por Bellini!",
        mateo: "La alineación apresurada de los instrumentos delata prisa. Encontremos las discrepancias y tracemos el rumbo exacto."
      }
    }
  }
};

export function getLocalizedBriefing(briefing: StageBriefing, lang: Language): StageBriefing {
  if (lang === 'it') return briefing;
  const loc = BRIEFINGS_I18N[briefing.stageNumber]?.[lang as 'en' | 'es'];
  if (!loc) {
    return {
      ...briefing,
      actTitle: lang === 'es' ? briefing.actTitle.replace("Atto", "Acto") : briefing.actTitle.replace("Atto", "Act"),
    };
  }
  return {
    ...briefing,
    actTitle: loc.actTitle,
    stageTitle: loc.stageTitle,
    location: loc.location,
    date: loc.date,
    tagline: loc.tagline,
    loreStory: loc.loreStory,
    missionObjectives: loc.missionObjectives,
    targetRelic: loc.targetRelic,
    explorerQuotes: loc.explorerQuotes,
  };
}

// =========================================================================
// EXPLORERS LOCALIZATION
// =========================================================================
interface ExplorerLoc {
  title: string;
  specialization: string;
  bio: string;
  originCountry: string;
}

const EXPLORERS_I18N: Record<'samira' | 'mateo', Record<'en' | 'es', ExplorerLoc>> = {
  samira: {
    en: {
      title: "Epigrapher & Archaeo-Acoustics",
      specialization: "Deciphering Lost Languages & Architectural Resonance",
      bio: "Trained at the University of Coimbra and pioneer of Andean fieldwork. Deciphers pre-Inca inscriptions by recording resonance frequencies among the ruins of Paititi.",
      originCountry: "Portugal",
    },
    es: {
      title: "Epigrafista y Arqueoacústica",
      specialization: "Descifrado de Lenguas Perdidas y Resonancia Arquitectónica",
      bio: "Formada en la Universidad de Coímbra y pionera en expediciones andinas. Descifra inscripciones preincaicas registrando frecuencias de resonancia entre las ruinas de Paititi.",
      originCountry: "Portugal",
    }
  },
  mateo: {
    en: {
      title: "Topographer & Geo-Archaeologist",
      specialization: "Geodetic Cartography & Highland Speleology",
      bio: "Former cartographer of the Royal Geographical Society and veteran of Alpine and Andean ascents. Master of terrain triangulation and subterranean acoustics.",
      originCountry: "Spain",
    },
    es: {
      title: "Topógrafo y Geoarqueólogo",
      specialization: "Cartografía Geodésica y Espeleología de Alta Montaña",
      bio: "Antiguo cartógrafo de la Real Sociedad Geográfica y veterano de ascensiones alpinas y andinas. Maestro de la triangulación topográfica y la acústica subterránea.",
      originCountry: "España",
    }
  }
};

export function getLocalizedExplorer(explorer: ExplorerCharacter, lang: Language): ExplorerCharacter {
  if (lang === 'it') return explorer;
  const loc = EXPLORERS_I18N[explorer.id]?.[lang as 'en' | 'es'];
  if (!loc) return explorer;
  return {
    ...explorer,
    title: loc.title,
    specialization: loc.specialization,
    bio: loc.bio,
    originCountry: loc.originCountry,
  };
}

// =========================================================================
// OUTFITS & ACCESSORIES TRANSLATIONS
// =========================================================================
interface OutfitLoc {
  name: string;
  description: string;
  perkLabel: string;
  tag: string;
}

const OUTFITS_I18N: Record<string, Record<'en' | 'es', OutfitLoc>> = {
  samira_base: {
    en: { name: "Coimbra Field Twill (Base)", description: "Sage linen twill shirt, high-waisted sand trousers, cross-chest leather satchel and brass field compass.", perkLabel: "Standard Gear", tag: "Initial" },
    es: { name: "Sarga de Coímbra (Base)", description: "Camisa de sarga en lino salvia, pantalones de tiro alto arena, bandolera de cuero cruzada y brújula de latón.", perkLabel: "Equipo Estándar", tag: "Inicial" }
  },
  samira_rain: {
    en: { name: "Rainforest Oilskin 'Madre de Dios'", description: "Waterproof waxed emerald cape with reinforced leather brassards and storm hood for tropical deluge.", perkLabel: "+5s Freeze Duration", tag: "Tropical" },
    es: { name: "Capote Impermeable 'Madre de Dios'", description: "Capelina impermeable verde esmeralda encerada con hombreras de cuero reforzado y capucha para lluvias tropicales.", perkLabel: "+5s Duración Congelación", tag: "Tropical" }
  },
  samira_cenote: {
    en: { name: "Cavern Diver 'Chultún'", description: "Lightweight diving suit in waxed teal canvas with bronze carabiners and watertight specimen canisters.", perkLabel: "+25% Radar Range", tag: "Speleology" },
    es: { name: "Exploradora de Cenotes 'Chultún'", description: "Traje ligero de espeleología en lona encerada verde azulado con mosquetones de bronce y estuches estancos.", perkLabel: "+25% Alcance Radar", tag: "Espeleología" }
  },
  samira_society: {
    en: { name: "Royal Geographic Society Fellow", description: "Formal tailored tweed coat in midnight navy with silver buttons, silk cravat and academic gold crest.", perkLabel: "1 Free Error Shield", tag: "Academic" },
    es: { name: "Miembro de la Real Sociedad Geográfica", description: "Chaqueta formal entallada en tweed azul noche con botones de plata, corbatín de seda y blasón académico dorado.", perkLabel: "1 Escudo de Error Gratis", tag: "Académica" }
  },
  samira_inti: {
    en: { name: "Vestal of the Sun of Paititi", description: "Ceremonial tunic in raw highland cotton with solar embroidery in gold thread and sapphire feather mantle.", perkLabel: "+25% Total Coins", tag: "Sacred Relic" },
    es: { name: "Vestal del Sol de Paititi", description: "Túnica ceremonial de algodón crudo con bordados solares en hilo de oro y capa corta con plumas de zafiro.", perkLabel: "+25% Monedas Totales", tag: "Reliquia Sagrada" }
  },
  mateo_base: {
    en: { name: "Geological Survey (Base)", description: "Terracotta thermal undershirt with field overshirt, graphite ripstop cargo trousers and leather map cylinder.", perkLabel: "Standard Setup", tag: "Initial" },
    es: { name: "Campamento Geológico (Base)", description: "Camiseta térmica terracota con sobrecamisa de trabajo, pantalón cargo grafito y cilindro portamapas de cuero.", perkLabel: "Equipo Estándar", tag: "Inicial" }
  },
  mateo_recon: {
    en: { name: "Scout 'Living Rock'", description: "Multi-pocket technical vest in moss-green ripstop with spring clips, climbing gloves, and alpine boots.", perkLabel: "+10% Coins Earned", tag: "Mountaineering" },
    es: { name: "Reconocimiento 'Roca Viva'", description: "Chaleco técnico multibolsillos en ripstop verde musgo con mosquetones, guantes de vía ferrata y botas de escalada.", perkLabel: "+10% Monedas Ganadas", tag: "Alpinismo" }
  },
  mateo_alpine: {
    en: { name: "High-Altitude Parka 'Cóndor'", description: "Midnight blue windproof thermal parka with amber accents, blizzard protective hood, and snow gaiters.", perkLabel: "+5s Freeze Duration", tag: "Thermal" },
    es: { name: "Parka de Alta Montaña 'Cóndor'", description: "Parka térmica cortavientos azul noche con detalles ámbar, capucha de ventisca y polainas de nieve.", perkLabel: "+5s Duración Congelación", tag: "Térmica" }
  },
  mateo_jungle: {
    en: { name: "River Crossing 'Madre de Dios'", description: "Quick-drying breathable technical shirt with UV protection and modular trousers with drainage pockets.", perkLabel: "+25% Radar Range", tag: "River" },
    es: { name: "Vadeo Tropical 'Madre de Dios'", description: "Camisa técnica de secado rápido con protección UV y pantalones modulares con bolsillos drenantes.", perkLabel: "+25% Alcance Radar", tag: "Fluvial" }
  },
  mateo_guild: {
    en: { name: "Master Cartographer", description: "Walnut corduroy waistcoat with pocket-watch and lens slots, chambray shirt, and silver-buckle belt.", perkLabel: "1 Free Error Shield", tag: "Geodetic" },
    es: { name: "Maestro Cartógrafo", description: "Chaleco de pana color nogal con bolsillos para reloj y lupas, camisa chambray y cinturón con hebilla de plata.", perkLabel: "1 Escudo de Error Gratis", tag: "Geodésico" }
  },
  mateo_guard: {
    en: { name: "Golden Guard of Paititi", description: "Breastplate in hammered bronze and gold foil engraved with the sacred serpent (Amaru) and crimson cloak.", perkLabel: "+25% Total Coins", tag: "Sacred Relic" },
    es: { name: "Guardia de Oro de Paititi", description: "Peto de bronce martillado y láminas de oro grabadas con la serpiente sagrada (Amaru) y capa ceremonial carmesí.", perkLabel: "+25% Monedas Totales", tag: "Reliquia Sagrada" }
  }
};

export function getLocalizedOutfit(outfit: WardrobeOutfit, lang: Language): WardrobeOutfit {
  if (lang === 'it') return outfit;
  const loc = OUTFITS_I18N[outfit.id]?.[lang as 'en' | 'es'];
  if (!loc) return outfit;
  return {
    ...outfit,
    name: loc.name,
    description: loc.description,
    tag: loc.tag,
    perk: {
      ...outfit.perk,
      label: loc.perkLabel,
    }
  };
}

interface AccessoryLoc {
  name: string;
  description: string;
  tag: string;
  perkLabel?: string;
}

const ACCESSORIES_I18N: Record<string, Record<'en' | 'es', AccessoryLoc>> = {
  acc_visor: {
    en: { name: "Anti-Glare Epigraphy Visor", description: "Shields the eyes from blinding sunlight on carved cliff faces.", tag: "Optical" },
    es: { name: "Visera Antirreflejo de Epigrafía", description: "Protege los ojos del sol sobre paredes de roca grabadas.", tag: "Óptico" }
  },
  acc_bandana: {
    en: { name: "Breathable Jungle Bandana", description: "Natural breathable fiber with instantaneous drying capability.", tag: "Comfort" },
    es: { name: "Bandana Transpirable de Selva", description: "Tejido transpirable de fibra natural con secado instantáneo.", tag: "Confort" }
  },
  acc_wax_hat: {
    en: { name: "Oilskin Expedition Hat", description: "Wide circular brim impervious to equatorial downpours and blinding heat.", tag: "Protection" },
    es: { name: "Sombrero de Lona Encerada", description: "Ala ancha circular impermeable para aguaceros y sol ecuatorial.", tag: "Protección" }
  },
  acc_speleo_helmet: {
    en: { name: "Warm-Beam Speleo Helmet", description: "Illuminates deep caverns with a natural anti-glare spectrum beam.", tag: "Exploration", perkLabel: "+15% Radar Range" },
    es: { name: "Casco con Faro de Espeleología", description: "Ilumina cavidades profundas con haz antirreflejo de espectro cálido.", tag: "Exploración", perkLabel: "+15% Alcance Radar" }
  },
  acc_solar_crown: {
    en: { name: "Solar Crown of Paititi", description: "Slender golden diadem embossed with the emblems of Inti.", tag: "Regal", perkLabel: "+10% Coins" },
    es: { name: "Corona Solar de Paititi", description: "Fina diadema dorada repujada con motivos sagrados de Inti.", tag: "Regia", perkLabel: "+10% Monedas" }
  },
  tool_tuning_fork: {
    en: { name: "Archaeo-Acoustic Tuning Fork", description: "Bronze instrument calibrated to resonate within hidden burial chambers.", tag: "Acoustic", perkLabel: "+10% Radar Range" },
    es: { name: "Diapasón Arqueoacústico", description: "Instrumento de bronce afinado para hacer resonar criptas secretas.", tag: "Acústico", perkLabel: "+10% Alcance Radar" }
  },
  tool_monocle: {
    en: { name: "Multi-Lens Epigraphy Monocle", description: "Three layered lenses to inspect microscopic engravings and hairline fissures.", tag: "Precision", perkLabel: "+3s Freeze" },
    es: { name: "Monóculo de Lentes Múltiples", description: "Tres lentes superpuestas para detectar grabados microscópicos.", tag: "Precisión", perkLabel: "+3s Congelación" }
  },
  tool_theodolite: {
    en: { name: "Pocket Geodetic Theodolite", description: "Miniature blued-brass surveyor instrument for triangulation.", tag: "Topography", perkLabel: "+5% Coins" },
    es: { name: "Teodolito Geodésico de Bolsillo", description: "Miniatura en latón pavonado para triangulaciones topográficas.", tag: "Topografía", perkLabel: "+5% Monedas" }
  },
  tool_notebook_silver: {
    en: { name: "Silver-Sealed Historical Fieldbook", description: "Waterproof rag-linen paper to preserve every faint anomaly.", tag: "Field Notes", perkLabel: "1 Free Error Shield" },
    es: { name: "Cuaderno con Sello de Plata", description: "Papel de trapo impermeable para registrar cada pequeña anomalía.", tag: "Cuaderno", perkLabel: "1 Escudo de Error Gratis" }
  },
  talisman_amber: {
    en: { name: "Fossil Amber Drop Choker", description: "Ancient resin encasing botanical traces from 30 million years ago.", tag: "Natural", perkLabel: "+3s Freeze" },
    es: { name: "Gargantilla de Ámbar Fósil", description: "Antigua resina con inclusiones botánicas de hace 30 millones de años.", tag: "Natural", perkLabel: "+3s Congelación" }
  },
  talisman_jade_chachapoya: {
    en: { name: "Chachapoya Cloud Jade Amulet", description: "Polished green gemstone engraved with protective cloud spirals.", tag: "Protection", perkLabel: "+8% Coins" },
    es: { name: "Amuleto de Jade Chachapoya", description: "Gema verde pulida con espirales protectoras de los Guerreros de las Nubes.", tag: "Protección", perkLabel: "+8% Monedas" }
  },
  talisman_jaguar_tooth: {
    en: { name: "Golden Jaguar Fossil Tooth", description: "Set in engraved silver leaf depicting sacred feline claws.", tag: "Predator", perkLabel: "+15% Radar Range" },
    es: { name: "Diente Fósil de Jaguar Dorado", description: "Engastado en lámina de plata con garras de felino sagrado.", tag: "Depredador", perkLabel: "+15% Alcance Radar" }
  }
};

export function getLocalizedAccessory(accessory: WardrobeAccessory, lang: Language): WardrobeAccessory {
  if (lang === 'it') return accessory;
  const loc = ACCESSORIES_I18N[accessory.id]?.[lang as 'en' | 'es'];
  if (!loc) return accessory;
  return {
    ...accessory,
    name: loc.name,
    description: loc.description,
    tag: loc.tag,
    perk: accessory.perk && loc.perkLabel ? { ...accessory.perk, label: loc.perkLabel } : accessory.perk,
  };
}

interface EquipmentSetLoc {
  name: string;
  shortName: string;
  description: string;
  lore: string;
  perkLabel: string;
}

const EQUIPMENT_SETS_I18N: Record<string, Record<'en' | 'es', EquipmentSetLoc>> = {
  inti_sun: {
    en: {
      name: "Regal Sun of Inti Set",
      shortName: "Sun of Inti",
      description: "Radiant aura of Paititi's solar priests.",
      lore: "When 3 or more garments consecrated to the Sun resonate together, every difference reveals multiplied golden treasures.",
      perkLabel: "+25% Gold Coins & Solar Aura",
    },
    es: {
      name: "Set Regio del Sol de Inti",
      shortName: "Sol de Inti",
      description: "Aura radiante de los sacerdotes solares de Paititi.",
      lore: "Cuando 3 o más vestiduras consagradas al Sol resuenan juntas, cada diferencia revela tesoros áureos multiplicados.",
      perkLabel: "+25% Monedas de Oro y Aura Solar",
    },
  },
  andes_climber: {
    en: {
      name: "Andes Explorer Set",
      shortName: "Andean Explorer",
      description: "Extreme thermal resilience and chronometric dilation.",
      lore: "Forged to brave the freezing fogs of the Cóndor and the inviolate peaks of the Vilcabamba cordillera.",
      perkLabel: "+5s Extra Time Dilation",
    },
    es: {
      name: "Set Explorador de los Andes",
      shortName: "Explorador Andino",
      description: "Resistencia térmica extrema y dilatación cronométrica.",
      lore: "Forjado para desafiar las nieblas heladas del Cóndor y las cumbres vírgenes de la cordillera de Vilcabamba.",
      perkLabel: "+5s Dilatación de Tiempo Extra",
    },
  },
  rgs_topographer: {
    en: {
      name: "Royal Geographic Society Topographer Set",
      shortName: "RGS Topographer",
      description: "Optical-acoustic triangulation and radar amplification.",
      lore: "The pinnacle of 1928 Victorian cartography: calibrates radio waves and lenses to pinpoint hidden anomalies.",
      perkLabel: "+25% Archeological Radar Range",
    },
    es: {
      name: "Set Topógrafo de la Royal Geographic Society",
      shortName: "Topógrafo RGS",
      description: "Triangulación óptico-acústica y amplificación del radar.",
      lore: "La máxima excelencia cartográfica victoriana de 1928: calibra ondas de radio y lentes para detectar anomalías ocultas.",
      perkLabel: "+25% Alcance de Radar Arqueológico",
    },
  },
  paititi_guardian: {
    en: {
      name: "Vilcabamba Guardian Set",
      shortName: "Guardian of Vilcabamba",
      description: "Ceremonial protective armor against false clues.",
      lore: "Ancient guardians of Inti absorb failures, turning aside the environmental perils of the jungle.",
      perkLabel: "+1 Free Error Shield",
    },
    es: {
      name: "Set Guardián de Vilcabamba",
      shortName: "Guardián de Vilcabamba",
      description: "Armadura ceremonial protectora contra falsos indicios.",
      lore: "Los antiguos guardianes de Inti absorben los errores, desviando los peligros ambientales de la selva.",
      perkLabel: "+1 Escudo de Error Gratis",
    },
  },
};

export function getLocalizedEquipmentSet(set: EquipmentSetBonus, lang: Language): EquipmentSetBonus {
  if (lang === 'it') return set;
  const loc = EQUIPMENT_SETS_I18N[set.id]?.[lang as 'en' | 'es'];
  if (!loc) return set;
  return {
    ...set,
    name: loc.name,
    shortName: loc.shortName,
    description: loc.description,
    lore: loc.lore,
    perk: {
      ...set.perk,
      label: loc.perkLabel,
    },
  };
}

// =========================================================================
// EXPEDITION DILEMMAS TRANSLATIONS
// =========================================================================
interface ChoiceLoc {
  title: string;
  description: string;
  consequence: string;
  rewardText: string;
  badge: string;
}

interface DilemmaLoc {
  location: string;
  era: string;
  title: string;
  context: string;
  situation: string;
  choiceA: ChoiceLoc;
  choiceB: ChoiceLoc;
}

const DILEMMAS_I18N: Record<number, Record<'en' | 'es', DilemmaLoc>> = {
  1: {
    en: {
      location: "Oxford, England",
      era: "November 1928",
      title: "Flight from the Victorian Academy",
      context: "Professor Bellini left his study moments before the Obsidian Brotherhood forced the iron gate.",
      situation: "Oxford police sirens echo through the mist. Two corrupt agents of the order are scouring the Ashmolean Museum forecourt to intercept you.",
      choiceA: {
        title: "Raid the Confidential Archive",
        description: "Break into the colluding Dean's office to seize ciphered telegrams of the Obsidian Brotherhood.",
        consequence: "You secure incriminating dossiers and research funds before escaping through the rear casement.",
        rewardText: "+250 Gold Coins & Dossier",
        badge: "ACADEMIC INTEL"
      },
      choiceB: {
        title: "Stealthy Escape through the Shadows",
        description: "Slip into the underground boiler flues and board the midnight express to Rome under an alias.",
        consequence: "You avoid any gunplay and safeguard Bellini's notebooks with consummate prudence.",
        rewardText: "Guardian Shield (+1 Protection)",
        badge: "GUARDIAN PRUDENCE"
      }
    },
    es: {
      location: "Oxford, Inglaterra",
      era: "Noviembre 1928",
      title: "La Huida del Ateneo Victoriano",
      context: "El Profesor abandonó el estudio minutos antes de que la Hermandad forzara el portón.",
      situation: "Las sirenas de la policía resuenan en la niebla. Dos agentes corruptos rastrean el museo para interceptarte.",
      choiceA: {
        title: "Incursión en el Archivo Reservado",
        description: "Entra en el despacho del Rector cómplice para arrebatar los telegramas cifrados de la Hermandad.",
        consequence: "Recuperas documentos comprometedores y fondos antes de saltar por la ventana trasera.",
        rewardText: "+250 Monedas de Oro y Dossier",
        badge: "CONOCIMIENTO ACADÉMICO"
      },
      choiceB: {
        title: "Huida Furtiva entre las Sombras",
        description: "Deslízate por las galerías subterráneas tomando el tren nocturno a Roma con identidad falsa.",
        consequence: "Evitas tiroteos y pones a salvo los cuadernos de Bellini con máxima cautela.",
        rewardText: "Escudo del Guardián (+1 Protección)",
        badge: "PRUDENCIA DEL CUSTODIO"
      }
    }
  },
  2: {
    en: {
      location: "Rome, Italy",
      era: "December 1928",
      title: "Collapse in the Catacombs of Callixtus",
      context: "A dynamite stick set by mercenaries shakes the tufa vault of the ancient crypt.",
      situation: "Boulders crash down. Father Lopez is trapped behind the fallen column with the codices while a cult agent flees with a map duplicate.",
      choiceA: {
        title: "Rescue Father Lopez and the Codices",
        description: "Leap into the debris to heave the fallen pillar aside and pull the elder scholar to safety.",
        consequence: "Father Lopez survives and blesses you with a pontifical brass magnifying lens.",
        rewardText: "+2 Magnifying Lenses (Hints)",
        badge: "DEVOTION TO CUSTODIANS"
      },
      choiceB: {
        title: "Pursue and Neutralize the Cult Agent",
        description: "Sprint through the dark shaft to disarm the infiltrator before he reaches the surface.",
        consequence: "You retrieve the master map and the coin pouch allocated to the Roman conspirators.",
        rewardText: "+300 Gold Coins & Relic",
        badge: "RESOLUTE ACTION"
      }
    },
    es: {
      location: "Roma, Italia",
      era: "Diciembre 1928",
      title: "Derrumbe en las Catacumbas de San Calixto",
      context: "Dinamita colocada por mercenarios hace temblar la bóveda de toba de la cripta milenaria.",
      situation: "Caen peñascos. El Padre López queda atrapado con los códices mientras un agente huye con una copia del mapa.",
      choiceA: {
        title: "Socorrer al Padre López y los Manuscritos",
        description: "Te lanzas entre los escombros para levantar la columna y salvar al anciano erudito.",
        consequence: "El Padre López se salva y te entrega una lupa de latón pontificio bendecida.",
        rewardText: "+2 Lupas de Pista",
        badge: "DEVOCIÓN A LOS CUSTODIOS"
      },
      choiceB: {
        title: "Perseguir y Neutralizar al Espía",
        description: "Te arrojas por el corredor oscuro para desarmar al espía antes de que salga al exterior.",
        consequence: "Recuperas el mapa maestro y la bolsa de oro de los conspiradores.",
        rewardText: "+300 Monedas de Oro y Reliquia",
        badge: "RESOLUCIÓN FIRME"
      }
    }
  },
  3: {
    en: {
      location: "Venice, Italy",
      era: "January 1929",
      title: "Shadow over the Giudecca Canal",
      context: "Lagoon mist shrouds the ducal palace where the third crystal seal is secured.",
      situation: "A mysterious gondolier offers passage past the naval blockade of the Obsidian Brotherhood, demanding proof of your loyalty.",
      choiceA: {
        title: "Bribe the Lagoon Gondolier",
        description: "Hand over a silver doubloon to glide noiselessly through back canals towards Malamocco.",
        consequence: "You navigate in pitch darkness, receiving a naval compass to divine subterranean waterways.",
        rewardText: "+1 Nautical Radar Compass",
        badge: "SECRET WATERWAYS"
      },
      choiceB: {
        title: "Forge the Doge's Diplomatic Permit",
        description: "Use San Marco's historic printing press to forge an official consular authorization.",
        consequence: "Gendarmes escort you with military honors, replenishing expedition supplies.",
        rewardText: "+2 Freeze Time Chronometers",
        badge: "DIPLOMATIC CUNNING"
      }
    },
    es: {
      location: "Venecia, Italia",
      era: "Enero 1929",
      title: "La Sombra sobre el Canal de la Giudecca",
      context: "La niebla lagunar envuelve el palacio donde se custodia el tercer sello de cristal.",
      situation: "Un gondolero misterioso ofrece burlar el bloqueo naval de la Hermandad, pidiendo una muestra de lealtad.",
      choiceA: {
        title: "Pagar al Gondolero de la Laguna",
        description: "Entregas un doblón de plata para deslizarte en silencio por canales secundarios hacia Malamocco.",
        consequence: "Navegas en tinieblas y recibes una brújula náutica para orientarte en las corrientes.",
        rewardText: "+1 Brújula Radar Náutica",
        badge: "RUTAS SECRETAS LAGUNARES"
      },
      choiceB: {
        title: "Falsificar el Salvoconducto del Dogo",
        description: "Usas la imprenta histórica para estampar una autorización consular de la flota.",
        consequence: "Los gendarmes te escoltan con honores militares, abasteciendo la expedición.",
        rewardText: "+2 Congeladores de Tiempo",
        badge: "INGENIO DIPLOMÁTICO"
      }
    }
  },
  4: {
    en: {
      location: "Crete & Cairo, Egypt",
      era: "February 1929",
      title: "Night in the Khan el-Khalili Bazaar",
      context: "Beneath the spice market vaulted arches lies the ancient access to the Well of Souls.",
      situation: "An Obsidian Brotherhood convoy is loading crates of antiquities looted from Giza bound for Alexandria.",
      choiceA: {
        title: "Sabotage the Cult's Convoy Trucks",
        description: "Pour emery sand into vehicle fuel tanks to paralyze the enemy transports.",
        consequence: "Engine explosions halt the escape and allow you to reclaim stolen expedition funds.",
        rewardText: "+350 Gold Coins",
        badge: "FIELD RECON SABOTAGE"
      },
      choiceB: {
        title: "Forge a Pact with Bedouin Guides",
        description: "Offer respect and provisions to desert nomads who guard the true paths across the dunes.",
        consequence: "Bedouin scouts protect you with charms and reveal invisible passages through the sand.",
        rewardText: "Guardian Shield & +1 Clue",
        badge: "DESERT PACT"
      }
    },
    es: {
      location: "Creta y El Cairo, Egipto",
      era: "Febrero 1929",
      title: "Noche en el Bazar de Khan el-Khalili",
      context: "Bajo las bóvedas del mercado de especias se oculta el acceso al Pozo de las Almas.",
      situation: "Un convoy de la Hermandad carga cajas de reliquias saqueadas de Guiza hacia Alejandría.",
      choiceA: {
        title: "Sabotear los Camiones de la Hermandad",
        description: "Viertes polvo abrasivo en los depósitos de los camiones para paralizar el transporte.",
        consequence: "Los motores revientan impidiendo la fuga y recuperas los fondos sustraídos.",
        rewardText: "+350 Monedas de Oro",
        badge: "GUERRILLA ARQUEOLÓGICA"
      },
      choiceB: {
        title: "Pactar con los Guías Beduinos",
        description: "Ofreces respeto y dádivas a los nómadas que custodian las rutas de los oasis.",
        consequence: "Los beduinos te protegen con amuletos y revelan pasos invisibles entre dunas.",
        rewardText: "Escudo del Guardián y +1 Pista",
        badge: "PACTO DEL DESIERTO"
      }
    }
  },
  5: {
    en: {
      location: "Alexandria, Egypt",
      era: "March 1929",
      title: "Scrolls of the Submerged Library",
      context: "In Greco-Roman cisterns beneath sea level, water begins to rise precipitously.",
      situation: "An ancient siphon flood mechanism is inundating the chamber. Choose what to salvage before the tunnel seals.",
      choiceA: {
        title: "Salvage the Paititi Navigation Scrolls",
        description: "Climb bronze shelving to seal naval papyri into a watertight canister.",
        consequence: "You preserve the only sea chart linking Phoenician routes to the Amazon River basin.",
        rewardText: "+2 Scientific Clues & +200 Coins",
        badge: "PRESERVER OF KNOWLEDGE"
      },
      choiceB: {
        title: "Seal the Subterranean Crypt Trapdoor",
        description: "Trigger the granite counterweight to entomb the vault, barring the cult forever.",
        consequence: "The sacred secret remains safely hidden in ocean depths beyond mortal reach.",
        rewardText: "Guardian Shield (+1 Protection)",
        badge: "ETERNAL SEALER"
      }
    },
    es: {
      location: "Alejandría, Egipto",
      era: "Marzo 1929",
      title: "Los Papiros de la Biblioteca Sumergida",
      context: "En las cisternas bajo el mar, el agua comienza a subir velozmente.",
      situation: "Un mecanismo sifónico inunda la cámara. Debes elegir qué salvar antes del colapso.",
      choiceA: {
        title: "Salvar los Rollos de Paititi",
        description: "Trepando por estantes de bronce sellas los papiros náuticos en un estuche estanco.",
        consequence: "Salvas el único mapa que conecta rutas fenicias con el Amazonas, ganando prestigio.",
        rewardText: "+2 Pistas Científicas y +200 Monedas",
        badge: "SALVADOR DEL SABER"
      },
      choiceB: {
        title: "Sellar la Trampilla de la Cripta",
        description: "Accionas el contrapeso de granito para tapiar la tumba e impedir su profanación.",
        consequence: "El secreto queda protegido para siempre en las profundidades marinas.",
        rewardText: "Escudo del Guardián (+1 Protección)",
        badge: "SELLADOR ETERNO"
      }
    }
  },
  6: {
    en: {
      location: "Luxor, Egypt",
      era: "April 1929",
      title: "Ambush in the Valley of the Kings",
      context: "Outside royal tombs, mercenary torches encircle the expedition camp.",
      situation: "An informant within the crew revealed the sixth seal's location. The Egyptian night turns ablaze.",
      choiceA: {
        title: "Expose the Traitor by Lantern Light",
        description: "Confront the mole before all field hands, forcing the surrender of ciphered journals.",
        consequence: "Expedition honor is restored and cult bribe gold is seized for our cause.",
        rewardText: "+400 Gold Coins",
        badge: "HONORABLE JUSTICE"
      },
      choiceB: {
        title: "Flee through the Gorge of Spirits",
        description: "Follow the ancient embalmers' trail along unmapped rocky ravines.",
        consequence: "Pursuers lose your trail in the maze of crags while you reach the Nile steamer.",
        rewardText: "+2 Freeze Time Hourglasses",
        badge: "SILENT FOOTSTEPS"
      }
    },
    es: {
      location: "Lúxor, Egipto",
      era: "Abril 1929",
      title: "Emboscada en el Valle de los Reyes",
      context: "Junto a las tumbas, antorchas enemigas cercan el campamento.",
      situation: "Un traidor en el equipo reveló el sexto sello. La noche se cubre de fuego.",
      choiceA: {
        title: "Desenmascarar al Traidor",
        description: "Confrontas al topo ante los trabajadores obligándole a entregar sus notas cifradas.",
        consequence: "Restableces el honor del grupo e incautas el oro prometido por la secta.",
        rewardText: "+400 Monedas de Oro",
        badge: "JUSTICIA DE HONOR"
      },
      choiceB: {
        title: "Huir por el Desfiladero de los Espíritus",
        description: "Sigues la senda secreta de los embalsamadores por una garganta no cartografiada.",
        consequence: "Los perseguidores se extravían en el pedregal mientras abordas el barco en el Nilo.",
        rewardText: "+2 Relojes de Congelación",
        badge: "PASOS SILENCIOSOS"
      }
    }
  },
  7: {
    en: {
      location: "Siwa Oasis, Libyan Desert",
      era: "May 1929",
      title: "Tempest at the Oracle of Amun",
      context: "The Khamsin desert gale scours Doric ruins, obliterating all trail landmarks.",
      situation: "The oasis well is nearly depleted. Two caravans offer guidance across the wastes to reach Atlantic shipping lanes.",
      choiceA: {
        title: "Consult Oracle Star Tablets",
        description: "Decipher alabaster carvings to calculate the precise astronomical bearing to Gibraltar.",
        consequence: "The stars guide your caravan safely through the endless sea of dunes.",
        rewardText: "+2 Solar Radar Compasses",
        badge: "CELESTIAL ASTRONOMY"
      },
      choiceB: {
        title: "Donate Precious Water to Pilgrims",
        description: "Relinquish rations to relieve elder temple guardians stranded at the shrine.",
        consequence: "The elder bestows a protective lapis lazuli amulet that turns aside misfortune.",
        rewardText: "Guardian Shield & +1 Clue",
        badge: "BLESSING OF AMUN"
      }
    },
    es: {
      location: "Oasis de Siwa, Desierto Líbico",
      era: "Mayo 1929",
      title: "La Tormenta del Oráculo de Amón",
      context: "El viento abrasador del desierto borra las huellas en las ruinas dorias.",
      situation: "El pozo casi no tiene agua. Dos caravanas ofrecen guiarte hacia la costa atlántica.",
      choiceA: {
        title: "Consultar las Tablas del Oráculo",
        description: "Descifras las columnas de alabastro para fijar el rumbo estelar hacia Gibraltar.",
        consequence: "Los astros conducen tu caravana sin vacilación por el mar de arena.",
        rewardText: "+2 Brújulas Radar Solares",
        badge: "ASTRONOMÍA CELESTE"
      },
      choiceB: {
        title: "Donar el Agua a los Peregrinos",
        description: "Cedes raciones para saciar a los sacerdotes ancianos del templo en el oasis.",
        consequence: "El guardián te regala un collar de lapislázuli que desvía la mala fortuna.",
        rewardText: "Escudo del Guardián y +1 Pista",
        badge: "BENDICIÓN DE AMÓN"
      }
    }
  },
  8: {
    en: {
      location: "Petra, Jordan",
      era: "June 1929",
      title: "Secret Chasm of the Treasury",
      context: "Hidden within sandstone fissures of the Nabataean Treasury lies the eighth obsidian seal.",
      situation: "The Obsidian Brotherhood rigged the Siq gorge entrance with explosives to seal your party inside the canyon.",
      choiceA: {
        title: "Disarm the Demolition Charges",
        description: "With steady hands and surgical shears, cut detonation cords before sparks reach the dynamite.",
        consequence: "You preserve the ancient monument from ruin, earning an official medal of merit.",
        rewardText: "Guardian Shield & +300 Coins",
        badge: "SAVIOR OF PETRA"
      },
      choiceB: {
        title: "Scale the Red Cliffs of Jebel al-Madhbah",
        description: "Climb shear sandstone precipices with hemp ropes, taking enemy scouts by surprise from above.",
        consequence: "You put the guards to flight and capture the cult's weapons and provision caches.",
        rewardText: "+2 Magnifying Lenses & +200 Coins",
        badge: "PRECIPICE DARING"
      }
    },
    es: {
      location: "Petra, Jordania",
      era: "Junio 1929",
      title: "El Desfiladero Secreto del Khazné",
      context: "En las grietas de arenisca del Tesoro se oculta el octavo sello de obsidiana.",
      situation: "La Hermandad minó la entrada del Siq con dinamita para sepultar la expedición en el cañón.",
      choiceA: {
        title: "Desactivar las Cargas Explosivas",
        description: "Con pulso de acero cortas los cordones detonantes antes de que la mecha alcance la dinamita.",
        consequence: "Salvas el monumento nabateo de la ruina y ganas una condecoración de honor.",
        rewardText: "Escudo del Guardián y +300 Monedas",
        badge: "SALVADOR DE PETRA"
      },
      choiceB: {
        title: "Escalar las Paredes Rojas de al-Madhbah",
        description: "Trepando por precipicios con cuerdas de cáñamo sorprendes a los vigías enemigos por arriba.",
        consequence: "Pones en fuga a los conspiradores y tomas sus víveres e instrumental de campo.",
        rewardText: "+2 Lupas de Pista y +200 Monedas",
        badge: "AUDACIA DEL PRECIPICIO"
      }
    }
  },
  9: {
    en: {
      location: "Iguazú Falls, South America",
      era: "July 1929",
      title: "Roar of the Devil's Throat",
      context: "The expedition touches South American soil, where churning cataracts roar through primordial jungle.",
      situation: "Behind the curtain of the mightiest falls lies the sacred altar of the Guaraní. A steam launch approaches quietly.",
      choiceA: {
        title: "Pact of Honor with Guaraní Chiefs",
        description: "Petition the shamans of the forest with respect for water spirits and ancestral lands.",
        consequence: "Indigenous warriors baffle the mercenaries with vine traps, opening the sacred sanctuary.",
        rewardText: "Guardian Shield & +2 Freeze Time",
        badge: "INDIGENOUS BROTHERHOOD"
      },
      choiceB: {
        title: "Ram and Sink the Cult Steam Launch",
        description: "Release tethered mahogany logs downriver to collide headlong into the enemy gunboat.",
        consequence: "The cult launch capsizes in the rapids; you salvage the strongbox containing expedition sterling.",
        rewardText: "+500 Gold Coins",
        badge: "RIVER VICTORY"
      }
    },
    es: {
      location: "Cataratas del Iguazú, Sudamérica",
      era: "Julio 1929",
      title: "El Rugido de la Garganta del Diablo",
      context: "La expedición desembarca en Sudamérica, donde las aguas rugen en la selva virgen.",
      situation: "Tras la cortina de agua se halla el altar sagrado de los guaraníes. Se acerca un barco enemigo.",
      choiceA: {
        title: "Pacto de Sangre con Caciques Guaraníes",
        description: "Pides venia a los chamanes rindiendo tributo a los espíritus del agua y de la selva.",
        consequence: "Los guerreros nativos confunden a los mercenarios con trampas abriéndote el santuario.",
        rewardText: "Escudo del Guardián y +2 Congeladores",
        badge: "HERMANDAD INDÍGENA"
      },
      choiceB: {
        title: "Hundir el Barco de la Hermandad",
        description: "Sueltas troncos de caoba atados a la orilla para embestir a toda velocidad contra el vapor enemigo.",
        consequence: "La nave zozobra en los rápidos; recuperas el arcón con las libras de la secta.",
        rewardText: "+500 Monedas de Oro",
        badge: "BATALLA FLUVIAL"
      }
    }
  },
  10: {
    en: {
      location: "Nazca Plateau, Peru",
      era: "August 1929",
      title: "Flight of the Nazca Condor",
      context: "Giant geoglyphs etched across the stony desert reveal alignments only during the winter solstice.",
      situation: "A chartered biplane ran dry on the gravel landing strip. Cult technical trucks are closing in up the wash.",
      choiceA: {
        title: "Chart Nocturnal Star Coordinates",
        description: "Stand vigil on the freezing ridge to plot the exact alignment from the Condor's beak.",
        consequence: "You divine the true latitude of Paititi's Sun Gateway, impossible to calculate by any other means.",
        rewardText: "+3 Golden Radar Compasses",
        badge: "GEOMETRY OF THE GODS"
      },
      choiceB: {
        title: "Conceal Tracks to Protect the Geoglyphs",
        description: "Rake iron gravel over tracks, diverting enemy trucks over the edge of the wash.",
        consequence: "The mercenaries drive into a dead end, leaving millennia-old glyphs completely unmarred.",
        rewardText: "Guardian Shield & +250 Coins",
        badge: "DESERT GUARDIAN"
      }
    },
    es: {
      location: "Meseta de Nazca, Perú",
      era: "Agosto 1929",
      title: "El Vuelo del Cóndor de Nazca",
      context: "Los geoglifos gigantes del desierto revelan sus secretos astronómicos durante el solsticio.",
      situation: "Un biplano alquilado se quedó sin combustible. Camionetas enemigas suben por el barranco.",
      choiceA: {
        title: "Anotar las Coordenadas Estelares",
        description: "Permaneces en el risco helado para trazar sobre el mapa la alineación del pico del Cóndor.",
        consequence: "Obtienes la latitud exacta de la Puerta del Sol de Paititi, inalcanzable por otro medio.",
        rewardText: "+3 Brújulas Radar Doradas",
        badge: "GEOMETRÍA DE LOS DIOSES"
      },
      choiceB: {
        title: "Borrar Huellas para Proteger los Glifos",
        description: "Esparces gravilla férrea desviando los todoterrenos hacia el abismo del cañón.",
        consequence: "Los mercenarios acaban en un callejón sin salida y los dibujos milenarios quedan intactos.",
        rewardText: "Escudo del Guardián y +250 Monedas",
        badge: "CUSTODIO DEL DESIERTO"
      }
    }
  },
  11: {
    en: {
      location: "Machu Picchu, Peru",
      era: "September 1929",
      title: "Threshold of the Sacred Valley",
      context: "At the summit of the Intihuatana hitching stone, the final gateway into Paititi opens.",
      situation: "The Commander of the Obsidian Brotherhood has taken your faithful guide hostage, demanding the 11 seals.",
      choiceA: {
        title: "Save the Guide & Surrender the Golden Disk",
        description: "Cast aside pride to preserve an innocent life, leaping through the misty precipice.",
        consequence: "Your guide embraces you in gratitude and sings the ancient Quechua chant that unbars the sun sanctum.",
        rewardText: "Supreme Shield & +2 Hint Lenses",
        badge: "HONOR & COMPASSION"
      },
      choiceB: {
        title: "Spring an Engineering Trap on the Commander",
        description: "Trip the stone counterweight mechanism under the Intihuatana, collapsing stairs beneath invaders.",
        consequence: "The commander plunges into the mist; you secure all 11 seals and the adversary's entire treasury.",
        rewardText: "+600 Gold Coins & Eternal Glory",
        badge: "SUPREME STRATAGEM"
      }
    },
    es: {
      location: "Machu Picchu, Perú",
      era: "Septiembre 1929",
      title: "El Umbral del Valle Sagrado",
      context: "En la cumbre del Intihuatana se abre el último paso hacia la ciudad perdida de Paititi.",
      situation: "El Comandante de la Hermandad tomó como rehén a tu fiel guía andino pidiendo los 11 Sellos.",
      choiceA: {
        title: "Salvar al Guía y Ceder el Disco Solar",
        description: "Renuncias al orgullo para salvar una vida humana inocente arrojándote a la niebla.",
        consequence: "El guía te abraza entre lágrimas y canta el antiguo salmo que abre las puertas de oro.",
        rewardText: "Escudo Supremo y +2 Lupas de Pista",
        badge: "HUMANIDAD Y HONOR"
      },
      choiceB: {
        title: "Tender una Trampa al Comandante",
        description: "Accionas el contrapeso del Intihuatana derrumbando la escalera de piedra bajo los invasores.",
        consequence: "El enemigo cae al abismo mientras aseguras los sellos y el botín de la expedición contraria.",
        rewardText: "+600 Monedas de Oro y Gloria Eterna",
        badge: "ESTRATEGIA SUPREMA"
      }
    }
  }
};

export function getLocalizedDilemma(dilemma: ExpeditionDilemma, lang: Language): ExpeditionDilemma {
  if (lang === 'it') return dilemma;
  const loc = DILEMMAS_I18N[dilemma.stageNumber]?.[lang as 'en' | 'es'];
  if (!loc) return dilemma;
  return {
    ...dilemma,
    location: loc.location,
    era: loc.era,
    title: loc.title,
    context: loc.context,
    situation: loc.situation,
    choices: [
      {
        ...dilemma.choices[0],
        title: loc.choiceA.title,
        description: loc.choiceA.description,
        consequence: loc.choiceA.consequence,
        rewardText: loc.choiceA.rewardText,
        badge: loc.choiceA.badge,
      },
      {
        ...dilemma.choices[1],
        title: loc.choiceB.title,
        description: loc.choiceB.description,
        consequence: loc.choiceB.consequence,
        rewardText: loc.choiceB.rewardText,
        badge: loc.choiceB.badge,
      },
    ]
  };
}

// =========================================================================
// LEVEL TITLE LOCALIZATION
// =========================================================================
export function getLocalizedLevelTitle(id: number, stageNumber: number, levelInStage: number, lang: Language, baseTitle: string): string {
  if (lang === 'it') return baseTitle;
  
  if (id === 120) {
    return lang === 'en' ? "The Sanctuary of Inti: The Golden Sun Chamber" : "El Santuario de Inti: La Cámara del Sol de Oro";
  }
  
  if (id % 10 === 0) {
    return lang === 'en' ? `Stage ${stageNumber} Milestone: The ${stageNumber}th Seal` : `Hito de la Etapa ${stageNumber}: El ${stageNumber}° Sello`;
  }
  
  const SUB_AREAS_EN = [
    "Site Entrance & Initial Reconnaissance",
    "Chamber of Rock Inscriptions",
    "Hydraulic Vault Mechanism",
    "Well of Sacred Carvings",
    "Corridor of Stellar Declination",
    "Walled Crevice with Bronze Seal",
    "Foundation of Astronomical Alignments",
    "Gallery of Ciphered Bas-Reliefs",
    "Antechamber to the Main Altar",
  ];
  
  const SUB_AREAS_ES = [
    "Entrada del Yacimiento y Primer Reconocimiento",
    "Cámara de Inscripciones Rupestres",
    "Mecanismo Hidráulico de la Bóveda",
    "Pozo de Relieves Sagrados",
    "Corredor de Declinación Estelar",
    "Hendidura Tapiada con Sello de Bronce",
    "Cimiento de Alineaciones Astronómicas",
    "Galería de Bajorrelieves Cifrados",
    "Antecámara del Altar Principal",
  ];
  
  if (id === 1) return lang === 'en' ? "Oxford Night Study" : "Estudio Nocturno de Oxford";
  if (id === 2) return lang === 'en' ? "Bodleian Library Archives" : "Archivo de la Biblioteca Bodleiana";
  if (id === 3) return lang === 'en' ? "Archaeometry Laboratory" : "Laboratorio de Arqueometría";
  if (id === 4) return lang === 'en' ? "Crypt of St. Peter-in-the-East" : "Cripta de St. Peter-in-the-East";
  if (id === 5) return lang === 'en' ? "Numismatic Cabinet" : "Gabinete Numismático";
  if (id === 6) return lang === 'en' ? "RGS Cartographic Atelier" : "Taller Cartográfico de la RGS";
  if (id === 7) return lang === 'en' ? "Armored Manuscript Vault" : "Cámara Acorazada de Manuscritos";
  if (id === 8) return lang === 'en' ? "Underground Aqueduct of St. Giles" : "Acueducto Subterráneo de St. Giles";
  if (id === 9) return lang === 'en' ? "Professor Bellini's Secret Atrium" : "Atrio Secreto del Profesor Bellini";
  if (id === 10) return lang === 'en' ? "The Lopez Wax Seal: Flight to Dover" : "El Sello de Lacre de López: Huida a Dover";

  const subIdx = levelInStage - 1;
  if (lang === 'en') {
    return SUB_AREAS_EN[subIdx] || `Excavation Sector ${levelInStage}`;
  } else {
    return SUB_AREAS_ES[subIdx] || `Sector ${levelInStage} de la Excavación`;
  }
}

export { getLocalizedDifference, getLocalizedDifferences } from './clues';
