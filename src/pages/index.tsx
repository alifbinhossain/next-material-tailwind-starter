import { Button } from '@material-tailwind/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section className='h-screen bg-deep-purple-800 flex items-center justify-center'>
      <div>
        <h1 className='text-6xl text-white font-semibold'>
          Material Tailwind Starter with Next.JS
        </h1>

        <div className='mt-8'>
          <Link
            href='https://www.material-tailwind.com/docs/react/guide/next'
            passHref
          >
            <a target='_blank'>
              <Button className='bg-gray-200 text-deep-purple-800 text-base'>
                Read Documentation
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
