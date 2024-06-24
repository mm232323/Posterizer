import Image from "next/image";
import Link from "next/link";
export default function Header({ size, isAuth }) {
  return (
    <>
      {size == "small" && (
        <header className="bg-white/5 w-[842px] max-[450px]:w-[348.62px] h-[116px] max-[450px]:h-[70.03px] border-white/25 border-[.3px] rounded-[11px] max-[450px]:rounded-[6px] relative left-1/2 translate-x-[-50%] top-[45px] max-[1025px]:top-[70px]">
          <Image
            src="/posterizer.svg"
            width={157}
            height={54}
            className="relative max-[450px]:w-[99.78px] ml-[50px] max-[450px]:ml-[20px] top-1/2 translate-y-[-50%] inline md_screen_max"
          />
          <Image
            src="/posterizerIco.svg"
            width={39.33}
            height={29.95}
            className="relative max-[450px]:w-[39.33px] ml-[50px] max-[450px]:ml-[20px] top-1/2 translate-y-[-50%] max-[450px]:translate-y-[-50%] inline sm_screen_min"
          />
          <Link href="/about">
            <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline pr-[30px] top-[32px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:pr-[15px] max-[450px]:top-[19px]">
              about
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline top-[32px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:top-[19px]">
              contact
            </h1>
          </Link>
          <Link href="/signup">
            <button className="w-[96px] max-[450px]:w-[55.75px] h-[44px] max-[450px]:h-[30px] max-[450px]:rounded-[4px] max-[450px]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[150px] mr-[20px] text-[#9CDFD0] font-[146] text-[20px] top-[32px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] max-[450px]:left-[50px] max-[450px]:top-[19px]">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="w-[96px] max-[450px]:w-[55.75px] h-[44px] max-[450px]:h-[30px] max-[450px]:rounded-[4px] max-[450px]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[150px] text-[#9CDFD0] font-[146] text-[20px] top-[32px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] max-[450px]:left-[50px] max-[450px]:top-[19px]">
              Log in
            </button>
          </Link>
        </header>
      )}
    </>
  );
}
