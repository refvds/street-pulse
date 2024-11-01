'use client';

import { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import { Heart } from 'lucide-react';
import IconButton from './icon-button';

interface IProps {
  className?: string;
  title: string;
  image: string;
  rightButton: ReactNode;
  wishes?: boolean;
  subTitle?: string;
}

export const ShowcaseCard: FC<IProps> = ({
  className,
  title,
  image,
  rightButton,
  subTitle,
  wishes = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handledWishedClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <article className={clsx('max-w-72 relative rounded-md ', className)}>
      <img className='w-full' src={image} alt='category image' />
      {wishes && (
        <IconButton
          icon={Heart}
          className={`icon-button absolute top-3 right-2 rounded-full hover:bg-transparent hover:border-none ${
            isActive ? '!bg-transparent border-none' : 'bg-white'
          } `}
          iconClassName={`${
            isActive
              ? '!w-7 !h-7 fill-pink-500 stroke-pink-500'
              : 'w-6 h-6 text-black'
          }`}
          iconSize={20}
          variant='outline'
          onClick={handledWishedClick}
        />
      )}
      <div className='mt-4 flex justify-between items-center'>
        <div className='max-w-36 flex flex-col gap-1'>
          <h4 className='truncate'>{title}</h4>
          <span className='capitalize text-gray-400'>{subTitle}</span>
        </div>
        {rightButton}
      </div>
    </article>
  );
};
