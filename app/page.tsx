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
      <Section className="mt-24" title='Big Saving Zone'>
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
          <div className="col-span-2 row-span-3 ">
            <img src="/assets/41.png" className="object-cover w-full h-full" alt="" />
          </div>
          <div className="col-span-2 row-span-3 col-start-3 "> <img src="/assets/42.png" className="object-cover w-full h-full" alt="" /></div>
          <div className="col-span-2 row-span-3 col-start-5 "> <img src="/assets/43.png" className="object-cover w-full h-full" alt="" /></div>
          <div className="col-span-3 row-span-3 row-start-4 "> <img src="/assets/44.png"className="object-cover w-full h-full" alt="" /></div>
          <div className="col-span-3 row-span-3 col-start-4 row-start-4 "> <img src="/assets/45.png"className="object-cover w-full h-full" alt="" /></div>
      </div>
      </Section>
    </>
  );
}
