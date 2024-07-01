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
      <button className={`w-[96px] [@media(max-width:565px)]:w-[66px] [@media(max-width:500px)]:w-[55.75px] h-[44px] [@media(max-width:565px)]:h-[34px] [@media(max-width:500px)]:h-[30px] [@media(max-width:565px)]:rounded-[4px] [@media(max-width:565px)]:text-[16px] [@media(max-width:500px)]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[150px] [@media(max-width:700px)]:left-[100px] [@media(max-width:665px)]:left-[70px] mr-[20px] text-[#9CDFD0] font-[146] text-[20px] top-[32px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] [@media(max-width:500px)]:left-[50px] [@media(max-width:500px)]:top-[19px] ${isActive ? 'bg-gradient-to-r from-[#F03838] to-[#F0B138] text-[#0C1522]' : ''}`}>
        {props.children}
      </button>
    </Link>
  );
}
