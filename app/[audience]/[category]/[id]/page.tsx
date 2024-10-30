import { ProductBenefits } from '@/components/shared/product-benefits';
import { ProductCatalog } from '@/components/shared/product-catalog';
import { Section } from '@/components/shared/section';
import { SizeCheckbox } from '@/components/shared/size-checkbox';
import { VerticalGallerySwiper } from '@/components/shared/swiper/vertical-gallery-slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Size } from '@/types/filter';
import { ShoppingCart } from 'lucide-react';

const title = 'raven hoodie with black colored design';
const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const price = (65).toFixed(2);

export default function ProductPage({
  params,
}: {
  params: { audience: string; category: string; id: string };
}) {
  console.log(params);

  return (
    <section className='max-w-[1237px] mt-11 mx-auto'>
      <section className='flex gap-16'>
        <VerticalGallerySwiper />
        <div>
          <h2 className='capitalize font-bold text-4xl'>{title}</h2>
          <div className='max-w-72 mt-8'>
            <h3 className='capitalize font-semibold text-lg'>selected size</h3>
            <div className='mt-6 flex gap-5'>
              {sizes.map((size) => (
                <SizeCheckbox
                  key={size}
                  className='w-9 h-9  rounded-xl text-sm m-0 bg-white '
                  size={size}
                />
              ))}
            </div>
          </div>
          <div className='mt-8 flex gap-6 h-11'>
            <Button className='h-full'>
              <ShoppingCart />
              Add to cart
            </Button>
            <span className='inline-flex items-center justify-center px-10 py-3 border border-black rounded-md '>
              ${price}
            </span>
          </div>
          <Separator className='mt-10' />
          <ProductBenefits className='mt-10' />
        </div>
      </section>
      <Section className='mt-24' title='similar products'>
        <ProductCatalog />
      </Section>
    </section>
  );
}
