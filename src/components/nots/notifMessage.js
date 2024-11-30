import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { motion } from "framer-motion";
export default function NotifMessage({ notif, notId, onRemoveNot, notType }) {
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
    <motion.div
      className="bg-[#D9D9D9]/10 border-white border-[.3px] w-[700px] h-[142px] rounded-[7px] mt-[40px] selection:bg-white selection:text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: -10 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div
        className="bg-white w-[30px] h-[30px] mt-[-15px] ml-[-17px] mb-[-15px] rounded-full"
        onClick={() => onRemoveNot(notId, notType)}
      >
        <IoClose
          color="black"
          size={30}
          className="cursor-pointer rounded-full inline mr-[-40px]"
        />
      </div>
      <Image
        src={
          notif.avatar.originalname
            ? `${process.env.HOST_SERVER_PORT}/avatars/${notif.avatar.originalname}`
            : "/Header/man.png"
        }
        className="rounded-full w-[90px] h-[90px] ml-[40px] mt-[25px] inline"
        width={590}
        height={590}
        alt="avatar"
      />
      <div className="flex flex-col items-start gap-[-165px] relative top-[-100px] left-[170px]">
        <h3 className="text-[22px]">{notif.title}</h3>
        <p className="font-[100] w-[496px] absolute top-[30px]">
          {notif.post_text}
        </p>
      </div>
      <div className="flex gap-[5px] items-center relative mt-[-40px] mb-[10px] left-[630px] top-[10px] w-fit">
        <FaEye color="white" size={12} />
        <p className="text-[13px] font-[100]">{formatedViews}</p>
        <AiFillLike color="white" size={12} />
        <p className="text-[13px] font-[100]">{formatedReactions}</p>
      </div>
      <p className="absolute opacity-80 font-[170] text-[18px] top-[10px] right-[10px]">
        {dateDistance < 1
          ? "Just today"
          : dateDistance == 1
          ? "1 Day Ago"
          : `${dateDistance} Days Ago`}
      </p>
    </motion.div>
  );
}
