'use client';

//sliders de los trainers con swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Container from './shared/Container';
import Title from './ui/Title';

const Trainers = () => {
  return (
    <section
      id='trainers'
      className='min-h-screen flex items-center justify-center'
    >
      <Container>
        <Title title='Join Out' titlePrimary='Trainer' />
        <div>
          <Swiper spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-1.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-2.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-3.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-4.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-5.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-[70vh] mx-auto'>
                <Image
                  src='/images/trainer-6.png'
                  alt='Trainer'
                  fill
                  className='object-cover rounded-xl shadow-xl'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Trainers;
