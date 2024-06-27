import React from "react";
import Image from "next/image";
export default function Leader({ imageUrl, name, jobTitle, size }) {
  let width = size == "manager" ? "313px" : "280px";
  let width_sm = size == 'manager' ? 180 : 155
  let top = size == 'manager' ? 10 : 1
  return (
    <div className={`min-[650px]:mr-[70px] relative top-[${top}px] text-center`}>
      <Image
        src={imageUrl}
        width={1050}
        height={1050}
        className={`w-[${width}] relative mb-6 border-white border-[1px] rounded-full max-[650px]:w-[285px] max-[500px]:w-[185px] max-[650px]:left-1/2 max-[650px]:translate-x-[-50%]`}
        alt={name}
      />
      <h1 className="font-[600] text-[35px] max-[800px]:text-[28px] max-[650px]:text-[25px]">{name}</h1>
      <h3 className="font-[70] text-[17px] max-[800px]:text-[15px] max-[700px]:text-[13px]">{jobTitle}</h3>
    </div>
  );
}
