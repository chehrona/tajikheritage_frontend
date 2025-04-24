'use client';

import React, { useState, useRef, ReactNode } from 'react';

// Hooks
import { useLocation } from 'react-router-dom';
import { useGlobalData } from './hooks/useGlobalData';

// Components
import Header from './components/common/header/Header';
import Menu from './components/common/menu/menuDropdown/Menu';
import Footer from './components/common/footer/Footer';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';
import ScrollDownArrow from './components/common/scrollDownArrow/ScrollDownArrow';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { setShowScrollUpArrow } = useGlobalData();
    const { pathname } = useLocation();
    const parentRef = useRef<HTMLInputElement>(null);
    const [position, setPosition] = useState<number>(0);
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
            setShowScrollUpArrow(true);
        } else {
            setShowScrollUpArrow(false);
        }

        setPosition(currentScrollPos);
    };

    return (
        <div className="parent-container">
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
                <ScrollUpArrow parentRef={parentRef} />
                <ScrollDownArrow />
            </div>
        </div>
    );
};

export default AppLayout;
