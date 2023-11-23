"use client";
import { auth, useUser, withUser } from "@clerk/nextjs";
import { getServerSideProps } from "next/dist/build/templates/pages";

export default function page() {
  const { user } = useUser();
  console.log(user?.id);
  return <div>page</div>;
}
