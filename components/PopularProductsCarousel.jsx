'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Product from './Product';

const PopularProductsCarousel = ({ products }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className='popular-product-slider mb-8'
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product._id}>
            <Product product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularProductsCarousel;
