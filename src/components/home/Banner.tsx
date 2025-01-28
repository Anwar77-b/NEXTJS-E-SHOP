import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="banner-grid py-4">
      <div className="container px-4 sm:px-0 mx-auto sm:flex gap-4">
        <section className="bg-main-bg sm:h-[575px] overflow-hidden text-xs mb-4 sm:mb-0 p-8 pb-0 sm:w-1/2">
          <h2 className="text-xl mb-2 font-bold">Living Room</h2>
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
          <Image
            src={"/living-room.png"}
            alt=""
            width={500}
            height={500}
          ></Image>
        </section>
        <div className="sm:w-1/2 flex flex-col gap-4 sm:h-[575px] mb-4 sm:mb-0">
          <section className="flex gap-4 text-xs h-[280px] bg-main-bg items-end p-8 pr-0 overflow-hidden">
            <div>
              {" "}
              <h2 className="text-2xl mb-2 font-semibold">Bedroom</h2>
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
            </div>
            <Image
              className="w-2/3 relative -left-4"
              src={"/bedroom.png"}
              alt=""
              width={350}
              height={400}
            ></Image>
          </section>
          <section className="flex gap-4 text-xs h-[280px] bg-main-bg items-end p-8 pr-0 overflow-hidden">
            <div>
              {" "}
              <h2 className="text-2xl mb-2 font-semibold">Kitchen</h2>
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
            </div>
            <Image
              className="w-2/3 relative -left-4"
              src={"/kitchen.png"}
              alt=""
              width={350}
              height={400}
            ></Image>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Banner;
