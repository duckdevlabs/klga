---
layout: page
title: Metronome
description: A full-featured metronome with configurable sounds, time signatures, accent patterns, precise BPM controls, and gradual muting practice mode.
permalink: /metronome
---

The metronome is the core feature of KLGA. It provides an accurate audible click to help you practise at any tempo, in any time signature, with configurable sounds and a built-in training mode that gradually removes beats to strengthen your internal timing.

## Main Screen

The Metronome tab shows:

- **BPM dial** — a circular control in the centre. Drag it to adjust tempo.
- **BPM picker** — tap the BPM number in the middle of the dial to choose an exact tempo.
- **Play / Pause button** — starts or stops the click.
- **Beat indicator** — a row of dots below the dial showing which beat is currently playing.
- **Meter picker** — a segmented bar at the top with two buttons:
  - **Beats** — opens the Sound & Training setup sheet.
  - **Music icon** — opens the Notes & Subdivisions setup sheet.

Navigating to either setup sheet stops playback automatically so you can make changes safely.

## BPM Control

- Drag range: **20 to 300 BPM**.
- Precise picker range: **30 to 250 BPM**.
- Drag the dial clockwise to increase, counter-clockwise to decrease.
- Tap the BPM number at the centre of the dial to open a scroll picker, then tap **Apply**.
- If the metronome is already playing, BPM changes take effect immediately.
- The Notes & Subdivisions screen shows the classical **tempo marking** for the current BPM.

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

See [Tempo Markings](#/reference/tempo-markings) for tips on using these in practice.

## Time Signatures

Open the **Notes & Subdivisions** sheet (music icon) and tap the **Time Signature** card to open the selector dialog.

- **Top number** (beats per bar): 1 to 16.
- **Bottom number** (note value): 1, 2, 4, 8, or 16.
- Use the + and - buttons to adjust each value.
- The dialog shows the **feel** of the selected signature, such as "Simple quadruple" for 4/4 or "Odd time" for 7/8.
- Tap **Accept** to apply. The accent pattern resets to the first available option for the new meter.

See [Time Signatures & Accent Patterns](#/reference/time-signatures) for a full reference of supported meters and groupings.

## Accent Patterns

Below the time signature on the Notes & Subdivisions screen, you will see **accent pattern chips** specific to the current meter. Examples:

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

- **Accent Sound** — the click played on accented beats, usually the first beat of each group.
- **Main Sound** — the click played on all other beats.

Tap a sound name to preview it and select it.

### Available Sounds

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
| Mute | Silent click, useful with gradual muting |
| Tick | Short digital tick |

## Gradual Muting

This is a practice tool that trains your internal sense of timing by progressively removing audible clicks until you maintain the rhythm on your own.

### How to use it

1. Open the **Sound & Training** sheet.
2. Toggle **Gradual Mode** on.
3. Adjust the **Muting %** slider from 10 to 90. Lower values fade faster; higher values fade more slowly.
4. Go back to the main metronome screen and press **Play**.

The muting slider is only interactive when Gradual Mode is enabled. Playback stops when you open the setup sheet, so changes are applied before the next start.

### What happens during playback

**Phase 1 — Volume Ramp-Down:** Measures alternate between full volume and reduced volume. Each reduced measure is quieter than the last until the reduced volume reaches zero.

**Phase 2 — Random Beat Muting:** Individual beats within each measure are randomly silenced. The number of muted beats increases over time until all beats are silent.

**Completion:** Once all beats are muted, the training is complete. You were keeping time on your own.

### Important notes

- Stopping or pausing resets the progression from the beginning.
- The muting percent can only be changed while the metronome is stopped.
- Gradual muting works with any time signature.

See [Gradual Random Muting](#/reference/gradual-muting) for the full explanation.

## Beat Indicator

The row of dots below the BPM dial provides a visual pulse:

- One dot per beat in the current bar.
- While playing, the **current beat** lights up in red with a glow effect.
- When an accent pattern with multiple groups is active, such as 3 + 2 for 5/8, dots are visually separated into clusters with the first dot of each group slightly emphasized.
- When stopped, all dots are neutral.

## iOS Live Activity

On iPhone, while the metronome is playing:

- The current **BPM** and playback state appear on the Dynamic Island and Lock Screen.
- Tap the Live Activity to toggle playback without opening the app.

This feature is iOS-only and requires iOS 16.1 or later.

## Practice Time Tracking

While the metronome is running, your practice time is tracked automatically in the background. When you open the Practice Calendar, accumulated metronome time is synced as practice sessions. You do not need to do anything manually — just play and your practice is logged.
