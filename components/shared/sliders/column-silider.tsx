'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps {
    className?: string;
}


export const ColumnSlide: FC<IProps> = ({className}) => {
  return (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className={clsx("h-[262px] w-full",className)}
      >
        <SwiperSlide className='rounded-md bg-red-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 2</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 4</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 5</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 6</SwiperSlide>
        <SwiperSlide className='rounded-md bg-red-500'>Slide 7</SwiperSlide>
        
      </Swiper>
  )
}
