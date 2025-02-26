"use client";

import { useState } from "react";
import Footer from "../footer/Footer";
import Step1Page from "./Step1Page";
import Step2Page from "./Step2Page";
import Step3Page from "./Step3Page";

function CartPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto mb-4">
        <h2 className="text-3xl font-semibold lg:text-4xl text-center my-6 lg:my-10">
          Cart
        </h2>
        <div className="flex sm:justify-center sm:w-10/12 md:w-9/12 mx-auto gap-6 md:justify-center">
          <Step step={step} k={1} name={"Shopping cart"} setStep={setStep} />
          <Step step={step} k={2} name={"Checkout details"} setStep={setStep} />
          <Step step={step} k={3} name={"Order complete"} setStep={setStep} />
        </div>
        {step === 1 && <Step1Page />}
        {step === 2 && <Step2Page />}
        {step === 3 && <Step3Page />}
      </div>
      <Footer />
    </>
  );
}

function Step({ step, setStep, k, name }) {
  return (
    <div
      className={`pb-4 border-b-[3px] sm:w-1/3 ${
        step === k ? "w-10/12  sm:w-1/3 border-b-black" : "border-b-transparent"
      }
      ${step > k ? "hidden sm:block border-b-sec-green" : ""}
      `}
      onClick={() => setStep(k)}
    >
      <div className="flex  gap-2  items-center">
        <span
          className={`px-3 py-[3px] text-white rounded-3xl  ${
            step === k ? "bg-black " : "bg-gray-500"
          } 
          ${step > k ? "bg-sec-green" : ""}
          text-center`}
        >
          {k < step ? "✓" : k}
        </span>
        <h2 className={step !== k ? "hidden sm:block" : ""}>{name}</h2>
      </div>
    </div>
  );
}

export default CartPage;
