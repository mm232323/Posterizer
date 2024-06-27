import Image from "next/image";
import NavLink from "../ui/navLink";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="width-full h-[320px] border-white border-t-[1px] bg-white/5 max-[450px]:h-[482px]">
      <center>
        <div className="relative top-[40px]">
          <Link href="/">
            <Image
              className="inline max-[450px]:w-[500px]"
              src="/posterizer.svg"
              alt="posterizer"
              width={157}
              height={54}
            />
          </Link>
          <div className="flex left-1/2">
            <NavLink href="/about" type='text'>
              <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline pr-[30px] top-[4px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:pr-[15px] max-[450px]:top-[-3px]">
                about
              </h1>
            </NavLink>
            <NavLink href="/contact" type='text'>
              <h1 className="font-[181] text-[23px] text-[#A1E5D5] relative inline top-[4px] left-[80px] hover:opacity-70 duration-[.4s] cursor-pointer max-[450px]:text-[13px] max-[450px]:left-[30px] max-[450px]:top-[-3px]">
                contact
              </h1>
            </NavLink>
          </div>
        </div>
        <hr className="w-[65%] opacity-40 translate-y-[60px]" />
      </center>
      <div className="flex gap-5 relative top-[90px] left-1/2 translate-x-[-5%] max-[450]:translate-x-[-25%]">
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
        <Image src="/About/twitter.png" width={30} height={30} alt="twitter" />
        <Image src="/About/youtube.png" width={30} height={30} alt="youtube" />
      </div>
      <center>
        <p className="inline text-[#89C6B7] font-[100] text-[18px] relative top-[120px] left-[-70px] mr-[50px]">
          56G5+FJQ, Madinet Qelyoub, Qalyub,
          <br />
          Al-Qalyubia Governorate 6320512
        </p>
        <br className="sm_screen_min" />
        <NavLink href="/signup" type='btn'>
            Sign up
        </NavLink>
        <NavLink href="/login" type='btn'>
            Log in
        </NavLink>
      </center>
    </div>
  );
}
