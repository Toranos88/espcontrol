---
title: Built-in Relays
description:
  How Espcontrol exposes the built-in relays on the Guition 4848S040C relay variant in Home Assistant.
---

# Built-in Relays

Some Guition 4-inch 4848S040 panels are sold as a relay variant, often listed as **4848S040C**. These boards include three physical relays that can switch external low-voltage circuits.

The relays have been confirmed working on the relay variant using the standard 4848S040 Espcontrol firmware.

## Home Assistant entities

On the 4848S040 firmware, Espcontrol exposes three relay switch entities to Home Assistant:

| Home Assistant name | Typical entity ID | Relay pin |
|---|---|---|
| **Relay 1** | `switch.<device_name>_relay_1` | GPIO40 |
| **Relay 2** | `switch.<device_name>_relay_2` | GPIO2 |
| **Relay 3** | `switch.<device_name>_relay_3` | GPIO1 |

They appear as normal Home Assistant switch entities on the Espcontrol device. You can control them from Home Assistant dashboards, automations, scripts, and voice assistants.

Home Assistant may adjust the exact entity ID if you have renamed the device or if another entity already used the same name. To find them, open **Settings > Devices & services**, select your Espcontrol device, then look for the three relay switches under the device entities.

## Using relays on the touchscreen

The relay switches are exposed to Home Assistant, so you can also add them back onto the Espcontrol touchscreen as button cards:

1. Open the Espcontrol setup page in your browser.
2. Choose an empty button slot.
3. Set the button entity to the relay switch entity, such as `switch.kitchen_panel_relay_1`.
4. Save the button configuration.

Tapping that button will toggle the relay through Home Assistant, the same as any other switch entity.

## Hardware detection

The relays are controlled directly by GPIO pins. That means there is no separate relay controller chip for the firmware to identify, so Espcontrol cannot reliably auto-detect whether a specific physical board has the relay hardware fitted.

If your board is the relay variant, the entities will control the built-in relays. If your board does not have the relay hardware, the same entities may still appear in Home Assistant but will not switch a physical relay.

## Startup behaviour

The relay outputs default to **off** after startup or restart. This helps avoid a relay turning on unexpectedly when the panel reboots.

If you need a relay to return to a particular state after restart, handle that with a Home Assistant automation once the Espcontrol device reconnects.

## Testing

After updating the firmware, test each relay from Home Assistant before connecting it to anything important. You should hear or feel each relay click when it changes state.

## Safety

Check the relay rating printed on your board or supplied by the seller before connecting anything. Do not use the relays for mains voltage unless your specific relay board, wiring, enclosure, and local electrical rules make that safe.
