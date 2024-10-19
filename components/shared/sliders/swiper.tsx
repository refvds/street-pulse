'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import clsx from 'clsx';

export const Swiper = ({ className }: { className?: string }) => {
  return (
    <ReactSwiper
      spaceBetween={30}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={clsx('h-[450px] w-full', className)}
    >
      <SwiperSlide>
        <div className='flex justify-center items-center h-full bg-red-400'>
          <h2 className='text-white text-2xl'>Slide 1</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full bg-blue-400'>
          <h2 className='text-white text-2xl'>Slide 2</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full bg-green-400'>
          <h2 className='text-white text-2xl'>Slide 3</h2>
        </div>
      </SwiperSlide>
    </ReactSwiper>
  );
};
