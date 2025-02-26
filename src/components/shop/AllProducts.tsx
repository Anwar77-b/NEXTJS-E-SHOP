"use client";

import Image from "next/image";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import Offer from "./Offer";
import Review from "./Review";
import Link from "next/link";

function AllProducts({ products }) {
  const [grid, setGrid] = useState(1);
  return (
    <div className="py-4">
      <div className="sm:flex  justify-between items-center text-sm">
        <div className="sm:flex  justify-between gap-4 items-center border-b pb-4 sm:border-b-0">
          <div className="pb-2 sm:pb-0">
            <h3 className="text-gray-600 mb-1">CATEGORIES</h3>
            <select
              className="px-3 w-full py-2 border-2 border-gray-500 rounded-md "
              name="category"
              id="category"
            >
              <option value="Living room">Living room</option>
            </select>
          </div>
          <div>
            <h3 className="text-gray-600 mb-1">PRICE</h3>
            <select
              className="px-3 py-2 w-full border-2 border-gray-500 rounded-md "
              name="price"
              id="price"
            >
              <option value="under-100">$0.00 to 99.99</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center border-b sm:border-b-0 py-2">
          <label htmlFor="sort">
            Sort by:
            <select name="sort" id="sort">
              <option value="price">price</option>
            </select>
          </label>
          <div className="flex *:cursor-pointer">
            <div
              className="p-1 hidden md:block border scale-90 relative"
              onClick={() => setGrid(1)}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75V19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5H5.25C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25V15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5H8.75ZM18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75V19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5H15.25C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25V15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5H18.75ZM8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75V9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5H5.25C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25V5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5H8.75ZM18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75V9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5H15.25C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25V5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5H18.75Z"
                  fill="#141718"
                />
              </svg>
            </div>
            <div
              className="p-1  border scale-90 relative"
              onClick={() => setGrid(2)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 13C9.34674 13 9.91903 13.2371 10.341 13.659C10.7629 14.081 11 14.6533 11 15.25V18.75C11 19.3467 10.7629 19.919 10.341 20.341C9.91903 20.7629 9.34674 21 8.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V15.25C3 14.6533 3.23705 14.081 3.65901 13.659C4.08097 13.2371 4.65326 13 5.25 13H8.75ZM18.75 13C19.3467 13 19.919 13.2371 20.341 13.659C20.7629 14.081 21 14.6533 21 15.25V18.75C21 19.3467 20.7629 19.919 20.341 20.341C19.919 20.7629 19.3467 21 18.75 21H15.25C14.6533 21 14.081 20.7629 13.659 20.341C13.2371 19.919 13 19.3467 13 18.75V15.25C13 14.6533 13.2371 14.081 13.659 13.659C14.081 13.2371 14.6533 13 15.25 13H18.75ZM8.75 3C9.34674 3 9.91903 3.23705 10.341 3.65901C10.7629 4.08097 11 4.65326 11 5.25V8.75C11 9.34674 10.7629 9.91903 10.341 10.341C9.91903 10.7629 9.34674 11 8.75 11H5.25C4.65326 11 4.08097 10.7629 3.65901 10.341C3.23705 9.91903 3 9.34674 3 8.75V5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H8.75ZM18.75 3C19.3467 3 19.919 3.23705 20.341 3.65901C20.7629 4.08097 21 4.65326 21 5.25V8.75C21 9.34674 20.7629 9.91903 20.341 10.341C19.919 10.7629 19.3467 11 18.75 11H15.25C14.6533 11 14.081 10.7629 13.659 10.341C13.2371 9.91903 13 9.34674 13 8.75V5.25C13 4.65326 13.2371 4.08097 13.659 3.65901C14.081 3.23705 14.6533 3 15.25 3H18.75Z"
                  fill="#141718"
                />
                <path d="M3 6H10.998V18H3V6Z" fill="#141718" />
                <path d="M13.002 6H21V18H13.002V6Z" fill="#141718" />
              </svg>
            </div>
            <div
              className="p-1 md:hidden border scale-90 relative"
              onClick={() => setGrid(1)}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5L18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75L21 19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5L15.25 21.5C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25L13 15.75ZM13 5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5L18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75L21 9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5L15.25 11.5C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25L13 5.75ZM3 15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5L8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75L11 19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5L5.25 21.5C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25L3 15.75ZM3 5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5L8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75L11 9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5L5.25 11.5C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25L3 5.75Z"
                  fill="#141718"
                />
                <path
                  d="M6 21.5L6 13.502L18 13.502L18 21.5L6 21.5Z"
                  fill="#141718"
                />
                <path
                  d="M6 11.498L6 3.5L18 3.5L18 11.498L6 11.498Z"
                  fill="#141718"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`grid mt-4 ${
          grid == 1
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        } gap-4`}
      >
        {products.map((prod, i) => {
          return <Product key={i} grid={grid} product={prod}></Product>;
        })}
      </div>
    </div>
  );
}

function Product({ grid, product }) {
  return (
    <div
      className={`relative group text-sm ${
        grid == 2 ? " sm:grid grid-cols-2 gap-4" : ""
      }`}
    >
      <div
        className={`w-full bg-[#f3f5f7] ${
          grid == 1
            ? "h-[200px] md:h-[250px] xl:h-[300px] 2xl:h-[350px]"
            : "h-[350px] sm:h-[275px]"
        } relative`}
      >
        <div
          className={`scale-0 group-hover:scale-100 duration-200 absolute z-10 bottom-2 w-10/12 left-1/2 -translate-x-1/2 ${
            grid == 1 ? "" : "hidden"
          }`}
        >
          <AddToCart prodId={product._id} />
        </div>
        <div className="absolute scale-0 group-hover:scale-100 z-10 top-4 right-4">
          <AddToWishlist />
        </div>
        <Offer />
        <Image
          className="aspect-auto object-cover"
          src={product.images[0]}
          fill
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Review></Review>
          <Link href={`/shop/${product._id}`}>
            <h3 className="font-semibold text-base">{product.name}</h3>
          </Link>
          <p className="font-semibold">
            <span>${product.price}</span>{" "}
            <span className="text-gray-500 pl-2 line-through">
              ${product.price + 50}
            </span>
          </p>

          <p className={`text-gray-500 my-2 ${grid == 1 ? "hidden " : " "}`}>
            {product.description}
          </p>
        </div>
        <div className={grid == 1 ? "hidden " : " "}>
          <AddToCart prodId={product._id} />
          <button className="flex active:scale-95 mx-auto my-2 items-center gap-1 justify-center text-center">
            <BiHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

function AddToCart({ prodId }) {
  const { addToCart, cart } = useContext(CartContext);

  const handleClick = () => {
    console.log("Button clicked, prodId:", prodId);
    if (!cart.find((item) => item === prodId)) {
      addToCart(prodId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 active:scale-95 duration-75 bg-gray-950 text-sm w-full text-white rounded-md"
    >
      Add to cart
    </button>
  );
}

function AddToWishlist() {
  return (
    <button className="active:scale-125 scale-150 rounded-full  ">
      <BiHeart className="" />
    </button>
  );
}

export default AllProducts;
