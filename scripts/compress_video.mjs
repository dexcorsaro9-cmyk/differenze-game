#!/usr/bin/env node
/**
 * Re-encodes the prologue cutscene for mobile delivery.
 *
 * The source was 720x1280 at 7.1 Mbps, which is roughly five times what a 20-second
 * portrait clip needs on a phone. CRF 26 was chosen by measuring SSIM against the
 * original (0.980) and comparing crops frame by frame; the map's ink lines and the moss
 * texture survive intact.
 *
 *   npm i --no-save ffmpeg-static
 *   node scripts/compress_video.mjs public/videos/prologue_paititi.mp4
 */
import { execFileSync } from 'node:child_process';
import { statSync, renameSync } from 'node:fs';
import ffmpeg from 'ffmpeg-static';

const input = process.argv[2];
if (!input) {
  console.error('usage: node scripts/compress_video.mjs <file.mp4>');
  process.exit(1);
}

const CRF = process.argv[3] || '26';
const tmp = `${input}.tmp.mp4`;
const before = statSync(input).size;

execFileSync(ffmpeg, [
  '-y', '-v', 'error',
  '-i', input,
  '-c:v', 'libx264',
  '-crf', CRF,
  '-preset', 'slow',
  '-profile:v', 'high',
  '-pix_fmt', 'yuv420p',
  '-c:a', 'aac',
  '-b:a', '96k',
  // lets playback start before the whole file has arrived
  '-movflags', '+faststart',
  tmp,
], { stdio: 'inherit' });

renameSync(tmp, input);
const after = statSync(input).size;
const mb = (n) => (n / 1048576).toFixed(2);
console.log(`${input}: ${mb(before)} MB -> ${mb(after)} MB (-${(100 - (after / before) * 100).toFixed(1)}%) at CRF ${CRF}`);
