import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale;
  return (
    <>
      <h1>{t("title")}</h1>
      <Link className='btn btn-primary text-white' locale='np' href='/'>
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
