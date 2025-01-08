import { client } from '../app/lib/sanity';
import PopularProductsCarousel from './PopularProductsCarousel';

const getData = async () => {
  const query = `*[_type == "product" && references(*[_type == "category" && name == 'popular']._id)] {
  _id,
  name,
  description,
  image,
  price,
  price_id,
  'slug': slug.current,
  'categories': categories[]->{
    name
  }
}`;
  const data = await client.fetch(query);
  return data;
};
const PopularProducts = async () => {
  const products = await getData();

  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Popular Products</h2>
        <p className='text-center mb-[30px]'>Our Customers’ Favorites</p>

        <PopularProductsCarousel products={products} />
        <button className='btn btn-accent mx-auto'>See all</button>
      </div>
    </section>
  );
};

export default PopularProducts;
