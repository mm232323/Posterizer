import EvolutionYear from "@/components/about/evolutionYear";
import Leader from "@/components/about/leader";
import Header from "@/components/layout/header";
import Image from "next/image";
import timeline from "@/timline_details.json";
import reviews from "@/reviews.json";
import Review from "@/components/about/review";
import Footer from "@/components/layout/footer";
export default function About() {
  return (
    <>
      <Header size="large" />
      <section className="relative top-[55px]">
        <h1 className="text-[72px] font-bold relative left-[86px]">
          BEST COMMUNITY
        </h1>
        <p className="text-[25px] font-[100] w-[609px] text-justify opacity-70 tracking-[3px] relative left-[86px] top-[12px]">
          "Posterizer" is the perfect platform for creating eye-catching posters
          and flyers with safety and magic cool tools. Our dedicated employees
          have worked hard to provide you with a user-friendly experience that
          allows you to unleash your creativity and design stunning visuals for
          any occasion.
        </p>
        <Image
          className="absolute top-4 w-[500px] right-14"
          src="/About/about_img.png"
          width={628}
          height={485}
          alt="about_img"
        />
      </section>
      <section className="relative top-[120px]">
        <h1 className="text-[72px] font-bold relative left-[86px]">
          OUR LEADERSHIPS
        </h1>
        <div className="flex relative top-[20px] left-1/2 translate-x-[-47%]">
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
        <h1 className="text-[72px] font-bold relative left-[86px]">
          TIMELINE EVOLUTION
        </h1>
        <Image
          className="absolute left-1/2 translate-x-[-50%] top-[180px]"
          src="/About/timeline.png"
          alt="timeline"
          width={925}
          height={1201}
        />
        {timeline.map((evolutionYear) => (
          <EvolutionYear key={evolutionYear.title} details={evolutionYear} />
        ))}
      </section>
      <section className="relative top-[29rem]">
        <h1 className="text-[72px] font-bold relative left-[86px]">
          TOP REVIEWS
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 relative left-1/2 translate-x-[-50%] top-[40px] w-[1200px] gap-y-[50px]">
          {reviews.map((review) => (
            <Review key={review.title} review={review} />
          ))}
        </div>
      </section>
      <section className="relative top-[37rem]">
      <Footer />
      </section>
    </>
  );
}
