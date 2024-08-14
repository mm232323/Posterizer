"use client";
import Header from "@/components/layout/header";
import FilterButtons from "@/components/nots/filterButtons";
import NotifMessage from "@/components/nots/notifMessage";
import LoadingIndicator from "@/components/ui/loadingIndicator";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { handleDeleteNotif } from "../../../../actions/user-actions";
export default function Notifications({ params }) {
  const [list, setList] = useState("all");
  const [nots, setNots] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchNots() {
      const response = await fetch(
        `http://localhost:8080/user/${params.id}`,
        {}
      );
      if (!response.ok) redirect("/");
      const { nots } = await response.json();
      setNots(nots);
    }
    setIsLoading(true);
    fetchNots();
    setIsLoading(false);
  }, []);

  let handleClick = (notId) => {
    handleDeleteNotif(notId, params.id);
    setNots((prevNots) => {
      return prevNots.filter((notif) => notif.id !== notId);
    });
  };

  const selectList = (name) => {
    console.log(name);
  };
  return (
    <>
      <Header isAuth={true} id={params.id} />
      <center>
        <Image
          src="/Notifications/head_title.png"
          width={393}
          height={101}
          alt="notifications head"
          className="relative top-[70px] mb-[70px]"
        />
      </center>
      <motion.div
        layout
        className="flex items-center relative justify-center flex-col"
      >
        <center>
          <FilterButtons onSelectList={selectList} />
          {isLoading && <LoadingIndicator />}
          {!nots?.length && (
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
              />
            </>
          )}
        </center>
        {nots?.length &&
          nots.map((notification, idx) => (
            <NotifMessage
              id={params.id}
              key={idx}
              notId={notification.id}
              notif={notification}
              onRemoveNot={handleClick}
            />
          ))}
      </motion.div>
    </>
  );
}
