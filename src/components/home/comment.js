"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Comment({ comment, userId }) {
  const [commenter, setCommenter] = useState({
    name: "",
    avatarName: "",
    followers: 0,
  });
  useEffect(() => {
    const getCommenter = async () => {
      const response = await fetch(
        `http://${process.env.API}/user/${comment.commenter}`
      );
      const commentor = await response.json();
      setCommenter(commentor);
    };
    getCommenter();
  }, []);
  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  const name = commenter.name.split(" ").slice(0, 2).join(" ");
  const followers = commenter.followers.length;
  return (
    <motion.div
      className="w-[538px] p-[10px] rounded-[4px] border-1 border-white/20 mt-[10px] mb-[5px] relative left-[30%]"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      exit="hidden"
    >
      <Link
        href={
          userId == comment.commenter
            ? `/profile/${comment.commenter}`
            : `/profile/${userId}/${comment.commenter}`
        }
      >
        <div className="flex gap-[15px] items-center hover:bg-white/5 duration-[.35s] p-[10px] rounded-[3px] hover:border-white/5 border-1 border-transparent">
          <Image
            src={
              commenter.avatarName
                ? `http://${process.env.API}/avatars/${commenter.avatarName}`
                : "/Header/man.png"
            }
            alt="comment avatar"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px] rounded-full"
          />
          <div>
            <h1 className="font-[130] text-[17px]">{name}</h1>
            <p className="font-[110] text-[12px]">
              {followers}&ensp;
              {followers < 2
                ? `Follower`
                : followers < 10
                ? `Followers`
                : `Follower`}
            </p>
          </div>
        </div>
      </Link>
      <p className="font-[150] pt-[15px] pl-[10px]">{comment.comment}</p>
    </motion.div>
  );
}
