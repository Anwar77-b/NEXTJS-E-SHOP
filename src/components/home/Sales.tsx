import Image from "next/image";
import React from "react";

function Sales() {
  return (
    <div className="sale bg-main-bg flex items-center flex-wrap">
      <Image
        src={"/sale.png"}
        width={600}
        height={600}
        alt="sale"
        className="w-full sm:w-1/3"
      ></Image>
      <section className="w-full sm:w-5/12 text-xs px-4 py-8 sm:py-12 sm:pl-10 sm:pr-0">
        <p className="text-sec-blue font-bold italic">SALE UP TO 35% OFF</p>
        <h2 className="text-2xl font-semibold mb-4">
          HUNDREDS of <br /> New lower prices!
        </h2>
        <p className="">
          It is more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <button className="mt-4 pb-2 border-b flex items-center border-b-gray-700">
          Shop Now
          <i className="scale-90">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333"
                stroke="#141718"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="#141718"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="#141718"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </button>
      </section>
    </div>
  );
}

export default Sales;
