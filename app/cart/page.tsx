import { CounterControl } from '@/components/shared/counter-control';
import { EmptyView } from '@/components/shared/empty-view';
import IconButton from '@/components/shared/icon-button';
import { ProductCell } from '@/components/shared/product-cell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';
import React from 'react';

const data = [
  {
    id: 1,
    image: '/assets/63.png',
    title: 'Blue Flower print crop top',
    brand: 'Nike',
    size: 'm',
    price: 29.0,
    quantity: 1,
    shipping: 0,
  },
  {
    id: 1,
    image: '/assets/63.png',
    title: 'Blue Flower print crop top',
    brand: 'Nike',
    size: 'm',
    price: 29.0,
    quantity: 2,
    shipping: 0,
  },
  {
    id: 1,
    image: '/assets/63.png',
    title: 'Blue Flower print crop top',
    brand: 'Nike',
    size: 'm',
    price: 29.0,
    quantity: 1,
    shipping: 5.0,
  },
];

export default function CartPage() {
  if (data.length === 0) {
    return (
      <EmptyView
        image='assets/svgs/cart.svg'
        title='Your cart is empty'
        description='Let’s fill it with something you love!'
      />
    );
  }

  return (
    <section>
      <div className='rounded-md overflow-hidden'>
        <Table>
          <TableHeader className=' bg-[#3C4242] pointer-events-none'>
            <TableRow>
              <TableHead className='text-white'>Product</TableHead>
              <TableHead className='text-white'>Price</TableHead>
              <TableHead className='text-white'>Quantity</TableHead>
              <TableHead className='text-white'>Shipping</TableHead>
              <TableHead className='text-white'>Subtotal</TableHead>
              <TableHead className='text-white '>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='text-center'>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='py-12'>
                  <ProductCell
                    image={item.image}
                    title={item.title}
                    brand={item.brand}
                    size={item.size}
                  />
                </TableCell>
                <TableCell className='font-bold text-lg'>
                  ${item.price}
                </TableCell>
                <TableCell>
                  <CounterControl id={item.id} value={item.quantity} />
                </TableCell>
                <TableCell className='font-bold text-lg text-gray-400'>
                  {item.shipping > 0 ? `$${item.shipping}` : 'FREE'}
                </TableCell>
                <TableCell className='font-bold text-lg'>
                  ${item.price}
                </TableCell>
                <TableCell>
                  <IconButton
                    className='bg-transparent'
                    iconClassName='!w-6 !h-auto'
                    icon={Trash2}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <section className='w-full p-24 flex justify-between bg-[#F6F6F6] '>
          <div>
            <h2 className='font-semibold text-xl text-[#3C4242] capitalize'>
              discount codes
            </h2>
            <p className='mt-2 text-[#807D7E]'>
              Enter your coupon code if you have one
            </p>
            <div className='w-96 mt-10 flex gap-2'>
              <Input className='w-3/4' type='text' />
              <Button>Apply Coupon</Button>
            </div>
            <Button className='mt-9'>Continue Shopping</Button>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-y-3 text-xl'>
              <span>Sub Total</span>
              <span className='text-end'>$513.00</span>

              <span>Shipping</span>
              <span className='text-end'>$5.00</span>

              <span className='font-bold'>Grand Total</span>
              <span className='font-bold text-end'>$518.00</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
