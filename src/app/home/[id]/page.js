import Followed from "@/components/home/followed";
import Post from "@/components/home/post";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home({ params }) {
  const user = await fetch(
    `http://${process.env.NEXT_PUBLIC_PUBLICAPI}/user/${params.id}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0, tags: ["post-update"] },
    }
  );

  if (!user.ok) redirect("/");
  let userRes = await user.json();
  let allPosts = await fetch(
    `http://${process.env.NEXT_PUBLIC_PUBLICAPI}/user/posts`
  );
  if (!allPosts.ok) redirect("/");
  allPosts = await allPosts.json();
  allPosts = allPosts.posts;
  return (
    <>
      <Header isAuth={true} id={params.id} />
      <div className="flex gap-[50px] p-[50px] pt-[30px] selection:bg-white selection:text-black">
        <div className="w-[321px] h-[269px] bg-white/5 rounded-[8px] border-white/70 border-[1px] text-center flex items-center flex-col">
          <Image
            src={
              !userRes.avatarName
                ? "/Header/man.png"
                : `http://${process.env.NEXT_PUBLIC_PUBLICAPI}/avatars/${userRes.avatarName}`
            }
            alt="avatar"
            width={1000}
            height={1000}
            className="rounded-full w-[90px] h-[90px] border-white border-1 mt-[30px] shadow-large mb-[10px]"
          />
          <h3 className="font-[100] text-[18px] pb-[2px]">
            {userRes.followers?.length}&ensp;Followers
          </h3>
          <h3 className="font-[100] text-[18px] pb-[12px]">
            {userRes.views}&ensp;Views
          </h3>
          <Link href={`/profile/${params.id}`}>
            <button className="text-white font-[100] rounded-[1px] border-none w-[136px] h-[46px] bg-gradient-to-r from-[#1867B0] to-[#0AB1B1] duration-300 cursor-pointer hover:shadow-[0_10px_30px_0_#0da1b12c]">
              Show profile
            </button>
          </Link>
        </div>
        <div className="w-[538px] h-[165px] bg-white/5 rounded-[8px] border-white/70 border-[1px] text-center flex items-center flex-col">
          <p className="font-[100] text-[21px] pt-[15px] pb-[12px]">
            What’s in your Mind today
            <br />
            Mr.Mohammed Q
          </p>
          <Link href={`/poster/${params.id}`}>
            <button className="text-white font-[100] rounded-[1px] w-[150px] h-[46px] border-white border-1 duration-300 cursor-pointer hover:shadow-[0_10px_30px_0_#ffffff27]">
              Start Posting
            </button>
          </Link>
        </div>
        <div className="w-[303px] h-[404px] bg-white/5 rounded-[8px] border-white/70 border-[1px] overflow-y-scroll overflow-x-hidden style-scrollbar">
          <h1 className="text-[32px] font-[100] p-[20px]">Top Followed</h1>
          <div className="flex flex-col">
            {!userRes.followed?.length ? (
              <p className="font-[150] opacity-50 pl-[20px]">
                You don't make a follow to anyone
              </p>
            ) : (
              userRes.followed?.map((follow, idx) => (
                <Followed
                  followId={follow}
                  id={params.id}
                  key={follow}
                  followRank={idx}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {allPosts.map((post) => (
        <Post key={post.id} post={post} id={params.id} />
      ))}
    </>
  );
}
