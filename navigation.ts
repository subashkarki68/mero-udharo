import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "np", "rnp"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
