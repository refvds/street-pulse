'use client';

import { Minus, Plus } from 'lucide-react';
import React, { FC, useState } from 'react';
import IconButton from './icon-button';

interface IProps {
  id: number;
  value: number;
}

export const CounterControl: FC<IProps> = ({ id, value = 1 }) => {
  const [count, setCount] = useState(value);

  const onMinusHandler = () => {
    setCount((prev) => prev - 1);
  };
  const onPlusHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='max-w-28 flex items-center justify-center gap-4 bg-gray-300 rounded-xl'>
      <IconButton
        className='bg-transparent hover:bg-neutral-400 rounded-xl'
        icon={Minus}
        onClick={onMinusHandler}
      />
      <span>{count}</span>
      <IconButton
        className='bg-transparent hover:bg-neutral-400 rounded-xl'
        icon={Plus}
        onClick={onPlusHandler}
      />
    </div>
  );
};
