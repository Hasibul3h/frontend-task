"use client";

import React, { useEffect, useState } from "react";
import Preloader from "../common/preloader/Preloader";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Set the loading state to false after a timeout
    useEffect(() => {
        const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(loadingTimeout);
    }, []);

    // Initialize WOW.js animations on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("wow.js").then((WOWModule) => {
                const WOWClass = WOWModule.default; // Access the default export
                const wow = new WOWClass({
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: true,
                    live: true,
                });
                wow.init();
            });
        }
    }, []);

    return <>
        {isLoading ? <Preloader /> : children}
    </>;
};

export default Wrapper;
