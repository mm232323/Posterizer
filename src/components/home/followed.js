import React from "react";
import Image from "next/image";
import Link from "next/link";
export default async function Followed({ id, followId }) {
  const response = await fetch(`http://localhost:8080/user/${followId}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 0 },
  });
  if (!response.ok) redirect("/");
  let { name, avatarName, followers } = await response.json();
  name = name.split(" ").slice(0, 2).join(" ");
  return (
    <Link href={`/profile/${id}/${followId}`}>
      <div className="flex flex-row gap-[30px] cursor-pointer hover:bg-white/5 w-[303px] duration-300 p-[20px] pl-[25px]">
        <Image
          src={
            !avatarName
              ? "/Header/man.png"
              : `http://localhost:8080/avatars/${avatarName}`
          }
          alt="followed img"
          width={1000}
          height={1000}
          className="rounded-full w-[70px] h-[70px] "
        />
        <div>
          <h1 className="font-[150] text-[20px]">{name}</h1>
          <p className="font-[80] text-[13px] opacity-50">
            Followers&ensp;{followers.length}
          </p>
        </div>
      </div>
    </Link>
  );
}
