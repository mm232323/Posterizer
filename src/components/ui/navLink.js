"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink(props) {
  const pathname = usePathname();
  const isActive = pathname == props.href
  return (
    <Link href={props.href} className={isActive ? "opacity-70 cursor-default" : 'cursor-pointer'}>
      {props.children}
    </Link>
  );
}
