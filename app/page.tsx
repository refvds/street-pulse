import { Section } from "@/components/shared/section";
import { Swiper } from "@/components/shared/sliders";
import { ColumnSlide } from "@/components/shared/sliders/column-silider";

export default function Home() {
  return (
    <>
      <Swiper className='mt-8' />
      <div className="mt-32 max-w-[1237px] mx-auto flex justify-between">
        <img src='/assets/1.png'  className="object-contain" alt='logo'/>
        <img src='/assets/2.png'  className="object-contain" alt='logo'/>
      </div>
      <Section className="mt-20" title="New Arrival">
        <ColumnSlide />
      </Section>
    </>
  );
}
