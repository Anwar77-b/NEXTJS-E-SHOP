import Image from "next/image";
import { useState } from "react";

function FlyCart({ flyCartOpen, setFlyCartOpen }) {
  return (
    <div
      className={`flyCart-menu w-[300px]  origin-right duration-300  fixed top-0 right-0 bottom-0  z-10 bg-slate-50 p-4 ${
        flyCartOpen ? "" : "scale-x-0"
      }`}
    >
      <div>
        <div className="flex justify-between mb-4">
          <h2>Cart</h2>
          <button onClick={() => setFlyCartOpen(false)}>
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
      </div>
      <div className="flex flex-col justify-between h-[95%]">
        <article className=" self-start overflow-y-scroll w-full max-h-[60%]">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </article>
        <div>
          <ul className="flex flex-col mb-4">
            <li className="flex justify-between text-gray-500 py-2 border-b">
              Subtotal
              <span className="text-black text-sm">99.00$</span>
            </li>
            <li className="flex justify-between  py-2 border-b">
              Total
              <span className="text-black">199.49$</span>
            </li>
          </ul>
          <button className="w-full bg-[#141718] rounded-md py-2 text-white text-sm">
            Check out
          </button>
          <p className="text-center w-fit my-4 mx-auto border-b-2 border-b-black">
            View Cart
          </p>
        </div>
      </div>
    </div>
  );
}

function Product() {
  const [prdCount, setPrdCount] = useState(1);
  return (
    <section className="border-b flex justify-between items-start pb-4 mb-8">
      <div className="flex gap-2">
        <Image src={"/table.png"} width={75} height={75} alt={""}></Image>
        <div>
          <h3 className="font-semibold mb-1">Tray table</h3>
          <p className="text-sm mb-1 text-gray-500">Color : Black</p>
          <div className="border w-16 border-black rounded-sm flex justify-between">
            <button
              onClick={() => setPrdCount((prdCount) => prdCount - 1)}
              className="px-2"
            >
              -
            </button>
            <span>{prdCount}</span>
            <button
              onClick={() => setPrdCount((prdCount) => prdCount + 1)}
              className="px-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlyCart;
