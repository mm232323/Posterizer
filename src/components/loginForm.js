import React from "react";

export default function LoginForm() {
  return (
    <form className="pt-[200px] pl-[70px]">
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Email Address
        </label>
        <input
          type="email"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Password
        </label>
        <input
          type="password"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
    </form>
  );
}
