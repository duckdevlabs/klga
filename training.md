---
layout: page
title: Training
description: Browse exercises, create custom goals, generate practice sessions, and track BPM progress.
permalink: /training
---

Training turns the exercise library into guided practice sessions. It combines curated KLGA exercises, user-created exercises, progress tracking, and a session planner that builds a timed practice flow.

## Main Screen

Open the **Training** tab from the bottom navigation bar. The library screen shows:

- **Header actions** to search the library, open the session planner, or create a custom exercise.
- **Search** across titles and descriptions, with recent exercises shown before you enter a query.
- **Category and difficulty filters** for narrowing the library.
- **Exercise cards** with category, subcategory, difficulty, BPM progress, and target BPM.

The library loads two exercise sources:

- **Curated exercises** from the global KLGA exercise library.
- **User exercises and started curated exercises** from your own account.

Curated exercises that have not been started yet are shown as practice-ready templates. Once a curated exercise is practiced or saved as progress, it becomes one of your goals linked back to the curated template.

## Exercise Details

Tap an exercise to open its detail page. The detail view shows:

- A **DEMONSTRATION** video when the exercise has a media URL.
- Category, subcategory, difficulty, and time signature badges.
- Practice instructions or a fallback message when no description exists.
- Current BPM, target BPM, and a progress indicator.
- A **Practice Now** action.

Practice Now opens preparation for a direct training block. Before the count-in you can adjust its BPM and duration.

### Exercise Demonstration Videos

KLGA supports HTTPS YouTube, Vimeo, and direct MP4 demonstration links. Videos use a 16:9 player at the top of the exercise details:

- YouTube and Vimeo demonstrations use their embedded player controls.
- For MP4 demonstrations, tap the video to play or pause and drag the progress bar to seek.
- While an MP4 is loading, the player shows a progress indicator.
- An unsupported or insecure link shows **No supported video is available for this exercise.**
- A playback or network failure shows **The video could not be loaded.**
- When an exercise has no media URL, the **DEMONSTRATION** section is not shown.

Streaming requires a network connection; videos are not available for offline playback.

## Creating Custom Exercises

Tap the add action on the Training header to open the custom exercise sheet.

| Field | Notes |
|---|---|
| Name | Required. |
| Description / instructions | Optional. |
| Category | Shapes, Technique, Licks, or Warmup. |
| Subcategory | Optional; saved as "General" when left blank. |
| Difficulty | Beginner, Intermediate, or Advanced. |
| Time signature | 4/4, 3/4, 6/8, or 2/4. |
| Initial BPM | Must be greater than 0. |
| Target BPM | Must be greater than or equal to the initial BPM. |

Custom exercises appear in the same library as curated exercises and can be used by the session planner.

### Editing and Archiving

Open one of your custom exercises and tap the pencil action to edit its fields. Any exercise already saved to your account also has an archive action. After confirmation, archiving removes it from the active Training library without deleting the practice history already connected to it.

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

## Preparation, Count-in, and Resume

Direct exercises and planned blocks use the same practice flow. Review the exercise, adjust BPM and duration, then begin the count-in. If you leave during preparation or active practice, KLGA saves a local checkpoint and shows a resumable-practice banner in the Training library.

## Active Practice

The active panel shows the exercise, elapsed/remaining time, BPM, and metronome state. You can pause or resume, change BPM, skip a block, or finish early. When planned time expires, overtime mode lets you continue or complete the block.

After each block, record the practiced BPM and an optional **effort rating from 1 to 10**. The effort guide describes perceived exertion, not performance quality. Review the result before continuing.

## Progress and Sync

At the end of a session:

- Completed blocks are saved as practice activity.
- Existing goals can have their current BPM raised when the practiced BPM is higher.
- Practice sessions sync to the Practice Calendar.
- If sync fails, KLGA keeps the local practice data queued and retries without duplicating a session already saved remotely.

The session summary also includes **Compartilhar Conquista**. It opens a share-card preview containing the session date, duration, number of completed exercises, and the highest recorded BPM when one is available. See [Sharing Progress](#/sharing-progress) for format, theme, and sharing behavior.

## Related Docs

- [Practice Calendar](#/practice-calendar) — where synced practice sessions appear.
- [Metronome](#/metronome) — timing engine used during practice.
- [Sharing Progress](#/sharing-progress) — create an image from a completed session, streak, or unlocked achievement.
