import type { Metadata } from "next";
import { Inter, Noto_Serif_Devanagari, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ne, rn } from "@/lib/clerkLocalization/customLocalization";
import { enUS } from "@clerk/localizations";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["devanagari"], weight: ["400"] });
const notoSerifDevnagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400"],
});

const defaultFont = inter.className;
const fontForNepali = notoSerifDevnagari.className;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Mero Udharo App",
  description: "Generated by create next app",
};

// function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en'>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locales = ["ne", "en", "rn"];
  const { locale } = params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    console.log("Page not found, redirecting to not-found");
    notFound();
  }

  return (
    <ClerkProvider
      localization={locale === "ne" ? ne : locale === "rn" ? rn : enUS}
    >
      <html lang={locale}>
        <body className={locale === "ne" ? fontForNepali : defaultFont}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
