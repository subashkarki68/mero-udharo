import type { Metadata } from "next";
import { Inter, Noto_Serif_Devanagari, Poppins } from "next/font/google";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound, redirect } from "next/navigation";
import "./globals.css";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["devanagari"], weight: ["400"] });
const notoSerifDevnagari = Noto_Serif_Devanagari({ subsets: ["devanagari"] });

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
  const locales = useLocale();
  const messages = useMessages();
  const { locale } = params;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    console.log("Page not found, redirecting to not-found");
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={locale === "np" ? fontForNepali : defaultFont}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
