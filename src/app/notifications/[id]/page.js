"use client";
import Header from "@/components/layout/header";
import FilterButtons from "@/components/nots/filterButtons";
import NotifMessage from "@/components/nots/notifMessage";
import LoadingIndicator from "@/components/ui/loadingIndicator";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { handleDeleteNotif } from "../../../../actions/user-actions";
import { useRouter } from "next/navigation";
export default function Notifications({ params }) {
  const [list, setList] = useState("all");
  const [nots, setNots] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchNots() {
      const response = await fetch(
        `http://${process.env.NEXT_PUBLIC_PUBLICAPI}/user/notifications/${params.id}`,
        {}
      );
      if (!response.ok) {
        router.push("/");
      }
      const res = await response.json();
      const nots = JSON.parse(res);
      setNots(nots);
    }
    setIsLoading(true);
    fetchNots();
    setIsLoading(false);
  }, []);

  let handleClick = (notId, type) => {
    handleDeleteNotif(type, notId, params.id);
    if (type == "me")
      setNots((prevNots) => {
        return {
          myNots: prevNots.myNots.filter((notif) => notif.id !== notId),
          followedNots: prevNots.followedNots,
        };
      });
    else if (type == "followed")
      setNots((prevNots) => {
        return {
          myNots: prevNots.myNots,
          followedNots: prevNots.followedNots.filter(
            (notif) => notif.id !== notId
          ),
        };
      });
  };

  const selectList = (name) => {
    setList((prevType) => name);
  };
  const myNots = nots?.myNots?.map((notification, idx) => (
    <NotifMessage
      id={params.id}
      key={idx}
      notId={notification.id}
      notif={notification}
      onRemoveNot={handleClick}
      notType="me"
    />
  ));
  const followedNots = nots?.followedNots?.map((notification, idx) => (
    <NotifMessage
      id={params.id}
      key={idx}
      notId={notification.id}
      notif={notification}
      onRemoveNot={handleClick}
      notType="followed"
    />
  ));
  let resultingNots;
  console.log(nots);
  if (list == "all")
    resultingNots = (
      <>
        {myNots}
        {followedNots}
      </>
    );
  else if (list == "my-posts") resultingNots = myNots;
  else resultingNots = followedNots;
  return (
    <div className="selection:bg-white selection:text-black">
      <Header isAuth={true} id={params.id} avatar={avatar} />
      <center>
        <Image
          src="/Notifications/head_title.png"
          width={393}
          height={101}
          alt="notifications head"
          className="relative top-[70px] mb-[70px]"
        />
      </center>
      <motion className="flex items-center relative justify-center flex-col">
        <center>
          <FilterButtons onSelectList={selectList} />
          {isLoading && <LoadingIndicator />}
          {!nots?.myNots?.length && !nots?.followedNots?.length && (
            <>
              <p className="font-[200] text-[20px] pt-[40px] opacity-70">
                no notifications found.
              </p>
              <Image
                src="/Notifications/no_nots.gif"
                alt="no notifications"
                className="w-[400px] h-[400px] opacity-20 grayscale-[1] brightness-[1.2]"
                width={640}
                height={640}
                unoptimized
              />
            </>
          )}
        </center>
        <motion.div layout>
          {(nots?.myNots?.length || nots?.followedNots?.length) &&
            resultingNots}
        </motion.div>
      </motion>
    </div>
  );
}
