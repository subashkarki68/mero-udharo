"use client";

import { redirect, usePathname } from "next/navigation";

const defaultLocale = "en";

export default function NotFound() {
  const pathname = usePathname();

  // Add a locale prefix to show a localized not found page
  redirect(`/${defaultLocale}${pathname}`);
}
