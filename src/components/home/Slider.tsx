"use client";
import Image from "next/image";
import React, { useState } from "react";

function Slider() {
  const [index, setIndex] = useState(1);
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="relative">
        <div className="flex relative  overflow-hidden">
          <Image
            className={`absolute duration-500 ${
              index == 1 ? "opacity-100" : "opacity-0"
            }`}
            src={"/slider3.jpg"}
            width={1500}
            height={500}
            alt=""
          ></Image>
          <Image
            className={`absolute duration-500 ${
              index == 2 ? "opacity-100" : "opacity-0"
            }`}
            src={"/slider2.jpg"}
            width={1500}
            height={500}
            alt=""
          ></Image>
          <Image
            className={`duration-500 ${
              index == 3 ? "opacity-100" : "opacity-0"
            }`}
            src={"/slider1.png"}
            width={1500}
            height={500}
            alt=""
          ></Image>
        </div>
        <nav className="flex *:duration-200 justify-center gap-2 w-full z-1 absolute bottom-6">
          <p
            onClick={() => setIndex(1)}
            className={`h-2  cursor-pointer rounded-lg bg-white ${
              index == 1 ? "w-5" : "w-2"
            }`}
          ></p>
          <p
            onClick={() => setIndex(2)}
            className={`h-2 cursor-pointer rounded-lg bg-white ${
              index == 2 ? "w-5" : "w-2"
            }`}
          ></p>
          <p
            onClick={() => setIndex(3)}
            className={`h-2 cursor-pointer rounded-lg bg-white ${
              index == 3 ? "w-5" : "w-2"
            }`}
          ></p>
        </nav>
        <div className="flex w-full *:active:scale-95  justify-between items-center bottom-1/2 px-6 absolute">
          <button
            onClick={() => setIndex(index == 1 ? 3 : index - 1)}
            className="grid place-items-center w-10 h-10 rounded-full bg-white rotate-180"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66666 16H25.3333"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3333 24L25.3333 16"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3333 8L25.3333 16"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => setIndex(index == 3 ? 1 : index + 1)}
            className="grid place-items-center w-10 h-10 rounded-full bg-white "
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66666 16H25.3333"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3333 24L25.3333 16"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3333 8L25.3333 16"
                stroke="#141718"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="py-8 sm:flex justify-between items-center">
        <div>
          <h2 className="text-5xl mb-4 font-semibold lg:text-7xl ">
            Simply Unique <i className="text-gray-600">/</i> <br />
            Simply Better<i className="text-gray-600">.</i>
          </h2>
        </div>
        <p className="text-gray-600">
          <span className="text-gray-700 font-bold">3legant</span> is a gift &
          decorations store based in HCMC,
          <br /> Vietnam. Est since 2019.
        </p>
      </div>
    </div>
  );
}

export default Slider;
