import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

interface IProps {
  className?: string;
  image: string;
  title: string;
  description: string;
  buttonTitle?: string;
  buttonLink?: string;
}

export const EmptyView: FC<IProps> = ({
  className,
  image,
  title,
  description,
  buttonLink = '/',
  buttonTitle = 'Continue shopping',
}) => {
  return (
    <section
      className={clsx(
        className,
        'mt-10 max-w-[459px] mx-auto flex flex-col items-center',
      )}
    >
      <Image src={image} width={400} height={400} alt='empty picture' />
      <h2 className='mt-16 font-bold text-4xl'>{title}</h2>
      <p className='mt-2 text-center text-[#807D7E] text-md'>{description}</p>
      <Link
        className='flex items-center mt-11 w-60 h-11 text-white bg-black px-12 py-3 rounded-lg'
        href={buttonLink}
      >
        {buttonTitle}
      </Link>
    </section>
  );
};
