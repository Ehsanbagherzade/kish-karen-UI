"use client";

import { Icon, type IconProps } from "@iconify/react";

import { cn } from "@/utils/cn";

import { type IconifyName, registerIcons } from "./register-icons";

export interface IconifyProps extends Omit<IconProps, "icon"> {
  icon: IconifyName;
}

export default function Iconify({ icon, className, ...other }: IconifyProps) {
  registerIcons();

  return (
    <Icon
      icon={icon}
      ssr
      className={cn("inline-flex shrink-0", className)}
      {...other}
    />
  );
}
