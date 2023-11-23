import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale;
  const user = useUser();
  console.log(user);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link className='btn btn-primary text-white' locale='ne' href='/'>
        Switch to Nepali
      </Link>
      <br></br>
      <Link locale='en' href='/'>
        Switch to English
      </Link>
      <br></br>
      <Link locale='rn' href='/'>
        Switch to Romanized Nepali
      </Link>
    </>
  );
}
