"use client";

import CallIcon from '@/components/icons/hero/CallIcon';
import Link from 'next/link';
import React from 'react';
import client1 from '../../../public/assets/img/client/client-1.png'
import client2 from '../../../public/assets/img/client/client-2.png'
import client3 from '../../../public/assets/img/client/client-3.png'
import client4 from '../../../public/assets/img/client/client-4.png'
import innerShape1 from '../../../public/assets/img/shape/hero-shape-1.png'
import innerShape2 from '../../../public/assets/img/shape/hero-shape-2.png'
import outerShape1 from '../../../public/assets/img/shape/hero-shape-left.png'
import outerShape2 from '../../../public/assets/img/shape/hero-shape-right.png'
import heroThumb from '../../../public/assets/img/hero/hero-thumb.png'
import videoCircleText from '../../../public/assets/img/hero/video-circle-text.png'
import Image from 'next/image';
import PlusIcon from '@/components/icons/hero/PlusIcon';
import PlayIcon from '@/components/icons/hero/PlayIcon';
import { useVideoModal } from '@/provider/VideoProvider';

const HeroArea = () => {
    const { playVideo } = useVideoModal();
    return (
        <section className='hero-area pt-[90px] pb-[155px] relative'>
            <div className="hero-outer-shapes">
                <Image className='outer-shape-1' src={outerShape1} style={{ width: "auto", height: "auto" }} alt="Shape image" />
                <Image className='outer-shape-2' src={outerShape2} style={{ width: "auto", height: "auto" }} alt="Shape image" />
            </div>
            <div className="custom-container">
                <div className="hero-inner-shapes relative">
                    <Image className='inner-shape-1' src={innerShape1} style={{ width: "auto", height: "auto" }} alt="Shape image" />
                    <Image className='inner-shape-2' src={innerShape2} style={{ width: "auto", height: "auto" }} alt="Shape image" />
                    <div className="grid grid-cols-12">
                        <div className="col-span-9">
                            <div className="hero-content">
                                <h1 className='hero-title mb-[27px]'>We shape the future of <span>business</span></h1>
                                <p className='mb-[45px]'>A business consultant is a professional who provides expert advice <br />and guidance to businesses on various aspects such.</p>
                                <div className='flex items-center gap-[30px] flex-wrap mb-[55px]'>
                                    <button type='button' className='rt-btn rt-btn-md rt-btn-primary'>Explore more</button>
                                    <div className='flex items-center gap-[10px]'>
                                        <span className='h-[50px] w-[50px] rounded-[50%] inline-flex items-center justify-center border-[2px] border-heading/10 text-primary'><CallIcon /></span>
                                        <div>
                                            <span className='text-[13px] font-normal text-body block'>Free Consultant</span>
                                            <Link href="tel:406555-0120" className='text-[17px] font-medium text-heading hover:text-primary'>(406) 555-0120</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-client flex items-center flex-wrap gap-4">
                                    <div className="hero-client-thumb">
                                        <ul>
                                            <li>
                                                <Link href="#"><Image className='inline-block' src={client1} style={{ width: "100%", height: "100%" }} alt="Client image" /></Link>
                                                <div className="hero-client-overlay">
                                                    <PlusIcon />
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="#"><Image className='inline-block' src={client2} style={{ width: "100%", height: "100%" }} alt="Client image" /></Link>
                                                <div className="hero-client-overlay">
                                                    <PlusIcon />
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="#"><Image className='inline-block' src={client3} style={{ width: "100%", height: "100%" }} alt="Client image" /></Link>
                                                <div className="hero-client-overlay">
                                                    <PlusIcon />
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="#"><Image className='inline-block' src={client4} style={{ width: "100%", height: "100%" }} alt="Client image" /></Link>
                                                <div className="hero-client-overlay">
                                                    <PlusIcon />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hero-client-text">
                                        <span className='text-body text-[16px] leading-normal font-normal'><span className='font-semibold text-primary'>2.5K+</span> Business Peoples <br />Already Registered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-thumb-wrapper">
                <div className="hero-thumb">
                    <Image src={heroThumb} style={{ width: "100%", height: "100%" }} alt="Team collaborating in a modern office" />
                </div>
                <div className="hero-video-btn">
                    <Image className='animate-circular-text' src={videoCircleText} style={{ width: "auto", height: "auto" }} alt="Video circle text" />
                    <div className="hero-video-btn-play">
                        <button type='button' onClick={() => playVideo("go7QYaQR494", "youtube")}><PlayIcon /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;
