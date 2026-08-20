---
layout: page
title: Dashboard
description: Review weekly practice duration, consistency, calendar activity, streaks, BPM growth, and exercise progress in one place.
permalink: /dashboard
---

The Dashboard brings together your practice consistency and skill progress. Open the **Dashboard** tab from the bottom navigation bar, then switch between **Consistency** and **Skill & Performance**.

KLGA keeps your selected Dashboard view while you move around the signed-in app, so returning to the Dashboard takes you back to the same tab.

## Consistency

The **Consistency** tab focuses on how regularly you practise:

- **Practice Health Score** — compares the number of days practised during the past 30 days with a five-days-per-week target. The score is capped at 100%.
- **Practice status** — summarizes the score as Needs Attention, Regular, Very Good, or Excellent.
- **Streak** — shows your consecutive practice-day progress.
- **Weekly Practice Duration** — compares each day's recorded practice time with your daily goal.
- **Monthly calendar** — shows recorded practice days and lets you move between months.

The Practice Health Score uses these status ranges:

| Score | Status |
|---:|---|
| 0–49% | Needs Attention |
| 50–69% | Regular |
| 70–89% | Very Good |
| 90–100% | Excellent |

### Weekly Practice Duration

The **Weekly Practice Duration** card shows a Monday-to-Sunday bar chart for the selected week:

- Each bar combines the duration of every recorded session on that day.
- **Total** shows the combined duration for the full week.
- A dashed **Goal** line uses your saved daily practice-duration goal. If no workout setting is available, the chart uses 30 minutes.
- Today's weekday label uses the app accent colour and bold text.

Tap or press a bar to inspect it. A practised day shows its duration and session count; an empty day shows **No practice**.

Use **Previous week** to review older weeks and **Next week** to move forward again. **Next week** is disabled when the current week is displayed, so the chart does not navigate into the future.

## Skill & Performance

The **Skill & Performance** tab summarizes progress from your exercise goals:

- **Top BPM** and the exercise where it was achieved.
- **BPM growth chart** when progress history is available.
- **Category performance**, including average BPM and exercise count.
- **Exercise progress**, comparing current and target BPM for each exercise.

If you have not started any exercises yet, the exercise area shows an empty state. Start an exercise from [Training](#/training) to create progress data.

Touch or drag across a point in the BPM growth chart to see its BPM, date, and exercise label. The selected point grows and a dashed guide marks its position; release the gesture to close the tooltip.

### Explore the full analytics

Tap the chevron on any Skill & Performance card to open its detail screen:

- **Top Speed & Records** compares your peak BPM, average speed, and leading technique, followed by the complete speed leaderboard.
- **BPM Evolution** combines an interactive history chart with peak BPM, net BPM change, and a newest-first milestone list. Choose 7 days, 30 days, 6 months, or all history, and optionally focus on one exercise.
- **Technique Distribution** shows how your practice is divided between techniques. Change the time period to update total practice, the leading technique, category shares, exercise counts, and average BPM.
- **Exercises Progress** expands the Dashboard preview into every exercise. Search by title, filter by technique, compare current and target BPM, and tap a card to open its Training details.

The time-based analytics start with **30 Days** selected. If detailed practice-session history is not available, KLGA uses saved goal progress as a fallback where possible.

## Loading and Errors

Dashboard data may briefly show a loading indicator while practice sessions and skill statistics are being prepared. Changing the calendar month keeps the existing grid visible at reduced opacity until the requested month is ready.

If skill statistics cannot be loaded, the **Skill & Performance** tab displays an error message instead of stale values. A weekly-chart request failure stops its loading indicator but currently does not show a dedicated error or retry message.

## Related Docs

- [Practice Calendar](#/practice-calendar) — reviewing recorded days and synchronized practice sessions.
- [Training](#/training) — exercises and BPM goal progress.
- [Profile](#/profile) — account details, summary statistics, and achievements.
