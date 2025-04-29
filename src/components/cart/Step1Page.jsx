import React, { useContext, useState } from "react";
import ProductTable from "./ProductTable";
import CheckoutContext from "./CheckoutContext";

function Step1Page({ step, setStep }) {
  const { products, prodsWithQt, shipping } = useContext(CheckoutContext);
  // console.log("ffffffffff", prodsWithQt);

  const totalPrice = prodsWithQt.reduce(
    (acc, prod) => acc + prod.price * prod.qt,
    0
  );

  return (
    <div className="md:flex mt-8 justify-between gap-16 items-start">
      <ProductTable products={products} />
      <CartSummary setStep={setStep} totalPrice={totalPrice} />
    </div>
  );
}

function CartSummary({ totalPrice, setStep }) {
  const { shipping, setShipping } = useContext(CheckoutContext);
  const totalWithShipping =
    shipping == 0
      ? totalPrice
      : shipping == 1
      ? totalPrice + 15
      : totalPrice * 1.25;

  return (
    <section className="rounded-md border border-black p-6 w-full md:w-5/12">
      <h3 className="font-semibold mb-6">Cart summary</h3>
      <div className="mb-6">
        <div className="border border-black flex px-2 items-center rounded-md mb-2 peer-checked:bg-red-400">
          <input
            type="radio"
            name="shipping"
            defaultChecked={shipping == 0}
            id="ship-free"
            onClick={() => setShipping(0)}
            className="peer"
          />
          <label
            htmlFor="ship-free"
            className="flex  justify-between py-2 w-full ml-2 cursor-pointer"
          >
            <span>Free shipping</span>
            <span>$0.00</span>
          </label>
        </div>

        <div className="border  border-black  flex  px-2 items-center rounded-md mb-2">
          <input
            type="radio"
            defaultChecked={shipping == 1}
            name="shipping"
            id="ship-exp"
            onClick={() => setShipping(1)}
          />
          <label
            htmlFor="ship-exp"
            className="flex cursor-pointer justify-between py-2 w-full ml-2"
          >
            <span>Express shipping</span>
            <span>+$15.00</span>
          </label>
        </div>
        <div className="border  border-black   flex px-2  items-center rounded-md mb-2">
          <input
            defaultChecked={shipping == 2}
            type="radio"
            name="shipping"
            id="pickup"
            onClick={() => setShipping(2)}
          />
          <label
            htmlFor="pickup"
            className="flex cursor-pointer justify-between p-2 w-full ml-2"
          >
            <span>Pick Up</span>
            <span>%21.00</span>
          </label>
        </div>
      </div>
      <div className="flex justify-between pb-2 mb-2 border-b border-b-gray-200">
        <span className="text-sm">Subtotal</span>
        <span className="text-sm font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4 font-bold">
        <span>Subtotal</span>
        <span>${totalWithShipping.toFixed(2)}</span>
      </div>
      <button
        className="bg-black active:scale-95 transition-transform text-white py-2 rounded-md w-full"
        onClick={() => setStep(2)}
      >
        Checkout
      </button>
    </section>
  );
}

export default Step1Page;
