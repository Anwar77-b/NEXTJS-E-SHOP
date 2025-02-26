import Image from "next/image";

function Step2Page() {
  return (
    <div className="md:flex mt-8 justify-between gap-16 items-start">
      <OrderForm />
      <OrderSummary />
    </div>
  );
}

function OrderForm() {
  return (
    <form className="w-full md:w-7/12 mb-5" action="">
      <section className="px-5 py-6 border border-black rounded-md">
        <h3 className="text-lg font-semibold mb-3">Contact Infomation</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-500 text-sm">
          <div>
            <label htmlFor="fName" className="font-semibold text-xs">
              FIRST NAME
            </label>
            <input
              type="text"
              id="fName"
              name="fName"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="First name"
            />
          </div>
          <div className="text-gray-500">
            <label htmlFor="lName" className="font-semibold mb-1 text-xs">
              LAST NAME
            </label>
            <input
              type="text"
              id="lName"
              name="lName"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="phoneNum" className="font-semibold mb-1 text-xs">
            PHONE NUMBER
          </label>
          <input
            type="text"
            id="phoneNum"
            name="phoneNum"
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            placeholder="Phone Number"
          />
        </div>
        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="email" className="font-semibold mb-1 text-xs">
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            placeholder="Your Email"
          />
        </div>
      </section>
      <section className="px-5 py-6 border border-black rounded-md mt-5">
        <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>

        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="address" className="font-semibold mb-1 text-xs">
            STREET ADDRESS
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            placeholder="Street Address"
          />
        </div>

        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="country" className="font-semibold mb-1 text-xs">
            COUNTRY
          </label>
          <select
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            name="country"
            id="country"
            defaultValue={"ff"}
          >
            <option value="ff" disabled>
              Country
            </option>

            <option value="Algeria">Algeria</option>
            <option value="Mannirica">Mannirica</option>
          </select>
        </div>
        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="townCity" className="font-semibold mb-1 text-xs">
            TOWN / CITY *
          </label>
          <input
            type="text"
            id="townCity"
            name="townCity"
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            placeholder="Street Address"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-500 text-sm">
          <div>
            <label htmlFor="state" className="font-semibold text-xs">
              STATE
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="State"
            />
          </div>
          <div className="text-gray-500">
            <label htmlFor="zip" className="font-semibold mb-1 text-xs">
              LAST NAME
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="Zip Code"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-6 border border-black rounded-md mt-5">
        <h3 className="text-lg font-semibold mb-3">Payment method</h3>
        <div className="pb-3 border-b border-b-gray-500 mb-3">
          <label
            htmlFor="cardPay"
            className="p-2 rounded-md flex items-center cursor-pointer border border-gray-400"
          >
            <input type="radio" name="payMethod" id="cardPay" />
            <span className="text-sm pl-2">Pay by Card Credit</span>
          </label>
          <label
            htmlFor="paypal"
            className="p-2 rounded-md flex mt-3 items-center cursor-pointer border border-gray-400"
          >
            <input type="radio" name="payMethod" id="paypal" />
            <span className="text-sm pl-2">Paypal</span>
          </label>
        </div>
        <div className="text-gray-500 text-sm my-4">
          <label htmlFor="cardNum" className="font-semibold mb-1 text-xs">
            CARD NUMBER
          </label>
          <input
            type="text"
            id="cardNum"
            name="cardNum"
            className="block rounded-md p-2 w-full border border-gray-400 mt-2"
            placeholder="6280 70xx xxxx xxxx"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-500 text-sm">
          <div>
            <label htmlFor="exp" className="font-semibold text-xs">
              EXPIRATION DATE
            </label>
            <input
              type="text"
              id="exp"
              name="exp"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="MM/YY"
            />
          </div>
          <div className="text-gray-500">
            <label htmlFor="cvc" className="font-semibold mb-1 text-xs">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              className="block rounded-md p-2 w-full border border-gray-400 mt-2"
              placeholder="CVC code"
            />
          </div>
        </div>
      </section>
      <button className="bg-black active:scale-95 transition-transform mt-3 text-sm text-white py-2 rounded-md w-full">
        Place Order
      </button>
    </form>
  );
}

function OrderSummary() {
  return (
    <section className="rounded-md border border-black p-6 w-full md:w-5/12">
      <h3 className="font-semibold mb-3">Order summary</h3>
      <div className="mb-4">
        <CartElement />
        <CartElement />
        <CartElement />
      </div>
      <div className="my-4 flex justify-between">
        <input
          type="text"
          className="p-2 block w-[78%] border rounded-md border-gray-300"
          placeholder="Input"
        />
        <button className="p-2 rounded-md w-1/5 bg-black text-white">
          Apply
        </button>
      </div>
      <div className="flex justify-between pb-2 mb-2 border-b border-b-gray-200">
        <p className="text-sm flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0181 14.8356L20.7727 15.5444H20.7727L21.0181 14.8356ZM21.0181 9.16437L21.2635 9.8731V9.8731L21.0181 9.16437ZM2.98189 14.8356L3.22727 15.5444H3.22727L2.98189 14.8356ZM2.98189 9.16437L2.73652 9.8731L2.73652 9.8731L2.98189 9.16437ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM21.2635 14.1269C20.3815 13.8216 19.75 12.9836 19.75 12H18.25C18.25 13.6424 19.3054 15.0363 20.7727 15.5444L21.2635 14.1269ZM19.75 12C19.75 11.0164 20.3815 10.1784 21.2635 9.8731L20.7727 8.45565C19.3054 8.96367 18.25 10.3576 18.25 12H19.75ZM4.25 12C4.25 12.9836 3.61845 13.8216 2.73652 14.1269L3.22727 15.5444C4.69461 15.0363 5.75 13.6424 5.75 12H4.25ZM2.73652 9.8731C3.61845 10.1784 4.25 11.0164 4.25 12H5.75C5.75 10.3576 4.69462 8.96367 3.22727 8.45565L2.73652 9.8731ZM22.75 8V7H21.25V8H22.75ZM21.25 16V17H22.75V16H21.25ZM1.25 16V17H2.75V16H1.25ZM2.75 8V7H1.25V8H2.75ZM18 20.25H6V21.75H18V20.25ZM18 2.25H6V3.75H18V2.25ZM2.73652 14.1269C2.05785 14.3619 1.25 14.9975 1.25 16H2.75C2.75 15.9441 2.77081 15.8708 2.85172 15.7813C2.9366 15.6873 3.06974 15.5989 3.22727 15.5444L2.73652 14.1269ZM21.2635 9.8731C21.9422 9.63813 22.75 9.00246 22.75 8H21.25C21.25 8.05587 21.2292 8.12917 21.1483 8.21871C21.0634 8.31265 20.9303 8.40111 20.7727 8.45565L21.2635 9.8731ZM3.22727 8.45565C3.06974 8.40111 2.9366 8.31265 2.85172 8.21871C2.77081 8.12917 2.75 8.05587 2.75 8H1.25C1.25 9.00246 2.05785 9.63813 2.73652 9.8731L3.22727 8.45565ZM20.7727 15.5444C20.9303 15.5989 21.0634 15.6873 21.1483 15.7813C21.2292 15.8708 21.25 15.9441 21.25 16H22.75C22.75 14.9975 21.9422 14.3619 21.2635 14.1269L20.7727 15.5444ZM9.25 9C9.25 9.13807 9.13807 9.25 9 9.25V10.75C9.9665 10.75 10.75 9.9665 10.75 9H9.25ZM9 9.25C8.86193 9.25 8.75 9.13807 8.75 9H7.25C7.25 9.9665 8.0335 10.75 9 10.75V9.25ZM8.75 9C8.75 8.86193 8.86193 8.75 9 8.75V7.25C8.0335 7.25 7.25 8.0335 7.25 9H8.75ZM9 8.75C9.13807 8.75 9.25 8.86193 9.25 9H10.75C10.75 8.0335 9.9665 7.25 9 7.25V8.75ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 15.25C14.8619 15.25 14.75 15.1381 14.75 15H13.25C13.25 15.9665 14.0335 16.75 15 16.75V15.25ZM14.75 15C14.75 14.8619 14.8619 14.75 15 14.75V13.25C14.0335 13.25 13.25 14.0335 13.25 15H14.75ZM15 14.75C15.1381 14.75 15.25 14.8619 15.25 15H16.75C16.75 14.0335 15.9665 13.25 15 13.25V14.75ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967Z"
              fill="#141718"
            />
          </svg>

          <span className="pl-2">JenkateMW</span>
        </p>
        <span className="text-sm font-bold text-sec-green">
          -$25.00 [Remove]
        </span>
      </div>
      <div className="flex justify-between pb-2 mb-2 border-b border-b-gray-200">
        <span className="text-sm">Shipping</span>
        <span className="text-sm font-bold">Free</span>
      </div>
      <div className="flex justify-between pb-2 mb-2 border-b border-b-gray-200">
        <span className="text-sm">Subtotal</span>
        <span className="text-sm font-bold">$1234.00</span>
      </div>
      <div className="flex justify-between mb-4 font-bold">
        <span>Total</span>
        <span>$1234.00</span>
      </div>
    </section>
  );
}
function CartElement() {
  return (
    <div className="py-6 border-b border-b-gray-400 items-center text-sm flex gap-12 justify-between">
      <div className="flex-grow">
        <div className="flex items-center">
          <div className="w-20 h-24 mr-4 relative">
            <Image src="/table.png" alt="Product" fill />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tray Table</h3>
            <p className="text-xs mb-2">Color: Black</p>

            <QuantityInput />
          </div>
        </div>
      </div>

      <span className="font-bold">$38.00</span>
    </div>
  );
}
function QuantityInput() {
  return (
    <div className="border py-1 w-16 border-black rounded-[4px] flex justify-between">
      <button className="px-2">-</button>
      <span>1</span>
      <button className="px-2">+</button>
    </div>
  );
}

export default Step2Page;
