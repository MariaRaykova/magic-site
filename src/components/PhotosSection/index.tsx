import React from 'react'
import SwiperCore, {
  Navigation, Pagination, EffectCoverflow, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function PhotosSection() {
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
      style={{ height: '400px' }}
    >
      <SwiperSlide>
        <img src="/images/image0.jpeg" width="360px" height="360px" object-fit="cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image1.jpeg" width="360px" height="360px" object-fit="cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image2.jpeg" width="360px" height="360px" object-fit="cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image3.jpeg" width="360px" height="360px" object-fit="cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image4.jpeg" width="360px" height="360px" object-fit="cover" />
      </SwiperSlide>
    </Swiper>
  );
}
export default PhotosSection;
