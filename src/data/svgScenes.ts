// Generated procedural high-resolution vector scenes for all 12 stages
import type { Difference } from '../types/game';

export function generateStageScene(stageNumber: number, _levelInStage: number, version: 'A' | 'B'): string {
  const isA = version === 'A';
  const s = Math.max(1, Math.min(12, stageNumber));
  switch (s) {
    case 1: return isA ? generateStage1SceneA() : generateStage1SceneB();
    case 2: return isA ? generateStage2SceneA() : generateStage2SceneB();
    case 3: return isA ? generateStage3SceneA() : generateStage3SceneB();
    case 4: return isA ? generateStage4SceneA() : generateStage4SceneB();
    case 5: return isA ? generateStage5SceneA() : generateStage5SceneB();
    case 6: return isA ? generateStage6SceneA() : generateStage6SceneB();
    case 7: return isA ? generateStage7SceneA() : generateStage7SceneB();
    case 8: return isA ? generateStage8SceneA() : generateStage8SceneB();
    case 9: return isA ? generateStage9SceneA() : generateStage9SceneB();
    case 10: return isA ? generateStage10SceneA() : generateStage10SceneB();
    case 11: return isA ? generateStage11SceneA() : generateStage11SceneB();
    case 12: return isA ? generateStage12SceneA() : generateStage12SceneB();
    default: return generateStage1SceneA();
  }
}

function generateStage1SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140c07;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2a1b12" />
      <stop offset="100%" stop-color="#140c07" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a3525" />
      <stop offset="100%" stop-color="#26150b" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4a3525" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#26150b" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4a3525" stroke="#f59e0b" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#26150b" stroke="#d97706" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#140c07"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f59e0b" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#26150b" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#f59e0b"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#f59e0b" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#f59e0b" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#d97706" stroke="#f59e0b" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#26150b" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#4a3525" stroke="#f59e0b" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#f59e0b" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage1SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140c07;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2a1b12" />
      <stop offset="100%" stop-color="#140c07" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a3525" />
      <stop offset="100%" stop-color="#26150b" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4a3525" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#26150b" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4a3525" stroke="#f59e0b" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#26150b" stroke="#d97706" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#2a1b12" stroke="#d97706" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#f59e0b"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f59e0b" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#26150b" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#f59e0b" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#d97706" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#26150b" stroke="#f59e0b" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#4a3525" stroke="#f59e0b" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#d97706" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage2SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#0f0d0b;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b18" />
      <stop offset="100%" stop-color="#0f0d0b" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3d3835" />
      <stop offset="100%" stop-color="#211d1a" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a8a29e" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#78716c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#3d3835" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#211d1a" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#3d3835" stroke="#a8a29e" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#211d1a" stroke="#78716c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#a8a29e" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#0f0d0b"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#a8a29e" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#211d1a" stroke="#a8a29e" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#a8a29e"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#a8a29e" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#a8a29e" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#a8a29e" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#78716c" stroke="#a8a29e" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#211d1a" stroke="#a8a29e" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#3d3835" stroke="#a8a29e" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#a8a29e" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage2SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#0f0d0b;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b18" />
      <stop offset="100%" stop-color="#0f0d0b" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3d3835" />
      <stop offset="100%" stop-color="#211d1a" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a8a29e" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#78716c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#3d3835" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#211d1a" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#3d3835" stroke="#a8a29e" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#211d1a" stroke="#78716c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#1e1b18" stroke="#78716c" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#a8a29e"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#a8a29e" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#211d1a" stroke="#a8a29e" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#a8a29e" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#78716c" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#211d1a" stroke="#a8a29e" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#3d3835" stroke="#a8a29e" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#78716c" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#a8a29e" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage3SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#0d0b14;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b1924" />
      <stop offset="100%" stop-color="#0d0b14" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d2540" />
      <stop offset="100%" stop-color="#1a1426" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#6d28d9" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#2d2540" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#1a1426" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#2d2540" stroke="#8b5cf6" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#1a1426" stroke="#6d28d9" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#8b5cf6" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#0d0b14"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#1a1426" stroke="#8b5cf6" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#8b5cf6"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#8b5cf6" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#8b5cf6" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#8b5cf6" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#6d28d9" stroke="#8b5cf6" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#1a1426" stroke="#8b5cf6" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#2d2540" stroke="#8b5cf6" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#8b5cf6" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage3SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#0d0b14;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b1924" />
      <stop offset="100%" stop-color="#0d0b14" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d2540" />
      <stop offset="100%" stop-color="#1a1426" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#6d28d9" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#2d2540" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#1a1426" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#2d2540" stroke="#8b5cf6" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#1a1426" stroke="#6d28d9" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#1b1924" stroke="#6d28d9" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#8b5cf6"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#1a1426" stroke="#8b5cf6" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#8b5cf6" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#6d28d9" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#1a1426" stroke="#8b5cf6" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#2d2540" stroke="#8b5cf6" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#6d28d9" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#8b5cf6" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage4SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140a06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e1c14" />
      <stop offset="100%" stop-color="#140a06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5c3322" />
      <stop offset="100%" stop-color="#3d1f12" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#c2410c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#5c3322" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#3d1f12" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#5c3322" stroke="#ea580c" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#3d1f12" stroke="#c2410c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#140a06"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#ea580c" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#3d1f12" stroke="#ea580c" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#ea580c"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#ea580c" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#ea580c" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#c2410c" stroke="#ea580c" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#3d1f12" stroke="#ea580c" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#5c3322" stroke="#ea580c" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#ea580c" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage4SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140a06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e1c14" />
      <stop offset="100%" stop-color="#140a06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5c3322" />
      <stop offset="100%" stop-color="#3d1f12" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#c2410c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#5c3322" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#3d1f12" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#5c3322" stroke="#ea580c" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#3d1f12" stroke="#c2410c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#2e1c14" stroke="#c2410c" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#ea580c"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#ea580c" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#3d1f12" stroke="#ea580c" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#ea580c" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#c2410c" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#3d1f12" stroke="#ea580c" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#5c3322" stroke="#ea580c" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#c2410c" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage5SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#071219;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f232e" />
      <stop offset="100%" stop-color="#071219" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b3a4b" />
      <stop offset="100%" stop-color="#0d212d" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0891b2" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#1b3a4b" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#0d212d" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#1b3a4b" stroke="#06b6d4" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#0d212d" stroke="#0891b2" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#06b6d4" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#071219"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#06b6d4" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#0d212d" stroke="#06b6d4" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#06b6d4"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#06b6d4" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#06b6d4" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#06b6d4" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#0891b2" stroke="#06b6d4" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#0d212d" stroke="#06b6d4" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#1b3a4b" stroke="#06b6d4" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#06b6d4" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage5SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#071219;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f232e" />
      <stop offset="100%" stop-color="#071219" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b3a4b" />
      <stop offset="100%" stop-color="#0d212d" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0891b2" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#1b3a4b" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#0d212d" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#1b3a4b" stroke="#06b6d4" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#0d212d" stroke="#0891b2" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#0f232e" stroke="#0891b2" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#06b6d4"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#06b6d4" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#0d212d" stroke="#06b6d4" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#06b6d4" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#0891b2" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#0d212d" stroke="#06b6d4" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#1b3a4b" stroke="#06b6d4" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#0891b2" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#06b6d4" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage6SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#171005;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e230f" />
      <stop offset="100%" stop-color="#171005" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4d3a19" />
      <stop offset="100%" stop-color="#2b200b" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#eab308" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#ca8a04" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4d3a19" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#2b200b" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4d3a19" stroke="#eab308" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#2b200b" stroke="#ca8a04" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#171005"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#eab308" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#2b200b" stroke="#eab308" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#eab308"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#eab308" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#eab308" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#ca8a04" stroke="#eab308" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#2b200b" stroke="#eab308" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#4d3a19" stroke="#eab308" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#eab308" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage6SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#171005;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e230f" />
      <stop offset="100%" stop-color="#171005" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4d3a19" />
      <stop offset="100%" stop-color="#2b200b" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#eab308" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#ca8a04" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4d3a19" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#2b200b" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4d3a19" stroke="#eab308" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#2b200b" stroke="#ca8a04" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#2e230f" stroke="#ca8a04" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#eab308"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#eab308" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#2b200b" stroke="#eab308" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#eab308" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#ca8a04" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#2b200b" stroke="#eab308" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#4d3a19" stroke="#eab308" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#ca8a04" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage7SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140e06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2b1f0f" />
      <stop offset="100%" stop-color="#140e06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#523a1a" />
      <stop offset="100%" stop-color="#33220e" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#c2410c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#523a1a" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#33220e" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#523a1a" stroke="#f97316" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#33220e" stroke="#c2410c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#f97316" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#140e06"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f97316" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#33220e" stroke="#f97316" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#f97316"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#f97316" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#f97316" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#f97316" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#c2410c" stroke="#f97316" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#33220e" stroke="#f97316" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#523a1a" stroke="#f97316" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#f97316" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage7SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140e06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2b1f0f" />
      <stop offset="100%" stop-color="#140e06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#523a1a" />
      <stop offset="100%" stop-color="#33220e" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#c2410c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#523a1a" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#33220e" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#523a1a" stroke="#f97316" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#33220e" stroke="#c2410c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#2b1f0f" stroke="#c2410c" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#f97316"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f97316" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#33220e" stroke="#f97316" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#f97316" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#c2410c" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#33220e" stroke="#f97316" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#523a1a" stroke="#f97316" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#c2410c" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#f97316" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage8SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140807;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#301815" />
      <stop offset="100%" stop-color="#140807" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5c2b25" />
      <stop offset="100%" stop-color="#381713" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#be123c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#5c2b25" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#381713" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#5c2b25" stroke="#f43f5e" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#381713" stroke="#be123c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#f43f5e" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#140807"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f43f5e" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#381713" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#f43f5e"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#f43f5e" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#f43f5e" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#f43f5e" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#be123c" stroke="#f43f5e" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#381713" stroke="#f43f5e" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#5c2b25" stroke="#f43f5e" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#f43f5e" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage8SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140807;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#301815" />
      <stop offset="100%" stop-color="#140807" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5c2b25" />
      <stop offset="100%" stop-color="#381713" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#be123c" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#5c2b25" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#381713" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#5c2b25" stroke="#f43f5e" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#381713" stroke="#be123c" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#301815" stroke="#be123c" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#f43f5e"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f43f5e" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#381713" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#f43f5e" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#be123c" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#381713" stroke="#f43f5e" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#5c2b25" stroke="#f43f5e" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#be123c" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#f43f5e" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage9SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#05120a;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0e2417" />
      <stop offset="100%" stop-color="#05120a" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b4d2e" />
      <stop offset="100%" stop-color="#0d2b19" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#047857" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#1b4d2e" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#0d2b19" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#1b4d2e" stroke="#10b981" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#0d2b19" stroke="#047857" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#05120a"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#10b981" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#0d2b19" stroke="#10b981" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#10b981"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#10b981" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#10b981" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#047857" stroke="#10b981" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#0d2b19" stroke="#10b981" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#1b4d2e" stroke="#10b981" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#10b981" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage9SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#05120a;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0e2417" />
      <stop offset="100%" stop-color="#05120a" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b4d2e" />
      <stop offset="100%" stop-color="#0d2b19" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#047857" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#1b4d2e" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#0d2b19" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#1b4d2e" stroke="#10b981" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#0d2b19" stroke="#047857" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#0e2417" stroke="#047857" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#10b981"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#10b981" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#0d2b19" stroke="#10b981" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#10b981" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#047857" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#0d2b19" stroke="#10b981" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#1b4d2e" stroke="#10b981" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#047857" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage10SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#120b06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#261a12" />
      <stop offset="100%" stop-color="#120b06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a3221" />
      <stop offset="100%" stop-color="#291b10" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#eab308" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4a3221" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#291b10" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4a3221" stroke="#eab308" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#291b10" stroke="#b45309" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#120b06"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#eab308" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#291b10" stroke="#eab308" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#eab308"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#eab308" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#eab308" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#b45309" stroke="#eab308" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#291b10" stroke="#eab308" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#4a3221" stroke="#eab308" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#eab308" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage10SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#120b06;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#261a12" />
      <stop offset="100%" stop-color="#120b06" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a3221" />
      <stop offset="100%" stop-color="#291b10" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#eab308" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#4a3221" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#291b10" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#4a3221" stroke="#eab308" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#291b10" stroke="#b45309" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#261a12" stroke="#b45309" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#eab308"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#eab308" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#291b10" stroke="#eab308" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#eab308" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#291b10" stroke="#eab308" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#4a3221" stroke="#eab308" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#eab308" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage11SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#08120d;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#13211a" />
      <stop offset="100%" stop-color="#08120d" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#294235" />
      <stop offset="100%" stop-color="#14261d" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#059669" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#294235" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#14261d" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#294235" stroke="#34d399" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#14261d" stroke="#059669" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#34d399" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#08120d"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#34d399" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#14261d" stroke="#34d399" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#34d399"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#34d399" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#34d399" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#34d399" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#059669" stroke="#34d399" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#14261d" stroke="#34d399" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#294235" stroke="#34d399" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#34d399" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage11SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#08120d;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#13211a" />
      <stop offset="100%" stop-color="#08120d" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#294235" />
      <stop offset="100%" stop-color="#14261d" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#059669" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#294235" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#14261d" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#294235" stroke="#34d399" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#14261d" stroke="#059669" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#13211a" stroke="#059669" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#34d399"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#34d399" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#14261d" stroke="#34d399" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#34d399" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#059669" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#14261d" stroke="#34d399" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#294235" stroke="#34d399" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#059669" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#34d399" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage12SceneA(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140e02;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e2105" />
      <stop offset="100%" stop-color="#140e02" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#523c09" />
      <stop offset="100%" stop-color="#332505" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#523c09" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#332505" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#523c09" stroke="#fbbf24" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#332505" stroke="#d97706" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
         <polygon points="0,-18 14,14 -14,14" fill="#140e02"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#fbbf24" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="-24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#332505" stroke="#fbbf24" stroke-width="2"/>
    <circle cx="0" cy="-6" r="14" fill="#fbbf24"/>
         <path d="M-10,12 L10,12 L0,22 Z" fill="#ffffff"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-26" y="-12" width="52" height="24" fill="#fbbf24" rx="2"/>
         <circle cx="0" cy="0" r="6" fill="#ffffff"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-32 28,14 -28,14" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="-2" r="8" fill="#ef4444"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <circle cx="0" cy="0" r="22" fill="#fbbf24" stroke="#ffffff" stroke-width="3"/>
         <line x1="-12" y1="-12" x2="12" y2="12" stroke="#ffffff" stroke-width="3"/>
         <line x1="12" y1="-12" x2="-12" y2="12" stroke="#ffffff" stroke-width="3"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-24" y="-20" width="48" height="42" rx="4" fill="#d97706" stroke="#fbbf24" stroke-width="2"/>
         <rect x="-18" y="-8" width="36" height="14" fill="#ffffff" opacity="0.9"/>
         <circle cx="0" cy="14" r="4" fill="#f59e0b"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#332505" stroke="#fbbf24" stroke-width="2"/>
         <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
         <line x1="-22" y1="0" x2="-8" y2="0" stroke="#ffffff" stroke-width="2"/>
         <line x1="8" y1="0" x2="22" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <rect x="-26" y="-18" width="52" height="38" rx="4" fill="#523c09" stroke="#fbbf24" stroke-width="2"/>
         <line x1="-26" y1="-2" x2="26" y2="-2" stroke="#f59e0b" stroke-width="2"/>
         <circle cx="0" cy="-2" r="5" fill="#ef4444"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="18" fill="#fbbf24" stroke="#ffffff" stroke-width="2.5"/>
         <polygon points="0,-10 8,8 -8,8" fill="#1e293b"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateStage12SceneB(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#140e02;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e2105" />
      <stop offset="100%" stop-color="#140e02" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#523c09" />
      <stop offset="100%" stop-color="#332505" />
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Architectural Chamber Background -->
  <rect x="0" y="0" width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Masonry Walls & Columns -->
  <rect x="0" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <rect x="640" y="0" width="160" height="600" fill="url(#wallGrad)" opacity="0.9" />
  <polygon points="160,0 640,0 580,240 220,240" fill="#523c09" opacity="0.6" />
  <polygon points="220,240 580,240 700,600 100,600" fill="#332505" opacity="0.75" />

  <!-- Central Altar / Desk Structure -->
  <rect x="280" y="380" width="240" height="150" rx="8" fill="#523c09" stroke="#fbbf24" stroke-width="2" />
  <rect x="260" y="360" width="280" height="30" rx="4" fill="#332505" stroke="#d97706" stroke-width="1.5" />

  <!-- Ambient Light Cone -->
  <circle cx="400" cy="180" r="140" fill="url(#torchGlow)" opacity="0.45" />

  <!-- DIFF 1: Top-Left Architectural Feature (x: 18%, y: 22% => 144, 132) -->
  <g transform="translate(144, 132)">
    <circle cx="0" cy="0" r="28" fill="#2e2105" stroke="#d97706" stroke-width="2"/>
         <circle cx="0" cy="0" r="14" fill="#fbbf24"/>
  </g>

  <!-- DIFF 2: Top-Center Clock / Sun Crest (x: 50%, y: 16% => 400, 96) -->
  <g transform="translate(400, 96)">
    <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#fbbf24" stroke-width="4"/>
    <line x1="0" y1="0" x2="0" y2="24" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
         <line x1="0" y1="0" x2="-18" y2="0" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
         <circle cx="0" cy="0" r="5" fill="#10b981"/>
  </g>

  <!-- DIFF 3: Top-Right Wall Crest / Torch (x: 82%, y: 22% => 656, 132) -->
  <g transform="translate(656, 132)">
    <rect x="-24" y="-30" width="48" height="60" rx="6" fill="#332505" stroke="#fbbf24" stroke-width="2"/>
    <circle cx="0" cy="-6" r="8" fill="#ef4444"/>
         <line x1="-12" y1="14" x2="12" y2="14" stroke="#fbbf24" stroke-width="3"/>
  </g>

  <!-- DIFF 4: Mid-Left Shelf Item / Tablet (x: 20%, y: 48% => 160, 288) -->
  <g transform="translate(160, 288)">
    <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#3b82f6"/>
         <line x1="-15" y1="0" x2="15" y2="0" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 5: Mid-Center Central Relic / Manuscript (x: 50%, y: 46% => 400, 276) -->
  <g transform="translate(400, 276)">
    <ellipse cx="0" cy="18" rx="45" ry="12" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="-6" r="24" fill="#d97706" stroke="#ffffff" stroke-width="2"/>
         <polygon points="-8,-14 8,-14 0,4" fill="#facc15"/>
  </g>

  <!-- DIFF 6: Mid-Right Wall Lantern / Shield (x: 80%, y: 48% => 640, 288) -->
  <g transform="translate(640, 288)">
    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#332505" stroke="#fbbf24" stroke-width="3"/>
         <circle cx="0" cy="0" r="8" fill="#10b981"/>
  </g>

  <!-- DIFF 7: Bottom-Left Urn / Chest (x: 22%, y: 78% => 176, 468) -->
  <g transform="translate(176, 468)">
    <ellipse cx="0" cy="24" rx="30" ry="10" fill="rgba(0,0,0,0.6)"/>
    <ellipse cx="0" cy="0" rx="22" ry="24" fill="#523c09" stroke="#fbbf24" stroke-width="2"/>
         <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#ffffff" stroke-width="2"/>
         <line x1="-14" y1="8" x2="14" y2="8" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- DIFF 8: Bottom-Center Altar Drawer / Relief (x: 50%, y: 82% => 400, 492) -->
  <g transform="translate(400, 492)">
    <rect x="-35" y="-8" width="70" height="22" rx="4" fill="#d97706" stroke="#ffffff" stroke-width="2"/>
         <rect x="-10" y="-4" width="20" height="8" fill="#1e293b"/>
  </g>

  <!-- DIFF 9: Bottom-Right Expedition Box (x: 82%, y: 78% => 656, 468) -->
  <g transform="translate(656, 468)">
    <ellipse cx="0" cy="22" rx="32" ry="10" fill="rgba(0,0,0,0.6)"/>
    <polygon points="0,-24 24,14 -24,14" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
         <circle cx="0" cy="0" r="6" fill="#10b981"/>
  </g>

  <!-- DIFF 10: Special Focal Point on Right Wall (x: 68%, y: 34% => 544, 204) -->
  <g transform="translate(544, 204)">
    <circle cx="0" cy="0" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
         <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffffff" stroke-width="2.5"/>
         <line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2.5"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function getStageDifferences(stageNumber: number, levelInStage: number): Difference[] {
  const s = Math.max(1, Math.min(12, stageNumber));
  if (s === 1) {
    return [
      { id: 's1_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "L'Astrolabio sulla Scrivania", loreClue: "In A l'astrolabio è orientato verso nord; in B è spostato." },
      { id: 's1_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "L'Orologio a Pendolo", loreClue: "Le lancette indicano le 3:00 in A e le 6:00 in B." },
      { id: 's1_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Mappamondo d'Epoca", loreClue: "L'asse del globo terrestre ha un'inclinazione differente." },
      { id: 's1_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "Il Libro sulla Mensola", loreClue: "Uno spazio vuoto tra i tomi antichi della libreria." },
      { id: 's1_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "Il Sigillo di Ceralacca", loreClue: "Il sigillo rosso è impresso sulla pergamena in A ma non in B." },
      { id: 's1_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Lente d'Ingrandimento", loreClue: "Il manico della lente è in ottone in A e in ebano in B." },
      { id: 's1_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Piuma nel Calamaio", loreClue: "La piuma d'oca è intinta nel calamaio in A." },
      { id: 's1_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Quadro Botanico", loreClue: "La cornice del quadro è dorata con intagli in A." },
      { id: 's1_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "La Chiave del Baule", loreClue: "Una chiave d'ottone è inserita nella serratura del baule in A." },
      { id: 's1_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Tazza di Tè Fumante", loreClue: "La tazza emette vapore caldo in A." },
    ];
  }
  if (s === 2) {
    return [
      { id: 's2_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Teschio della Cripta", loreClue: "Un teschio nella nicchia ha un'orbita intagliata con una gemma." },
      { id: 's2_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "La Torcia a Muro", loreClue: "La fiamma della torcia proietta una luce più alta in A." },
      { id: 's2_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "L'Incisione Latina", loreClue: "Un'iscrizione 'Memento Mori' è incisa sull'architrave in A." },
      { id: 's2_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "Il Piccone da Scavo", loreClue: "Il manico del piccone è appoggiato contro il muro in B." },
      { id: 's2_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Lampada a Olio", loreClue: "La lanterna è accesa con vetro smerigliato in A." },
      { id: 's2_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Catenella di Ferro", loreClue: "Un anello di ferro della catena è spezzato in B." },
      { id: 's2_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Fiala Misteriosa", loreClue: "Una fiala di reagente chimico è appoggiata sul ripiano." },
      { id: 's2_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Calice di Pietra", loreClue: "Il calice rituale di pietra ha un bordo decorato in A." },
      { id: 's2_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "La Crepa sull'Arco", loreClue: "Una fessura a zig-zag attraversa il blocco di tufo in B." },
      { id: 's2_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "Il Telo da Spedizione", loreClue: "Il telo di canapa copre un cumulo di reperti in A." },
    ];
  }
  if (s === 3) {
    return [
      { id: 's3_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "L'Alambicco di Vetro", loreClue: "Il liquido nell'ampolla è verde smeraldo in A e viola in B." },
      { id: 's3_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "Il Mortaio di Bronzo", loreClue: "Il pestello di bronzo è posizionato nel mortaio in A." },
      { id: 's3_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "La Carta Celeste", loreClue: "La mappa stellare mostra la costellazione di Orione in A." },
      { id: 's3_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Boccetta di Mercurio", loreClue: "Il livello del mercurio nella provetta è a metà in B." },
      { id: 's3_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Candela di Cera Vergine", loreClue: "La cera della candela cola lungo il candeliere d'argento." },
      { id: 's3_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Compasso Proporzionale", loreClue: "I bracci del compasso geometrico sono aperti a 45 gradi in A." },
      { id: 's3_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "Il Taccuino di Formule", loreClue: "Il taccuino cifrato è aperto con una pagina illustrata." },
      { id: 's3_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "L'Occhio della Provvidenza", loreClue: "Il triangolo alchemico è dipinto sulla cappa del camino." },
      { id: 's3_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "La Clessidra ad Acqua", loreClue: "La sabbia della clessidra è quasi tutta scesa in B." },
      { id: 's3_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "Il Prisma Ottico", loreClue: "Il prisma scompone la luce in uno spettro d'iride in A." },
    ];
  }
  if (s === 4) {
    return [
      { id: 's4_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "L'Ascia Bipenne (Labrys)", loreClue: "L'ascia sacra a doppia lama è fissata sull'altare in A." },
      { id: 's4_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "L'Affresco del Toro", loreClue: "Le corna del toro sacro sono dipinte con lamina dorata in A." },
      { id: 's4_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Vaso con Spirale", loreClue: "L'anfora ha un motivo a polpo marino in A e a onde in B." },
      { id: 's4_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Colonna a Rocchetto", loreClue: "Il capitello della colonna minoica ha un anello nero in A." },
      { id: 's4_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "Il Gomitolo di Filo", loreClue: "Il filo di lana rossa di Arianna scende lungo il corridoio in A." },
      { id: 's4_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Braciere di Bronzo", loreClue: "Le braci del tripode ardono vive in A." },
      { id: 's4_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Tavoletta in Lineare B", loreClue: "La tavoletta d'argilla presenta incisioni cuneiformi intatte." },
      { id: 's4_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Motivo a Meandro", loreClue: "Il meandro greco sulla parete è continuo in A." },
      { id: 's4_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Pugnale Miceneo", loreClue: "Il pomo del pugnale è intarsiato con lapislazzuli." },
      { id: 's4_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Lucerna di Terracotta", loreClue: "L'orlo della lucerna d'olio ha due becchi invece di uno." },
    ];
  }
  if (s === 5) {
    return [
      { id: 's5_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Rotolo di Papiro Sigillato", loreClue: "Il papiro è custodito in un cilindro di piombo protettivo." },
      { id: 's5_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "La Medusa Luminosa", loreClue: "Una medusa bioluminescente fluttua vicino al soffitto in A." },
      { id: 's5_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Busto di Tolomeo", loreClue: "Il naso della statua di marmo è intatto in A." },
      { id: 's5_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Sfera Armillare Marina", loreClue: "Gli anelli metallici della sfera astronomica riflettono la luce." },
      { id: 's5_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Cassa di Bronzo", loreClue: "Il coperchio del forziere è socchiuso con monete visibili." },
      { id: 's5_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Banco di Pesci", loreClue: "Un piccolo gruppo di pesci argentei nuota verso sinistra in A." },
      { id: 's5_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "Il Mosaico di Iside", loreClue: "I tasselli del mosaico sul pavimento formano la stella di Sirio." },
      { id: 's5_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "La Lanterna Palombaro", loreClue: "La lanterna stagna proietta un fascio di luce azzurra." },
      { id: 's5_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Corallo Rosso", loreClue: "Un ramo di corallo prezioso cresce sul capitello corinzio." },
      { id: 's5_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Tavoletta Astronomica", loreClue: "La stele greca mostra i cicli lunari scolpiti nella pietra." },
    ];
  }
  if (s === 6) {
    return [
      { id: 's6_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Lo Scarabeo di Lapislazzuli", loreClue: "Lo scarabeo sacro pettorale ha ali spiegate in A." },
      { id: 's6_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "La Maschera del Faraone", loreClue: "Il nemes a righe blu e oro ha l'ureo eretto in A." },
      { id: 's6_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Vaso Canopo di Anubi", loreClue: "Il coperchio con la testa di sciacallo è orientato verso il varco." },
      { id: 's6_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "L'Occhio di Horus (Udjat)", loreClue: "L'occhio mistico è dipinto con la lacrima di falco intatta." },
      { id: 's6_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Baracca Solare", loreClue: "Il modellino della barca sacra ha i remi disposti ai lati." },
      { id: 's6_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Flagello e Bastone Pastorale", loreClue: "I simboli di comando reale sono incrociati sul petto in A." },
      { id: 's6_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "Il Fiore di Loto Dipinto", loreClue: "Un bocciolo di loto blu è posato sulla lastra d'alabastro." },
      { id: 's6_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "L'Ankh Dorato", loreClue: "La chiave della vita in oro massiccio brilla nella teca." },
      { id: 's6_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Collare Usekh", loreClue: "I ranghi di perle del collare sono completi in A." },
      { id: 's6_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "Il Cartiglio Reale", loreClue: "Il cartiglio geroglifico contiene il nome del sommo sacerdote." },
    ];
  }
  if (s === 7) {
    return [
      { id: 's7_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "La Foglia di Palma", loreClue: "Un ramo di palma da dattero getta ombra sul porticato in A." },
      { id: 's7_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "La Brocca d'Argilla", loreClue: "La brocca in terracotta ha due manici decorati con corda in A." },
      { id: 's7_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Tappeto Berbero", loreClue: "I rombi geometrici del tappeto di lana sono cuciti in rosso in A." },
      { id: 's7_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Duna all'Orizzonte", loreClue: "La cresta della duna di sabbia ha una pendenza diversa in B." },
      { id: 's7_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "L'Amuleto d'Ammon", loreClue: "Le corna del dio ariete sono intagliate nel corindone in A." },
      { id: 's7_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Fascio di Datteri", loreClue: "Un grappolo di datteri dorati è appeso alla trave di legno." },
      { id: 's7_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Lampada a Sospensione", loreClue: "La lanterna traforata crea riflessi a stella sulle pareti." },
      { id: 's7_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Canestro di Vimini", loreClue: "Il cesto di vimini è colmo di granaglie dell'oasi in A." },
      { id: 's7_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "La Tenda Nomade", loreClue: "La corda di canapa fissa la tela della tenda al picchetto." },
      { id: 's7_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "Lo Specchio di Bronzo", loreClue: "Il disco di bronzo riflette il raggio di sole delle dune." },
    ];
  }
  if (s === 8) {
    return [
      { id: 's8_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "L'Urna Funeraria del Frontone", loreClue: "La grande urna sommitale del Tesoro è intatta in A." },
      { id: 's8_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "Il Capitello Nabateo", loreClue: "I rilievi a corno dell'architettura nabatea sono visibili in A." },
      { id: 's8_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "Il Falco del Deserto", loreClue: "Un falco pellegrino è appollaiato sulla sporgenza rocciosa in A." },
      { id: 's8_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Nicchia Votiva", loreClue: "Una statuetta votiva in calcare è collocata nella nicchia." },
      { id: 's8_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "Il Braciere d'Incenso", loreClue: "Il fumo aromatico dell'incenso di boswellia sale dal tripode." },
      { id: 's8_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Guarnigione Romana", loreClue: "Uno scudo rotondo in bronzo è appoggiato all'ingresso del Siq." },
      { id: 's8_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Roccia Venata di Arenaria", loreClue: "Le striature porpora e ocra della roccia viva sono accentuate in A." },
      { id: 's8_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "La Borraccia di Cuoio", loreClue: "La borraccia in cuoio è fissata alla sella dell'esploratore." },
      { id: 's8_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Canale Idraulico", loreClue: "Il canale di scolo intagliato nella pietra porta acqua alla vasca." },
      { id: 's8_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "L'Arco del Siq", loreClue: "L'arco d'ingresso alla gola naturale proietta una netta ombra." },
    ];
  }
  if (s === 9) {
    return [
      { id: 's9_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Tucano sulla Liana", loreClue: "Il tucano toco ha il becco arancione brillante aperto in A." },
      { id: 's9_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "L'Arcobaleno sulle Cascate", loreClue: "Un doppio arcobaleno sorge dai flutti nebulizzati della gola in A." },
      { id: 's9_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "La Felce Arborea", loreClue: "Le fronde della grande felce gigante si curvano sul sentiero." },
      { id: 's9_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Piroga Indigena", loreClue: "La piroga di legno intagliato è ormeggiata alla riva in A." },
      { id: 's9_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "Il Fiore di Passiflora", loreClue: "La passiflora selvatica mostra i suoi filamenti viola in A." },
      { id: 's9_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Cascata Superiore", loreClue: "Il salto d'acqua centrale è diviso in due getti in B." },
      { id: 's9_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Farfalla Morfo Blu", loreClue: "Una farfalla dalle ali blu cangianti è posata sulla roccia bagnata." },
      { id: 's9_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Ponte di Corde", loreClue: "I corrimano del ponte sospeso oscillano sopra il baratro." },
      { id: 's9_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Teschio di Giaguaro", loreClue: "Un amuleto tribale in osso di felino è appeso al totem Guaraní." },
      { id: 's9_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Cesta di Radici", loreClue: "Il cesto intrecciato con radici contiene erbe officinali andine." },
    ];
  }
  if (s === 10) {
    return [
      { id: 's10_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Becco del Colibrì", loreClue: "Il becco del colibrì gigante punta esattamente verso la stella polare." },
      { id: 's10_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "La Zampa del Ragno Sacro", loreClue: "L'ottava zampa del ragno è allungata secondo il canone geometrico." },
      { id: 's10_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "La Spirale della Scimmia", loreClue: "La spirale della coda caudale della scimmia ha 4 volute in A." },
      { id: 's10_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "Il Treppiede Topografico", loreClue: "Il teodolite dei pionieri misura la triangolazione delle valli." },
      { id: 's10_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Ceramica Policroma", loreClue: "Il vaso a doppio beccuccio con ponte è intatto sul basamento." },
      { id: 's10_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "Il Tumulo di Pietre", loreClue: "Il tumulo di riferimento astronomico è alto tre strati in A." },
      { id: 's10_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Linea Traiettoria Solstiziale", loreClue: "Il solco tracciato nella terra scura rivela il calcare bianco." },
      { id: 's10_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "La Bussola Geodetica", loreClue: "La scala graduata della bussola ad ago lungo è visibile." },
      { id: 's10_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Vento del Deserto", loreClue: "Una traccia di sabbia ventata copre parzialmente l'incisione." },
      { id: 's10_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Stella d'Allineamento", loreClue: "La pietra angolare dell'osservatorio è sormontata da quarzo." },
    ];
  }
  if (s === 11) {
    return [
      { id: 's11_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Masso dell'Intihuatana", loreClue: "Il pilastro che 'lega il sole' proietta un'ombra precisa sull'altare." },
      { id: 's11_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "Il Condor sulle Vette", loreClue: "Un condor delle Ande plana a grandi ali aperte sopra il picco." },
      { id: 's11_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "La Muratura Poligonale", loreClue: "Il blocco a dodici angoli combacia perfettamente senza malta." },
      { id: 's11_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "La Terrazza a Gradoni", loreClue: "Le terrazze agricole sono coltivate con mais dorato in A." },
      { id: 's11_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "Il Lama con Bardatura", loreClue: "Il lama sacro indossa una campana d'argento e briglie tessute." },
      { id: 's11_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Finestra Trapezoidale", loreClue: "La tipica finestra antisismica incaica inquadra Huayna Picchu." },
      { id: 's11_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "Il Canale delle Fontane Sacre", loreClue: "L'acqua sorgiva scorre limpida nel canale di granito cesellato." },
      { id: 's11_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "La Picca con Piume di Macao", loreClue: "Lo stendardo reale con piume multicolori è piantato sul torrione." },
      { id: 's11_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "Il Tamburo di Pietra", loreClue: "La torre circolare del Tempio del Sole ha la roccia fusa alla base." },
      { id: 's11_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "La Foschia sulle Gole", loreClue: "I banchi di nebbia mattutina lasciano scoperte le rovine in A." },
    ];
  }
  if (s === 12) {
    return [
      { id: 's12_l' + levelInStage + '_d1', x: 18, y: 22, radius: 6.5, name: "Il Grande Disco Solare d'Oro", loreClue: "Il disco del sole di Inti irradia 12 raggi fiammeggianti in A." },
      { id: 's12_l' + levelInStage + '_d2', x: 50, y: 16, radius: 6.5, name: "L'Idolo di Giada Imperiale", loreClue: "L'idolo di giada smeraldo tiene in mano le tavolette del patto." },
      { id: 's12_l' + levelInStage + '_d3', x: 82, y: 22, radius: 6.5, name: "La Cascata d'Oro Fuso", loreClue: "Il rivolo d'oro liquido alimenta il bacino sacro del santuario." },
      { id: 's12_l' + levelInStage + '_d4', x: 20, y: 48, radius: 6.5, name: "Lo Scettro di Viracocha", loreClue: "Il pastorale cerimoniale è sormontato da un condor dagli occhi di rubino." },
      { id: 's12_l' + levelInStage + '_d5', x: 50, y: 46, radius: 6.5, name: "La Maschera Funeraria Sican", loreClue: "La maschera d'oro laminato ha pendenti alle orecchie in A." },
      { id: 's12_l' + levelInStage + '_d6', x: 80, y: 48, radius: 6.5, name: "La Cassa dei Tesori Reali", loreClue: "Il forziere imperiale trabocca di lingotti e calici rituali." },
      { id: 's12_l' + levelInStage + '_d7', x: 22, y: 78, radius: 6.5, name: "La Ragnatela d'Oro Filato", loreClue: "I fili d'oro finissimo vibrano con la frequenza della camera acustica." },
      { id: 's12_l' + levelInStage + '_d8', x: 50, y: 82, radius: 6.5, name: "Il Trono di Granito e Pirite", loreClue: "Lo schienale del trono è intagliato con la mappa delle città segrete." },
      { id: 's12_l' + levelInStage + '_d9', x: 82, y: 78, radius: 6.5, name: "I Cristalli Risonanti", loreClue: "I quarzi giganti emettono un chiarore luminescente pulsante." },
      { id: 's12_l' + levelInStage + '_d10', x: 68, y: 34, radius: 6.5, name: "Il Sigillo del Tempio Perduto", loreClue: "Il portale finale della città dell'oro è spalancato in A." },
    ];
  }
  return [
    { id: 'd1', x: 18, y: 22, radius: 6.5, name: "Differenza 1", loreClue: "Indizio archeologico" },
    { id: 'd2', x: 50, y: 16, radius: 6.5, name: "Differenza 2", loreClue: "Indizio archeologico" },
    { id: 'd3', x: 82, y: 22, radius: 6.5, name: "Differenza 3", loreClue: "Indizio archeologico" },
    { id: 'd4', x: 20, y: 48, radius: 6.5, name: "Differenza 4", loreClue: "Indizio archeologico" },
    { id: 'd5', x: 50, y: 46, radius: 6.5, name: "Differenza 5", loreClue: "Indizio archeologico" },
    { id: 'd6', x: 80, y: 48, radius: 6.5, name: "Differenza 6", loreClue: "Indizio archeologico" },
    { id: 'd7', x: 22, y: 78, radius: 6.5, name: "Differenza 7", loreClue: "Indizio archeologico" },
    { id: 'd8', x: 50, y: 82, radius: 6.5, name: "Differenza 8", loreClue: "Indizio archeologico" },
    { id: 'd9', x: 82, y: 78, radius: 6.5, name: "Differenza 9", loreClue: "Indizio archeologico" },
    { id: 'd10', x: 68, y: 34, radius: 6.5, name: "Differenza 10", loreClue: "Indizio archeologico" },
  ];
}
