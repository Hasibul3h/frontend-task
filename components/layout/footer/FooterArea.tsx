import Image from 'next/image';
import React from 'react';
import footerShape1 from '../../../public/assets/img/shape/footer-shape.png'
import footerShape2 from '../../../public/assets/img/shape/footer-shape-2.png'
import footerLogo from '../../../public/assets/img/logo/footer-logo.png'
import eventImg1 from '../../../public/assets/img/footer/event-img-1.png'
import eventImg2 from '../../../public/assets/img/footer/event-img-2.png'
import eventImg3 from '../../../public/assets/img/footer/event-img-3.png'
import Link from 'next/link';
import FacebookIcon from '@/components/icons/social/FacebookIcon';
import XIcon from '@/components/icons/social/XIcon';
import InstaIcon from '@/components/icons/social/InstaIcon';
import LinkedinIcon from '@/components/icons/social/LinkedinIcon';
import UpArrowGradient from '@/components/icons/portfolio/UpArrowGradient';
import BellIcon from '@/components/icons/testimonial/BellIcon';

const FooterArea = () => {
    return (
        <footer className='footer-area bg-dark pt-[95px] relative'>
            <div className="footer-shapes">
                <Image className='footer-shape-1' src={footerShape1} alt="Footer shape" style={{ width: "auto", height: "auto" }} />
                <Image className='footer-shape-2' src={footerShape2} alt="Footer shape" style={{ width: "auto", height: "auto" }} />
            </div>
            <div className="footer-widgets-area mb-2.5">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-2.5">
                        <div className="col-span-4">
                            <div className="footer-widget footer-description rounded-[10px]">
                                <div className="footer-logo max-w-[210px] mb-5">
                                    <Image src={footerLogo} alt="Footer logo" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <p className='mb-5'>Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business.</p>
                                <span className='text-[16px] leading-[1.75] text-white/60 font-normal'>We Are Available !!</span>
                                <span className='text-[18px] leading-[1.75] text-white font-medium mb-[25px]'>Mon-Sat:  10:00am - 08:00pm</span>
                                <div className="footer-social">
                                    <Link href="#" target='_blank'><FacebookIcon /></Link>
                                    <Link href="#" target='_blank'><XIcon /></Link>
                                    <Link href="#" target='_blank'><InstaIcon /></Link>
                                    <Link href="#" target='_blank'><LinkedinIcon /></Link>
                                </div>
                                <div className='w-full'>
                                    <span className='shape-line inline-block animate-slide-text'></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className='footer-contents rounded-[10px] relative'>
                                <div className="grid grid-cols-8">
                                    <div className="col-span-2">
                                        <div className="footer-widget footer-menus">
                                            <h5 className='text-white font-semibold mb-[25px]'>Quick Link</h5>
                                            <nav>
                                                <ul>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>About Company</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Strategy</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Investor Presentation</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Investor Career</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Meet Our Team</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Get in Touch</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="footer-widget footer-menus ml-[45px]">
                                            <h5 className='text-white font-semibold mb-[25px]'>Our Services</h5>
                                            <nav>
                                                <ul>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Business Consulting</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Finance Strategy</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Investor Presentation</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Investor Career</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Marketing Analysis</Link></li>
                                                    <li><Link href="#"><span><UpArrowGradient /></span>Tax Preparation</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="footer-widget footer-events-wrap ml-[-10px]">
                                            <h5 className='text-white font-semibold mb-[30px]'>Upcoming Event</h5>
                                            <div className="footer-events">
                                                <div className="footer-event mb-5">
                                                    <div className="footer-event-img">
                                                        <Image src={eventImg1} alt="Event image" style={{ width: "100%", height: "100%" }} />
                                                    </div>
                                                    <div className="footer-event-content">
                                                        <Link href="#">Business Consulting</Link>
                                                        <span>26 March, USA</span>
                                                    </div>
                                                </div>
                                                <div className="footer-event mb-5">
                                                    <div className="footer-event-img">
                                                        <Image src={eventImg2} alt="Event image" style={{ width: "100%", height: "100%" }} />
                                                    </div>
                                                    <div className="footer-event-content">
                                                        <Link href="#">Email Marketing</Link>
                                                        <span>29 September, CA</span>
                                                    </div>
                                                </div>
                                                <div className="footer-event">
                                                    <div className="footer-event-img">
                                                        <Image src={eventImg3} alt="Event image" style={{ width: "100%", height: "100%" }} />
                                                    </div>
                                                    <div className="footer-event-content">
                                                        <Link href="#">Cultures of Creativity</Link>
                                                        <span>30 August, UK</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className='shape-line inline-block animate-slide-text'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className="custom-container">
                    <div className='newsletter-bg'>
                        <div className="newsletter-wrap flex justify-between items-center">
                            <div className="newsletter-text flex gap-5 items-center">
                                <div className="newsletter-text-icon">
                                    <span><BellIcon /></span>
                                </div>
                                <h4 className='text-[32px] font-semibold text-white leading-[1.3]'>keep up to date - <br />get updates with latest topics</h4>
                            </div>
                            <div className="newsletter-form">
                                <form action="#">
                                    <input type="text" placeholder='Enter your email...' />
                                    <button type='submit' className='rt-btn rt-btn-sm rt-btn-primary'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area py-[60px]">
                <div className="custom-container">
                    <div className="copyright-wrap flex items-center justify-between">
                        <div className="copyright-text">
                            <span>2025 <Link href="#">Rainbow Themes</Link>. All Rights Reserved.</span>
                        </div>
                        <div className="copyright-menus">
                            <nav>
                                <ul>
                                    <li><Link href="#">Terms & Condition</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Support</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterArea;