"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";
import ActionButtons from "./actionButtons";
import Comments from "./comments";
import { useState, useEffect } from "react";
export default function Post({ post, id }) {
  const [user, setUser] = useState({ avatarName: "", name: "", followers: 0 });
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:8080/user/${post.id}`);
      const userData = await response.json();
      setUser(userData);
      setComments(post.comments);
    };
    getUser();
  }, []);
  const pushComment = (comment) => {
    setComments((comments) => {
      comments.push(comment);
      return comments;
    });
  };
  let { name, avatarName, followers } = user;
  name = name.split(" ").slice(0, 2).join(" ");
  const dateDistance =
    Math.floor(new Date() - new Date(post.date)) / 1000 / 60 / 60 / 24;
  return (
    <>
      <div className="w-[538px] bg-white/5 border-white/50 border-1 rounded-[5px] relative left-[48.7%] translate-x-[-50%] top-[-260px] mb-[20px] duration-400">
        <Link
          href={
            id === post.id ? `/profile/${post.id}` : `/profile/${id}/${post.id}`
          }
        >
          <div className="flex items-center w-fit pr-[20px] cursor-pointer rounded-br-[5px] duration-300 hover:bg-white/20">
            <Image
              src={
                !avatarName
                  ? "/Header/man.png"
                  : `http://localhost:8080/avatars/${avatarName}`
              }
              width={1000}
              height={1000}
              alt="poster avatar"
              className="w-[50px] h-[50px] rounded-full m-[20px] inline"
            />
            <div>
              <h1 className="font-[170] text-[17px]">{name}</h1>
              <p className="font-[80] text-[12px] opacity-70">
                {followers.length}&ensp;
                {followers.length < 2
                  ? `Follower`
                  : followers.length < 10
                  ? `Followers`
                  : `Follower`}
              </p>
            </div>
          </div>
        </Link>
        <p className="absolute top-[25px] right-[20px] font-[80] opacity-80 text-[14px]">
          {dateDistance < 1
            ? "Just today"
            : dateDistance < 2
            ? "1 Day Ago"
            : `${Math.floor(dateDistance)} Days Ago`}
        </p>
        <h1 className="text-[35px] font-[480px] pl-[20px] tracking-wider title-shadow">
          {post.title}
        </h1>
        <p className="text-[20px] font-[150] pt-[10px] pl-[20px] mb-[15px]">
          {post.post_text}
        </p>
        <div className="w-[500px] rounded-[6px] overflow-x-hidden ml-[20px] mb-[20px]">
          <Image
            width={1000}
            height={1000}
            src={`http://localhost:8080/uploads/${post.imgName}`}
            alt="post image"
            className="rounded-[6px]"
          />
        </div>
        <div className="flex gap-[15px] items-center pl-[20px] opacity-70 mb-[30px]">
          <p className="text-[11.5px] font-[120]">views</p>
          <p className="text-[11.5px] font-[120]">{post.views}</p>
          <p className="text-[11.5px] font-[120]">comments</p>
          <p className="text-[11.5px] font-[120]">{comments.length}</p>
          <p className="text-[11.5px] font-[120]">
            <BiSolidLike />
          </p>
          <p className="text-[11.5px] font-[120]">{post.reactions}</p>
        </div>
        <ActionButtons
          userId={post.id}
          viewerId={id}
          postId={post.postId}
          onPushComment={pushComment}
        />
      </div>
      <Comments comments={comments} userId={id} />
    </>
  );
}
