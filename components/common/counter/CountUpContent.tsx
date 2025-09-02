"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountUpContentProps {
  number: number;
  text?: string;
  sign?: string;
}

const CountUpContent: React.FC<CountUpContentProps> = ({ number, text, sign }) => {
  const [focus, setFocus] = useState<boolean>(false);

  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible && !focus) {
      setFocus(true);
    }
  };

  return (
    <CountUp start={focus ? 0 : undefined} end={number} duration={5}>
      {({ countUpRef }) => (
        <div className={`counter-item-title inline-flex items-baseline`}>
          <h2 className="counter">
            <span ref={countUpRef} />
          </h2>
          <InView as="span" onChange={visibleChangeHandler}>
            {text && <span className="counter-text">{text}</span>}
            {sign && <span className="counter-sign">{sign}</span>}
          </InView>
        </div>
      )}
    </CountUp>
  );
};

export default CountUpContent;
