import Header from "@/components/layout/header";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import LoginForm from "@/components/loginForm";
export default function Login() {
  return (
    <>
      <Header size="large" isAuth={false} />
      <Image
        src="/Login/login_img1.png"
        alt="login img"
        width={650}
        height={672}
        className="absolute right-0"
      />
      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        className="absolute right-[220px] top-[320px]"
      />
      <h1 className="font-[181] text-[70px] absolute right-[190px] top-[500px]">
        Log in
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute right-[80px] top-[600px] text-center">
      log in & explore your current posters<br></br>
      and community reacts
      </p>
      <div className="h-[672px] w-full bg-white/5">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
