'use client';

import React from 'react';
import { Logo } from './logo';
import { navLinks } from '@/constants/header';
import Link from 'next/link';
import { SearchInput } from './search-input';
import IconButton from './icon-button';
import { Heart, ShoppingCart, UserRound } from 'lucide-react';

export const Header = () => {
  return (
    <header className='max-w-[1237px] mx-auto flex items-center py-4'>
      <Logo className='mr-[87.84px]' />
      <nav className='flex space-x-[40px]'>
        {navLinks.map(({ title, path }, index) => (
          <Link key={`${title} ${index}`} href={path}>
            {title}
          </Link>
        ))}
      </nav>
      <div className='ml-[76px]'>
        <SearchInput className='w-52' placeholder='search' />
      </div>
      <div className='ml-auto flex space-x-[12px]'>
        <IconButton icon={Heart} />
        <IconButton icon={UserRound} />
        <IconButton icon={ShoppingCart} />
      </div>
    </header>
  );
};
