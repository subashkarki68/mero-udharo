import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from "next-intl";
import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "@/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Navbar() {
  const locale = useLocale();
  const messages = useMessages();
  const t = useTranslations("Common");

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          Mero Udharo
        </Link>
      </div>
      <div className='navbar-center hidden md:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <span className='btn btn-primary text-white'>{t("signin")}</span>
          </SignInButton>
          {/* <Link href='/signin' className='btn btn-primary text-white'>
            {t("signin")}
          </Link> */}
        </SignedOut>
        <span className='mr-4'></span>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone='Asia/Kathmandu'
        >
          <LocaleSwitcher />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
