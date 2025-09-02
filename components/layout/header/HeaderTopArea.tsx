"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/img/logo/logo.png'
import NiceSelect from '@/components/ui/NiceSelect';
import MapIcon from '@/components/icons/header/MapIcon';
import EmailIcon from '@/components/icons/header/EmailIcon';
import FacebookIcon from '@/components/icons/social/FacebookIcon';
import XIcon from '@/components/icons/social/XIcon';
import InstaIcon from '@/components/icons/social/InstaIcon';
import LinkedinIcon from '@/components/icons/social/LinkedinIcon';
import GlobeIcon from '@/components/icons/header/GlobeIcon';

interface niceSelectType {
    id: number;
    option: string;
}

const selectLanguageData: niceSelectType[] = [
    {
        id: 2,
        option: "English",
    },
    {
        id: 3,
        option: "Spanish",
    },
    {
        id: 4,
        option: "French",
    },
    {
        id: 5,
        option: "German",
    },
];

const HeaderTopArea = () => {
    const selectHandler = () => { };
    return (
        <div className="header-top">
            <div className="max-w-[1362px] mx-auto">
                <div className="header-top-bg py-[19px]">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4">
                            <div className="header-content">
                                <ul>
                                    <li>
                                        <Link href="#" target='_blank'><MapIcon />15th Street, USA</Link>
                                    </li>
                                    <li className='separator'></li>
                                    <li>
                                        <Link href="mailto:support@gamil.com" target='_blank'><EmailIcon />support@gamil.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="header-logo text-center">
                                <Link href="/">
                                    <Image className='inline-block' src={logo} style={{ width: "auto", height: "100%" }} alt="Rainbow themes logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="header-info">
                                <div className="language-selector">
                                    <GlobeIcon />
                                    <NiceSelect
                                        options={selectLanguageData}
                                        defaultCurrent={0}
                                        onChange={selectHandler}
                                        name="language"
                                        className="English"
                                    />
                                </div>
                                <div className='separator'></div>
                                <div className="header-social">
                                    <ul>
                                        <li><Link href="#" target='_blank'><FacebookIcon /></Link></li>
                                        <li><Link href="#" target='_blank'><XIcon /></Link></li>
                                        <li><Link href="#" target='_blank'><InstaIcon /></Link></li>
                                        <li><Link href="#" target='_blank'><LinkedinIcon /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopArea;