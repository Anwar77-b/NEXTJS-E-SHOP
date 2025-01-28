import Banner from "@/components/home/Banner";
import Newsletter from "@/components/home/Newsletter";
import Sales from "@/components/home/Sales";
import Slider from "@/components/home/Slider";
import Values from "@/components/home/Values";

export default function Home() {
  return (
    <main>
      <Slider></Slider>
      <Banner></Banner>
      <Values></Values>
      <Sales></Sales>
      <div className="w-full h-7 bg-white"></div>
      <Newsletter></Newsletter>
    </main>
  );
}
