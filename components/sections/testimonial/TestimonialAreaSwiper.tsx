"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import StarIcon from '@/components/icons/testimonial/StarIcon';
import Image from 'next/image';
import { testimonialImageData, testimonials } from '@/data/testimonial-data';

const TestimonialAreaSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <section className='testimonial-area pt-[100px] pb-[95px]'>
            <div className="custom-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-7">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            centeredSlides={true}
                            slidesPerView={5}
                            loop={true}
                            freeMode={true}
                            watchSlidesProgress={true}
                            slideToClickedSlide={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                            className="mySwiper"
                        >
                            {testimonialImageData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-image">
                                        <Image
                                            src={item.image}
                                            alt="Client image"
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                            className="mySwiper2"
                            onSlideChange={(swiper) => {
                                if (thumbsSwiper) {
                                    thumbsSwiper.slideTo(swiper.activeIndex);
                                }
                            }}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-item text-center">
                                        <p className="mb-[30px]">
                                            “{item.text.split("Expert Advisor")[0]}
                                            <span className="text-heading">Expert Advisor</span>
                                            {item.text.split("Expert Advisor")[1]}”
                                        </p>
                                        <div className="testimonial-item-author text-center">
                                            <h6 className="mb-2">
                                                {item.name} - <span>{item.designation}</span>
                                            </h6>
                                            <div className="rating">
                                                {Array.from({ length: item.rating }).map((_, i) => (
                                                    <span key={i}>
                                                        <StarIcon />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialAreaSwiper;