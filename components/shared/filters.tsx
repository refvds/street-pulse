import React, { FC } from 'react';

import { prisma } from '@/prisma/prisma-client';
import Link from 'next/link';
import { PriceFilter } from './price-filter';
import { FilterAccordion } from './filter-accordion';
import { SizeCheckbox } from './size-checkbox';
import { Size } from '@/types/filter';
import clsx from 'clsx';

interface IProps {
  className?: string;
}
const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
export const Filters: FC<IProps> = async ({ className }) => {
  const categories = await prisma.category.findMany({
    where: {
      audienceId: 10,
    },
  });

  return (
    <aside
      className={clsx(
        'w-60 border-gray-400 border-r border-r-gray-200 px-5 py-8',
        className,
      )}
    >
      <FilterAccordion title='Categories'>
        <ul className='flex flex-col gap-4'>
          {categories?.map((category) => (
            <Link href='/' key={category.id}>
              {category.name}
            </Link>
          ))}
        </ul>
      </FilterAccordion>
      <FilterAccordion title='Price'>
        <PriceFilter min={10} max={1000} defaultValues={[30, 70]} />
      </FilterAccordion>
      <FilterAccordion title='Sizes'>
        <div className='grid grid-cols-2  gap-y-2 w-56'>
          {sizes?.map((size) => (
            <SizeCheckbox className='w-16 h-8' key={size} size={size} />
          ))}
        </div>
      </FilterAccordion>
    </aside>
  );
};
