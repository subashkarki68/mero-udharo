import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "np", "rnp"],

  // Used when no locale matches
  defaultLocale: "np",
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
