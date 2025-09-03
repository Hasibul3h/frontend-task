import Image from 'next/image';
import React from 'react';
import bgShape from '../../../public/assets/img/shape/about-bg-shape.png'
import aboutImgOne from '../../../public/assets/img/about/about-img-1.png'
import aboutImgTwo from '../../../public/assets/img/about/about-img-2.png'
import aboutCircleText from '../../../public/assets/img/about/about-text-circle.png'
import author from '../../../public/assets/img/about/author.png'
import sign from '../../../public/assets/img/about/sign.png'
import expIcon from '../../../public/assets/img/shape/exp-shape.png'
import ArrowIcon from '@/components/icons/about/ArrowIcon';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <section className='about-area pt-[140px] pb-[135px] relative overflow-hidden'>
            <div className="about-bg-shape absolute right-0 bottom-[22px]">
                <Image className='inline-block' src={bgShape} style={{ width: "auto", height: "auto" }} alt="Shape" />
            </div>
            <div className="custom-container">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6">
                        <div className="about-img">
                            <div className="about-img-one">
                                <Image src={aboutImgOne} style={{ width: "100%", height: "100%" }} alt="Client image" />
                            </div>
                            <div className="about-img-two">
                                <Image src={aboutImgTwo} style={{ width: "100%", height: "100%" }} alt="Client image" />
                            </div>
                            <div className="about-circle">
                                <div className="about-circle-img">
                                    <Image className='animate-circular-text' src={aboutCircleText} style={{ width: "auto", height: "auto" }} alt="Experience text" />
                                    <div className="about-circle-img-icon">
                                        <Image src={expIcon} style={{ width: "auto", height: "auto" }} alt="Experience shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="about-content pt-[25px]">
                            <span className="section-subtitle mb-[32px]"><ArrowIcon /> Know about us</span>
                            <h3 className='section-title mb-[23px]'>All-in-one web solution for your business</h3>
                            <p className='pr-5 mb-[37px]'>We are creative agency, we are here to helping your business growth consectetur adipiscing.</p>
                            <ul className='mb-[45px]'>
                                <li><span></span> There are many variations of passages available</li>
                                <li><span></span> Majority have suffered alteration in some form</li>
                                <li><span></span> Contrary to popular belief is not simply random</li>
                            </ul>
                            <div className="about-author-wrap flex flex-wrap gap-7">
                                <Link href="#" className='btn btn-md btn-primary'>More about us</Link>
                                <div className="about-author flex gap-[18px] items-center">
                                    <div className="about-author-img">
                                        <Image src={author} style={{ width: "auto", height: "auto" }} alt="Author image" />
                                    </div>
                                    <div className="about-author-text text-center">
                                        <Image className='mx-auto pb-1.5' src={sign} style={{ width: "auto", height: "auto" }} alt="Author sign" />
                                        <span className='text-[14px] font-normal text-body inline-block px-2 whitespace-nowrap border-t border-heading/15 pt-1'>CEO at Company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;


