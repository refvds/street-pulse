import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import IconButton from './icon-button';
import { Heart } from 'lucide-react';

interface IProps {
  className?: string;
  title: string;
  image: string;
  rightButton: ReactNode;
  favorite?: boolean;
  subTitle?: string;
}

export const ShowcaseCard: FC<IProps> = ({
  className,
  title,
  image,
  rightButton,
  subTitle,
  favorite = false,
}) => {
  return (
    <article className={clsx('max-w-72 relative rounded-md ', className)}>
      <img className='w-full' src={image} alt='category image' />
      {favorite && (
        <IconButton
          icon={Heart}
          className='absolute top-3 right-2 rounded-full'
          iconSize={20}
          variant='outline'
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
