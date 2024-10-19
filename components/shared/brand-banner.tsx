import clsx from 'clsx';
import React, { FC } from 'react';

interface IProps {
  className?: string;
  brandsImgs: string[];
  sale: number;
}

export const BrandBanner: FC<IProps> = ({ className, brandsImgs, sale }) => {
  return (
    <article
      className={clsx(
        'bg-gray-600 text-white flex flex-col items-center pb-14 rounded-md',
        className,
      )}
    >
      <h3 className='font-bold text-7xl mt-11 capitalize'>top brands deals</h3>
      <p className='capitalize mt-6 text-xl'>
        up to <span className='text-yellow-400'>{sale}%</span>off on brands
      </p>
      <div className='max-w-[985px] mt-16 flex gap-5'>
        {brandsImgs.map((brandImg) => (
          <div
            key={brandImg}
            className=' bg-white flex items-center justify-center w-44 h-20 rounded-md'
          >
            <img className='block ' src={brandImg} alt='brand logo' />
          </div>
        ))}
      </div>
    </article>
  );
};
