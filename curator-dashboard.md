---
layout: page
title: Curator Dashboard
description: Internal editorial workspace for managing KLGA's global exercise catalog.
permalink: /curator-dashboard
---

The Curator Dashboard is the internal, web-oriented editorial workspace for KLGA's global exercise catalog. It is separate from the Learner Dashboard and is not shown in learner navigation.

## Access and security

Only authenticated accounts whose `app_metadata.role` is `curator` can use the catalog operations. Supabase verifies that role on every request, so a client cannot bypass it. Learners can read only published catalog entries.

The app registers `/curator` outside the learner navigation shell. Logged-in accounts without the Curator role are redirected to Home; Supabase repeats the role check for every catalog operation.

## Catalog workflow

1. Select **New exercise** and enter a title. KLGA creates a draft with initial defaults: Technique, Beginner, EN-US, 60 BPM initial tempo, and 120 BPM target.
2. Select a catalog item to inspect its instructions, BPM range, difficulty, and last-updated time.
3. Choose **Edit** to update the title, instructions, category, difficulty, and initial and target BPM. The current editor preserves the record's existing time signature, media URL, and subcategory values.
4. Choose **Publish** only when the title and instructions are present and the BPM range is valid. Published entries become available to learners.
5. Choose **Archive** to remove an entry from learner access. Restoring an archived item changes it back to a draft, which must be reviewed and published again.

## Search and filters

The catalog supports title search and filters by editorial status (Draft, Published, Archived), exercise category, and language (EN-US or PT-BR). A wide layout presents the list and selected-item detail side by side; narrower screens stack them.

## Safeguards and errors

Catalog updates use the record's `updated_at` value for optimistic concurrency. If another curator has saved a newer version, the dashboard rejects the stale edit and asks the curator to reload before trying again.

The protected backend operations validate the Curator role, allowable categories and difficulty levels, a positive BPM range with target BPM not below initial BPM, and HTTPS media URLs. Unauthorized and conflict responses are presented as actionable dashboard errors.

## Related guides

- [Training](#/training)
- [Dashboard](#/dashboard)
