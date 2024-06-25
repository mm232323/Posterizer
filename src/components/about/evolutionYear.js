import Image from "next/image"
export default function EvolutionYear({details}) {
  return <div dir={details.dir} className={`relative mb-[-30px] top-[100px] ${details.dir == 'ltr' ? 'ml-[500px]' : 'mr-[500px]'}`}>
   <span className="text-[52px] font-[600] pr-[60px]">{details.year}</span>
   <span className="font-normal italic text-[47px]">{details.title}</span>
   <p className="text-[20px] font-[100] w-[455px] text-justify italic">{details.desc}</p>
   <Image className={`w-[117px] top-[-150px] relative ${details.dir == 'rtl' ? 'left-[180px]' : 'right-[180px]'}`} src={details.ico} width={120} height={120} alt={details.title} />
  </div>
}
