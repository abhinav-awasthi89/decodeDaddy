import React from 'react';
import { useState, useEffect, useCallback } from 'react';
function VerticalScroll() {
    const [visible, setVisible] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const handleScroll = useCallback(
        debounce(() => {
            setIsScrolling(false);
            setVisible(0);
            // setTimeout(() => {
            //     setVisible(0);
            // }, 300);
        }, 500),
        []
    );

    const startScroll = () => {
        if (!isScrolling) {
            setVisible(1);
            setIsScrolling(true);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", startScroll);
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", startScroll);
            document.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);


    return (
        <div id="v-scroller" style={{ opacity: visible, transition: 'opacity 0.3s ease-in-out' }} className="v-scroller">
            <ul className="v-tag-list v-scroller__inner">
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
                <li>Decode Daddy</li>
            </ul>
        </div>
    );
}

export default VerticalScroll;
