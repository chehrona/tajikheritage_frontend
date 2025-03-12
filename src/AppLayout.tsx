'use client';

import React, { useState, useRef, ReactNode } from 'react';

// Routing
import { useLocation } from 'react-router-dom';

// Components
import Header from './components/common/header/Header';
import Menu from './components/common/menu/menuDropdown/Menu';
import Footer from './components/common/footer/Footer';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { pathname } = useLocation();
    const parentRef = useRef<HTMLInputElement>(null);
    const [position, setPosition] = useState<number>(0);
    const [showArrow, setShowArrow] = useState<boolean>(false);
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
    const menuAnchorEl = useRef<HTMLDivElement | null>(null);

    const noFooter = pathname.includes('print') || pathname === '/';
    const noHeader = pathname.includes('print');

    const handleScroll = () => {
        const currentElement = parentRef.current;

        if (currentElement == null) {
            return;
        }

        const currentScrollPos = currentElement.scrollTop;
        const parentHeight = currentElement.getBoundingClientRect().height;

        if (
            currentScrollPos < position &&
            currentScrollPos > parentHeight / 2
        ) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }

        setPosition(currentScrollPos);
    };

    const handleCopy = async () => {
        // try {
        //     const textToCopy =
        //         'The text is copyright protected by thetajikheritage.com.';
        //     await navigator.clipboard.writeText(textToCopy);
        // } catch (error) {
        //     console.error('Unable to copy text to clipboard:', error);
        // }
    };

    return (
        <div className="parent-container" onCopy={handleCopy}>
            {!noHeader ? (
                <Header
                    setIsMenuShown={setIsMenuShown}
                    isMenuShown={isMenuShown}
                    menuAnchorEl={menuAnchorEl}
                />
            ) : null}
            <Menu
                setIsMenuShown={setIsMenuShown}
                isMenuShown={isMenuShown}
                menuAnchorEl={menuAnchorEl}
            />
            <div
                ref={parentRef}
                onScroll={handleScroll}
                className={
                    noFooter
                        ? 'content-container'
                        : 'content-container has_footer'
                }
            >
                {children}
                {!noFooter ? <Footer /> : null}
            </div>
            <div className="fixed-container">
                <Flags />
                {showArrow ? <ScrollUpArrow parentRef={parentRef} /> : null}
            </div>
        </div>
    );
};

export default AppLayout;
