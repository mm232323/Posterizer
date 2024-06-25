import React from "react";
import Image from "next/image";
export default function Leader({ imageUrl, name, jobTitle, size }) {
  let width = size == "manager" ? "313px" : "280px";
  let top = size == 'manager' ? '10px' : '110px'
  return (
    <div className={`mr-[70px] relative top-[${top}] text-center`}>
      <Image
        src={imageUrl}
        width={1050}
        height={1050}
        className={`w-[${width}] mb-6 border-white border-[1px] rounded-full`}
        alt={name}
      />
      <h1 className="font-[600] text-[35px]">{name}</h1>
      <h3 className="font-[70] text-[17px]">{jobTitle}</h3>
    </div>
  );
}
