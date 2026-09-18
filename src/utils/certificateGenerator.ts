import { EXPLORERS, ALL_OUTFITS, type ExplorerProfile } from '../data/avatarData';
import { assetUrl } from './assetUrl';

export interface CertificateData {
  profile: ExplorerProfile;
  completedLevelsCount: number;
  totalStars: number;
  relicsCount: number;
  totalTimeFormatted: string;
  accuracyPct: number;
  endingId?: 'academy' | 'secret_archive' | 'sacred_jungle' | null;
  endingTitle?: string;
  language: 'it' | 'en' | 'es';
}

/**
 * Loads an image with CORS anonymous handling.
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

/**
 * Renders the official 1928 Victorian Consular Expedition Diploma onto an HTML Canvas (1600 x 1130).
 */
export async function renderCertificateCanvas(data: CertificateData): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1130;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Cannot get 2d context');

  const W = canvas.width;
  const H = canvas.height;

  // 1. Parchment Base Gradient
  const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 100, W / 2, H / 2, W * 0.7);
  bgGrad.addColorStop(0, '#fbf6ea');
  bgGrad.addColorStop(0.5, '#f5ebd4');
  bgGrad.addColorStop(0.85, '#e6d3b3');
  bgGrad.addColorStop(1, '#cbaf8a');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Subtle vintage vignette edge burn
  const edgeVignette = ctx.createLinearGradient(0, 0, 0, H);
  edgeVignette.addColorStop(0, 'rgba(80, 45, 20, 0.18)');
  edgeVignette.addColorStop(0.08, 'transparent');
  edgeVignette.addColorStop(0.92, 'transparent');
  edgeVignette.addColorStop(1, 'rgba(80, 45, 20, 0.28)');
  ctx.fillStyle = edgeVignette;
  ctx.fillRect(0, 0, W, H);

  // 2. Ornate Gilded Brass Outer Frame
  ctx.save();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#5a3416';
  ctx.strokeRect(30, 30, W - 60, H - 60);

  ctx.lineWidth = 4;
  ctx.strokeStyle = '#d4af37';
  ctx.strokeRect(42, 42, W - 84, H - 84);

  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 4]);
  ctx.strokeStyle = '#8b5a2b';
  ctx.strokeRect(52, 52, W - 104, H - 104);
  ctx.setLineDash([]);
  ctx.restore();

  // Corner Rosettes (Consular 8-Point Stars)
  const drawCornerRosette = (cx: number, cy: number) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#fef08a';
    for (let i = 0; i < 8; i++) {
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.moveTo(-3, 0);
      ctx.lineTo(0, 14);
      ctx.lineTo(3, 0);
      ctx.fill();
    }
    ctx.restore();
  };
  drawCornerRosette(52, 52);
  drawCornerRosette(W - 52, 52);
  drawCornerRosette(52, H - 52);
  drawCornerRosette(W - 52, H - 52);

  // 3. Top Consular Header & Ribbon
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = '#6e4420';
  ctx.fillText('ROYAL GEOGRAPHICAL SOCIETY • CONSULAR DISPATCH 1928', W / 2, 95);

  ctx.font = 'bold 15px "Courier New", monospace';
  ctx.fillStyle = '#8b5a2b';
  ctx.fillText('EXPEDITIONARY HIGH ARCHIVE — CERTIFICATE OF ARCHEOLOGICAL EXCELLENCE', W / 2, 122);

  // Main Heading
  ctx.font = '900 48px "Georgia", "Times New Roman", serif';
  ctx.fillStyle = '#2d1607';
  ctx.fillText('DIPLOMA D’ONORE & GRAN MERITO', W / 2, 175);

  ctx.font = 'italic bold 24px "Georgia", serif';
  ctx.fillStyle = '#7a4515';
  ctx.fillText('PER LA RISOLUZIONE INTEGRALE DELLA SPEDIZIONE DI PAITITI (ANNO 1928)', W / 2, 215);

  // Decorative Golden Ribbon Line
  const ribbonGrad = ctx.createLinearGradient(W * 0.15, 0, W * 0.85, 0);
  ribbonGrad.addColorStop(0, 'transparent');
  ribbonGrad.addColorStop(0.2, '#b45309');
  ribbonGrad.addColorStop(0.5, '#f59e0b');
  ribbonGrad.addColorStop(0.8, '#b45309');
  ribbonGrad.addColorStop(1, 'transparent');
  ctx.strokeStyle = ribbonGrad;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W * 0.15, 235);
  ctx.lineTo(W * 0.85, 235);
  ctx.stroke();

  // 4. Avatar Cameo Oval Portrait
  const cameoX = 240;
  const cameoY = 460;
  const cameoR = 125;

  ctx.save();
  // Outer Cameo Brass Ring
  ctx.beginPath();
  ctx.arc(cameoX, cameoY, cameoR + 10, 0, Math.PI * 2);
  ctx.fillStyle = '#3e200c';
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Clip Cameo Circle
  ctx.beginPath();
  ctx.arc(cameoX, cameoY, cameoR, 0, Math.PI * 2);
  ctx.clip();

  // Try loading active outfit or avatar portrait
  const explorer = EXPLORERS[data.profile.avatarId] || EXPLORERS.samira;
  const activeOutfit = ALL_OUTFITS.find((o) => o.id === data.profile.equippedOutfitId);
  const portraitUrl = assetUrl(activeOutfit?.image || explorer.portrait);

  try {
    const avatarImg = await loadImage(portraitUrl);
    ctx.drawImage(avatarImg, cameoX - cameoR, cameoY - cameoR, cameoR * 2, cameoR * 2);
  } catch {
    // Fallback if image fails to load
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cameoX - cameoR, cameoY - cameoR, cameoR * 2, cameoR * 2);
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.profile.avatarId.toUpperCase(), cameoX, cameoY);
  }
  ctx.restore();

  // Cameo Label Plate
  ctx.save();
  ctx.fillStyle = '#2e1808';
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  const plateW = 260;
  const plateH = 50;
  ctx.beginPath();
  ctx.roundRect(cameoX - plateW / 2, cameoY + cameoR + 20, plateW, plateH, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 20px "Georgia", serif';
  ctx.textAlign = 'center';
  ctx.fillText(data.profile.playerName || explorer.name, cameoX, cameoY + cameoR + 45);

  ctx.fillStyle = '#d97706';
  ctx.font = 'italic 13px "Georgia", serif';
  ctx.fillText(explorer.title, cameoX, cameoY + cameoR + 64);
  ctx.restore();

  // 5. Formal Inscription & Conferment Text
  const textLeft = 440;
  ctx.save();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  ctx.font = '22px "Georgia", serif';
  ctx.fillStyle = '#311b0e';
  const introText =
    data.language === 'en'
      ? `Be it officially recorded in the imperial archives that Explorer ${(data.profile.playerName || explorer.name).toUpperCase()} has brought the 1928 Fawcett expedition to glorious fruition across all 120 photographic plates.`
      : data.language === 'es'
      ? `Quede formalmente consignado en los archivos imperiales que el Operativo ${(data.profile.playerName || explorer.name).toUpperCase()} ha culminado con supremo honor los 120 capítulos fotográficos de la expedición andina.`
      : `Si attesta solennemente che l'Esploratore ${(data.profile.playerName || explorer.name).toUpperCase()} ha condotto a compimento con sommo onore e mirabile perizia tutti i 120 rilievi fotografici della spedizione andina.`;

  const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
    return currentY + lineHeight;
  };

  const nextY = wrapText(introText, textLeft, 270, 1050, 34);

  // 6. 4 Geodetic Telemetry Achievement Boxes
  const statBoxY = nextY + 25;
  const boxW = 250;
  const boxH = 110;
  const gap = 20;

  const stats = [
    {
      label: data.language === 'en' ? 'CHAPTERS SOLVED' : data.language === 'es' ? 'CAPÍTULOS RESUELTOS' : 'CAPITOLI RISOLTI',
      value: `${data.completedLevelsCount} / 120`,
      sub: '100% Completato',
      icon: '🏛️',
    },
    {
      label: data.language === 'en' ? 'GOLD STARS' : data.language === 'es' ? 'ESTRELLAS DE ORO' : 'STELLE D’ORO',
      value: `⭐ ${data.totalStars} / 360`,
      sub: 'Grado Archeologico',
      icon: '⭐',
    },
    {
      label: data.language === 'en' ? 'SACRED RELICS' : data.language === 'es' ? 'RELIQUIAS HALLADAS' : 'REPERTI STORICI',
      value: `🏺 ${data.relicsCount} / 30`,
      sub: 'Museo di Londra',
      icon: '🏺',
    },
    {
      label: data.language === 'en' ? 'PRECISION RATIO' : data.language === 'es' ? 'PRECISIÓN DE CAMPO' : 'PRECISIONE DI CAMPO',
      value: `🎯 ${data.accuracyPct}%`,
      sub: `Tempo: ${data.totalTimeFormatted}`,
      icon: '🎯',
    },
  ];

  stats.forEach((stat, idx) => {
    const bx = textLeft + idx * (boxW + gap);
    ctx.save();
    ctx.fillStyle = '#f3e8d2';
    ctx.strokeStyle = '#b47838';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(bx, statBoxY, boxW, boxH, 10);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 11px "Courier New", monospace';
    ctx.fillStyle = '#7a4214';
    ctx.fillText(stat.label, bx + 16, statBoxY + 28);

    ctx.font = 'bold 24px "Georgia", serif';
    ctx.fillStyle = '#2c1405';
    ctx.fillText(stat.value, bx + 16, statBoxY + 62);

    ctx.font = 'italic 12px "Georgia", serif';
    ctx.fillStyle = '#6e4420';
    ctx.fillText(stat.sub, bx + 16, statBoxY + 88);
    ctx.restore();
  });

  // 7. Saga Moral Ending Decree Banner
  const moralBannerY = statBoxY + boxH + 30;
  ctx.save();
  ctx.fillStyle = '#291407';
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(textLeft, moralBannerY, 1060, 110, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 13px "Courier New", monospace';
  ctx.fillText('DESTINO FINALE DI PAITITI & CONDOTTA ETICA ADOTTATA:', textLeft + 25, moralBannerY + 30);

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 22px "Georgia", serif';
  ctx.fillText(data.endingTitle || 'Custodi della Giungla Andina & del Santuario Sacro', textLeft + 25, moralBannerY + 62);

  ctx.fillStyle = '#e2d5c3';
  ctx.font = 'italic 14px "Georgia", serif';
  ctx.fillText('«Le ricchezze millenarie non saranno preda di saccheggiatori coloniali né di profanatori.»', textLeft + 25, moralBannerY + 88);
  ctx.restore();

  // 8. Lower Signatures & Official Wax Seal
  const footerY = 920;

  // Left: Consular Blue/Sepia Ink Rubber Stamp
  ctx.save();
  ctx.translate(260, footerY);
  ctx.rotate(-0.06);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(28, 55, 115, 0.85)';
  ctx.beginPath();
  ctx.arc(0, 0, 75, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(0, 0, 68, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.font = 'bold 12px "Courier New", monospace';
  ctx.fillStyle = 'rgba(28, 55, 115, 0.85)';
  ctx.textAlign = 'center';
  ctx.fillText('ROYAL GEOGRAPHICAL SOC.', 0, -25);
  ctx.font = 'bold 16px "Georgia", serif';
  ctx.fillText('PAITITI • 1928', 0, 0);
  ctx.font = 'bold 11px "Courier New", monospace';
  ctx.fillText('OMOLOGATO IN OXFORD', 0, 24);
  ctx.restore();

  // Center: 3D Crimson Red Wax Seal
  ctx.save();
  ctx.translate(W / 2, footerY);
  const sealGrad = ctx.createRadialGradient(0, -10, 10, 0, 0, 80);
  sealGrad.addColorStop(0, '#ef4444');
  sealGrad.addColorStop(0.4, '#b91c1c');
  sealGrad.addColorStop(0.8, '#7f1d1d');
  sealGrad.addColorStop(1, '#450a0a');

  ctx.fillStyle = sealGrad;
  ctx.beginPath();
  ctx.arc(0, 0, 70, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#fca5a5';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 58, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 12px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('SIGILLO CONSOLARE', 0, -22);
  ctx.font = '900 28px "Georgia", serif';
  ctx.fillText('1928', 0, 8);
  ctx.font = 'bold 11px "Courier New", monospace';
  ctx.fillText('IMPERIAL ARCHIVE', 0, 32);
  ctx.restore();

  // Right: Professor Bellini's Cursive Signature
  ctx.save();
  ctx.translate(W - 320, footerY);
  ctx.textAlign = 'center';

  // Signature line
  ctx.strokeStyle = '#5a3416';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-160, 20);
  ctx.lineTo(160, 20);
  ctx.stroke();

  // Cursive Ink text
  ctx.font = 'italic bold 32px "Brush Script MT", "Segoe Script", cursive, serif';
  ctx.fillStyle = '#1b120c';
  ctx.fillText('Prof. Alberto Bellini', 0, -5);

  ctx.font = 'bold 13px "Courier New", monospace';
  ctx.fillStyle = '#5a3416';
  ctx.fillText('CATTEDRA DI ARCHEOLOGIA COMPARATA', 0, 42);
  ctx.font = 'italic 11px "Georgia", serif';
  ctx.fillText('Università di Oxford — Anno 1928', 0, 60);
  ctx.restore();

  // Bottom Dispatch Serial
  ctx.save();
  ctx.textAlign = 'center';
  ctx.font = '10px "Courier New", monospace';
  ctx.fillStyle = '#7a4515';
  const nowStr = new Date().toISOString().slice(0, 10);
  ctx.fillText(`DOCUMENTO UFFICIALE N. 1928-FAWCETT-PAITITI • EMESSO IL ${nowStr} • ARCHIVIO CENTRALE DI STATO`, W / 2, H - 42);
  ctx.restore();

  return canvas;
}

/**
 * Triggers direct browser download of the certificate as a high-resolution PNG image.
 */
export async function downloadCertificatePng(data: CertificateData): Promise<void> {
  const canvas = await renderCertificateCanvas(data);
  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  const safeName = (data.profile.playerName || 'esploratore').toLowerCase().replace(/[^a-z0-9]/g, '_');
  a.download = `paititi_diploma_1928_${safeName}.png`;
  a.href = dataUrl;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
