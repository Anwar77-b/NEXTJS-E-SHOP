"use client";
import AuthModal from "@/components/header/AuthModal";
import { signup } from "@/lib/actions";
import Link from "next/link";
import React, { useActionState, useState } from "react";

function Page() {
  const [state, signUpAction] = useActionState(signup, undefined);
  const [agree, setAgree] = useState(false);

  return (
    <AuthModal>
      <div className="px-6 pt-8 text-sm text-gray-500 md:w-10/12">
        <h2 className="text-3xl font-semibold mb-4 text-black">Sign Up</h2>

        <p>
          Already have an account?{" "}
          <Link className="text-sec-green" href={"/signin"}>
            Sign In
          </Link>
        </p>
        <form action={signUpAction} className="py-6" autoComplete="off">
          <input
            type="text"
            placeholder="Full name"
            required
            name="fullName"
            className="border-b-gray-200 border-b block w-full pb-2 focus:outline-0 text-sm mb-4"
          />
          <input
            type="text"
            placeholder="Display name"
            required
            name="displayName"
            className="border-b-gray-200 border-b block w-full pb-2 focus:outline-0 text-sm mb-4"
          />
          <input
            type="email"
            name="email"
            required
            className="border-b-gray-200 border-b block w-full pb-2 mb-4 focus:outline-0 text-sm"
            placeholder="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            className="border-b-gray-200 border-b block w-full pb-2 focus:outline-0 text-sm mb-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="passwordConfirm"
            className="border-b-gray-200 border-b block w-full pb-2 focus:outline-0 text-sm mb-4"
          />
          <div className="mb-4 ">
            <input
              type="checkbox"
              onChange={() => setAgree(!agree)}
              checked={agree}
              name="agreement"
              id="agreement"
            />
            <label htmlFor="agreement" className="pl-2 text-xs">
              I agree with <b className="text-black">Privacy Policy</b> and{" "}
              <b className="text-black">Terms of Use</b>
            </label>
          </div>
          {state?.error && (
            <p className="text-red-500 pb-4 text-sm">{state?.error}</p>
          )}

          <button
            disabled={!agree}
            className={`w-full mb-4 py-2 text-center text-white rounded-md ${
              agree ? "bg-black" : "bg-gray-900 opacity-80"
            }`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </AuthModal>
  );
}

export default Page;
