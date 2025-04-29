import Image from "next/image";
import React, { useContext } from "react";
import CheckoutContext from "./CheckoutContext";

function Step3Page() {
  const { order, products } = useContext(CheckoutContext);
  console.log(order, products);
  return (
    <section className="w-fit mx-auto px-12 sm:px-28 py-8  lg:px-40 lg:py-12 shadow-xl mt-8">
      <h4 className="lg:text-center text-xl mb-2 text-gray-500 font-semibold">
        Thank you! 🎉
      </h4>
      <p className="lg:text-center text-2xl lg:text-4xl mb-2 font-[500]">
        Your order has been <br /> received
      </p>
      <div className="flex justify-center flex-wrap gap-8 lg:gap-16 py-8">
        {products.map((prod, i) => {
          return (
            <div className="relative w-20 h-24 bg-red-200" key={i}>
              <p className="bg-black px-2 z-10 text-white scale-110 rounded-3xl absolute -top-3 -right-3">
                {order.newOrder.products[i].quantity}
              </p>
              <Image src={products[i].images[0]} alt="Product" fill />
            </div>
          );
        })}
      </div>
      <section className=" mx-auto md:px-[20%] grid grid-cols-2 text-sm">
        <div className="text-gray-500 *:pb-4 ">
          <p>Order code:</p>
          <p>Date:</p>
          <p>Total:</p>
          <p>Payment method:</p>
        </div>
        <div className="font-semibold *:pb-4 w-fit *:w-fit">
          <p>{order.newOrder.userId}</p>
          <p>{order.newOrder.orderedAt}</p>
          <p>${order.newOrder.totalPrice}</p>
          <p>Cash</p>
        </div>
      </section>
      <button className="px-6 py-3 mx-auto block mt-6 text-lg bg-black text-white rounded-3xl">
        Purchase history
      </button>
    </section>
  );
}

export default Step3Page;
