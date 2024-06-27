import Leader from "@/components/about/leader";
import Header from "@/components/layout/header";
import Image from "next/image";
import reviews from "@/reviews.json";
import Review from "@/components/about/review";
import Footer from "@/components/layout/footer";
export default function About() {
  return (
    <main className="overflow-x-hidden">
      <Image className="absolute left-0 top-0" width={1865} height={3607} src='/About/background.png' alt='background' />
      <Header size="large" />
      <section className="relative top-[55px]">
        <h1 className="text-[72px] font-bold relative left-[86px] w-fit max-[1050px]:text-[58px] max-[1050px]:left-[50px] max-[660px]:left-1/2 max-[660px]:translate-x-[-50%] max-[660px]:text-[50px] max-[500px]:text-[35px]">
          BEST COMMUNITY
        </h1>
        <p className="text-[25px] font-[100] w-[609px] text-justify opacity-70 tracking-[3px] relative left-[86px] top-[12px] max-[1150px]:text-[23px] max-[1150px]:w-[500px] max-[1050px]:text-[18px] max-[725px]:text-[15px] max-[725px]:w-[300px] max-[1050px]:w-[415px] max-[650px]:w-[500px] max-[1050px]:left-[50px] max-[650px]:text-center max-[650px]:left-1/2 max-[650px]:translate-x-[-50%] max-[650px]:mb-[200px] max-[500px]:w-[400px]">
          "Posterizer" is the perfect platform for creating eye-catching posters
          and flyers with safety and magic cool tools. Our dedicated employees
          have worked hard to provide you with a user-friendly experience that
          allows you to unleash your creativity and design stunning visuals for
          any occasion.
        </p>
        <Image
          className="absolute top-4 max-[650px]:top-[250px] w-[500px] right-14 max-[650px]:left-1/2 max-[650px]:translate-x-[-50%] max-[1215px]:w-[400px] max-[1050px]:w-[250px] max-[760px]:w-[200px] max-[725px]:w-[250px] max-[1140px]:top-[120px] max-[500px]:top-[280px]"
          src="/About/about_img.png"
          width={628}
          height={485}
          alt="about_img"
        />
      </section>
      <section className="relative top-[120px]">
        <h1 className="text-[72px] font-bold relative left-[86px] max-[1050px]:text-[58px] w-fit max-[1050px]:left-[50px] max-[660px]:left-1/2 max-[660px]:translate-x-[-50%] max-[660px]:text-[50px] max-[500px]:text-[35px]">
          OUR LEADERSHIPS
        </h1>
        <div className="flex max-[650px]:flex-col gap-[50px] relative top-[50px] max-[650px]:top-[40px] left-1/2 translate-x-[-47%]">
          <Leader
            imageUrl="/about/leader1.png"
            name="Marty Leo"
            jobTitle="posterizer safety manager"
            size="employee"
          />
          <Leader
            imageUrl="/about/leader2.png"
            name="James Kavin"
            jobTitle="main posterizer manager"
            size="manager"
          />
          <Leader
            imageUrl="/about/leader3.png"
            name="Adam Shao"
            jobTitle="posterizer development manager"
            size="employee"
          />
        </div>
      </section>
      <section className="relative top-[19rem]">
        <h1 className="text-[72px] font-bold relative left-[86px] max-[1050px]:text-[58px] w-fit max-[1050px]:left-[50px] max-[660px]:left-1/2 max-[660px]:translate-x-[-50%] max-[660px]:text-[50px] max-[550px]:text-[30px]">
          TIMELINE EVOLUTION
        </h1>
        <Image className="relative left-1/2 translate-x-[-50%] top-[30px] pr-[60px] pl-[60px] sm_md_screen_max" src='/About/timline.svg' alt='timeline' width={830} height={1077} />
        <Image className="relative left-1/2 translate-x-[-50%] top-[30px] pr-[60px] pl-[60px] sm_md_screen_min" src='/About/timline2.svg' alt='timeline' width={830} height={1077} />
      </section>
      <section className="relative top-[29rem]">
        <h1 className="text-[72px] font-bold relative left-[86px] max-[1050px]:text-[58px] max-[1050px]:left-[50px] max-[660px]:left-1/2 max-[660px]:translate-x-[-50%] w-fit max-[660px]:text-[50px] max-[500px]:text-[35px]">
          TOP REVIEWS
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 relative left-1/2 translate-x-[-50%] top-[40px] w-fit gap-y-[50px] gap-x-[50px] max-[1175px]:gap-x-[20px] max-[1115px]:grid-cols-1 max-[1115px]:grid-rows-1">
          {reviews.map((review) => (
            <Review key={review.title} review={review} />
          ))}
        </div>
      </section>
      <section className="relative top-[37rem]">
      <Footer />
      </section>
    </main>
  );
}
