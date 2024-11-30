"use client";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BsReply } from "react-icons/bs";
import { handleLike } from "../../../actions/user-actions";
import { useEffect, useState, useRef } from "react";
import CommentForm from "../forms/commentForm";
import { AnimatePresence } from "framer-motion";
export default function ActionButtons({
  userId,
  viewerId,
  postId,
  onPushComment,
}) {
  const [isLiking, setIsLiking] = useState(null);
  const [toggleComment, setTogglecomment] = useState(false);
  const commentIconRef = useRef();
  useEffect(() => {
    const getLiker = async () => {
      if (userId == viewerId) return;
      const response = await fetch(
        `${process.env.HOST_SERVER_PORT}/user/${viewerId}`
      );
      const liker = await response.json();
      const like = liker.likes.filter(
        (like) => like.user === userId && like.postId === postId
      );
      console.log(like.length > 0);
      setIsLiking(like.length > 0);
    };
    getLiker();
  }, []);
  const likeClick = async () => {
    handleLike(userId, viewerId, postId);
    setIsLiking((prevLike) => !prevLike);
    console.log(isLiking);
  };
  const commentClick = () => {
    setTogglecomment((prevToggle) => !prevToggle);
  };
  const handleSubmit = (comment) => {
    onPushComment(comment);
    commentIconRef.current.click();
  };
  return (
    <>
      <div className=" w-[537px] bg-white/10 rounded-b-[5px] border-white/50 border-t-1 flex justify-between">
        <button
          className={`duration-[350ms] border-r-white/50 border-r-1 p-[20px] w-1/3 ${
            toggleComment
              ? "text-[#010511] bg-white"
              : "text-white bg-white/5 hover:bg-white/10"
          }`}
          onClick={commentClick}
          ref={commentIconRef}
        >
          <center>
            <FaRegCommentDots size={32} />
          </center>
        </button>
        <button className=" bg-white/5 hover:bg-white/10 duration-[350ms] border-r-white/50 border-r-1 p-[20px] w-1/3">
          <center>
            <BsReply size={32} />
          </center>
        </button>
        <button
          onClick={likeClick}
          disabled={isLiking == null}
          className="border-none bg-white/5 hover:bg-white/10 duration-[350ms] p-[20px] w-1/3"
        >
          <center>
            {isLiking ? <BiSolidLike size={32} /> : <BiLike size={32} />}
          </center>
        </button>
      </div>
      <AnimatePresence>
        {toggleComment ? (
          <CommentForm
            commenterId={viewerId}
            userId={userId}
            postId={postId}
            onSubmit={handleSubmit}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
