"use client";

import LeftArrowIcon from "@/components/icons/portfolio/LeftArrowIcon";
import RightArrowIcon from "@/components/icons/portfolio/RightArrowIcon";
import ProgressBar from "@/components/icons/testimonial/ProgressBar";
import QouteIcon from "@/components/icons/testimonial/QouteIcon";
import StarIcon from "@/components/icons/testimonial/StarIcon";
import { testimonialImageData, testimonials } from "@/data/testimonial-data";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

const TestimonialProgress = () => {
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const SLIDE_DURATION = 5000; 
    const PROGRESS_INTERVAL = 50; 

    // Intersection Observer to detect when section is in view
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '-50px 0px' // Add some margin for better UX
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        setProgress(0);
        let currentProgress = 0;

        intervalRef.current = setInterval(() => {
            currentProgress += (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;

            if (currentProgress >= 100) {
                currentProgress = 0;
                goToNext();
                setProgress(0);
            } else {
                setProgress(currentProgress);
            }
        }, PROGRESS_INTERVAL);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Start autoplay only when section is in view and autoplay is enabled
    React.useEffect(() => {
        if (isAutoPlaying && isInView) {
            startAutoPlay();
        } else {
            stopAutoPlay();
            setProgress(0); // Reset progress when stopping
        }

        return () => stopAutoPlay();
    }, [currentSlide, isAutoPlaying, isInView]);

    const goToNext = () => {
        sliderRef1.current?.slickNext();
        sliderRef2.current?.slickNext();
        setProgress(0);
    };

    const goToPrev = () => {
        sliderRef1.current?.slickPrev();
        sliderRef2.current?.slickPrev();
        setProgress(0);
    };

    const handleBeforeChange = (current: number, next: number) => {
        setCurrentSlide(next);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentSlide(index);
        sliderRef1.current?.slickGoTo(index);
        sliderRef2.current?.slickGoTo(index);
        setProgress(0);
        // Only restart autoplay if section is in view
        if (isAutoPlaying && isInView) {
            startAutoPlay();
        }
    };

    // Settings for the main content slider
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        beforeChange: handleBeforeChange,
        swipe: false, 
        touchMove: false 
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
        swipe: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <section ref={sectionRef} className='testimonial-area pt-[100px] pb-[95px]'>
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
                                {testimonialImageData.map((item, index) => {
                                    const nextSlideIndex = (currentSlide + 1) % testimonials.length;
                                    const isNextSlide = index === nextSlideIndex;
                                    return (
                                        <div
                                            className="testimonial-image relative"
                                            key={item.id}
                                            onClick={() => handleThumbnailClick(index)}
                                        >
                                            {isNextSlide && isAutoPlaying && isInView && (
                                                <ProgressBar progress={progress} />
                                            )}
                                            <Image
                                                src={item.image}
                                                alt="Client image"
                                                style={{ width: "100%", height: "100%" }}
                                                className="rounded-full relative z-10"
                                            />
                                            <div className="qoute-icon">
                                                <QouteIcon />
                                            </div>
                                        </div>
                                    )
                                })}

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

export default TestimonialProgress;