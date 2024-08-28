"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFormState } from "react-dom";
import { useState, useRef } from "react";
import { handleComment } from "../../../actions/user-actions";
export default function CommentForm({ commenterId, userId, postId, onSubmit }) {
  const commentRef = useRef();
  const [error, setError] = useState("");
  const validateComment = () => {
    onSubmit({ commenter: commenterId, comment: commentRef.current.value });
    setError((prevErr) =>
      commentRef.current.value.length <= 5
        ? "most be larger than 5 letters"
        : ""
    );
  };
  const [state, action] = useFormState(handleComment, "");
  return (
    <motion.form
      action={handleComment}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: 20 }}
      className="m-[20px]"
    >
      <div className="flex items-center gap-[20px]">
        <textarea
          type="text"
          name="comment"
          ref={commentRef}
          className={`bg-white/15 rounded-[3px] border-[.5px] w-[300px] max-w-[300px] min-h-[50px] h-[50px] max-h-[150px] p-[5px] font-[120] text-[15px] focus:outline-none ${
            error.length > 0 ? "border-red-600" : "border-white"
          }`}
          placeholder="most be larger than 5 letters"
        />
        <input name="commenter" defaultValue={commenterId} className="hidden" />
        <input name="user" defaultValue={userId} className="hidden" />
        <input name="postId" defaultValue={postId} className="hidden" />
        <motion.button
          className="bg-white rounded-[3px] p-[10px] w-[100px] text-[#010511] font-[100] text-[20px] duration-300 hover:shadow-[5px_5px_30px_0_#ffffff25]"
          onClick={validateComment}
        >
          submit
        </motion.button>
      </div>
    </motion.form>
  );
}
