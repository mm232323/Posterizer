import React from "react";

export default function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center relative top-[30px] mb-[20px] duration-300">
      <div className="flex items-center justify-center relative w-[20px] h-[20px] rounded-full border-2 border-[hsl(0,0%,87%)] mx-[10px] bg-transparent circle-keys circle-keys-one">
        <div className="absolute  h-[16px] w-[16px] rounded-full bg-[hsl(0,0%,87%)] dot-keys dot-keys-one"></div>
      </div>
      <div className="flex items-center justify-center relative w-[20px] h-[20px] rounded-full border-2 border-[hsl(0,0%,87%)] mx-[10px] bg-transparent circle-keys circle-keys-two">
        <div className="absolute  h-[16px] w-[16px] rounded-full bg-[hsl(0,0%,87%)] dot-keys dot-keys-one"></div>
      </div>
      <div className="flex items-center justify-center relative w-[20px] h-[20px] rounded-full border-2 border-[hsl(0,0%,87%)] mx-[10px] bg-transparent circle-keys circle-keys-three">
        <div className="absolute  h-[16px] w-[16px] rounded-full bg-[hsl(0,0%,87%)] dot-keys dot-keys-one"></div>
      </div>
      <div className="flex items-center justify-center relative w-[20px] h-[20px] rounded-full border-2 border-[hsl(0,0%,87%)] mx-[10px] bg-transparent circle-keys circle-keys-four">
        <div className="absolute  h-[16px] w-[16px] rounded-full bg-[hsl(0,0%,87%)] dot-keys dot-keys-one"></div>
      </div>
    </div>
  );
}
