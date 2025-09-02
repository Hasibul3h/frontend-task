import CountUpContent from '@/components/common/counter/CountUpContent';
import factData from '@/data/fact-data';
import React from 'react';

const CounterArea = () => {
    return (
        <section className='counter-area pb-[100px]'>
            <div className="custom-container">
                <div className="counter-items">
                    {factData.map((item, index) => (
                        <div className="counter-item" key={index}>
                            <div className="counter-item-border"></div>
                            <CountUpContent number={item.count} text={item?.text} sign={item.sign} />
                            <div className="counter-item-subtitle">
                                <span>{item.subTitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterArea;