"use client";
import React from "react";
import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import Comment from "./comment";
export default function Comments({ comments, userId }) {
  const [toggleComments, setToggleComments] = useState(false);
  if (comments.length == 0) return;
  const handleToggle = () => {
    setToggleComments((prevState) => !prevState);
  };
  return (
    <div className="relative top-[-270px] mb-[20px]">
      <center>
        <div className="flex gap-[5px] relative left-[50%] translate-x-[-6%] items-center opacity-[70%]">
          <p className="font-[120] cursor-pointer" onClick={handleToggle}>
            {toggleComments ? "hide" : "show"} all comments{" "}
          </p>
          <motion.div animate={{ rotate: toggleComments ? 180 : 0 }}>
            <TiArrowSortedUp size={14} />
          </motion.div>
        </div>
      </center>
      <motion.div layout>
        <AnimatePresence>
          {toggleComments
            ? comments.map((comment, idx) => (
                <Comment userId={userId} key={idx} comment={comment} />
              ))
            : ""}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
