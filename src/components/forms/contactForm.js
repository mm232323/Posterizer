"use client";
import React from "react";
import { sendMessage } from "../../../actions/server-actions.js";
import { useFormState } from "react-dom";
export default function ContactForm() {
  const [formState, formAction] = useFormState(sendMessage, { errors: [] });
  return (
    <form
      className="[@media(min-width:770px)]:p-[50px] [@media(min-width:770px)]:pl-[70px] [@media(max-width:890px)]:pl-[30px] [@media(max-width:770px)]:p-0 [@media(max-width:770px)]:relative [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] w-fit [@media(max-width:600px)]:top-[600px] [@media(max-width:770px)]:top-[750px]"
      action={formAction}
    >
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="firstName"
          className={`text-[15px] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit duration-400 ${
            formState.errors.includes("first_name")
              ? "text-red-600"
              : "text-white"
          }`}
        >
          First name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder={
            formState.errors.includes("first_name") ? "write valid name" : ""
          }
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] [@media(max-width:1290px)]:w-[400px] [@media(max-width:850px)]:w-[320px] focus:border-[#13B7DB] ${
            formState.errors.includes("first_name")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="lastName"
          className={`text-[15px] duration-400 font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit ${
            formState.errors.includes("last_name")
              ? "text-red-600"
              : "text-white"
          }`}
        >
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder={
            formState.errors.includes("last_name") ? "write valid name" : ""
          }
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] focus:border-[#13B7DB] [@media(max-width:1290px)]:w-[400px] [@media(max-width:850px)]:w-[320px] ${
            formState.errors.includes("last_name")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="phone_number"
          className={`text-[15px] duration-400 font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit ${
            formState.errors.includes("phone") ? "text-red-600" : "text-white"
          }`}
        >
          Phone
        </label>
        <input
          type="number"
          name="phone_number"
          placeholder={
            formState.errors.includes("phone") ? "write phone number" : ""
          }
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] focus:border-[#13B7DB] [@media(max-width:1290px)]:w-[400px] [@media(max-width:850px)]:w-[320px] ${
            formState.errors.includes("phone")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="email"
          className={`text-[15px] duration-400 font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit ${
            formState.errors.includes("email") ? "text-red-600" : "text-white"
          }`}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder={
            formState.errors.includes("email") ? "write valid email" : ""
          }
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] focus:border-[#13B7DB] [@media(max-width:1290px)]:w-[400px] [@media(max-width:850px)]:w-[320px] ${
            formState.errors.includes("email")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          htmlFor="gender"
          className={`text-[15px] duration-400 font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit ${
            formState.errors.includes("gender") ? "text-red-600" : "text-white"
          }`}
        >
          Gender
        </label>
        <div
          name="gender"
          className={`"focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] focus:border-[#13B7DB] [@media(max-width:1290px)]:w-[400px] [@media(max-width:850px)]:w-[320px] [@media(max-width:850px)]:pr-0 ${
            formState.errors.includes("gender")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        >
          <center>
            <label className="font-[200] text-[15px] mr-[10px] [@media(max-width:850px)]:text-[13px]">
              Male
            </label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
            <label className="font-[200] text-[15px] mr-[10px] [@media(max-width:850px)]:text-[13px]">
              Female
            </label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
            <label className="font-[200] text-[15px] mr-[10px] [@media(max-width:850px)]:text-[13px]">
              Other
            </label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
          </center>
        </div>
      </div>
      <div className="flex flex-col w-fit static max-w-[500px]">
        <label
          htmlFor="message"
          className={`text-[15px] duration-400 font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit ${
            formState.errors.includes("message") ? "text-red-600" : "text-white"
          }`}
        >
          Message
        </label>
        <textarea
          type="email"
          name="message"
          placeholder={
            formState.errors.includes("message") ? "write a message" : ""
          }
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-400 w-[560px] focus:border-[#13B7DB] max-h-[250px] min-h-[50px] [@media(max-width:1290px)]:w-[400px] [@media(max-width:1290px)]:max-h-[200px] [@media(max-width:850px)]:w-[320px] ${
            formState.errors.includes("message")
              ? "text-red-400 border-red-300 focus:border-red-500"
              : "text-white"
          }`}
        />
      </div>
      <center>
        <button className="bg-gradient-to-r from-[#83C9C5] to-[#4997B0] p-[5px] w-[240px] h-[71px] rounded-[1px] text-[#0E141F] font-[100] text-[30px] hover:shadow-[0_7px_20px_0_#83c9c527] duration-[.5s] mt-[30px] [@media(max-width:770px)]:p-0">
          Submit
        </button>
      </center>
    </form>
  );
}
