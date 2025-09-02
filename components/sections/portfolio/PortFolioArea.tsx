"use client"

import Image from 'next/image';
import React from 'react';
import subtitleIcon from '../../../public/assets/img/shape/subtitle-shape.png'
import portfolioImg1 from '../../../public/assets/img/portfolio/portfolio-img-1.png'
import portfolioImg2 from '../../../public/assets/img/portfolio/portfolio-img-2.png'
import portfolioImg3 from '../../../public/assets/img/portfolio/portfolio-img-3.png'
import LeftArrowIcon from '@/components/icons/portfolio/LeftArrowIcon';
import RightArrowIcon from '@/components/icons/portfolio/RightArrowIcon';
import UpArrow from '@/components/icons/portfolio/UpArrow';
import Link from 'next/link';
import Slider from "react-slick";

const PortFolioArea = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <section className='portfolio-area pt-[100px] pb-[120px] overflow-hidden'>
            <div className="custom-container">
                <div className="div flex items-center gap-[5px]">
                    <div className="subtitle-icon">
                        <Image src={subtitleIcon} style={{ width: "auto", height: "auto" }} alt="Subtitle shape" />
                    </div>
                    <span className='section-subtitle-two'>Work showcase</span>
                </div>
                <div className="grid grid-cols-12 gap-2.5">
                    <div className="col-span-9">
                        <h2 className="section-title-two mt-[-30px]">Recent <span>Works</span></h2>
                    </div>
                    <div className="col-span-3">
                        <div className="slider-arrow-wrap pt-[50px]">
                            <p className='mb-[65px]'>Ready to transform your hard work into a thriving, stress-free business?</p>
                            <div className="slider-arrows flex gap-2.5 justify-end mr-2.5">
                                <button type='button' className='common-slider-arrow-btn'><LeftArrowIcon /></button>
                                <button type='button' className='common-slider-arrow-btn'><RightArrowIcon /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-items">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="portfolio-item">
                                <div className="portfolio-item-img">
                                    <Image src={portfolioImg1} style={{ width: "100%", height: "100%" }} alt="Portfolio image" />
                                    <div className="portfolio-item-img-overlay">
                                        <span>2024, Business 1</span>
                                        <div className="portfolio-title-wrap">
                                            <h5 className='font-semibold'><Link href="#">Business Consulting Service</Link></h5>
                                            <div className="portfolio-title-arrow">
                                                <Link href="#"><UpArrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="portfolio-item-img">
                                    <Image src={portfolioImg2} style={{ width: "100%", height: "100%" }} alt="Portfolio image" />
                                    <div className="portfolio-item-img-overlay">
                                        <span>2024, Business 2</span>
                                        <div className="portfolio-title-wrap">
                                            <h5 className='font-semibold'><Link href="#">Business Consulting Service</Link></h5>
                                            <div className="portfolio-title-arrow">
                                                <Link href="#"><UpArrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="portfolio-item-img">
                                    <Image src={portfolioImg3} style={{ width: "100%", height: "100%" }} alt="Portfolio image" />
                                    <div className="portfolio-item-img-overlay">
                                        <span>2024, Business 3</span>
                                        <div className="portfolio-title-wrap">
                                            <h5 className='font-semibold'><Link href="#">Business Consulting Service</Link></h5>
                                            <div className="portfolio-title-arrow">
                                                <Link href="#"><UpArrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="portfolio-item-img">
                                    <Image src={portfolioImg1} style={{ width: "100%", height: "100%" }} alt="Portfolio image" />
                                    <div className="portfolio-item-img-overlay">
                                        <span>2024, Business 4</span>
                                        <div className="portfolio-title-wrap">
                                            <h5 className='font-semibold'><Link href="#">Business Consulting Service</Link></h5>
                                            <div className="portfolio-title-arrow">
                                                <Link href="#"><UpArrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
        </section>
    );
};

export default PortFolioArea;