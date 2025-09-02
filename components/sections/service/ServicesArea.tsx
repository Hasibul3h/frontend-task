"use client"

import Image from 'next/image';
import React from 'react';
import bgShape from '../../../public/assets/img/shape/service-shape.png'
import ArrowIcon from '@/components/icons/about/ArrowIcon';
import Link from 'next/link';
import { serviceData } from '@/data/service-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

const ServicesArea = () => {
    return (
        <section className='service-area relative py-[100px] overflow-hidden'>
            <div className="service-shape absolute top-0 left-0">
                <Image src={bgShape} style={{ width: "auto", height: "auto" }} alt="Background shape" />
            </div>
            <div className="custom-container">
                <div className='text-center mb-[65px]'>
                    <span className="section-subtitle mb-[18px]"><ArrowIcon /> What We Do</span>
                    <h3 className='section-title'>Our Popular Services</h3>
                </div>
                <div className="mb-[60px]">
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={0}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel]}
                        className="service-items"
                    >
                        {serviceData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service-item-parent">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-10">
                                            <div className="service-item">
                                                <div className="service-item-img">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        style={{ width: "100%", height: "auto" }}
                                                    />
                                                </div>
                                                <div className="service-item-content">
                                                    <div className="service-badge">
                                                        <span>{service.badge}</span>
                                                    </div>
                                                    <h3 className="font-semibold mb-2.5">{service.title}</h3>
                                                    <p className="mb-5">{service.description}</p>
                                                    <Link href={service.link} className="rt-btn rt-gray-outline-btn">
                                                        Read Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="text-center">
                    <Link href="#" className='rt-btn rt-btn-md rt-btn-primary'>View all services</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;