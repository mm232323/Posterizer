import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";
import FollowButton from "@/components/profile/followButton";
import Post from "@/components/profile/Post";
export default async function AnotherUserProfile({ params }) {
  const response1 = await fetch(
    `${process.env.HOST_SERVER_PORT}/user/${params.id2}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0 },
    }
  );
  const response2 = await fetch(
    `${process.env.HOST_SERVER_PORT}/user/${params.id}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  let user = await response2.json();
  let isFollowed = user.followed.includes(params.id2);
  let { name, posts, choosen_gender, phone, avatarName, views, followers } =
    await response1.json();
  name = name.split(" ").slice(0, 2);
  name[1] = name[1][0];
  name = name.join(" ");
  return (
    <main className="selection:bg-white selection:text-black">
      <Header size="large" isAuth={true} id={params.id} avatar={avatarName} />
      <div className="p-[40px] grid grid-rows-1 grid-cols-2">
        <div className="w-[529px] h-[840px] bg-gradient-to-bl from-[#4997B0]/5 to-[#1DB6BF]/5 rounded-[30px]">
          <Image
            src={
              !avatarName
                ? "/Header/man.png"
                : `${process.env.HOST_SERVER_PORT}/avatars/${avatarName}`
            }
            width={520}
            height={520}
            className="w-[293px] h-[293px] rounded-full border-white border-[.5px] relative top-[40px] left-1/2 translate-x-[-50%]"
          />
          <h1 className="text-[45px] font-[469] relative top-[50px] text-center mb-[15px]">
            {choosen_gender == "Male"
              ? "Mr."
              : choosen_gender == "Female"
              ? "Ms."
              : ""}
            {name}
          </h1>
          <p className="font-[100] text-[28px] left-[40px] relative top-[60px] opacity-80 mb-[15px]">
            Name: {name}
          </p>
          <p className="font-[100] text-[28px] left-[40px] relative top-[60px] opacity-80 mb-[15px]">
            Gender: {choosen_gender}
          </p>
          <p className="font-[100] text-[28px] left-[40px] relative top-[60px] opacity-80 mb-[15px]">
            Phone: {phone}
          </p>
          <p className="font-[100] text-[28px] left-[40px] relative top-[60px] opacity-80 mb-[15px]">
            Views: {views}
          </p>
          <p className="font-[100] text-[28px] left-[40px] relative top-[60px] opacity-80 mb-[15px]">
            Followers: {followers.length}
          </p>
          <FollowButton
            follower={params.id}
            followed={params.id2}
            isFollowed={isFollowed}
          />
        </div>
        <div className="w-[752px] bg-gradient-to-bl from-[#4997B0]/5 to-[#1DB6BF]/5 rounded-[30px] relative left-[-100px] p-[30px] pl-[40px]">
          <h1 className="text-[45px] font-[469]">Shared Posts</h1>
          {posts.length == 0 ? (
            <p className="font-[100] text-[23px] pt-[10px] opacity-60">
              You havn't post any posts
            </p>
          ) : (
            posts.map((post, idx) => (
              <Post
                key={idx}
                post={post}
                serverHost={process.env.HOST_SERVER_PORT}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
