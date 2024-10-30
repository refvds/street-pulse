import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='mt-24 max-w-[459px] mx-auto text-center flex flex-col items-center'>
      <Image
        src='/assets/svgs/404.svg'
        width={400}
        height={300}
        alt='404 error with a cute cat'
      />
      <h2 className='mt-3 font-bold text-4xl'>Oops! Page not found</h2>
      <p className='mt-2 text-neutral-500'>
        The page you are looking for might have been removed or temporarily
        unavailable
      </p>
      <Link
        className='mt-11 w-60 h-11 text-white bg-black px-12 py-3 block rounded-lg'
        href='/'
      >
        Back to Home Page
      </Link>
    </section>
  );
}
