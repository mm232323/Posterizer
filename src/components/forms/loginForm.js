"use client";
import React from "react";
import { login } from "../../../actions/auth-actions";
import { useFormState } from "react-dom";
import { useState } from "react";
export default function LoginForm() {
  const [state, action] = useFormState(login, false);
  const [isLoading, setIsLoading] = useState(false);
  // function handleClick() {
  //   if (!state) setIsLoading(true);
  // }
  return (
    <form
      className="[@media(min-width:770px)]:p-[50px] [@media(min-width:770px)]:pl-[70px] [@media(max-width:890px)]:pl-[30px] [@media(max-width:770px)]:p-0 [@media(max-width:770px)]:relative [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] w-fit [@media(max-width:600px)]:top-[600px] [@media(max-width:770px)]:top-[750px]"
      action={action}
    >
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="email"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state ? "text-red-600" : "text-white"
          }`}
        >
          Email Address
        </label>
        <input
          disabled={!state & isLoading}
          type="email"
          name="email"
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="password"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state ? "text-red-600" : "text-white"
          }`}
        >
          Password
        </label>
        <input
          disabled={!state & isLoading}
          type="password"
          name="password"
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <button
        // onClick={handleClick}
        className={`p-[5px] w-[240px] h-[71px] rounded-[1px] font-[100] text-[30px] hover:shadow-[0_7px_20px_0_#83c9c527] duration-[.5s] mt-[30px] relative top-[10px] ${
          isLoading && !state
            ? "text-white border-white border-[1px] bg-gradient-to-r from-transparent to-transparent"
            : "text-[#0E141F] bg-gradient-to-r from-[#83C9C5] to-[#4997B0]"
        }`}
      >
        {isLoading && !state ? "Loging in..." : "Log in"}
      </button>
    </form>
  );
}
