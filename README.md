# I Misteri di Paititi 1928

A mobile hidden-object adventure. You play an archaeologist in 1928 investigating the
disappearance of Professor Bellini, working through 120 photographic scenes across 12
stages — Oxford, Venice, Crete, Alexandria, Luxor, Siwa, Petra, Iguazú, Nazca, Machu
Picchu and finally Paititi. Each scene hides eight objects, and each one is found by
deciphering a written riddle from Bellini's field journal rather than by sweeping the
image.

Fully localised in Italian, English and Spanish, including all 960 riddles.

## Running it

Node 22 or newer is required (`.nvmrc` pins it). jsdom, used by the component tests,
depends on an undici that calls a Node API added in 22.10.

```bash
npm install
npm run dev          # Vite dev server
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck (`tsc -b`) then production build |
| `npm run preview` | Serve the production build locally |
| `npm test` | Data-integrity and gameplay-rule tests (vitest) |
| `npm run test:watch` | Same, in watch mode |
| `npm run lint` | oxlint |
| `npm run cap:build` | Build and sync the Capacitor native projects |
| `npm run cap:android` | Open the Android project in Android Studio |

The game is **mobile-only by design**: there is no keyboard navigation, and browser zoom
is disabled on purpose because the investigation stage implements its own pinch-to-zoom.

## How it fits together

```
src/
  App.tsx              Top-level state: which modals are open, equipment perks, flags
  hooks/
    useGameSession.ts  A run: current level, lives, timer, found clues, power-ups
    useEconomy.ts      Coins, inventory, medals, consular visas
    useModalManager.ts Modal open/close state
    usePWA.ts          Install prompt and offline status
  components/
    HiddenObjectView.tsx  The investigation stage: pan, zoom, magnifier, tap handling
    …                     ~38 other screens and modals
  data/
    levelScenes.ts     Level id -> scene photograph (one line per level)
    levelCluesData.ts  The 960 clues: coordinates, riddles, journal lore
    levelRegistry.ts   Assembles the 120 Level objects from the above
    avatarData.ts      Outfits, accessories, 8 equipment slots, set bonuses
  utils/
    hitDetection.ts    Pure tap-resolution rules (tolerance bands, neighbour caps)
    saveData.ts        Which keys make up a portable save, and the save-code codec
    motion.ts          Reduced-motion preference
    audio.ts           Procedural Web Audio synthesiser (no audio files ship)
  i18n/
    locales/           UI strings per language
    clues/             The 960 clues translated, split by stage
```

### Adding a level

1. Drop the scene photograph in `public/levels/` as WebP.
2. Add one line to `LEVEL_SCENES` in `src/data/levelScenes.ts`.
3. Add its eight clues to `LEVEL_CLUES_REGISTRY` in `src/data/levelCluesData.ts`.
4. Add the translations to `src/i18n/clues/stageN.ts`.
5. Run `npm test` — the suite checks the id is registered, the file exists, the clues are
   unique and unambiguous, and nothing is left untranslated.

### Images

Scene photographs are WebP at q82, 1200x896. Resolution is deliberate: finding small
objects while pinched in is the core mechanic, so the plates are not downscaled further.
To re-run a conversion pass:

```bash
npm i --no-save sharp
node scripts/convert_images_webp.mjs --delete
```

## Tests

The clue registry is the project's most valuable asset — 120 levels x 8 hand-authored
riddles with hand-calibrated coordinates — so the suite asserts the invariants a careless
recalibration would break: every level present and unique, every clue reachable and
unambiguous on every one of the 120 real scenes, every asset referenced actually shipped,
every clue translated in all three languages, and every persisted key covered by the
backup.

CI runs lint, typecheck and tests on every push and pull request, and the deploy workflow
runs them before building.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages (`base: '/differenze-game/'`). The
Android app is a Capacitor wrapper over the same `dist/`.

A service worker precaches the shell and all 120 scene plates (~28 MB) for offline play;
players can trigger the download from Settings.

## Saves

Progress lives in `localStorage`. Settings offers an export to `.json` and a copyable
"journal code", and both restore paths go through `utils/saveData.ts`, which is the single
source of truth for which keys travel.

`utils/saveSync.ts` adds optional cross-device sync on top of the same payload. It is
**inert until a backend is configured**: with `VITE_SYNC_ENDPOINT` unset the transport is
null, every sync short-circuits, and the game behaves exactly as it does on local storage
alone. See `.env.example`.

To activate, point `VITE_SYNC_ENDPOINT` at a slot supporting two verbs on `/<playerId>`:

| Verb | Behaviour |
| --- | --- |
| `GET` | 200 with the stored payload, or 404 when the slot is empty |
| `PUT` | stores the JSON body |

Any backend serving those works — a Supabase edge function, a Firebase callable behind a
rewrite, or a small server of your own. The player id is a readable code (`ABCD-2345-WXYZ`,
with no characters that are easy to misread aloud) that travels in the backup, so entering
it on a second device joins both to one save.

Conflicts are never merged, because a half-merged save is worse than either side. The more
advanced payload wins whole, ranked by completed levels first, then discovered clues, then
coins, with the more recent export breaking an exact tie.

## Gameplay analytics

The difficulty curve across 120 levels is currently derived from arithmetic, not from play.
`utils/analytics.ts` exists to replace that with evidence: it records how each level went so
you can see which ones stall players and which they abandon.

Three constraints, in order:

1. **No identifier is sent.** Not a player id, not a device id, nothing that links two
   events to one person. Timestamps are rounded to the hour. That answers "which level is
   too hard" and "where do people stop"; it cannot answer per-player retention, and that is
   the deliberate trade.
2. **Opt-in, off by default**, so the privacy policy's guarantee that nothing is
   transmitted stays true for anyone who does not turn it on.
3. **Inert unless `VITE_TELEMETRY_ENDPOINT` (or a sync endpoint) is set** — without one the
   toggle does not appear and no queue is written.

Events are queued in `localStorage` (bounded at 200, oldest dropped first) and flushed in
batches of 25 at the end of a level. A failed send keeps its batch for the next attempt.
Switching the toggle off discards whatever is still queued.

Enabling this changes what the app does with data, so **PRIVACY_POLICY.md section 5.1
describes it and must stay accurate** if you change what is collected.

## Rewarded adverts

`utils/rewards.ts` offers a power-up in exchange for watching a short video. Like sync, it
is **inert until configured**: with no `VITE_ADMOB_REWARDED_ID` and no Capacitor plugin the
provider resolves to null, `RewardOfferPanel` renders nothing, and no ad SDK is loaded.

The model is deliberate. This is a slow observation game, so there are no interstitials and
nothing is paywalled: an advert that interrupted a search would break the only thing the
game asks of the player. Every offer is a power-up that can also be bought with coins, and
watching is capped at five per day with three minutes between them, so it stays a helping
hand rather than a grind loop.

The daily count is stored device-locally on purpose — if it travelled in the save,
restoring an older backup would reset the day's allowance.

To activate, see `.env.example`.

## Licence

Proprietary. All rights reserved.
