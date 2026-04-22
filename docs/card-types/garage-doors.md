---
title: Garage Doors
description:
  How to use garage door cards on your Espcontrol panel to open and close Home Assistant cover entities.
---

# Garage Doors

A garage door card controls a Home Assistant `cover` entity as a simple open/close toggle.

Unlike a **Cover** card, it does not show a slider. It can show either the current door state or your own label, and changes icon based on whether the door is closed or open.

## Setting Up a Garage Door

1. Select a card and change its type to **Garage Door**.
2. Enter an **Entity ID** — the Home Assistant garage door cover entity, for example `cover.garage_door`.
3. Choose the closed and open icons. These default to **Garage** and **Garage Open**.
4. Choose **Label** or **State**:
   - **Label** shows the text you enter on the card.
   - **State** shows the live Home Assistant state, such as **Open**, **Closed**, **Opening**, or **Closing**.

## How It Works on the Panel

- Tapping the card sends a toggle action to Home Assistant.
- The card lights up while the door is open, opening, or closing.
- The label area shows either your configured label or the live Home Assistant state, depending on the option you choose.
- The icon uses the closed **Garage** icon when the state is closed or closing, and the open icon when the state is open or opening.
