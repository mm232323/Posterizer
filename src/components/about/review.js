import Image from "next/image";

export default function Review({ review }) {
  return (
    <div className="w-[541px] h-[353px] rounded-[36px] border-white/20 border-[1px] bg-gradient-to-r from-[#0b405f25] to-[#0d1d4627]">
      <h1 className=" font-[600] italic text-[42px] p-[22px]">
        {review.title}
      </h1>
      <hr className="translate-x-[-63px] translate-y-[-10px] scale-x-[.7] opacity-30" />
      <p className="pl-[22px] text-[20px] pr-[13px]  font-[100]">
        {review.desc}
      </p>
      <Image
        className="w-[30px] inline mt-[70px] ml-[20px]"
        src={review.personImg}
        width={130}
        height={130}
        alt={review.personName}
      />
      <h4 className="font-['Tangerine'] text-[19px] opacity-60 relative top-[-30px] ml-[60px] tracking-[2px]">
        {review.personName}
      </h4>
    </div>
  );
}
