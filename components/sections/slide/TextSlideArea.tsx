import { textSlidesData } from '@/data/text-data';
import Image from 'next/image';
import React from 'react';


const TextSlideArea = () => {
    return (
        <div className='text-slide-area'>
            <div className='text-slide-bg overflow-hidden'>
                <div className="text-slides flex gap-5 items-center animate-slide-text whitespace-nowrap">
                    {textSlidesData.map((item, index) => (
                        <div key={index} className="text-slide flex gap-5 items-center w-fit">
                            <div className="text-slide-shape">
                                <Image
                                    src={item.shape}
                                    style={{ width: '100%', height: 'auto' }}
                                    alt="Text slide shape"
                                />
                            </div>
                            <div className="text-slide-text">
                                <h3 className="text-slide-text-title">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextSlideArea;