import { EmptyView } from '@/components/shared/empty-view';
import { WishlistItem } from '@/components/shared/wishlist-item';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    id: 1,
    image: '/assets/32.png',
    title: 'blue flower print crop top',
    brand: 'Nike',
    price: 29.0,
  },
  {
    id: 2,
    image: '/assets/32.png',
    title: 'blue flower print crop top',
    brand: 'Nike',
    price: 29.0,
  },
  {
    id: 3,
    image: '/assets/32.png',
    title: 'blue flower print crop top',
    brand: 'Nike',
    price: 19.0,
  },
  {
    id: 4,
    image: '/assets/32.png',
    title: 'Yellow flower print dress',
    brand: 'Nike',
    price: 59.0,
  },
  {
    id: 5,
    image: '/assets/32.png',
    title: 'blue flower print crop top',
    brand: 'Nike',
    price: 29.0,
  },
  {
    id: 6,
    image: '/assets/32.png',
    title: 'Yellow flower print dress',
    brand: 'Nike',
    price: 29.0,
  },
];

export default function WishlistPage() {
  return (
    <>
      {data.length ? (
        <section className='mt-10 max-w-[903px] mx-auto'>
          <h2 className='font-bold text-3xl text-gray-500 mb-12'>Wishlist</h2>
          <ul className='max-h-[680px] px-5 overflow-y-scroll flex flex-col gap-3  '>
            {data?.map((item) => (
              <li key={item.id}>
                <WishlistItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  brand={item.brand}
                />
                <Separator className='mt-8' />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <EmptyView
          image='assets/svgs/wishlist.svg'
          title='Your wishlist is empty'
          description="You don't have any products in the wishlist yet. You will find a lot
            of interesting products on out Shop page"
        />
      )}
    </>
  );
}
