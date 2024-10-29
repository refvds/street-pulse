import Link from 'next/link';
import React from 'react';
import { ShowcaseCard } from './showcase-card';

const products = [
  {
    id: 1,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 2,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 3,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 4,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 5,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 6,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 7,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 8,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 9,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 10,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 11,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 12,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 13,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 14,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 15,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 16,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
  {
    id: 17,
    title: 'White T-Shirt',
    price: (123).toFixed(2),
    brand: "Helen's Brand",
    image: '/assets/62.png',
  },
];

export const ProductCatalog = () => {
  return (
    <ul className='grid grid-cols-3 gap-x-6 gap-y-12'>
      {products.map((product) => (
        <Link href='/' key={product.id}>
          <ShowcaseCard
            image={product.image}
            title={product.title}
            rightButton
            favorite
          />
        </Link>
      ))}
    </ul>
  );
};
