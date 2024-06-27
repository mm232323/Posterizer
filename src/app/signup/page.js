import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SigninForm from "@/components/signinForm";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <Header size="large" isAuth={false} />
      <Image
        className="absolute right-0"
        src="/Signup/signup_img1.png"
        alt="signup img"
        width={650}
        height={758}
      />
      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        className="absolute right-[220px] top-[320px]"
      />
      <h1 className="font-[181] text-[70px] absolute right-[190px] top-[500px]">
        SIGN UP
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute right-[80px] top-[600px] text-center">
        Sign up & get all POSTEIZER features
        <br /> IT’S FREE!
      </p>
      <div className="h-[754px] w-full bg-white/5">
        <SigninForm />
        <span className="font-[100] cursor-default text-[20px] pl-[70px]">or <Link href='/login'><span className="text-[#6BB4BC]">login</span></Link> if you already have an account</span>
      </div>
      <Footer />
    </>
  );
}
