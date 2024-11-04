import { EmptyView } from '@/components/shared/empty-view';
import React from 'react';

const data = [];

export default function CartPage() {
  return (
    <section className=''>
      {data.length ? (
        <h1>data</h1>
      ) : (
        <EmptyView
          image='assets/svgs/cart.svg'
          title='Your cart is empty'
          description='Let’s fill it with something you love!'
        />
      )}
    </section>
  );
}
