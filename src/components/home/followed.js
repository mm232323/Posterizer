import React from "react";
import Image from "next/image";
import Link from "next/link";
export default async function Followed({ id, followId, followRank }) {
  const response = await fetch(
    `${process.env.HOST_SERVER_PORT}/user/${followId}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0 },
    }
  );
  if (!response.ok) redirect("/");
  let followedUser = await response.json();
  if (!followedUser) return <p>Loading...</p>;
  followedUser.name = followedUser?.name.split(" ").slice(0, 2).join(" ");
  return (
    <Link href={`/profile/${id}/${followId}`}>
      <div
        className={`flex flex-row gap-[30px] cursor-pointer hover:bg-white/5 w-[303px] duration-300 p-[20px] pl-[25px] border-b-1 border-b-white/15 ${
          followRank == 0 ? "border-t-1 border-t-white/15" : ""
        }`}
      >
        <Image
          src={
            !followedUser?.avatarName
              ? "/Header/man.png"
              : `${process.env.HOST_SERVER_PORT}/avatars/${followedUser?.avatarName}`
          }
          alt="followed img"
          width={1000}
          height={1000}
          className="rounded-full w-[70px] h-[70px] "
        />
        <div>
          <h1 className="font-[150] text-[20px]">{followedUser?.name}</h1>
          <p className="font-[80] text-[13px] opacity-50">
            Followers&ensp;{followedUser?.followers.length}
          </p>
        </div>
      </div>
    </Link>
  );
}
