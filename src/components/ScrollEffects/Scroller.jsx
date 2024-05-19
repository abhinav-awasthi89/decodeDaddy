import React, { useEffect, useRef } from 'react';

function Scroller() {
    const scrollerInnerRef = useRef(null);
    const lastScrollTopRef = useRef(0);
    const scrollTimeoutRef = useRef(null);
    const transformPositionRef = useRef(0);

    useEffect(() => {
        const scrollerInner = scrollerInnerRef.current;
        const middlePosition = -scrollerInner.scrollWidth / 2;
        scrollerInner.style.transform = `translateX(${middlePosition}px)`;
        transformPositionRef.current = middlePosition;
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            if (currentScrollTop > lastScrollTopRef.current) {
                // Scrolling Down
                transformPositionRef.current -= 4; // Adjust this value to control speed
                scrollerInner.style.transform = `translateX(${transformPositionRef.current}px)`;
            } else if (currentScrollTop < lastScrollTopRef.current) {
                // Scrolling Up
                transformPositionRef.current += 4; // Adjust this value to control speed
                scrollerInner.style.transform = `translateX(${transformPositionRef.current}px)`;
            }

            // Update last scroll position
            lastScrollTopRef.current = currentScrollTop;

            // Set a timeout to pause the animation if no scroll occurs
            scrollTimeoutRef.current = setTimeout(() => {
                scrollerInner.style.transition = 'transform 0.5s ease-out';
            }, 100); // 100ms interval to determine no scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);
    const items = [
        { src: 'img/star.webp', alt: 's', text: 'Innovators' },
        { src: 'img/star.webp', alt: 's', text: 'Imaginator' },
        { src: 'img/star.webp', alt: 's', text: 'Creators' },
        { src: 'img/star.webp', alt: 's', text: 'Innovators' },
        { src: 'img/star.webp', alt: 's', text: 'Imaginator' },
        { src: 'img/star.webp', alt: 's', text: 'Maverik' },
        { src: 'img/star.webp', alt: 's', text: 'Visionary' },
        { src: 'img/star.webp', alt: 's', text: 'Creators' },
    ];

    const repeatedItems = Array.from({ length: 3 }, () => items).flat();

    return (
        <div className="scroller">
            <ul className="tag-list scroller__inner" ref={scrollerInnerRef}>
                {repeatedItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.src} alt={item.alt} style={{width: '50px', padding: "10px"}}/>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scroller;
