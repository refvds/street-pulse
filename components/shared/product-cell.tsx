import { FC } from 'react';
import Image from 'next/image';

interface IProps {
  image: string;
  title: string;
  brand: string;
  size: string;
}

export const ProductCell: FC<IProps> = ({ image, title, brand, size }) => {
  return (
    <div className='h-[120px] flex items-start gap-5'>
      <Image
        className='h-full object-cover rounded-xl'
        src={image}
        width={105}
        height={120}
        alt='cart product image'
      />
      <div className='flex flex-col gap-1 text-sm text-gray-400 text-start'>
        <h3 className='font-bold text-base text-black'>{title}</h3>
        <span>Brand: {brand}</span>
        <span>Size: {size}</span>
      </div>
    </div>
  );
};
