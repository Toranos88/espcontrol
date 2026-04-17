---
title: Text Sensors
description:
  How to display live text states from Home Assistant on your Espcontrol panel.
---

# Text Sensors

A text sensor card displays a live Home Assistant state as text. It uses the same visual style as a normal toggle card, with an icon at the top and the live text value where the label normally appears.

Text sensor cards are read-only — tapping them does nothing, and they do not have an on or off state.

## Setting up a text sensor card

1. Select a card and change its type to **Text Sensor**.
2. Enter a **Text Sensor Entity** — the Home Assistant entity ID you want to display, for example `text_sensor.washing_machine_status` or `sensor.fan_level`.
3. Choose an **Icon**. This icon is always shown and does not change based on the sensor value.

## How it works on the panel

- The card shows the chosen icon in the usual icon position.
- The live state from Home Assistant is shown where a toggle label would normally appear.
- Values are shown as-is. Numeric-looking text is not rounded, and no unit is added.
- The card uses the normal button colour, not the numeric sensor card colour.

## Example text sensors

| Entity | What it shows |
|---|---|
| `text_sensor.washing_machine_status` | `Running`, `Rinsing`, or `Finished` |
| `sensor.fan_level` | `low`, `medium`, or `high` |
| `text_sensor.printer_status` | `Printing`, `Idle`, or `Paused` |
