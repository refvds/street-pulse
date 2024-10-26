'use client';

import clsx from 'clsx';
import React, { FC, useState, useEffect } from 'react';
import { Slider } from '../ui/slider';
import { Input } from '../ui/input';

interface PriceFilterProps {
  className?: string;
  min: number;
  max: number;
  defaultValues?: [number, number];
}

export const PriceFilter: FC<PriceFilterProps> = ({
  className,
  min,
  max,
  defaultValues,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([min, max]);

  useEffect(() => {
    if (defaultValues) {
      setPriceRange(defaultValues);
    }
  }, [defaultValues]);

  const handleSliderChange = (newValues: number[]) => {
    setPriceRange(newValues as [number, number]);
  };

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      const updatedRange = [...priceRange];
      updatedRange[index] = newValue;
      setPriceRange(updatedRange as [number, number]);
    };

  return (
    <div className={clsx('', className)}>
      <Slider
        defaultValue={defaultValues ?? [min, max]}
        step={1}
        onValueChange={handleSliderChange}
      />

      <div className='flex gap-7 pt-5'>
        <Input
          value={priceRange[0]}
          onChange={handleInputChange(0)}
          min={min}
          max={priceRange[1] - 1}
          placeholder={defaultValues?.[0]?.toString() ?? min.toString()}
        />
        <Input
          value={priceRange[1]}
          onChange={handleInputChange(1)}
          min={priceRange[0] + 1}
          max={max}
          placeholder={defaultValues?.[1]?.toString() ?? max.toString()}
        />
      </div>
    </div>
  );
};
