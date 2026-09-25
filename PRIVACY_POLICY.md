# Privacy Policy — Paititi 1928: The Lost Expedition

**Effective Date:** September 25, 2026  
**Version:** 3.0  
**Publisher:** Santon Labs  
**Contact:** privacy@santonlabs.com | https://santonlabs.com  

---

## 1. Overview & Privacy-First Commitment

*Paititi 1928: The Lost Expedition* is an offline-first historical adventure puzzle game built with privacy by design. We believe that games should respect player privacy unconditionally.

> **Key Guarantee:** By default, we do **not** collect, store, transmit, or sell any personal data, advertising identifiers, location telemetry, or device usage records to any remote server or third party. Nothing leaves your device unless you explicitly switch on one of the two optional features described in Section 5, both of which are off until you turn them on.

---

## 2. Information We Do NOT Collect

We deliberately collect zero personal data:
- **No Personal Identifiers:** No names, email addresses, phone numbers, or account credentials required.
- **No Tracking Identifiers:** No Advertising ID (IDFA / AAID), device serial numbers, or hardware identifiers.
- **No Geolocation Data:** No access to GPS or IP-based location tracking.
- **No Camera / Microphone Access:** The application neither requests nor accesses media capture devices.
- **No Third-Party Analytics:** No Google Analytics, Firebase, or external telemetry SDKs are embedded.
- **No Profiling:** We never build a profile of a player, and the optional analytics in Section 5 deliberately carry no identifier that could link two events to the same person.

---

## 3. Local Data Storage

All progression, gameplay settings, and game state are saved strictly on the user's local device (using standard `localStorage` / sandboxed native storage):
- Chapter completion, star ratings, and discovery records.
- In-game inventory (gold coins, hints, relics, visas).
- Avatar customization and unlocked historical outfits.
- Settings preferences (volume, BGM, vibration, language: IT, EN, ES).

## 5. Optional Features That Transmit Data

Two features are switched **off by default**. Neither ever activates on its own, and the
guarantee above holds in full for any player who leaves them off.

### 5.1 Anonymous Field Log (gameplay analytics)

If you enable *Diario di Bordo Anonimo* in *Impostazioni*, the game sends a record of how
each level went, so we can tell which levels are too hard or too easy and adjust them.

**What is sent:** the level number, its difficulty band, whether it was a sealed
investigation, how long it took, how many mistakes you made, how many hints you used, and
the star rating. Plus a timestamp rounded to the hour.

**What is never sent:** no name, no email, no account, no device identifier, no advertising
identifier, no IP-based location, and — deliberately — **no player or session identifier of
any kind**. Two events from the same person cannot be linked together, by us or by anyone
reading the data. This means we can see that a level is hard; we cannot see what any
individual played.

**Control:** switch it off at any time in *Impostazioni*. Turning it off also discards
anything queued on your device that had not yet been sent.

### 5.2 Cross-Device Save Sync

If a sync backend is configured and you use it, your save file — the same content as the
manual JSON export — is stored under a code you choose or are given, so a second device can
restore it. The code is not tied to your identity; anyone with it can read that save slot,
so treat it like a password.

### 5.3 Rewarded Adverts

Should a future release enable optional rewarded video, that advert is supplied by a third
party which may use an advertising identifier under its own privacy policy. This section
will name the provider and link its policy before any such release ships. **No advert
network is active in the current build.**

---

## 6. Local Data Storage & User Control

### Data Portability and Right to Erasure
- **Export / Import:** Players can export a full, unencrypted JSON backup of their expedition state at any time via the *Impostazioni* menu.
- **Deletion:** Players can erase 100% of stored game data with a single tap on the *"Reset Spedizione"* button or by uninstalling the application.

---

## 4. Children's Privacy (COPPA & GDPR-K)

*Paititi 1928* is designed for family and educational engagement:
- Fully compliant with the **Children's Online Privacy Protection Act (COPPA)** and **Article 8 of the General Data Protection Regulation (GDPR)**.
- We do not knowingly solicit or collect data from children under 13 (or under 16 in the European Union).
- No behavioral ads, no loot-boxes, and no predatory third-party advertising.

---

## 5. Device Permissions

The native app asks only for essential permissions required for game features:
- `VIBRATE`: Tactile feedback for puzzle discoveries and interactive clues (can be disabled in Settings).
- `ACCESS_NETWORK_STATE`: PWA Service Worker caching verification for offline gameplay.

---

## 6. Distribution & Platforms

The game is distributed through official app marketplaces (Google Play Store, Apple App Store) and as a progressive web application (PWA). Platform operators manage download delivery and OS-level distribution in accordance with their respective privacy policies.

---

## 7. Inquiries

For any questions regarding this policy, contact:  
**Santon Labs Privacy Team**  
Email: `privacy@santonlabs.com`  
Web: [https://santonlabs.com](https://santonlabs.com)
