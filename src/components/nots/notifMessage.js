import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
export default function NotifMessage({ notif, notId, id, onRemoveNot }) {
  const dateDistance =
    Math.floor(new Date() - new Date(notif.date)) / 1000 / 60 / 60 / 24;
  function formateNums(num) {
    if (num < 1000) return num;
    num = String(num).split("");
    for (let i = 0; i < num.length; i++) {
      if (i % 3 == 0) num[i] += ",";
    }
    return num.endsWith(",") ? num.slice(0, num.length - 1) : num;
  }
  const formatedViews = formateNums(notif.views);
  const formatedReactions = formateNums(notif.reactions);
  return (
    <div className="bg-[#D9D9D9]/10 border-white border-[.3px] w-[700px] h-[142px] rounded-[7px] mt-[40px] mb-[20px]">
      <div
        className="bg-white w-[30px] h-[30px] mt-[-15px] ml-[-17px] mb-[-15px] rounded-full"
        onClick={() => onRemoveNot(notId)}
      >
        <IoClose
          color="black"
          size={30}
          className="cursor-pointer rounded-full inline mr-[-40px]"
        />
      </div>
      <Image
        src="/Header/man.png"
        className="rounded-full w-[90px] h-[90px] ml-[40px] mt-[25px] inline"
        width={590}
        height={590}
        alt="avatar"
      />
      <h3 className="text-[22px] relative left-[35px] top-[-20px] inline">
        {notif.title}
      </h3>
      <br></br>
      <p className="font-[100] relative w-[496px] left-[165px] top-[-65px] inline-block">
        {notif.post_text}
      </p>
      <div className="flex gap-[5px] items-center">
        <FaEye color="white" size={12} />
        <p className="text-[13px] font-[100]">{formatedViews}</p>
        <AiFillLike color="white" size={12} />
        <p className="text-[13px] font-[100]">{formatedReactions}</p>
      </div>
      <p className="inline-block absolute pl-[320px] opacity-80 font-[170] text-[18px]">
        {dateDistance < 1
          ? "Just today"
          : dateDistance == 1
          ? "1 Day Ago"
          : `${dateDistance} Days Ago`}
      </p>
    </div>
  );
}
