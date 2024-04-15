import Image from "next/image";
import { Slider } from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
