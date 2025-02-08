"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function AuthModal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname !== "/signin" && pathname !== "/signup") return null;
  return (
    <main className=" h-[85vh] sm:h-[calc(100dvh-4rem)]">
      <section
        className={`absolute inset-0  z-10 backdrop-blur-sm backdrop-brightness-50`}
      ></section>
      <section className=" w-11/12 sm:w-11/12 md:w-9/12 bg-white shadow-lg relative items-center -top-8 md:-top-8  z-40 mx-auto h-[90%] sm:h-full sm:flex">
        <button
          onClick={() => {
            router.replace("/");
          }}
          className="absolute top-3 right-4"
        >
          ✖
        </button>
        <div className="sm:w-1/2 h-1/2 sm:h-full bg-[#f2f4f5]  relative">
          <h2 className="absolute text font-bold left-1/2 -translate-x-1/2 top-2 z-10">
            3legant.
          </h2>
          <Image
            fill
            alt={""}
            src={"/signInUp.png"}
            className="object-contain hidden md:block"
          ></Image>
          <Image
            fill
            alt={""}
            src={"/signInUpMb.png"}
            className="object-contain md:hidden"
          ></Image>
        </div>
        <div className="sm:w-1/2 bg-white">{children}</div>
      </section>
    </main>
  );
}

export default AuthModal;
