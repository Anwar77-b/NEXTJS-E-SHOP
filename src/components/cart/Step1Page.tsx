import React from "react";
import ProductTable from "./ProductTable";

function Step1Page() {
  return (
    <div className="md:flex mt-8 justify-between gap-16 items-start">
      <ProductTable />
      <CartSummary />
    </div>
  );
}

function CartSummary() {
  return (
    <section className="rounded-md border border-black p-6 w-full md:w-5/12">
      <h3 className="font-semibold mb-6">Cart summary</h3>
      <div className="mb-6">
        <div className="border border-black flex px-2 items-center rounded-md mb-2 peer-checked:bg-red-400">
          <input
            type="radio"
            name="shipping"
            id="ship-free"
            defaultChecked
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
          <input type="radio" name="shipping" id="ship-exp" />
          <label
            htmlFor="ship-exp"
            className="flex cursor-pointer justify-between py-2 w-full ml-2"
          >
            <span>Express shipping</span>
            <span>+$15.00</span>
          </label>
        </div>
        <div className="border  border-black   flex px-2  items-center rounded-md mb-2">
          <input type="radio" name="shipping" id="pickup" />
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
        <span className="text-sm font-bold">$1234.00</span>
      </div>
      <div className="flex justify-between mb-4 font-bold">
        <span>Subtotal</span>
        <span>$1234.00</span>
      </div>
      <button className="bg-black active:scale-95 transition-transform text-white py-2 rounded-md w-full">
        Checkout
      </button>
    </section>
  );
}

export default Step1Page;
