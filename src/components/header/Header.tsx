"use server";

import { decrypt } from "@/lib/session";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";

async function Header() {
  const sessionCookie = (await cookies()).get("session");

  let session = undefined;
  if (sessionCookie) {
    session = await decrypt(sessionCookie.value);
  }

  return <HeaderClient session={session} />;
}

export default Header;
