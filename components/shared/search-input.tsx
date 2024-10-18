import React, { FC } from 'react'
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

export const SearchInput: FC<IProps> = ({className, placeholder, iconSize=18, inputClassName, iconClassName}) => {
  return (
    <div className={clsx(className,'min-w-40 h-10 relative mr-5 rounded-md')}>
        <Search className={clsx('absolute top-[25%] left-2',iconClassName)} size={iconSize} />
        <Input className={clsx('h-full w-full pl-8',inputClassName)} placeholder={placeholder || ''}/>
    </div>
  )
}
