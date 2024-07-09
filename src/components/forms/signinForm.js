"use client";
import React from "react";
import { signin } from "../../../actions/server-actions";
import { useFormState } from "react-dom";
import RadioButtons from "./radioButtons";
export default function SigninForm() {
  const [state, action] = useFormState(signin, {
    errors: {
      name: "",
      gender: "",
      phone: "",
      email: "",
      password: "",
      check_password: "",
    },
  });
  return (
    <form
      className="[@media(min-width:770px)]:p-[50px] [@media(min-width:770px)]:pl-[70px] [@media(max-width:890px)]:pl-[30px] [@media(max-width:770px)]:p-0 [@media(max-width:770px)]:relative [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] w-fit [@media(max-width:600px)]:top-[600px] [@media(max-width:770px)]:top-[750px]"
      action={action}
    >
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="name"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.name ? "text-red-600" : "text-white"
          }`}
        >
          Full name
        </label>
        <input
          type="text"
          name="name"
          placeholder={state?.errors.name}
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state?.errors.name
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="phone"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.phone ? "text-red-600" : "text-white"
          }`}
        >
          Phone
        </label>
        <input
          type="number"
          placeholder={state?.errors.phone}
          name="phone"
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state?.errors.phone
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="gender"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.gender ? "text-red-600" : "text-white"
          }`}
        >
          Gender
        </label>
        <RadioButtons state={state} />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="email"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.email ? "text-red-600" : "text-white"
          }`}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder={state?.errors.email}
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state?.errors.email
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="password"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.password ? "text-red-600" : "text-white"
          }`}
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder={state?.errors.password}
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state?.errors.password
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="check_password"
          className={`text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            state?.errors.check_password ? "text-red-600" : "text-white"
          }`}
        >
          Check password
        </label>
        <input
          type="password"
          name="check_password"
          placeholder={state?.errors.check_password}
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
            state?.errors.check_password
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <button className="bg-gradient-to-r from-[#83C9C5] to-[#4997B0] p-[5px] w-[240px] h-[71px] rounded-[1px] text-[#0E141F] font-[100] text-[30px] hover:shadow-[0_7px_20px_0_#83c9c527] duration-[.5s] mt-[30px]">
        Sign up
      </button>
    </form>
  );
}
