"use client";

import LeftArrowIcon from "@/components/icons/portfolio/LeftArrowIcon";
import RightArrowIcon from "@/components/icons/portfolio/RightArrowIcon";
import QouteIcon from "@/components/icons/testimonial/QouteIcon";
import StarIcon from "@/components/icons/testimonial/StarIcon";
import { testimonialImageData, testimonials } from "@/data/testimonial-data";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

const TestimonialAreaSlick = () => {
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNext = () => {
        sliderRef1.current?.slickNext();
        sliderRef2.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef1.current?.slickPrev();
        sliderRef2.current?.slickPrev();
    };

    const handleBeforeChange = (current: number, next: number) => {
        setCurrentSlide(next);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentSlide(index);
        sliderRef1.current?.slickGoTo(index);
        sliderRef2.current?.slickGoTo(index);
    };

    // Settings for the main content slider
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        beforeChange: handleBeforeChange,
        swipe: false, // Disable swipe to prevent desync
        touchMove: false // Disable touch to prevent desync
    };

    // Settings for the thumbnail/navigation slider
    const navSliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        centerPadding: '0px',
        beforeChange: handleBeforeChange,
        swipe: false, // Disable swipe to prevent desync
        touchMove: false // Disable touch to prevent desync
    };

    return (
        <section className='testimonial-area pt-[100px] pb-[95px]'>
            <div className="custom-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-7">
                        <div className="slider-container relative">
                            <Slider
                                {...navSliderSettings}
                                ref={sliderRef2}
                                className="testimonial-images"
                            >
                                {testimonialImageData.map((item, index) => (
                                    <div
                                        className="testimonial-image relative"
                                        key={item.id}
                                        onClick={() => handleThumbnailClick(index)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt="Client image"
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                        <div className="qoute-icon">
                                            <QouteIcon />
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <Slider
                                {...mainSliderSettings}
                                ref={sliderRef1}
                            >
                                {testimonials.map((item) => (
                                    <div className="testimonial-item text-center" key={item.id}>
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
                                ))}
                            </Slider>

                            <div className="test-slider-navigation">
                                <button
                                    type="button"
                                    onClick={goToPrev}
                                    className="common-slider-arrow-btn left-arrow"
                                >
                                    <LeftArrowIcon />
                                </button>

                                <button
                                    type="button"
                                    onClick={goToNext}
                                    className="common-slider-arrow-btn right-arrow"
                                >
                                    <RightArrowIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialAreaSlick;