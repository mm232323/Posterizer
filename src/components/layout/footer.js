import Image from "next/image";
import NavLink from "../ui/navLink";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="width-full h-[285px] border-white border-t-[1px] bg-white/5">
      <center>
        <div className="relative top-[40px]">
          <Image
            className="inline"
            src="/posterizer.svg"
            alt="posterizer"
            width={157}
            height={54}
          />
          <NavLink href="/about">
            <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline pr-[30px] top-[4px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:pr-[15px] max-[450px]:top-[19px]">
              about
            </h1>
          </NavLink>
          <NavLink href="/contact">
            <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline top-[4px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:top-[19px]">
              contact
            </h1>
          </NavLink>
        </div>
      </center>
      <center>
        <hr className="w-[65%] opacity-40 translate-y-[60px]" />
      </center>
        <div className="flex gap-5 relative top-[90px] left-1/2 translate-x-[-5%]">
          <Image
            src="/About/facebook.png"
            width={30}
            height={30}
            alt="facebook"
          />
          <Image
            src="/About/instagram.png"
            width={30}
            height={30}
            alt="instagram"
          />
          <Image
            src="/About/twitter.png"
            width={30}
            height={30}
            alt="twitter"
          />
          <Image
            src="/About/youtube.png"
            width={30}
            height={30}
            alt="youtube"
          />
        </div>
      <center>
        <p className="inline text-[#89C6B7] font-[100] text-[18px] relative top-[120px] left-[-70px] mr-[50px]">
          56G5+FJQ, Madinet Qelyoub, Qalyub,
          <br />
          Al-Qalyubia Governorate 6320512
        </p>
        <Link href="/signup">
          <button className="w-[96px] max-[450px]:w-[55.75px] h-[44px] max-[450px]:h-[30px] max-[450px]:rounded-[4px] max-[450px]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[90px] mr-[20px] text-[#9CDFD0] font-[146] text-[20px] top-[87px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] max-[450px]:left-[50px] max-[450px]:top-[19px]">
            Sign up
          </button>
        </Link>
        <Link href="/login">
          <button className="w-[96px] max-[450px]:w-[55.75px] h-[44px] max-[450px]:h-[30px] max-[450px]:rounded-[4px] max-[450px]:text-[11.5px] border-white/60 border-[.5px] rounded-[8px] relative left-[90px] text-[#9CDFD0] font-[146] text-[20px] top-[87px] hover:bg-[#9CDFD0] hover:text-[#010511] duration-[.4s] max-[450px]:left-[50px] max-[450px]:top-[19px]">
            Log in
          </button>
      </Link>
      </center>
    </div>
  );
}
