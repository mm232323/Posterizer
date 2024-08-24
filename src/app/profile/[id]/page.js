import Header from "@/components/layout/header";
import Avatar from "@/components/profile/Avatar";
import Post from "@/components/profile/Post";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function UserProfile({ params }) {
  revalidatePath("/");
  const response = await fetch(`http://${process.env.API}/user/${params.id}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 0 },
  });
  if (!response.ok) redirect("/");
  let { name, posts, choosen_gender, avatarName, phone, views, followers } =
    await response.json();
  let name2 = name.split(" ").slice(0, 2);
  name2[1] = name2[1][0];
  name2 = name2.join(" ");
  return (
    <main className="">
      <Header size="large" isAuth={true} id={params.id} avatar={avatarName} />
      <div className="p-[40px] grid grid-rows-1 grid-cols-2">
        <div className="w-[529px] h-[800px] bg-gradient-to-bl from-[#4997B0]/5 to-[#1DB6BF]/5 rounded-[30px]">
          <Image
            src={
              !avatarName
                ? "/Header/man.png"
                : `http://${process.env.API}/avatars/${avatarName}`
            }
            width={520}
            height={520}
            alt="avatar man"
            className="w-[293px] h-[293px] rounded-full border-white border-[.5px] relative top-[40px] left-1/2 translate-x-[-50%]"
          />
          <Avatar id={params.id} />
          <h1 className="text-[45px] font-[469] relative top-[50px] text-center mb-[15px]">
            {choosen_gender == "Male"
              ? "Mr."
              : choosen_gender == "Female"
              ? "Ms."
              : ""}
            {name2}
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
        </div>
        <div className="w-[752px] bg-gradient-to-bl from-[#4997B0]/5 to-[#1DB6BF]/5 rounded-[30px] relative left-[-100px] p-[30px] pl-[40px]">
          <h1 className="text-[45px] font-[469]">Shared Posts</h1>
          {posts.length == 0 && (
            <p className="font-[100] text-[23px] pt-[10px] opacity-60">
              You havn't post any posts
            </p>
          )}
          {posts.length &&
            posts.map((post, idx) => <Post key={idx} post={post} />)}
        </div>
      </div>
    </main>
  );
}
