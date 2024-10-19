import { BrandBanner } from '@/components/shared/brand-banner';
import { CategoryCard } from '@/components/shared/category-card';
import { Section } from '@/components/shared/section';
import { Swiper } from '@/components/shared/sliders';
import { ColumnSlide } from '@/components/shared/sliders/column-silider';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Swiper className='mt-8' />
      <div className='mt-32 max-w-[1237px] mx-auto flex justify-between'>
        <img src='/assets/1.png' className='object-contain' alt='logo' />
        <img src='/assets/2.png' className='object-contain' alt='logo' />
      </div>
      <Section className='mt-20' title='New Arrival'>
        <ColumnSlide />
      </Section>
      <Section className='mt-24' title='Big Saving Zone'>
        <div className='grid grid-cols-6 grid-rows-6 gap-4'>
          <div className='col-span-2 row-span-3 '>
            <img
              src='/assets/41.png'
              className='object-cover w-full h-full'
              alt=''
            />
          </div>
          <div className='col-span-2 row-span-3 col-start-3 '>
            <img
              src='/assets/42.png'
              className='object-cover w-full h-full'
              alt=''
            />
          </div>
          <div className='col-span-2 row-span-3 col-start-5 '>
            <img
              src='/assets/43.png'
              className='object-cover w-full h-full'
              alt=''
            />
          </div>
          <div className='col-span-3 row-span-3 row-start-4 '>
            <img
              src='/assets/44.png'
              className='object-cover w-full h-full'
              alt=''
            />
          </div>
          <div className='col-span-3 row-span-3 col-start-4 row-start-4 '>
            <img
              src='/assets/45.png'
              className='object-cover w-full h-full'
              alt=''
            />
          </div>
        </div>
      </Section>
      <div className='mt-24 flex w-full'>
        <div className="bg-[url('/assets/3.png')] bg-no-repeat bg-cover text-white py-56 px-32 max-w-[720px]">
          <h3 className='text-3xl uppercase leading-10 font-bold mb-8'>
            We made your everyday fashion better!
          </h3>
          <p className='mb-12'>
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <Button variant='secondary' className='w-[164px]'>
            Shop Now
          </Button>
        </div>
        <img src='/assets/32.png' alt='' className='object-cover flex-1' />
      </div>
      <Section className='mt-24' title='Categories For Men'>
        <div className='flex gap-14 justify-between'>
          <CategoryCard image='assets/51.png' title='Shirts' />
          <CategoryCard image='assets/52.png' title='Printed T-Shirts' />
          <CategoryCard image='assets/53.png' title='Plain T-Shirts' />
          <CategoryCard image='assets/54.png' title='Polo T-Shirts' />
        </div>
      </Section>
      <Section className='mt-24' title='Categories For Women'>
        <div className='flex gap-14 justify-between'>
          <CategoryCard image='assets/61.png' title='Shirts' />
          <CategoryCard image='assets/62.png' title='Printed T-Shirts' />
          <CategoryCard image='assets/63.png' title='Plain T-Shirts' />
          <CategoryCard image='assets/64.png' title='Polo T-Shirts' />
        </div>
      </Section>
      <BrandBanner
        className='mt-24'
        brandsImgs={[
          'assets/b1.png',
          'assets/b2.png',
          'assets/b3.png',
          'assets/b4.png',
        ]}
        sale={60}
      />
    </>
  );
}
