import ContactForm from "@/components/forms/contactForm";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <>
      <Header size="large" isAuth={false} />
      <Image
        src="/Contact/contact_img1.png"
        alt="contact img"
        width={650}
        height={829}
        className="absolute right-0 [@media(max-width:1125px)]:hidden"
      />
      <Image src='/Contact/contact_img2.png' alt='contact img' width={419} height={829} className="[@media(min-width:1125px)]:hidden right-0 [@media(max-width:1125px)]:absolute [@media(max-width:772px)]:hidden" />
      <Image src='/Contact/contact_img3.png' alt='contact img' width={393} height={376} className="[@media(min-width:772px)]:hidden w-full [@media(max-width:772px)]:absolute" />
      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        className="absolute [@media(min-width:1125px)]:right-[220px] top-[320px] [@media(max-width:1125px)]:w-[151px] [@media(max-width:1125px)]:right-[130px] [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] [@media(max-width:770px)]:top-[240px] [@media(max-width:770px)]:w-[230px]"
      />
      <h1 className="font-[181] text-[70px] [@media(max-width:1125px)]:text-[47px] [@media(max-width:1125px)]:right-[70px] absolute [@media(min-width:1125px)]:right-[100px] top-[500px] [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-47%] [@media(max-width:770px)]:text-[50px]">
        CONTACT US
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute [@media(min-width:1125px)]:right-[100px] top-[600px] [@media(max-width:1125px)]:text-[23px] [@media(max-width:1125px)]:right-[50px] [@media(max-width:1125px)]:top-[580px] [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-47%] [@media(max-width:770px)]:text-[25px] text-center">
        Easy contacting & Good service
      </p>
      <div className="h-[825px] w-full bg-white/5 [@media(max-width:770px)]:h-[1500px] [@media(max-width:600px)]:h-[1000px]">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
