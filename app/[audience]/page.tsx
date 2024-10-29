import { Filters } from '@/components/shared/filters';
import { ProductCatalog } from '@/components/shared/product-catalog';
import { Button } from '@/components/ui/button';

export default function AudiencePage({
  params,
}: {
  params: { audience: string };
}) {
  const title =
    params.audience === 'shoes'
      ? params.audience
      : params.audience.endsWith('s')
      ? `${params.audience} clothing`
      : `${params.audience}'s clothing`;

  return (
    <section className=' max-w-[1237px] mx-auto flex'>
      <Filters />
      <div className='mt-12 ml-12 flex-1'>
        <header className='flex items-center justify-between capitalize mb-12'>
          <h2>{title}</h2>
          <div className='flex gap-6 '>
            <Button className='capitalize' variant='ghost'>
              new
            </Button>
            <Button className='capitalize' variant='ghost'>
              recommended
            </Button>
          </div>
        </header>
        <ProductCatalog />
      </div>
    </section>
  );
}
