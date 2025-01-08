import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import AddToCart from '@/components/AddToCart';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    image,
    price,
    price_id,
    name,
    description,
    'slug': slug.current,
    'categories': categories[]->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const product = await getData(params.slug);
  return (
    <section className='pt-24 pb-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-14'>
          <div className='xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center'>
            <Image
              src={urlFor(product.image[0]).url()}
              width={473}
              height={290}
              priority
              alt=''
            />
          </div>
          <div className='flex-1 flex flex-col justify-center items-start gap-10'>
            <Link href='/' className='flex items-center gap-2 font-semibold '>
              <ChevronLeft size={20} />
              Back to Home
            </Link>
            <div className='flex flex-col gap-6 items-start'>
              <div>
                <h3>{product.name}</h3>
                <p className='text-lg font-semibold'>${product.price}</p>
              </div>
              <p>{product.description}</p>
              <AddToCart text='Add to Cart' btnStyles='btn btn-accent' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
