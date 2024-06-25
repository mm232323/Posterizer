import Header from "../components/layout/header";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Image src="/Start/background1.png" fill className="md_screen_max" />
      <Image
        src="/Start/background2.png"
        width={902}
        height={901}
        className="absolute sm_screen_min"
      />
      <Image
        src="/Start/connecting_points1.png"
        width={1494}
        height={894}
        className="absolute h-[730px] lg_screen_max bottom-0"
      />
      <Image
        src="/Start/connecting_points2.png"
        width={3348.75}
        height={1152.87}
        className="absolute md_screen_max md_screen_min"
      />
      <Image
        src="/Start/connecting_points3.png"
        width={394.84}
        height={751.36}
        className="absolute bottom-0 sm_screen_min"
      />
      <Header size="small" />
      <h1 className="font-bold text-[79px] tracking-[2px] relative text-center top-[70px] max-[1025px]:text-[80px] max-[1025px]:top-[354px] max-[450px]:text-[35px] max-[450px]:top-[135px]">
        START POSTING
      </h1>
      <p className="text-[24px] max-[1025px]:text-[29px] font-[75] tracking-[5px] opacity-60 text-center relative top-[80px] max-[1025px]:top-[380px] w-[850px] left-1/2 translate-x-[-50%] max-[450px]:text-[17px] max-[450px]:w-[300px] max-[450px]:top-[150px]">
        Are you tired of the same old boring way of promoting your events and
        businesses? Well, look no further because Posterizer has got you
        covered!
      </p>
      <Link href="/login">
        <button className="bg-white max-[1025px]:p-[25px] rounded-[6px] max-[1025px]:rounded-[12px] text-[#010511] text-[26px] max-[1025px]:text-[30px] max-[450px]:text-[23px] max-[450px]:p-[15px] font-extralight p-[13px] relative left-1/2 translate-x-[-50%] top-[110px] max-[1025px]:top-[420px] max-[450px]:top-[180px] duration-[.4s] border-white border-[.5px] hover:bg-transparent hover:text-white">
          start now
        </button>
      </Link>
    </main>
  );
}
