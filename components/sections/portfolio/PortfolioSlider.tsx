"use client"

import LeftArrowIcon from '@/components/icons/portfolio/LeftArrowIcon';
import RightArrowIcon from '@/components/icons/portfolio/RightArrowIcon';
import UpArrow from '@/components/icons/portfolio/UpArrow';
import { portfolioData } from '@/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import subtitleIcon from '../../../public/assets/img/shape/subtitle-shape.png'

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 400000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const getSlidePosition = (index: number) => {
    const diff = (index - currentSlide + portfolioData.length) % portfolioData.length;

    if (diff === 0) return ' portfolio-active-slide'; // Active slide
    if (diff === 1) return ' third-slide'; // Third slide
    if (diff === 2) return ' fourth-slide'; // Fourth slide
    if (diff === portfolioData.length - 2) return ' fifth-slide'; // Fifth Slide
    if (diff === portfolioData.length - 1) return 'second-slide'; // Second slide
    return 'translate-x-[200%] scale-50 z-0 opacity-0'; // Hidden
  };

  return (
    <div className="portfolio-area pt-[100px] pb-[120px] overflow-hidden">
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
                <button type='button' className='common-slider-arrow-btn' onClick={prevSlide} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}><LeftArrowIcon /></button>
                <button type='button' className='common-slider-arrow-btn' onClick={nextSlide} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}><RightArrowIcon /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-items mt-[-50px]">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            {portfolioData.map((item, index) => (
              <div
                key={item.id}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${getSlidePosition(index)}`}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="portfolio-item">
                  <div className="portfolio-item-img">
                    <Image src={item?.image} style={{ width: "100%", height: "100%" }} alt="Portfolio image" />
                    <div className="portfolio-item-img-overlay">
                      <span>{item?.badge}</span>
                      <div className="portfolio-title-wrap">
                        <h5 className='font-semibold'><Link href="#">{item.title}</Link></h5>
                        <div className="portfolio-title-arrow">
                          <Link href="#"><UpArrow /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;