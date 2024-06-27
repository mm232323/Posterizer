import ContactForm from "@/components/contactForm";
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
        className="absolute right-0"
      />
      <Image
        src="/whiteLogo.svg"
        width={183.6}
        height={179.1}
        className="absolute right-[220px] top-[320px]"
      />
      <h1 className="font-[181] text-[70px] absolute right-[100px] top-[500px]">
        CONTACT US
      </h1>
      <p className="font-[111] opacity-70 text-[30px] absolute right-[100px] top-[600px]">
        Easy contacting & Good service
      </p>
      <div className="h-[825px] w-full bg-white/5">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
