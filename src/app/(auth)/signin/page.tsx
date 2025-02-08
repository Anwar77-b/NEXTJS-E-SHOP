"use client";
import AuthModal from "@/components/header/AuthModal";
import { login } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { useActionState } from "react";

function Signin() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <AuthModal>
      <div className="px-6 pt-8 text-sm text-gray-500 md:w-10/12">
        <h2 className="text-3xl font-semibold mb-4 text-black">Sign In</h2>
        <p>
          Don t have an accout yet?{" "}
          <Link className="text-sec-green" href={"/signup"}>
            Sign Up
          </Link>
        </p>
        <form action={loginAction} className="py-6">
          <input
            type="email"
            name="email"
            required
            className="border-b-gray-200 border-b block w-full pb-2 mb-4 focus:outline-0 text-sm"
            placeholder="Your usernam or email address"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="border-b-gray-200 border-b block w-full pb-2 focus:outline-0 text-sm mb-4"
          />
          <div className="flex items-center justify-between mb-4 text-xs">
            <div className="">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember" className="pl-2">
                Remember me
              </label>
            </div>
            <div className="font-bold text-black">Forgot password?</div>
          </div>
          {state?.error && (
            <p className="text-red-500 pb-4 text-sm">{state?.error}</p>
          )}
          <button className="w-full mb-4  py-2 text-center bg-black text-white rounded-md">
            Sign In
          </button>
        </form>
      </div>
    </AuthModal>
  );
}

export default Signin;
