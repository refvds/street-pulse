import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const data = [];

export default function CartPage() {
  return (
    <section className=''>
      {data.length ? (
        <h1>data</h1>
      ) : (
        <section className='mt-10 max-w-[459px] mx-auto flex flex-col items-center'>
          <Image
            src='assets/svgs/cart.svg'
            width={400}
            height={400}
            alt='cart picture'
          />
          <h2 className='mt-16 font-bold text-4xl'>Your cart is empty</h2>
          <p className='mt-2 text-center text-[#807D7E] text-md'>
            Let’s fill it with something you love!
          </p>
          <Link
            className='flex items-center mt-11 w-60 h-11 text-white bg-black px-12 py-3 rounded-lg'
            href='/'
          >
            Continue Shopping
          </Link>
        </section>
      )}
    </section>
  );
}
