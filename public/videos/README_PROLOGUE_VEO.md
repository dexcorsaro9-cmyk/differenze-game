# Scheda di Regia & Prompt Ufficiali per Google Veo / Flow (Video Prologo)

Questa guida contiene i prompt cinematografici pronti per la generazione del video prologo con **Google Veo** (o **Google Flow / VideoFX** in Google Labs, Runway Gen-3, o Sora) per il gioco **"Paititi: Il Segreto della Città Perduta"**.

---

## Specifiche Tecniche Video
* **Formato / Risoluzione:** Verticale Mobile **9:16** (1080x1920 oppure 720x1280)
* **Frame Rate:** 30fps o 60fps
* **Durata Complessiva Ideale:** 12 - 15 secondi (divisa in 3 clip da 4-5 secondi)
* **Nome File di Destinazione:**
  * Nel Web / PWA: `public/videos/prologue_paititi.mp4`
  * Nel Progetto Unity: `Assets/Videos/prologue_paititi.mp4`

*Appena il file `prologue_paititi.mp4` viene inserito nella cartella `public/videos/`, il componente `PrologueCutsceneModal.tsx` lo rileverà e lo riprodurrà automaticamente a schermo intero prima del tutorial.*

---

## 🎬 Prompt Cinematografici per Scene (Google Veo)

### Scena 1: La Spedizione Verso le Ande (Inizio)
* **Inquadratura:** Drone shot lento che scende tra le forre delle valli andine, nebbia fitta che si dissolve rivelando cascate monumentali e le rovine coperte di vegetazione tropicale. Luce del sole al crepuscolo con fasci dorati (god rays).
* **Prompt per Google Veo:**
  > `Cinematic aerial drone shot, 9:16 vertical mobile aspect ratio, photorealistic 8k, descending through misty Andean canyons and rushing waterfalls toward a lost ancient stone civilization overgrown with lush tropical jungle. Warm sunset crepuscular god rays breaking through clouds, floating golden dust particles, cinematic color grading, Unreal Engine 5 aesthetic, photorealistic atmosphere, highly detailed, slow smooth camera push-in.`

---

### Scena 2: Il Taccuino di Spedizione & L'Astrolabio (Mistero)
* **Inquadratura:** Primo piano macro su un antico altare di pietra intagliata con muschio. Un taccuino di cuoio aperto con mappe e disegni di glifi antichi, una lanterna a petrolio accesa in ottone che emana luce ambrata calda e un antico astrolabio dorato.
* **Prompt per Google Veo:**
  > `Cinematic close-up macro shot, 9:16 vertical format, an antique leather expedition journal lying open on a mossy carved Incan stone pedestal. Highly detailed hand-drawn maps and glyph sketches on aged parchment. Beside it, a glowing vintage brass oil lantern casting warm amber flickering light, and an ancient golden astrolabe with precise engravings. Realistic depth of field, 8k textures, photorealistic cinematic lighting, gentle camera orbit.`

---

### Scena 3 (Variante Esploratrice): Dr. Samira Cruz sul Campo
* **Inquadratura:** Figura intera a mezzo busto della Dott.ssa Samira Cruz (fine anni 20, capelli scuri con perlina d'ambra, camicia in lino salvia, taccuino e bussola) che solleva lo sguardo verso il tempio segreto con espressione fiera e determinata.
* **Prompt per Google Veo:**
  > `Cinematic slow motion medium shot, 9:16 vertical ratio. An original female archaeologist and epigraphist Dr. Samira, late 20s, Mediterranean descent, dark wavy hair neatly styled in a field updo with amber bead. Wearing sage-green linen field shirt with rolled sleeves, holding her field notebook and pencil. She looks up toward the camera with an intelligent, determined smile. Majestic ancient sun temple ruins blurred in the background with golden rim lighting. Photorealistic 3D AAA video game cinematic quality.`

---

### Scena 3 (Variante Esploratore): Mateo Solano sul Campo
* **Inquadratura:** Mezzo busto di Mateo Solano (primi 30, barba curata, camicia terracotta da lavoro, tracolla porta-mappe e bussola da rilevatore) che consulta un rilievo topografico prima di incamminarsi con decisione.
* **Prompt per Google Veo:**
  > `Cinematic slow motion medium shot, 9:16 vertical ratio. An original male field cartographer Mateo, early 30s, Italian-Latin descent, observant sharp eyes, trimmed neat short beard. Wearing a terracotta work shirt, canvas strap with map cylinder, holding a brass surveying instrument. Confident and focused expression as he prepares to lead the expedition. Atmospheric ancient stone temple background with jungle vines and sun rays. Photorealistic 3D AAA video game cinematic quality.`

---

## Istruzioni di Montaggio Rapido
1. Genera le 3 clip con Google Veo o VideoFX.
2. Uniscile con una transizione a dissolvenza incrociata (0.5s) e aggiungi un sottofondo orchestrale andino con flauto di pan e tamburi cerimoniali.
3. Esporta il video con codec H.264 o H.265 come `prologue_paititi.mp4` e copialo in `differenze-game/public/videos/`.
