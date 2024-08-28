import Header from "@/components/layout/header";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import LoginForm from "@/components/forms/loginForm";
import Link from "next/link";
export default function Login() {
  return (
    <main className="selection:bg-white selection:text-black">
      <Header size="large" isAuth={false} />
      <Image
        src="/Login/login_img1.png"
        alt="login img"
        width={650}
        height={672}
        className="absolute right-0"
      />
      <Image
        src="/Login/login_img2.png"
        alt="login img"
        width={650}
        height={672}
        className="[@media(min-width:1125px)]:hidden right-0 [@media(max-width:1125px)]:absolute [@media(max-width:772px)]:hidden"
      />
      <Image
        src="/Login/login_img3.png"
        alt="login img"
        width={650}
        height={672}
        className="[@media(min-width:772px)]:hidden w-full [@media(max-width:772px)]:absolute"
      />
      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        alt="login main logo image"
        className="absolute right-[220px] top-[320px]"
      />
      <h1 className="font-[181] text-[70px] absolute right-[190px] top-[500px]">
        Log in
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute right-[80px] top-[600px] text-center">
        log in & explore your current posters<br></br>
        and community reacts
      </p>
      <div className="h-[754px] w-full bg-white/5 [@media(max-width:770px)]:h-[1500px] [@media(max-width:600px)]:h-[1000px]">
        <LoginForm />
        <span className="font-[100] cursor-default text-[20px] pl-[70px] relative top-[10px]">
          or log in with:
        </span>
        <div className="relative flex flex-row gap-[20px] left-[60px] top-[30px]">
          <Image
            className="p-[3px] bg-white rounded-full cursor-pointer"
            src="/Login/google_login.png"
            alt="login logo"
            width={50}
            height={50}
          />
          <Image
            className="p-[3px] bg-white rounded-full cursor-pointer"
            src="/Login/facebook_login.png"
            alt="login logo"
            width={50}
            height={50}
          />
          <Image
            className="p-[3px] bg-white rounded-full cursor-pointer"
            src="/Login/github_login.png"
            alt="login logo"
            width={50}
            height={50}
          />
          <Image
            className="p-[3px] bg-white rounded-full cursor-pointer"
            src="/Login/twitter_login.png"
            alt="login logo"
            width={50}
            height={50}
          />
        </div>
        <span className="font-[100] cursor-default text-[20px] pl-[60px] block relative top-[50px]">
          or create{" "}
          <Link href="/signup">
            <span className="text-[#6BB4BC]">new account</span>
          </Link>
        </span>
      </div>
      <Footer />
    </main>
  );
}
