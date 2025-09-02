import AboutArea from '@/components/sections/about/AboutArea';
import CounterArea from '@/components/sections/counter/CounterArea';
import HeroArea from '@/components/sections/hero/HeroArea';
import PortfolioSlider from '@/components/sections/portfolio/PortfolioSlider';
import ServicesArea from '@/components/sections/service/ServicesArea';
import TextSlideArea from '@/components/sections/slide/TextSlideArea';
import TestimonialProgress from '@/components/sections/testimonial/TestimonialProgress';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <HeroArea />
            <TextSlideArea />
            <AboutArea />
            <CounterArea />
            <ServicesArea />
            <PortfolioSlider />
            <TestimonialProgress />
        </>
    );
};

export default HomePage;