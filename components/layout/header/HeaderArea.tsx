"use client";

import React from 'react';
import HeaderTopArea from './HeaderTopArea';
import BarIcon from '@/components/icons/header/BarIcon';
import CartIcon from '@/components/icons/header/CartIcon';
import SearchIcon from '@/components/icons/header/SearchIcon';
import HeaderMenus from './Menu/HeaderMenus';

const HeaderArea = () => {
    return (
        <header className='header-area'>
            <HeaderTopArea />
            <div className="header-menu-area">
                <div className="custom-container">
                    <div className="header-menu-border border-b border-primary/10">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-3">
                                <div className="header-actions leading-none flex items-center h-full">
                                    <button type='button'><BarIcon /></button>
                                    <span className='h-5 w-[1px] ml-[15px] mr-[14px] bg-[#2A303D]/15 translate-y-[2px] inline-block'></span>
                                    <div className="cart-btn-wrap relative">
                                        <button type='button'><CartIcon /></button>
                                        <span>02</span>
                                    </div>
                                    <span className='h-5 w-[1px] ml-[26px] mr-[14px] bg-[#2A303D]/15 translate-y-[2px] inline-block'></span>
                                    <button type='button'><SearchIcon /></button>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="main-menu">
                                    <nav>
                                        <HeaderMenus />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="header-btn-wrap flex h-full items-center justify-end">
                                    <button type='button' className='rt-btn rt-btn-sm rt-btn-primary'>Get a free quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderArea;
