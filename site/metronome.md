---
layout: page
title: Metronome
description: A full-featured metronome with configurable sounds, time signatures, accent patterns, and a built-in training mode.
permalink: /metronome
---

The metronome is the core feature of KLGA. It provides an accurate audible click to help you practise at any tempo, in any time signature, with configurable sounds and a built-in training mode that gradually removes beats to strengthen your internal timing.

## Main Screen

The Metronome tab shows:

- **BPM dial** — a circular control in the centre. Drag it to adjust tempo.
- **Play / Pause button** — starts or stops the click.
- **Beat indicator** — a row of dots below the dial showing which beat is currently playing.
- **Meter picker** — a segmented bar at the top with two buttons:
  - **Beats** — opens the Sound & Training setup sheet.
  - **Music icon** — opens the Notes & Subdivisions setup sheet.

Navigating to either setup sheet will stop playback automatically so you can make changes safely.

## BPM Control

- Range: **20 to 300 BPM**.
- Drag the dial clockwise to increase, counter-clockwise to decrease.
- If the metronome is already playing, BPM changes take effect immediately.
- The Notes & Subdivisions screen shows the classical **tempo marking** for the current BPM (e.g. Allegro for 120–156 BPM).

| Marking | BPM Range | Feel |
|---------|-----------|------|
| Largo | 40–60 | Very slow |
| Adagio | 66–76 | Slow and expressive |
| Andante | 76–96 | Walking pace |
| Moderato | 96–112 | Comfortable mid-tempo |
| Allegro | 120–156 | Fast and bright |
| Vivace | 156–176 | Lively and driving |
| Presto | 168–200 | Very fast |
| Prestissimo | 200+ | Extremely fast |

See [Tempo Markings]({{ '/reference/tempo-markings' | relative_url }}) for tips on using these in practice.

## Time Signatures

Open the **Notes & Subdivisions** sheet (music icon) and tap the **Time Signature** card to open the selector dialog.

- **Top number** (beats per bar): 1 to 16.
- **Bottom number** (note value): 1, 2, 4, 8, or 16.
- Use the + and − buttons to adjust each value.
- The dialog shows the **feel** of the selected signature (e.g. "Simple quadruple" for 4/4, "Odd time" for 7/8).
- Tap **Accept** to apply. The accent pattern resets to the first available option for the new meter.

See [Time Signatures & Accent Patterns]({{ '/reference/time-signatures' | relative_url }}) for a full reference of supported meters and groupings.

## Accent Patterns

Below the time signature on the Notes & Subdivisions screen, you'll see **accent pattern chips** specific to the current meter. Examples:

- 4/4: "Straight Quarters" or "8th Subdivision"
- 5/8: "3 + 2" or "2 + 3"
- 7/8: "2 + 2 + 3", "3 + 2 + 2", or "2 + 3 + 2"

Selecting a pattern changes how the metronome accents beats and how the beat indicator groups the dots visually. The first beat of each group receives an accent sound.

## Subdivisions

The Notes & Subdivisions screen also shows **subdivision chips**:

| Subdivision | Clicks per beat |
|-------------|----------------|
| Quarter | 1 |
| Eighth | 2 |
| Triplet | 3 |
| Sixteenth | 4 |

Select the subdivision that matches the rhythmic density you want to practise.

## Sound Selection

Open the **Sound & Training** sheet (Beats button) to choose sounds. There are two expandable pickers:

- **Accent Sound** — the click played on accented beats (first beat of each group).
- **Main Sound** — the click played on all other beats.

Tap a sound name to preview it and select it.

### Available Sounds

**Classical** (when Classical Mode is on):

| Sound | Description |
|-------|-------------|
| Metronome 1 | Traditional metronome tick |
| Metronome 2 | Softer traditional tick |

**Modern** (when Classical Mode is off):

| Sound | Description |
|-------|-------------|
| Bass | Deep kick |
| Claves | Wooden clave hit |
| Hi-hat | Closed hi-hat |
| Snare | Snare drum |
| Sticks | Drumstick click |
| Woodblock High | High-pitched wood block |
| Stick | Clean stick tap |
| Stick Secondary | Lighter stick tap |
| Stick Tertiary | Softer stick tap |
| Stick Fourth | Gentlest stick tap |
| Mute | Silent click (useful with gradual muting) |
| Tick | Short digital tick |

## Classical Mode

Toggle **Classical Mode** on the Sound & Training screen. When enabled:

- The sound picker shows only classical sounds (Metronome 1 and 2).
- The app automatically sets **Main = Metronome 2** and **Accent = Metronome 1** to mimic a traditional mechanical metronome where the accent tick is slightly louder and brighter.

Turn it off to access the full modern sound library.

## Gradual Muting (Training Mode)

This is a practice tool that trains your internal sense of timing by progressively removing audible clicks until you maintain the rhythm on your own.

### How to use it

1. Open the **Sound & Training** sheet.
2. Toggle **Gradual Mode** on.
3. Adjust the **Muting %** slider (10–90). Lower values = faster fade; higher values = slower fade.
4. Go back to the main metronome screen and press **Play**.

### What happens during playback

**Phase 1 — Volume Ramp-Down:** Measures alternate between full volume and reduced volume. Each reduced measure is quieter than the last until the reduced volume reaches zero.

**Phase 2 — Random Beat Muting:** Individual beats within each measure are randomly silenced. The number of muted beats increases over time until all beats are silent.

**Completion:** Once all beats are muted, the training is complete. You were keeping time on your own!

### Important notes

- Stopping or pausing **resets** the progression from the beginning.
- The muting % slider can only be adjusted while the metronome is stopped.
- Works with any time signature.

See [Gradual Random Muting]({{ '/reference/gradual-muting' | relative_url }}) for the full explanation.

## Beat Indicator

The row of dots below the BPM dial provides a visual pulse:

- One dot per beat in the current bar.
- While playing, the **current beat** lights up in red with a glow effect.
- When an accent pattern with multiple groups is active (e.g. 3 + 2 for 5/8), dots are visually separated into clusters with the first dot of each group slightly emphasized.
- When stopped, all dots are neutral.

## iOS Live Activity

On iPhone, while the metronome is playing:

- The current **BPM** and playback state appear on the **Dynamic Island** and **Lock Screen**.
- Tap the Live Activity to toggle playback without opening the app.

This feature is iOS-only and requires iOS 16.1 or later.

## Practice Time Tracking

While the metronome is running, your practice time is tracked automatically in the background. When you open the Practice Calendar, accumulated metronome time is synced as practice sessions. You don't need to do anything — just play and your practice is logged.
