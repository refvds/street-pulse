'use client';

import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import IconButton from '../icon-button';
import { ArrowDown, ArrowUp } from 'lucide-react';

export const VerticalGallerySwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='flex gap-9 items-center '>
      <div className='relative flex flex-col items-center'>
        <Swiper
          className='w-20 h-96 !m-0'
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          direction='vertical'
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }
          }}
        >
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-1.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-2.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-3.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-4.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-5.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-6.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-7.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-8.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-9.jpg'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full rounded-md overflow-hidden'>
            <img
              className=' w-full h-full'
              src='https://swiperjs.com/demos/images/nature-10.jpg'
            />
          </SwiperSlide>
        </Swiper>
        <div className='absolute -bottom-14  flex flex-col gap-3 '>
          <IconButton
            className='w-5 h-5 transform bg-white text-[#3C4242] rounded-full hover:bg-[#3C4242] hover:text-white'
            icon={ArrowUp}
            ref={prevRef}
          />
          <IconButton
            className='w-5 h-5 transform bg-white text-[#3C4242] rounded-full hover:bg-[#3C4242] hover:text-white'
            icon={ArrowDown}
            ref={nextRef}
          />
        </div>
      </div>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        effect='fade'
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        className='max-w-[520px] h-full !m-0'
      >
        <SwiperSlide className='rounded-xl overflow-hidden'>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
