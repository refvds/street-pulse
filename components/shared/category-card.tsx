import clsx from 'clsx';
import React, { FC } from 'react';
import IconButton from './icon-button';
import { MoveRight } from 'lucide-react';

interface IProps {
  className?: string;
  title: string;
  link?: string;
  image: string;
}

export const CategoryCard: FC<IProps> = ({ className, title, link, image }) => {
  return (
    <article className={clsx('max-w-72', className)}>
      <img className=' rounded-md' src={image} alt='category image' />
      <div className='mt-4 flex justify-between'>
        <h4>{title}</h4>
        <IconButton icon={MoveRight} />
      </div>
    </article>
  );
};
