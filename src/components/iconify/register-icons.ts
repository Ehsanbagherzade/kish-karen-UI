import { addCollection } from "@iconify/react";

import { ICON_SETS } from "./icon-sets";

export type IconifyName = keyof typeof ICON_SETS;

let isRegistered = false;

export function registerIcons(): void {
  if (isRegistered) return;

  const collections: Record<
    string,
    { prefix: string; icons: Record<string, { body: string }> }
  > = {};

  for (const [key, iconData] of Object.entries(ICON_SETS)) {
    const [prefix, name] = key.split(":");
    if (!prefix || !name) continue;

    if (!collections[prefix]) {
      collections[prefix] = {
        prefix,
        icons: {},
      };
    }

    collections[prefix].icons[name] = {
      body: iconData.body,
    };
  }

  for (const collection of Object.values(collections)) {
    addCollection({
      prefix: collection.prefix,
      icons: collection.icons,
      width: 24,
      height: 24,
    });
  }

  isRegistered = true;
}
