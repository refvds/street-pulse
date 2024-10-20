import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
  className?: string;
}

export const Footer: FC<IProps> = ({ className }) => {
  return (
    <footer
      className={clsx(
        'bg-slate-600 text-white p-16 flex gap-20 justify-center capitalize ',
        className,
      )}
    >
      <nav>
        <h4 className='text-3xl font-bold'>need help</h4>
        <ul className='mt-4 flex flex-col gap-2'>
          <Link href='/t'>contact us</Link>
          <Link href='/t'>track order</Link>
          <Link href='/t'>returns & refunds</Link>
          <Link href='/t'>FAQs</Link>
          <Link href='/t'>career</Link>
        </ul>
      </nav>
      <nav>
        <h4 className='text-3xl font-bold'>company</h4>
        <ul className='mt-4 flex flex-col gap-2'>
          <Link href='/t'>about us</Link>
          <Link href='/t'>street pulse blog</Link>
          <Link href='/t'>street puls</Link>
          <Link href='/t'>collaboration</Link>
          <Link href='/t'>media</Link>
        </ul>
      </nav>
      <nav>
        <h4 className='text-3xl font-bold'>more info</h4>
        <ul className='mt-4 flex flex-col gap-2'>
          <Link href='/t'>term and conditions</Link>
          <Link href='/t'>privacy policy</Link>
          <Link href='/t'>shipping policy</Link>
          <Link href='/t'>sitemap</Link>
        </ul>
      </nav>
      <nav>
        <h4 className='text-3xl font-bold'>location</h4>
        <ul className='mt-4 flex flex-col gap-2'>
          <Link className='normal-case' href='/t'>
            support@streetpuls.com
          </Link>
          <Link href='/t'>Eklingpura Chouraha, Ahmedabad Main Road</Link>
          <Link href='/t'>
            (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
          </Link>
        </ul>
      </nav>
    </footer>
  );
};
