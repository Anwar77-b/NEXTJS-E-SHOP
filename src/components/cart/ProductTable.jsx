"use client";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/components/context/CartContext";
import CheckoutContext from "./CheckoutContext";

function ProductTable({ products }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <section className="w-full md:w-7/12">
      <header className="pb-6 border-b border-b-gray-600 text-sm flex gap-12 justify-between *:font-semibold">
        <h4 className="flex-grow">Product</h4>
        <h4 className="hidden lg:block">Quantity</h4>
        <h4 className="hidden lg:block">Price</h4>
        <h4 className="hidden lg:block">Subtotal</h4>
      </header>
      <div>
        {products &&
          products.map((prod, i) => (
            <CartElement
              key={prod._id}
              prod={prod}
              removeFromCart={removeFromCart}
              index={i}
            />
          ))}
      </div>
      <Coupon />
    </section>
  );
}
function CartElement({ prod, removeFromCart, index }) {
  const { prodsWithQt } = useContext(CheckoutContext);
  const qt = prodsWithQt[index].qt;
  return (
    <div className="py-6 border-b border-b-gray-400 items-center text-sm flex gap-12 justify-between">
      <div className="flex-grow">
        <div className="flex items-center">
          <div className="w-20 h-24 mr-4 relative">
            <Image src={prod.images[0]} alt="Product" fill />
          </div>
          <div>
            <h3 className="font-semibold mb-2">{prod.name}</h3>
            <p className="text-xs mb-2">Color: Black</p>
            <button
              className="font-semibold text-gray-500 hidden lg:block"
              onClick={() => removeFromCart(prod._id)}
            >
              ✖ Remove
            </button>
            <div className="lg:hidden">
              <QuantityInput index={index} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <QuantityInput index={index} />
      </div>
      <span className="hidden lg:block">${prod.price}</span>
      <span className="font-bold hidden lg:block">
        ${(prod.price * qt).toFixed(2)}
      </span>
      <div className="lg:hidden pr-2 ">
        <p className="font-bold">${(prod.price * qt).toFixed(2)}</p>
        <p
          className="font-bold text-end text-gray-500"
          onClick={() => removeFromCart(prod._id)}
        >
          ✖
        </p>
      </div>
    </div>
  );
}

function QuantityInput({ index }) {
  const { prodsWithQt, addQt, rmvQt } = useContext(CheckoutContext);

  return (
    <div className="border py-1 w-16 border-black rounded-[4px] flex justify-between">
      <button className="px-2" onClick={() => rmvQt(index)}>
        -
      </button>
      <span>{prodsWithQt[index].qt}</span>
      <button className="px-2" onClick={() => addQt(index)}>
        +
      </button>
    </div>
  );
}

function Coupon() {
  return (
    <div className="my-8">
      <h3 className="font-semibold mb-2">Have a coupon?</h3>
      <p className="text-gray-600 text-sm mb-4">
        Add your code for an instant cart discount
      </p>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="px-4 border text-sm border-gray-700 flex items-center lg:w-2/3"
      >
        <i>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0181 15.3356L20.7727 16.0444H20.7727L21.0181 15.3356ZM21.0181 9.66437L21.2635 10.3731V10.3731L21.0181 9.66437ZM2.98189 15.3356L3.22727 16.0444H3.22727L2.98189 15.3356ZM2.98189 9.66437L2.73652 10.3731L2.73652 10.3731L2.98189 9.66437ZM15.5303 10.0303C15.8232 9.73744 15.8232 9.26256 15.5303 8.96967C15.2374 8.67678 14.7626 8.67678 14.4697 8.96967L15.5303 10.0303ZM8.46967 14.9697C8.17678 15.2626 8.17678 15.7374 8.46967 16.0303C8.76256 16.3232 9.23744 16.3232 9.53033 16.0303L8.46967 14.9697ZM6 20.75C4.20507 20.75 2.75 19.2949 2.75 17.5H1.25C1.25 20.1234 3.37665 22.25 6 22.25V20.75ZM21.25 17.5C21.25 19.2949 19.7949 20.75 18 20.75V22.25C20.6234 22.25 22.75 20.1234 22.75 17.5H21.25ZM18 4.25C19.7949 4.25 21.25 5.70507 21.25 7.5H22.75C22.75 4.87665 20.6234 2.75 18 2.75V4.25ZM6 2.75C3.37665 2.75 1.25 4.87665 1.25 7.5H2.75C2.75 5.70507 4.20507 4.25 6 4.25V2.75ZM21.2635 14.6269C20.3815 14.3216 19.75 13.4836 19.75 12.5H18.25C18.25 14.1424 19.3054 15.5363 20.7727 16.0444L21.2635 14.6269ZM19.75 12.5C19.75 11.5164 20.3815 10.6784 21.2635 10.3731L20.7727 8.95565C19.3054 9.46367 18.25 10.8576 18.25 12.5H19.75ZM4.25 12.5C4.25 13.4836 3.61845 14.3216 2.73652 14.6269L3.22727 16.0444C4.69461 15.5363 5.75 14.1424 5.75 12.5H4.25ZM2.73652 10.3731C3.61845 10.6784 4.25 11.5164 4.25 12.5H5.75C5.75 10.8576 4.69462 9.46367 3.22727 8.95565L2.73652 10.3731ZM22.75 8.5V7.5H21.25V8.5H22.75ZM21.25 16.5V17.5H22.75V16.5H21.25ZM1.25 16.5V17.5H2.75V16.5H1.25ZM2.75 8.5V7.5H1.25V8.5H2.75ZM18 20.75H6V22.25H18V20.75ZM18 2.75H6V4.25H18V2.75ZM2.73652 14.6269C2.05785 14.8619 1.25 15.4975 1.25 16.5H2.75C2.75 16.4441 2.77081 16.3708 2.85172 16.2813C2.9366 16.1873 3.06974 16.0989 3.22727 16.0444L2.73652 14.6269ZM21.2635 10.3731C21.9422 10.1381 22.75 9.50246 22.75 8.5H21.25C21.25 8.55587 21.2292 8.62917 21.1483 8.71871C21.0634 8.81265 20.9303 8.90111 20.7727 8.95565L21.2635 10.3731ZM3.22727 8.95565C3.06974 8.90111 2.9366 8.81265 2.85172 8.71871C2.77081 8.62917 2.75 8.55587 2.75 8.5H1.25C1.25 9.50246 2.05785 10.1381 2.73652 10.3731L3.22727 8.95565ZM20.7727 16.0444C20.9303 16.0989 21.0634 16.1873 21.1483 16.2813C21.2292 16.3708 21.25 16.4441 21.25 16.5H22.75C22.75 15.4975 21.9422 14.8619 21.2635 14.6269L20.7727 16.0444ZM9.25 9.5C9.25 9.63807 9.13807 9.75 9 9.75V11.25C9.9665 11.25 10.75 10.4665 10.75 9.5H9.25ZM9 9.75C8.86193 9.75 8.75 9.63807 8.75 9.5H7.25C7.25 10.4665 8.0335 11.25 9 11.25V9.75ZM8.75 9.5C8.75 9.36193 8.86193 9.25 9 9.25V7.75C8.0335 7.75 7.25 8.5335 7.25 9.5H8.75ZM9 9.25C9.13807 9.25 9.25 9.36193 9.25 9.5H10.75C10.75 8.5335 9.9665 7.75 9 7.75V9.25ZM15.25 15.5C15.25 15.6381 15.1381 15.75 15 15.75V17.25C15.9665 17.25 16.75 16.4665 16.75 15.5H15.25ZM15 15.75C14.8619 15.75 14.75 15.6381 14.75 15.5H13.25C13.25 16.4665 14.0335 17.25 15 17.25V15.75ZM14.75 15.5C14.75 15.3619 14.8619 15.25 15 15.25V13.75C14.0335 13.75 13.25 14.5335 13.25 15.5H14.75ZM15 15.25C15.1381 15.25 15.25 15.3619 15.25 15.5H16.75C16.75 14.5335 15.9665 13.75 15 13.75V15.25ZM14.4697 8.96967L8.46967 14.9697L9.53033 16.0303L15.5303 10.0303L14.4697 8.96967Z"
              fill="#6C7275"
            />
          </svg>
        </i>
        <input
          type="text"
          className="flex-grow py-3 px-2  focus:outline-none"
          placeholder="Coupon Code"
          name=""
          id=""
        />
        <button className="font-semibold">Apply</button>
      </form>
    </div>
  );
}

export default ProductTable;
