"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import Offer from "../Offer";
import Review from "../Review";
import SaleTime from "./SaleTime";
import AdditionalInfo from "./AdditionalInfo";
import ReviewsCards from "./ReviewsCards";

function Product({ info, session }) {
  const [plusInfoWrraper, setPlusInfoWrraper] = useState(false);
  const [reviewsWrraper, setReviewsWrraper] = useState(false);
  const [tab, setTab] = useState("a");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:pr-4">
          <div className="relative h-[450px] md:h-[450px] mb-4">
            <Offer />
            <Image
              src={info.images[0]}
              alt={info.name}
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <div className="sm:grid grid-cols-3 gap-4 hidden h-[135px]">
            <button className="block relative">
              <Image
                src={info.images[0]}
                alt={info.name}
                className="object-cover w-full h-full"
                fill
              />
            </button>
            <button className="block relative">
              <Image
                src={info.images[0]}
                alt={info.name}
                className="object-cover w-full h-full"
                fill
              />
            </button>
            <button className="block relative">
              <Image
                src={info.images[0]}
                alt={info.name}
                className="object-cover w-full h-full"
                fill
              />
            </button>
          </div>
        </div>
        <div className="pr-6">
          <Review rate={5} />
          <h2 className="text-2xl font-semibold mb-4">{info.name}</h2>
          <p className=" text-gray-500 mb-4">{info.description}</p>
          <p className="font-semibold text-xl mb-4">
            <span>${info.price}</span>{" "}
            <span className="text-gray-500 pl-2 line-through">
              ${info.price + 50}
            </span>
          </p>
          <SaleTime />
          <div>
            <h3 className="text-gray-500">Measurements</h3>
            <p>{info.measurements}</p>
          </div>
          <div className="my-4">
            <h3 className="text-gray-500 mb-2">Choose Colors</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((color) => (
                <button key={color} className="relative w-16 h-16 bg-gray-200 ">
                  <Image
                    src={info.images[0]}
                    alt={""}
                    className="object-cover w-full h-full"
                    fill
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between my-4">
            <div className="grid grid-cols-3 w-1/4 bg-gray-200 py-2 mr-4 rounded-md">
              <button>-</button>
              <span className="text-center font-semibold">1</span>
              <button>+</button>
            </div>
            <button className="w-3/4 active:scale-95 py-2 border border-black rounded-md flex items-center justify-center">
              <i className="scale-150 mr-2">
                <BiHeart />
              </i>
              Wishlist
            </button>
          </div>
          <button className="p-2 active:scale-95 mb-4 bg-gray-950 text-sm w-full text-white rounded-md">
            Add to cart
          </button>
          <div className="md:hidden">
            <div
              className="cursor-pointer flex justify-between items-center border-b border-b-gray-500 py-2"
              onClick={() => setPlusInfoWrraper(!plusInfoWrraper)}
            >
              <h2 className="">Additional Info</h2>
              <IoIosArrowForward
                className={plusInfoWrraper ? "" : "rotate-90"}
              />
            </div>
            <div
              className={`text-sm pb-2 ${
                plusInfoWrraper ? "" : "max-h-0 overflow-hidden"
              }`}
            >
              <AdditionalInfo info={info} />
            </div>
          </div>
          <div className="md:hidden">
            <div
              className="cursor-pointer flex justify-between items-center border-b border-b-gray-500 py-2"
              onClick={() => setReviewsWrraper(!reviewsWrraper)}
            >
              <h2 className="">Reviews</h2>
              <IoIosArrowForward
                className={reviewsWrraper ? "" : "rotate-90"}
              />
            </div>
            <div
              className={`text-sm pb-2 ${
                reviewsWrraper ? "" : "max-h-0 overflow-hidden"
              }`}
            >
              <ReviewsCards info={info} session={session} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block my-8">
        <div className="flex border-b gap-12 border-b-gray-300 text-gray-500 *:pb-1 *:cursor-pointer">
          <h2
            className={tab === "a" ? "border-b border-b-black text-black" : ""}
            onClick={() => setTab("a")}
          >
            Additional Info
          </h2>
          <h2
            className={tab === "q" ? "border-b border-b-black text-black" : ""}
            onClick={() => setTab("q")}
          >
            Questions
          </h2>
          <h2
            className={tab === "r" ? "border-b border-b-black text-black" : ""}
            onClick={() => setTab("r")}
          >
            Reviews
          </h2>
        </div>
        <div className={tab === "a" ? "" : "hidden"}>
          <AdditionalInfo info={info} />
        </div>
        <div className={tab === "q" ? "" : "hidden"}></div>
        <div className={tab === "r" ? "" : "hidden"}>
          <ReviewsCards info={info} session={session} />
        </div>
      </div>
    </>
  );
}

export default Product;
