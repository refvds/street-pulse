'use client';

import React, { FC, useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Size } from '@/types/filter';
import clsx from 'clsx';

interface IProps {
  className?: string;
  size: Size;
}

export const SizeCheckbox: FC<IProps> = ({ className, size }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    console.log(size);
  };

  return (
    <div className={clsx('relative')}>
      <Checkbox
        className='hidden peer'
        id={size}
        checked={checked}
        onClick={handleCheckboxClick}
      />
      <label
        className={clsx(
          'flex items-center justify-center text-gray-700 bg-gray-200 border-2 border-gray-300 rounded-md cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:border-green-500 transition-colors duration-300 uppercase',
          className,
        )}
        htmlFor={size}
      >
        {size}
      </label>
    </div>
  );
};
