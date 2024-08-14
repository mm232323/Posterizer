import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SigninForm from "@/components/forms/signinForm";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <Header size="large" isAuth={false} />
      <Image
        className="absolute right-0 [@media(max-width:1125px)]:hidden"
        src="/Signup/signup_img1.png"
        alt="signup img"
        width={650}
        height={758}
      />
      <Image
        src="/Signup/signup_img2.png"
        alt="contact img"
        width={419}
        height={829}
        className="[@media(min-width:1125px)]:hidden right-0 [@media(max-width:1125px)]:absolute [@media(max-width:772px)]:hidden"
      />
      <Image
        src="/Signup/signup_img3.png"
        alt="contact img"
        width={393}
        height={376}
        className="[@media(min-width:772px)]:hidden w-full [@media(max-width:772px)]:absolute"
      />

      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        alt="signup main logo"
        className="absolute [@media(min-width:770px)]:right-[220px] top-[320px] [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%]"
      />
      <h1 className="font-[181] text-[70px] [@media(max-width:1125px)]:text-[47px] [@media(max-width:1125px)]:right-[70px] absolute [@media(min-width:1125px)]:right-[100px] top-[500px] [@media(min-width:770px)]:right-[180px] [@media(max-width:770px)]:left-1/2 w-fit [@media(max-width:770px)]:translate-x-[-50%] [@media(max-width:770px)]:text-[50px]">
        SIGN UP
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute [@media(min-width:1125px)]:right-[100px] top-[600px] [@media(max-width:1125px)]:text-[23px] [@media(max-width:1125px)]:right-[50px] [@media(max-width:1125px)]:top-[580px] [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] [@media(max-width:770px)]:text-[25px] text-center w-fit">
        Sign up & get all POSTEIZER features
        <br /> IT’S FREE!
      </p>
      <div className="h-[754px] w-full bg-white/5 [@media(max-width:770px)]:h-[1500px] [@media(max-width:600px)]:h-[1000px]">
        <SigninForm />
        <span className="font-[100] cursor-default text-[20px] pl-[70px]">
          or{" "}
          <Link href="/login">
            <span className="text-[#6BB4BC]">login</span>
          </Link>{" "}
          if you already have an account
        </span>
      </div>
      <Footer />
    </>
  );
}
