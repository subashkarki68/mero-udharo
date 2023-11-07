import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale;
  console.log(locale);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link locale='np' href='/'>
        Switch to Nepali
      </Link>
      <br></br>
      <Link locale='en' href='/'>
        Switch to English
      </Link>
      <br></br>
      <Link locale='rnp' href='/'>
        Switch to Romanized Nepali
      </Link>
    </>
  );
}
