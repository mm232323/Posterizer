"use client";
import React from "react";
import { submitAvatar } from "../../../actions/user-actions";
export default function Avatar({ id }) {
  const inputRef = React.useRef();
  const buttonRef = React.useRef();
  const handleChange = () => {
    buttonRef.current.click();
  };
  return (
    <div className="w-[293px] bg-black/70 h-[293px] opacity-0 hover:opacity-100 duration-400 cursor-pointer avatar absolute rounded-full top-[196px] left-[158.5px] selection:bg-white selection:text-black">
      <h3 className="text-[30px] text-center pt-[100px] duration-400">
        Change avatar
      </h3>
      <form
        action={submitAvatar}
        encType="multipart/form-data"
        className="relative left-[50%] translate-x-[-50%]"
      >
        <label
          className="block font-[200] text-[18px] pb-[20px] cursor-pointer duration-400 hover:text-blue-500 text-center"
          htmlFor="avatar"
        >
          choose one
        </label>
        <input
          ref={inputRef}
          onChange={handleChange}
          name="avatar"
          id="avatar"
          accept="image/*"
          type="file"
          className="hidden"
        />
        <input name="id" type="text" defaultValue={id} className="hidden" />
        <button
          ref={buttonRef}
          type="submit"
          className="font-[200] relative left-[50%] translate-x-[-50%] duration-400 border-white border-1 bg-blue-900 text-white p-[10px] rounded-[10px] text-[16px] hover:bg-white hover:text-blue-900 hover:border-blue-900"
        >
          submit
        </button>
      </form>
    </div>
  );
}
