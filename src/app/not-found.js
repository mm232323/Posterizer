import Header from "@/components/layout/header";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Header size="small" />
      <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-default mt-[70px]">
        <center>
          <h1 className="font-[500] text-[120px] relative z-[3] top-[100px]">
            404
          </h1>
          <p className="font-[200] text-[20px] opacity-70 relative z-[3] top-[100px]">
            page not found
          </p>
          <Image
            src="/404.gif"
            width={1000}
            height={1000}
            className="w-[600px] h-[600px] mt-[-300px] opacity-10"
          />
        </center>
      </div>
    </>
  );
}
