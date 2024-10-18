'use client';

import React from 'react'
import { Logo } from './logo'
import { navLinks } from '@/constants/header'
import Link from 'next/link'
import { SearchInput } from './search-input'
import IconButton from './icon-button'
import { Heart, ShoppingCart, UserRound } from 'lucide-react'

export const Header = () => {
  return (
    <header className='max-w-7xl mx-auto py-7 bg-white text-lg'>
        <nav className='flex items-center justify-between gap-8'>
            <Logo className='mr-20 '/>
            <ul className='flex gap-10 items-center '>
                {navLinks.map(({title, path},index)=><Link key={`${title} ${index}`} href={path}>{title}</Link>)}
            </ul>
            <SearchInput className='bg-gray-200 h-8 w-60 flex-1' placeholder='search'/>
            <div className='flex gap-3'>
                <IconButton icon={Heart }/>
                <IconButton icon={UserRound  } />
                <IconButton icon={ShoppingCart} />
            </div>
        </nav>
    </header>
  )
}
