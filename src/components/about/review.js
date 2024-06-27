import Image from "next/image";

export default function Review({ review }) {
  return (
    <div className="w-[541px] max-[1115px]:w-[820px] max-[840px]:w-[640px] h-[353px] max-[1115px]:h-[535.05px] max-[840px]:h-[335.05px] rounded-[36px] border-white/20 border-[1px] bg-gradient-to-r from-[#0b405f25] to-[#0d1d4627] max-[660px]:w-[423.97px] max-[660px]:h-[244.05px] max-[660px]:rounded-[20px]">
      <h1 className=" font-[600] italic text-[42px] p-[22px] max-[1115px]:text-[54px] max-[1115px]:p-[40px] max-[840px]:text-[43px] max-[840px]:pl-[30px] max-[660px]:text-[25px] max-[660px]:p-[12px] max-[660px]:pt-[20px]">
        {review.title}
      </h1>
      <hr className="translate-x-[-63px] translate-y-[-10px] scale-x-[.7] opacity-30 max-[1115px]:translate-x-[-78px] max-[840px]:translate-x-[-60px] max-[660px]:translate-x-[-50px] max-[660px]:translate-y-[-2px]" />
      <p className="pl-[22px] text-[20px] pr-[13px] font-[100] max-[1115px]:pl-[40px] max-[1115px]:text-[25px] max-[840px]:text-[20px] max-[840px]:pl-[30px] max-[660px]:pl-[12px] max-[660px]:text-[15px] max-[660px]:pt-[10px]">
        {review.desc}
      </p>
      <Image
        className="w-[30px] inline mt-[70px] ml-[40px] max-[660px]:mt-[20px] max-[660px]:ml-[12px]"
        src={review.personImg}
        width={130}
        height={130}
        alt={review.personName}
      />
      <h4 className="font-['Tangerine'] text-[19px] opacity-60 relative top-[40px] ml-[20px] tracking-[2px] max-[1115px]:text-[23px] inline max-[660px]:text-[17px] max-[660px]:top-[10px]">
        {review.personName}
      </h4>
    </div>
  );
}
