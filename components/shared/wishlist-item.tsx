'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import clsx from 'clsx';

interface IProps {
  className?: string;
  image: string;
  title: string;
  brand: string;
  price: number;
}

export const WishlistItem: FC<IProps> = ({
  className,
  image,
  title,
  brand,
  price,
}) => {
  return (
    <article className={clsx('flex items-center gap-9', className)}>
      <X className='cursor-pointer' />
      <Image
        className='rounded-lg'
        src={image}
        width={110}
        height={110}
        alt='product image'
      />
      <div className='flex-1 flex flex-col gap-3 font-bold text-xl'>
        <h3 className='capitalize'>{title}</h3>
        <span className='text-gray-400'>
          <b className='text-black'>Brand: </b>
          {brand}
        </span>
        <span className='text-gray-400'>
          <b className='text-black'>Price: </b>${price}
        </span>
      </div>
      <Button>Add to cart</Button>
    </article>
  );
};
