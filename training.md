---
layout: page
title: Training
description: Browse exercises, create custom goals, generate practice sessions, and track BPM progress.
permalink: /training
---

Training turns the exercise library into guided practice sessions. It combines curated KLGA exercises, user-created exercises, progress tracking, and a session planner that builds a timed practice flow.

## Main Screen

Open the **Training** tab from the bottom navigation bar. The library screen shows:

- **Header actions** to open the session planner, create a custom exercise, or use filters.
- **Search** for exercise titles and descriptions.
- **Category tabs** for All, Warmup, Picking, Fretting, Theory, Etudes, and other supported categories.
- **Difficulty chips** for All, Beginner, Intermediate, and Advanced.
- **Exercise cards** with category, subcategory, difficulty, BPM progress, and target BPM.

The library loads two exercise sources:

- **Curated exercises** from the global KLGA exercise library.
- **User exercises and started curated exercises** from your own account.

Curated exercises that have not been started yet are shown as practice-ready templates. Once a curated exercise is practiced or saved as progress, it becomes one of your goals linked back to the curated template.

## Exercise Details

Tap an exercise to open its detail page. The detail view shows:

- Category, subcategory, difficulty, and time signature badges.
- Practice instructions or a fallback message when no description exists.
- Current BPM, target BPM, and a progress indicator.
- A **Practice Now** action.

Practice Now starts a direct 10-minute training block for that exercise.

## Creating Custom Exercises

Tap the add action on the Training header to open the custom exercise sheet.

| Field | Notes |
|---|---|
| Name | Required. |
| Description / instructions | Optional. |
| Category | Warmup, Technique MD, Technique ME, Theory, or Repertoire. |
| Subcategory | Optional; saved as "General" when left blank. |
| Difficulty | Beginner, Intermediate, or Advanced. |
| Time signature | 4/4, 3/4, 6/8, or 2/4. |
| Initial BPM | Must be greater than 0. |
| Target BPM | Must be greater than or equal to the initial BPM. |

Custom exercises appear in the same library as curated exercises and can be used by the session planner.

## Session Planner

Tap the planner action in the Training header to open the planner. The planner has three steps:

1. **Time** — choose 15, 30, 45, or 60 minutes.
2. **Focus** — choose Technique, Theory, Repertoire, or Surprise.
3. **Intensity** — choose Light, Normal, or Full send.

When you generate a session, the app builds a sequence of timed blocks from the available library:

| Total time | Warmup | Focal block | Application | Review |
|---|---:|---:|---:|---:|
| 15 min | 3 min | 8 min | 3 min | 1 min |
| 30 min | 5 min | 15 min | 8 min | 2 min |
| 45 min | 6 min | 25 min | 11 min | 3 min |
| 60 min | 8 min | 32 min | 16 min | 4 min |

Focus controls which exercise categories are preferred:

- **Technique** uses picking and fretting exercises.
- **Theory** uses theory exercises.
- **Repertoire** uses etudes.
- **Surprise** can use any non-warmup exercise.

## Session Preview

After generating a plan, the preview screen lists each block with:

- Duration.
- Block type, such as Warmup, Focal Technique, Application, or Review.
- Selected exercise and subcategory when one is available.

From this screen you can adjust settings, regenerate the session, or start training.

## Active Session

During a session, KLGA tracks:

- Current block index.
- Remaining seconds for the active block.
- Running or paused timer state.
- Completed block feedback.
- BPM recorded for each completed block.

When a block is completed, the app stores the practiced BPM and sensation feedback. If the block used a curated exercise that had not been started before, KLGA creates a linked user goal first.

## Progress and Sync

At the end of a session:

- Completed blocks are saved as practice activity.
- Existing goals can have their current BPM raised when the practiced BPM is higher.
- Practice sessions sync to the Practice Calendar.
- If sync fails, KLGA keeps the local practice data queued for a later sync.

## Related Docs

- [Practice Calendar](#/practice-calendar) — where synced practice sessions appear.
- [Metronome](#/metronome) — timing engine used during practice.
