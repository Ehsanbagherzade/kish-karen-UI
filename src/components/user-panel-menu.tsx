"use client";

import { Iconify } from "@/components/iconify";
import { DropdownMenu, type DropdownMenuProps } from "@/components/ui";
import { getLegacyPanelRoute, getUnifiedPanelRoute } from "@/utils/routes";

type UserPanelMenuProps = Pick<
  DropdownMenuProps,
  "placement" | "onNavigate" | "fullWidth"
> & {
  variant?: "header" | "default" | "footer";
};

export function UserPanelMenu({
  variant = "default",
  placement,
  ...props
}: UserPanelMenuProps) {
  return (
    <DropdownMenu
      {...props}
      placement={placement ?? (variant === "header" ? "bottom-center" : "bottom")}
      size={variant === "header" ? "header" : "responsive"}
      label="ورود به پنل کاربری"
      triggerProps={{
        variant: variant === "footer" ? "ghost" : "outline",
        size:
          variant === "header"
            ? "header"
            : variant === "footer"
              ? "sm"
              : "responsive",
        borderAnimation: variant !== "footer",
        className:
          variant === "footer"
            ? "h-auto px-0 py-1 font-normal text-inherit hover:bg-transparent hover:text-blue-600"
            : undefined,
      }}
      trigger={
        <>
          {variant !== "footer" && (
            <Iconify icon="solar:user-bold-duotone" className="text-primary" />
          )}
          {variant === "header" ? (
            <>
              <span className="xl:hidden">پنل کاربری</span>
              <span className="hidden xl:inline">ورود به پنل کاربری</span>
            </>
          ) : (
            "ورود به پنل کاربری"
          )}
        </>
      }
      items={[
        {
          label: "پنل یکپارچه کیش و کارن",
          href: getUnifiedPanelRoute(),
          icon: <Iconify icon="solar:users-group-rounded-bold-duotone" />,
        },
        {
          label: "پنل قدیمی (لیمس)",
          href: getLegacyPanelRoute(),
          external: true,
          icon: <Iconify icon="solar:login-2-bold-duotone" />,
        },
      ]}
    />
  );
}
