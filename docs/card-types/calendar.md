---
title: Date
description:
  How to show today's date on your Espcontrol panel.
---

# Date

A date card shows the current date from the panel clock. It uses the same layout as a numeric sensor card: the day number is shown large, and the month is shown as the label underneath.

Date cards are read-only — tapping them does nothing.

## Setting Up a Date Card

1. Select a card and change its type to **Date**.
2. Apply the configuration so the panel restarts with the new card.

## How It Works on the Panel

- The day number updates from the panel's Home Assistant time source.
- The month label follows the timezone selected in [Clock](/features/clock).
- The card uses the **tertiary** colour from [Appearance](/features/appearance), like sensor and weather cards.
- If the panel has not synced time yet, the card shows `--` until time becomes available.
