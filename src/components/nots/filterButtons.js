"use client";
import { useState } from "react";
export default function FilterButtons({ onSelectList }) {
  const [listName, setListName] = useState("all");
  const handleSelectList = (name) => {
    setListName((prevList) => name);
    onSelectList(name);
  };
  return (
    <div className="flex gap-4 mt-[40px]">
      <button
        className={`border-none w-[167px] font-[200] h-[51px] rounded-[4px] ${
          listName == "my-posts"
            ? "bg-gradient-to-r from-[#46CAF3] to-[#2B98D6] text-white"
            : "bg-white/50 text-[#030B18]"
        }`}
        onClick={() => handleSelectList("my-posts")}
      >
        My Posts
      </button>
      <button
        className={`border-none w-[167px] font-[200] h-[51px] rounded-[4px] ${
          listName == "all"
            ? "bg-gradient-to-r from-[#46CAF3] to-[#2B98D6] text-white"
            : "bg-white/50 text-[#030B18]"
        }`}
        onClick={() => handleSelectList("all")}
      >
        All
      </button>
      <button
        className={`border-none w-[167px] font-[200] h-[51px] rounded-[4px] ${
          listName == "following-posts"
            ? "bg-gradient-to-r from-[#46CAF3] to-[#2B98D6] text-white"
            : "bg-white/50 text-[#030B18]"
        }`}
        onClick={() => handleSelectList("following-posts")}
      >
        Following Posts
      </button>
    </div>
  );
}
