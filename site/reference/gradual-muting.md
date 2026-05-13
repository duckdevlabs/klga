---
layout: page
title: Gradual Random Muting
description: How the training mode progressively silences beats to strengthen your internal timing.
permalink: /reference/gradual-muting
---

When **Gradual Mode** is enabled, the metronome enters a two-phase training progression. The goal is to train your internal sense of timing by progressively removing audible beats until you maintain rhythm with no external reference.

On pause or stop, the entire progression resets and must be repeated from the beginning.

## Phases

### Phase 1 — Alternating Volume Ramp-Down

Measures alternate between the **original volume** and a **reduced volume** that shrinks each cycle.

```
originalVolume → reducedVol → originalVolume → deeperReducedVol → ...
```

The reduced volume gets quieter each time (controlled by the **Muting %** slider). When it reaches zero, the engine transitions to Phase 2.

**Example** — Muting % = 50, time signature 4/4:

| Measure | Type | Volume |
|---------|----------|--------|
| 1 | Original | 50 |
| 2 | Reduced | 25 |
| 3 | Original | 50 |
| 4 | Reduced | 12 |
| 5 | Original | 50 |
| 6 | Reduced | 6 |
| 7 | Original | 50 |
| 8 | Reduced | 3 |
| 9 | Original | 50 |
| 10 | Reduced | 1 |
| 11 | Original | 50 |
| 12 | Reduced | 0 |

After measure 12, the engine transitions to Phase 2.

### Phase 2 — Random Beat Muting

Individual beats within each measure are randomly muted (silenced) while the remaining beats play at full volume. The number of muted beats per measure increases over time.

**Progression:**

1. 1 beat silenced per measure (for ~2 measures).
2. 2 beats silenced per measure (for ~2 measures).
3. Continue increasing...
4. All beats except 1 silenced (for ~2 measures).
5. All beats silent — progression complete.

**Example** — 4/4 time:

| Measure | Muted beats | You hear |
|---------|-------------|----------|
| 13 | 1 | Beats 1, 3, 4 |
| 14 | 1 | Beats 1, 2, 3 |
| 15 | 2 | Beats 1, 4 |
| 16 | 2 | Beats 3, 4 |
| 17 | 3 | Beat 2 only |
| 18 | 3 | Beat 1 only |
| 19 | 4 | (silence) |

## How the Muting % Works

The slider ranges from **10 to 90**:

- **Lower percent = faster fade.** At 25%, the volume drops quickly and you reach silence sooner.
- **Higher percent = slower fade.** At 75%, the volume drops gradually, giving you more time to adjust.

## Tips for Practice

- Start with a **higher** muting percentage (e.g. 70–80) if you're new to this exercise. This gives you more time to internalize the beat before silence arrives.
- Once you're comfortable, **lower** the percentage to challenge yourself with a faster fade.
- Works with **any time signature** — try it in 7/8 or 5/4 for an extra challenge.
- The exercise resets on stop/pause, so aim to play through the entire progression without stopping.

## State Diagram

<div class="mermaid">
graph TD
    Start["start() + gradualMode"] --> Phase1["Phase 1: Ramp-Down"]
    Phase1 -->|"reducedVol reaches 0"| Phase2["Phase 2: Random Mute"]
    Phase2 -->|"all beats muted"| Complete["Complete"]
    Phase1 -->|"stop/pause"| Reset["Reset to idle"]
    Phase2 -->|"stop/pause"| Reset
    Complete -->|"stop/pause"| Reset
</div>
