"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink(props) {
  const pathname = usePathname();
  const isActive = pathname == props.href;
  if (props.type == "text") {
    return (
      <Link
        href={props.href}
        className={isActive ? "opacity-70 cursor-default" : "cursor-pointer"}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <Link href={props.href}>
      <button className={`w-[96px] max-[565px]:w-[66px] max-[500px]:w-[55.75px] h-[44px] max-[565px]:h-[34px] max-[500px]:h-[30px] max-[565px]:rounded-[4px] max-[565px]:text-[16px] max-[500px]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[150px] max-[700px]:left-[100px] max-[665px]:left-[70px] mr-[20px] text-[#9CDFD0] font-[146] text-[20px] top-[32px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] max-[500px]:left-[50px] max-[500px]:top-[19px] ${isActive ? 'bg-gradient-to-r from-[#F03838] to-[#F0B138] text-[#0C1522]' : ''}`}>
        {props.children}
      </button>
    </Link>
  );
}
