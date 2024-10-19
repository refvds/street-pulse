import React, { FC } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import clsx from 'clsx';

interface IProps {
  className?: string;
  placeholder?: string;
  iconSize?: number;
  inputClassName?: string;
  iconClassName?: string;
}

export const SearchInput: FC<IProps> = ({
  className,
  placeholder,
  iconSize = 18,
  inputClassName,
  iconClassName,
}) => {
  return (
    <div className={clsx(className, 'relative flex items-center')}>
      <Search
        className={clsx('absolute left-3 text-gray-500', iconClassName)}
        size={iconSize}
      />
      <Input
        className={clsx(
          'pl-10 py-2 w-[200px] rounded-lg bg-gray-100 focus:outline-none',
          inputClassName,
        )}
        placeholder={placeholder || ''}
      />
    </div>
  );
};
