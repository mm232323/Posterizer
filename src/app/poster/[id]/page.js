import PosterForm from "@/components/forms/posterForm";
import Header from "@/components/layout/header";
import Image from "next/image";

export default async function Poster({ params }) {
  return (
    <main className="selection:bg-white selection:text-[#010511]">
      <Header isAuth={true} id={params.id} />
      <Image
        src="/Poster/background.png"
        width={1395}
        height={1065.57}
        alt="poster background"
        className="absolute top-0 left-[30px] opacity-60 cursor-default selection:bg-transparent z-[-1]"
      />
      <center>
        <Image
          src="/Poster/head_title.png"
          width={393}
          height={101}
          alt="poster head"
          className="relative top-[70px] mb-[70px]"
        />
        <PosterForm id={params.id} />
      </center>
    </main>
  );
}
