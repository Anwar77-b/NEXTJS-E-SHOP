"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Socials from "../Socials";
import FlyCart from "./FlyCart";
import { usePathname } from "next/navigation";
import { signout } from "@/lib/actions";
import { CartContext } from "../context/CartContext";

function HeaderClient({ session }) {
  const [flyOpen, setFlyOpen] = useState(false);
  const [flyCartOpen, setFlyCartOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { setSess } = useContext(CartContext);

  useEffect(() => {
    if (session) {
      setSess(session);
    }
  }, [session, setSess]);
  const pathName = usePathname();
  console.log(session);
  useEffect(() => {
    const close = () => {
      setProfileMenu(false);
    };
    if (flyOpen || flyCartOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
    if (profileMenu) {
      document.body.addEventListener("click", close);
    }

    return () => {
      document.body.removeEventListener("click", close);
      document.body.style.overflow = ""; // Reset when component unmounts
    };
  }, [flyOpen, flyCartOpen, profileMenu]);

  return (
    <header className="bg-white">
      <section
        className={`absolute inset-0 z-20 backdrop-blur-sm backdrop-brightness-50 ${
          flyCartOpen || flyOpen ? "" : "hidden"
        }`}
        onClick={() => {
          setFlyCartOpen(false);
          setFlyOpen(false);
        }}
      ></section>
      <div className="container flex mx-auto px-4 lg:px-0 py-4 text-black justify-between items-center">
        <div className="flex">
          <button
            className="sandwitch sm:hidden pr-2 text-xl scale-125"
            onClick={() => setFlyOpen(!flyOpen)}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H11M1 5H11M1 9H11"
                stroke="#141718"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <h2 className="sm:text-2xl font-bold">3legant.</h2>
        </div>
        <ul className="hidden sm:flex gap-8 text-sm text-gray-600 font-[500]">
          <li className={`${pathName == "/" ? "text-black" : ""}`}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={`${pathName.startsWith("/shop") ? "text-black" : ""}`}>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li
            className={`${pathName.startsWith("/product") ? "text-black" : ""}`}
          >
            <Link href={"/product"}>Product</Link>
          </li>
          <li className={`${pathName == "/contact" ? "text-black" : ""}`}>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li className="search hidden sm:block">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                stroke="#141718"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="profile relative group">
            <div
              className={`absolute text-sm -right-4 top-6 mt-2 w-48 z-10 bg-white shadow-lg rounded-md p-3 border border-gray-200 ${
                profileMenu ? " opacity-100 scale-100" : "opacity-0 scale-95"
              } transition-all duration-200`}
            >
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    View Profile
                  </Link>
                  <form action={signout}>
                    <button className="w-full text-left px-3 py-2 mt-1 text-red-600 hover:bg-red-100 rounded-md">
                      Sign Out
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  className="w-full text-left px-3 py-2  block hover:bg-green-100 rounded-md"
                  href={"/signin"}
                >
                  Sign in
                </Link>
              )}
            </div>
            <button onClick={() => setProfileMenu(profileMenu ? false : true)}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5588 18.5488C16.5654 15.8918 14.0036 14 11 14C7.99638 14 5.4346 15.8918 4.44117 18.5488M17.5588 18.5488C19.6672 16.7154 21 14.0134 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 14.0134 2.33285 16.7154 4.44117 18.5488M17.5588 18.5488C15.8031 20.0756 13.5095 21 11 21C8.49052 21 6.19694 20.0756 4.44117 18.5488M14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8Z"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className="cart">
            <button className="" onClick={() => setFlyCartOpen(!flyCartOpen)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
        <div
          className={`fly-menu flex flex-col origin-left duration-300 justify-between absolute inset-0 right-8 z-30 bg-slate-50 p-4 ${
            flyOpen ? "" : "scale-x-0"
          }`}
        >
          <div>
            <div className="flex justify-between">
              <h2>3legant.</h2>
              <button onClick={() => setFlyOpen(false)}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                    fill="#6C7275"
                  />
                </svg>
              </button>
            </div>
            <div className="my-2 relative">
              <i className="absolute top-[4px] scale-75 left-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                    stroke="#141718"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-full block border pl-8 border-black rounded-md text-xs"
              />
            </div>
            <ul className="text-sm mt-4 *:py-3 *:border-b">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link href={"/product"}>Product</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col mb-4">
              <li className="flex justify-between text-gray-500 py-2 border-b">
                Cart
                <div className="flex items-center">
                  <button>
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                        stroke="#141718"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                        stroke="#141718"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <i className="bg-black w-4 h-4 text-[10px] ml-1 text-white rounded-full grid items-center justify-center">
                    2
                  </i>
                </div>
              </li>
            </ul>
            <button className="w-full bg-[#141718] rounded-md py-2 text-white text-sm">
              Sign in
            </button>
            <Socials />
          </div>
        </div>
        <FlyCart
          flyCartOpen={flyCartOpen}
          setFlyCartOpen={setFlyCartOpen}
        ></FlyCart>
      </div>
    </header>
  );
}

export default HeaderClient;
