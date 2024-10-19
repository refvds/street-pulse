import { Swiper } from "@/components/shared/swiper";

export default function Home() {
  return (
    <>
      <Swiper className='mt-8' />
      <div className="mt-32 max-w-[1237px] mx-auto flex justify-between">
      <img src='/assets/1.png'  className="object-contain" alt='logo'/>
      <img src='/assets/2.png'  className="object-contain" alt='logo'/>
      </div>
    </>
  );
}
