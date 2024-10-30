import clsx from 'clsx';
import { CreditCard, Repeat, Shirt, Truck } from 'lucide-react';
import React from 'react';

const benefits = [
  { id: 1, title: 'Secure payment', icon: <CreditCard size={20} /> },
  { id: 2, title: 'Size & Fit', icon: <Shirt size={20} /> },
  { id: 3, title: 'Free shipping', icon: <Truck size={20} /> },
  { id: 4, title: 'Free Shipping & Returns', icon: <Repeat size={20} /> },
];

export const ProductBenefits = ({ className }: { className?: string }) => {
  return (
    <ul className={clsx('grid grid-cols-2 gap-y-5', className)}>
      {benefits.map((benefit) => (
        <li key={benefit.id} className='flex items-center gap-4'>
          <div className='flex items-center justify-center w-11 h-11 bg-[#F6F6F6] text-black rounded-full '>
            {benefit.icon}
          </div>
          <h3 className='text-lg text-[#3C4242]'>{benefit.title}</h3>
        </li>
      ))}
    </ul>
  );
};
