import React, { useMemo } from 'react'
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import styles from './index.module.css'

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const PhotosSection = () => {
  const images = useMemo(() => (
    Array.from({ length: 5 }).map((_, index) => ({
      id: index,
      src: `/images/image${index + 1}.jpeg`
    })
    )), [])
  return (
    <Swiper
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slidesPerView={4}
      centeredSlides
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className={styles.swiperWrapper}
    >
      {images.map(image => (
        <SwiperSlide key={image.id}>
          <img
            className={styles.swiperSlide}
            src={image.src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default PhotosSection;
