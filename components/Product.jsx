'use client';
import { urlFor } from '../app/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingBag } from 'react-icons/cg';
import AddToCart from './AddToCart';

const Product = ({ product }) => {
  const popularProductCat = product.categories.find(
    (product) => product.name === 'popular'
  );

  return (
    <div className='group'>
      <div className='border h-[328px] mb-5 p-4 overflow-hidden relative'>
        <div className='bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center'>
          {popularProductCat && (
            <div className='absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium'>
              Popular
            </div>
          )}
          <Image
            src={urlFor(product.image[0]).url()}
            width={240}
            height={147}
            alt=''
          />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <AddToCart
            id={product._id}
            name={product.name}
            currency='USD'
            description={product.description}
            image={product.image}
            price={product.price}
            btnStyles='btn-icon btn-accent'
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${product.slug}`}>
            <button className='btn-icon btn-primary'>
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h4 className='mb-1'>{product.name}</h4>
      <div className='text-lg font-bold text-accent'>${product.price}</div>
    </div>
  );
};

export default Product;
