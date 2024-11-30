"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Post({ post }) {
  let title = post.title.split("").slice(0, 20).join("");
  if (post.title.split("").length > 20) title += "...";
  let post_text = post.post_text.split("").slice(0, 40).join("");
  if (post.post_text.split("").length > 40) post_text += "...";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "just",
        duration: 0.65,
        delay: (post.postId - 1) * 0.2,
        type: "spring",
      }}
      className="w-[676px] h-[236px] bg-gradient-to-r from-[#2FB3DD]/10 to-[#357CAF]/10 rounded-[10px] mb-[40px] [@media(max-width:1312px)]:w-[576px] selection:bg-white selection:text-black"
    >
      {post.imgName !== undefined ? (
        <div className="relative w-[180px]  h-[180px] left-[30px] top-[18px] overflow-hidden rounded-[10px]">
          <Image
            src={`${process.env.HOST_SERVER_PORT}/uploads/${post.imgName}`}
            width={5000}
            height={5000}
            alt="post image"
            className="h-[180px] w-auto"
          />
        </div>
      ) : (
        ""
      )}
      <h1
        className={`relative font-[469] text-[47px] pt-[10px] pl-[240px] ${
          post.imgName == undefined ? "left-[-220px]" : "top-[-177px]"
        }`}
      >
        {title}
      </h1>
      <p
        className={`font-[100] text-[18px] relative left-[240px] w-[287px] opacity-70 ${
          post.imgName == undefined ? "left-[24px]" : "top-[-177px]"
        }`}
      >
        {post_text}
      </p>
      <span
        className={`font-[80] opacity-90 mr-[10px] text-[12px] relative pl-[20px]  ${
          post.imgName == undefined ? "top-[10px]" : "top-[-160px] left-[224px]"
        }`}
      >
        Views {post.views}
      </span>
      <span
        className={`font-[80] opacity-90 mr-[10px] text-[12px] relative pl-[20px] ${
          post.imgName == undefined ? "top-[10px]" : "top-[-160px] left-[224px]"
        }`}
      >
        Comments {post.comments.length}
      </span>
      <span
        className={`font-[80] opacity-90 mr-[10px] text-[12px] relative pl-[20px] ${
          post.imgName == undefined ? "top-[10px]" : "top-[-160px] left-[224px]"
        }`}
      >
        Reactions {post.reactions}
      </span>
    </motion.div>
  );
}
