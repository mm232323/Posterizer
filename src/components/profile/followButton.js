"use client";
import React from "react";
import { handleFollow } from "../../../actions/user-actions";
import { useFormState } from "react-dom";
export default function FollowButton({ follower, followed, isFollowed }) {
  const [state, action] = useFormState(handleFollow);
  return (
    <form action={action}>
      <input
        className="hidden"
        type="text"
        name="follower"
        defaultValue={follower}
      />
      <input
        className="hidden"
        type="text"
        name="followed"
        defaultValue={followed}
      />
      <input
        className="hidden"
        type="text"
        name="is_follow"
        defaultValue={isFollowed}
      />
      <button
        className={`rounded-[4px] w-[300px] h-[50px]  left-[40px] top-[70px] border-[.5px] relative duration-400 ${
          isFollowed
            ? "bg-transparent border-white text-white"
            : "border-transparent bg-white text-[#010511]"
        }`}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </form>
  );
}
