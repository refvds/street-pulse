import Link from 'next/link';
import { Heart, ShoppingCart, UserRound } from 'lucide-react';
import { prisma } from '@/prisma/prisma-client';
import { Logo } from './logo';
import { SearchInput } from './search-input';
import IconButton from './icon-button';

export const Header = async () => {
  const nav = await prisma.targetAudience.findMany();
  return (
    <header className='max-w-[1237px] mx-auto flex items-center py-4'>
      <Link href='/'>
        <Logo className='mr-[87.84px]' />
      </Link>
      <nav className='flex space-x-[40px]'>
        {nav?.map(({ name, id }) => (
          <Link key={id} href={`/${name.toLowerCase()}`}>
            {name}
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
