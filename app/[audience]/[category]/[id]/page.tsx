import { VerticalGallerySwiper } from '@/components/shared/swiper/vertical-gallery-slider';

export default function ProductPage({
  params,
}: {
  params: { audience: string; category: string; id: string };
}) {
  console.log(params);

  return (
    <section className='max-w-[1237px] mx-auto'>
      <VerticalGallerySwiper />
    </section>
  );
}
